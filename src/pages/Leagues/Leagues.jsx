import{darkMode ,AfricanLeagues,EuropeanLeagues,AsianLeagues,
    // eslint-disable-next-line no-unused-vars
    SwathAmericanLeagues,northAmericanLeagues,showWhatContext} from "../../const/index"
import { useEffect,useContext,useReducer } from "react";
import  gsap  from 'gsap';
import SearchFotTeam from "../../components/SearchFotTeam"
import TeamsSlider from "./teams/TeamsSlider"
import TeamsPage  from "./teams/TeamsPage"




const leaguesList=[{
        name:`European`,
        item:EuropeanLeagues
    },{
        name:`African`,
        item:AfricanLeagues
    },{
        name:`Asian`,
        item:AsianLeagues
    },{
        name:`SwathAmerican`,
        item:SwathAmericanLeagues
    },{
        name:`northAmerican`,
        item:northAmericanLeagues
    },
    ]
const boxWidth=200;
const boxHeight=200;



const initialShowWhat = {
    state:"leagues",
    leagueId:null,
    leagueName:null,
    teamId:null,
    playerId:null,
    item:[],
    prevItem:[],
}

const reducer = (state,action) => {
    return {
        state:action.type,
        leagueId:action.leagueId,
        leagueName:action.leagueName,
        teamId:action.teamId,
        playerId:action.playerId,
        item:action.item,
        prevItem:action.prevItem
    }
        
}




export default function Leagues() {

    const darkModeState = useContext(darkMode)
        const [showWhat,showWhatDispatch] = useReducer(reducer,initialShowWhat)
    

    useEffect(()=>{
        gsap.to("#Leagues",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])
    
    return (
        <showWhatContext.Provider value={{showWhatE:showWhat,showWhatEDispatch:showWhatDispatch}} >
        <section id="Leagues" className="section-padding w-full ">
            <div className="relative">
                {
                    showWhat.state==="leagues"?
                <>
                <h1 className="text-3xl font-bold my-4">Leagues</h1>
                <div>
                    <SearchFotTeam/>
                </div>
                <div>
                    {
                    leaguesList.map(League=>(
                        <div key={League.name}>
                            <h2 className="text-2xl font-bold my-4"> 
                                {League.name} Leagues
                            </h2>
                            <div>
                                <TeamsSlider
                                sliderIdd={League.name+"-Leagues-slider"}
                                list={League.item}
                                gap={20}
                                boxWidth={boxWidth}
                                boxHeight={boxHeight}
                                moreInfo={false} 
                                showNavigation={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                </>:
                <TeamsPage/>
                }
                {
                    showWhat.state==="all-teams"|| showWhat.state==="team"||showWhat.state==="show-player"?
                    <button className="absolute -top-[50px] left-0 z-10 w-[55px] h-[35px] rounded-lg
                    flex justify-center items-center cursor-pointer bg-blue-400 font-black" 
                    onClick={() => {
                        showWhatDispatch(
                            showWhat.state==="all-teams"?
                            {
                                type: "leagues",
                                leagueId: null,
                                leagueName:null,
                                teamId: null,
                                playerId: null,
                                item: [],
                                prevItem: [],
                            }:
                            showWhat.state === "team"
                            ? {
                                type: "all-teams",
                                leagueId: showWhat.leagueId,
                                leagueName:showWhat.leagueName,
                                teamId: null,
                                playerId: null,
                                item: showWhat.prevItem[0],
                                prevItem: [showWhat.prevItem[1]],
                            }
                            : {
                                type: "team",
                                leagueId: showWhat.leagueId,
                                leagueName:showWhat.leagueName,
                                teamId: showWhat.teamId,
                                playerId: null,
                                item: showWhat.prevItem[1],
                                prevItem: [showWhat.prevItem[0]],
                            }
                        );
                    }}
                    >
                        Back
                    </button>
                    :null
                }
            </div>
        </section>
        </showWhatContext.Provider>
    )
}