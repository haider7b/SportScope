import { darkMode, contentContext,apiKey } from "../../const/index"
import React, { useEffect, useContext, useState } from "react";
import gsap from 'gsap';
import Matches from "../../components/Matches";
import { IoIosArrowDown } from "react-icons/io";

function MatchesPage() {

    const darkModeState = useContext(darkMode)
    const content = useContext(contentContext)
    const leagues = content.contentState.leagues
    const [active, setActive] = useState(0)
    const [showOption ,setShowOption] = useState(false)

    const handleClick = (index) => {
        setActive(index)
        setShowOption(false)
    }
    useEffect(() => {
        gsap.to("#matches", {
            backgroundColor: darkModeState.darkModeState.backGrandColor,
            color: darkModeState.darkModeState.mainTextColor
        }
        )
    }, [darkModeState.darkModeState])


    useEffect(()=>{
        gsap.to("#leagues",{
            display:showOption?"flex":"none",
            duration:0.3
        })
        gsap.to("#arrowDown",{
            rotate:showOption?180:0,
            duration:0.3
        })
    },[showOption])


    useEffect(() => {
        if(active>leagues.length-1)return;
        const target = leagues[active].name.replace(" ", "_");

        const fetchMatch = async () => {
            const cachedMatches = localStorage.getItem(target);
            if (cachedMatches && JSON.parse(cachedMatches).length > 0) {
                content.contentDispatch({ type: "SET_ALL_MATCHES", payload: { id: target, value: [...(JSON.parse(cachedMatches))] } })
                return;
            }
            try {
                const response = await fetch(`https://corsproxy.io/?http://api.football-data.org/v4/competitions/${leagues[active].id}/matches?matchday=1`, {
                    headers: {
                        "X-Auth-Token": apiKey,
                    },
                });
                const data = await response.json();
                const formatted = data.matches.map((match) => ({
                    id: match.id,
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    date: match.utcDate.slice(0, 10),
                    time: match.utcDate.slice(11, 16),
                    competition: match.competition.name,
                    homeTeamScore: match.score.fullTime.home,
                    awayTeamScore: match.score.fullTime.away,
                    winner: match.score.winner
                }));
                localStorage.setItem(target, JSON.stringify(formatted));
                content.contentDispatch({ type: "SET_ALL_MATCHES", payload: { id: target, value: [...formatted] } });
            } catch (err) {
                console.error("Error fetching matches:", err.message);
            }
        }
        fetchMatch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ 
        content.contentState.leagues,active
    ])  

    return (
        <section id="matches" className="section-padding w-full ">
            <div > 
                <h1 className="text-2xl font-bold my-4 text-[26px]">Matches</h1>
                <div className="w-full h-[1px] bg-[#ccc] my-4"></div>
                <div className=" w-fit bg-[#ccc] h-[55px] my-8 px-4
                flex items-center justify-between relative rounded-md">
                    <div className=" font-bold text-center w-full z-40">
                        {active<leagues.length?leagues[active].name.toUpperCase():""}
                    </div>
                    <div className="hover:bg-[#afacac] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                    role="button"
                    onClick={()=>{setShowOption(()=>(!showOption))}}
                    >
                        <IoIosArrowDown id="arrowDown"></IoIosArrowDown>
                    </div>
                    <div 
                    className="w-full z-30 bg-[#ccc] hidden text-[14px]
                    flex-col absolute top-[40px] pt-[20px] left-0 rounded-md"
                    id="leagues"
                    >
                    {
                        leagues.map((league, index) => (
                            active!==index&&
                            <div
                                key={league.name}
                                id={"league" + index}
                                className={`py-2 cursor-pointer font-bold text-center 
                                relative text-[#777]   hover:bg-[#afacac]`}
                                onClick={() => handleClick(index)}>
                                {league.name.toUpperCase()}
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="w-full   relative  h- [400px] ">
                    <div
                        id="matches-slider"
                        style={{ width: `100%` }}
                        className="flex flex-col items-center ">
                        {
                            leagues.map((league,ind) => (
                                <div 
                                key={league.name} 
                                id={`${league.name}`} 
                                style={{ width: `100%` }}
                                className={`${active===ind?"block":"hidden"}`}
                                >
                                    {active===ind&&
                                    <Matches
                                    t
                                    id={league.name&&league.name.replace(" ", "_")}
                                    type="leagues"
                                    ind={ind} 
                                    />}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(MatchesPage)