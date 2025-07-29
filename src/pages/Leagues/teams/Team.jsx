import { useContext, useEffect} from "react";
//import gsap from 'gsap';
import Matches from "../../../components/Matches";
import {showWhatContext,MatchesContext,apiKey} from "../../../const/index"
import {MatchesProvider} from '../../../context/MatchesContext';



export default function Team() {

    const showWhat = useContext(showWhatContext)
    showWhat.showWhatE.item?console.log("team =>",showWhat.showWhatE.item):
    console.log("Error in the team component")
    console.log(showWhat.showWhatE.item.id);
    const matchesState  = useContext(MatchesContext);
    //const teamId = 66; // مثال: Manchester United ID من API


    useEffect(() => {
    const fetchTeamMatches = async () => {
      try {
        const res = await fetch(
          `https://corsproxy.io/?https://api.football-data.org/v4/teams/${showWhat.showWhatE.item.id}/matches`,
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
        }));

        matchesState.matchesDispatch({
          type: "SET_MATCHES",
          payload: {
            matches: formatted,
            title: "مباريات الفريق",
          },
        });

        //console.log("after formatting")
       // console.log("team matches =>", formatted);
      } catch (err) {
        console.error("Error fetching team matches:", err);
      }
    };

    fetchTeamMatches();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showWhat?.showWhat?.showWhatE.item?.id]);


    
    return (
        <>
        {showWhat.showWhatE.item?
        <>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                <div className="lg:w-1/3 px-4 w-[150px] ">
                    <img className="w-full" 
                    src={showWhat.showWhatE.item.crest} 
                    alt={showWhat.showWhatE.item.name} 
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-2.5">
                    <h1 className="w-full  lg:text-2xl text-xl font-black text-center lg:text-start">
                        {showWhat.showWhatE.item.name}
                    </h1>
                    <p className=" lg:text-lg text-[15px] ">
                        {showWhat.showWhatE.item.area?showWhat.showWhatE.item.area.name:""}  
                        {showWhat.showWhatE.item.address?" - "+showWhat.showWhatE.item.address:""}  
                        {showWhat.showWhatE.item.venue?" -stadium : "+showWhat.showWhatE.item.venue:""}
                        {showWhat.showWhatE.item.coach.name?" - Coach : "+showWhat.showWhatE.item.coach.name:""}
                        {showWhat.showWhatE.item.founded?" - Founded : "+showWhat.showWhatE.item.founded:""}
                    </p>
                </div>
            </div>
            <div className="my-8">
                <h1 className="my-4 text-2xl font-bold">
                    Players
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2    gap-4">
                    {
                    showWhat.showWhatE.item.squad.length===0?
                    <div className="col-span-4">
                        <p className="text-center">No players found</p>
                    </div>:
                    
                    showWhat.showWhatE.item.squad.map((player)=>
                        <div 
                        key={player.name+player.id} 
                        className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-4 cursor-pointer"
                        // onClick={()=>{
                        //     console.log("set the previous item",showWhat.showWhatE.item)
                        //     showWhat.showWhatEDispatch({
                        //         type:"show-player",
                        //         leagueId:showWhat.showWhatE.leagueId,
                        //         leagueName:showWhat.showWhatE.leagueName,
                        //         teamId:showWhat.showWhatE.teamId,
                        //         playerId:ind,
                        //         item:player,
                        //         prevItem:[...showWhat.showWhatE.prevItem,showWhat.showWhatE.item],
                        //     })
                        // }}
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
                    {/* <MatchesProvider> */}
                        <Matches/>
                    {/* </MatchesProvider> */}
                </div>
            </div>
        </>:
        <div>something went wrong
            0{showWhat.showWhatE.item}0
        </div>
        } 
        </>   
    )
}
