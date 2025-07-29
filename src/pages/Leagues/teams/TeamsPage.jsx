import{darkMode,TeamsContext} from "../../../const/index"
import { useEffect,useContext, } from "react";
import  gsap  from 'gsap';
import SearchFotTeam from "../../../components/SearchFotTeam";
import {showWhatContext} from "../../../const/index"
import TeamsSlider from "./TeamsSlider";
import Team from "./Team";
//import Player from "./Player";







export default function TeamsPage() {

    const darkModeState = useContext(darkMode)
   // const {teams} = useContext(TeamsContext)
    const showWhat = useContext(showWhatContext)
    const { teams, loading, error } = useContext(TeamsContext);
    
        
    

    useEffect(()=>{
        gsap.to("#Teams",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])

    if (loading) return <p>Loading teams...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
            <section id="Teams" className=" w-full ">
                <div className="relative">
                    {
                    showWhat.showWhatE.state==="all-teams"?
                        <>
                        <div className="mb-6">
                            <SearchFotTeam />
                        </div>
                        <div className="w-full mt-8 min:h-[250px]">
                            <h1 className="text-2xl font-bold  mb-6">
                                {`${showWhat.showWhatE.leagueId} - ${showWhat.showWhatE.leagueName} Teams`}
                            </h1>
                            <TeamsSlider
                            sliderIdd={"all-teams-slider"}
                            list={teams.teams}
                            gap={20} //in px
                            boxWidth={250}// in px
                            boxHeight={250} // in px
                            moreInfo={false}
                            showNavigation={true}
                            >
                            </TeamsSlider>
                        </div>
                    </>:
                    showWhat.showWhatE.state==="team"?
                    <>
                        <Team />
                    </>
                    :
                    // showWhat.showWhatE.state==="show-player"?
                    // <>
                    //     <Player/>
                    // </>
                    // :
                    ""}
                </div>
            </section>

    )
}





