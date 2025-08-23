import{darkMode,contentContext,apiKey} from "../../const/index"
import { useEffect,useContext } from "react";
import  gsap  from 'gsap';
import SearchFotTeam from "../../components/SearchFotTeam"
import TeamsPage  from "./teams/TeamsPage"


export default function Leagues() {

    const darkModeState = useContext(darkMode)
    const content = useContext(contentContext)

    useEffect(()=>{
        gsap.to("#Leagues",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])


    function handleClick(leg){
        
        console.log(leg)
        const fetchTeams=async ()=>{
            try {
                const response = await fetch(`https://corsproxy.io/?http://api.football-data.org/v4/competitions/${leg.code}/teams`, {
                    headers: {
                        "X-Auth-Token": apiKey,
                    },
                });
                const data = await response.json();
                content.contentDispatch({type:"ADD_TEAMS",payload:data.teams})
                content.contentDispatch({type:"ADD_LEAGUE",payload:leg})
                content.contentDispatch({type:"SET_STATUS",payload:"teams"})
                } catch (error) {
                    console.error("Error fetching teams:", error);
                }
            }
            fetchTeams()            
    }

    return (
    
    
        <section id="Leagues" className="section-padding w-full ">
            <div className="relative">
                {
                    content.contentState.status==="all"?
                    <>
                        <h1 className="text-3xl font-bold my-4">Leagues</h1>
                        <div>
                            <SearchFotTeam/>
                        </div>
                        <div 
                        style={{gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))"}}
                        className="grid my-10  gap-8">
                            {
                            content.contentState.leagues?
                            content.contentState.leagues.map(League=>(
                                <div key={League.name} 
                                onClick={() => {handleClick(League)}}
                                className="min-h-[200px] bg-gray-400 
                                flex justify-center items-center rounded-2xl hover:-translate-y-2.5
                                transition-all duration-300 cursor-pointer shadow-md">
                                    <h2 className="text-2xl text-center font-bold my-4 "> 
                                        {League.name} 
                                    </h2>
                                </div>
                            )) : 
                            <div>No Leagues</div>
                        }
                        </div>
                    </>
                    :
                    <TeamsPage/>
                }
                {
                    (content.contentState.status==="teams"|| content.contentState.status==="team")&&
                    <button className="absolute -top-[50px] left-0 z-10 w-[55px] h-[35px] rounded-lg
                    flex justify-center items-center cursor-pointer bg-blue-400 font-black" 
                    onClick={() => {
                        if(content.contentState.status==="team"){
                            content.contentDispatch({
                                type:"SET_STATUS",
                                payload:"teams"
                            })
                            content.contentDispatch({
                                type:"SET_TEAM",
                                payload:{}
                            })
                            localStorage.removeItem("teamMatches")
                        }else{
                            content.contentDispatch({
                                type:"SET_STATUS",
                                payload:"all"
                            })
                            content.contentDispatch({
                                type:"SET_TEAMS",
                                payload:[]
                            })
                            content.contentDispatch({
                                type:"SET_LEAGUE",
                                payload:{}
                            })
                        }
                    }}
                    >
                        Back
                    </button>
                }
            </div>
        </section>
    )
}