import { useContext, useEffect} from "react";
import Matches from "../../../components/Matches";
import {contentContext,apiKey} from "../../../const/index"

export default function Team() {

    const content = useContext(contentContext)
    
    useEffect(() => {
        const fetchTeamMatches = async () => {
            const cachedMatches = localStorage.getItem("teamMatches");
            if (cachedMatches) {
                content.contentDispatch({type:"SET_TEAM_MATCHES",payload:JSON.parse(cachedMatches)})
                return;
            }
            try {
                const res = await fetch(
                        `https://corsproxy.io/?https://api.football-data.org/v4/teams/${content.contentState.team.id}/matches`,
                    { 
                        headers: {
                        'X-Auth-Token': apiKey,
                        },
                    }
                );
                const data = await res.json();

                console.log("before formatting")
                console.log("team matches =>", data.matches);
                const formatted = data.matches.map((match) => ({
                    id: match.id,
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    date: match.utcDate.slice(0, 10),
                    time: match.utcDate.slice(11, 16),
                    competition: match.competition.name,
                    homeTeamScore: match.score.fullTime.home,
                    awayTeamScore: match.score.fullTime.away,
                    winner:match.score.winner
                }));
                content.contentDispatch({type:"SET_TEAM_MATCHES",payload:formatted})
                localStorage.setItem("teamMatches", JSON.stringify(formatted));
            } catch (err) {
            console.error("Error fetching team matches:", err);
            }
        };

        fetchTeamMatches();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content.contentState.team]);

    return (
        <>
        {content.contentState.team?
        <>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                <div className="lg:w-1/3 px-4 w-[150px] ">
                    <img className="w-full" 
                    src={content.contentState.team.crest} 
                    alt={content.contentState.team.name} 
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-2.5">
                    <h1 className="w-full  lg:text-3xl text-2xl font-black text-center lg:text-start">
                        {content.contentState.team.name}
                    </h1>
                    <div className=" lg:text-lg font-bold text-[15px] ">
                        {content.contentState.team.area&& <div>{"Country : "+content.contentState.team.area.name}</div>}  
                        {content.contentState.team.address&&<div> {"Address : "+content.contentState.team.address}</div>}  
                        {content.contentState.team.venue&&<div>{"stadium : "+content.contentState.team.venue}</div> }
                        {content.contentState.team.coach.name&&<div>{"Coach : "+content.contentState.team.coach.name}</div>}
                        {content.contentState.team.founded&&<div>{"Founded : "+content.contentState.team.founded}</div>}
                    </div>
                </div>
            </div>
            <div className="my-8">
                <h1 className="my-4 text-2xl font-bold">
                    Players
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2    gap-4">
                    {
                    content.contentState.team.squad.length===0?
                    <div className="col-span-4">
                        <p className="text-center">No players found</p>
                    </div>:
                    
                    content.contentState.team.squad.map((player)=>
                        <div 
                        key={player.name+player.id} 
                        className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-4 cursor-pointer"
                        
                        >
                            {/* <div className="w-full rounded-md overflow-hidden">
                                <img className="w-full" src={player.image} alt={player.name} />
                            </div> */}
                            <div className="font-bold my-1.5">
                                <h1 className="font-bold my-1.5 text-center">
                                    {player.name}
                                </h1>
                                <h2 className="text-center">
                                    {"Position : "+player.position}
                                </h2>
                                <h2 className="text-center">
                                    {"Nationality : "+player.nationality}
                                </h2>
                            </div>
                        </div>)
                    }
                </div>
                <div className="my-8">
                    <h1 className="my-4 text-2xl font-bold">Matches</h1>
                    <Matches
                    type={"one-team"}
                    ind={null}
                    />
                </div>
            </div>
        </>:
        <div>something went wrong
            0{content.contentState.team}0
        </div>
        } 
        </>   
    )
}
