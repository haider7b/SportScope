import{darkMode,contentContext} from "../../../const/index"
import { useEffect,useContext, } from "react";
import  gsap  from 'gsap';
import SearchFotTeam from "../../../components/SearchFotTeam";
import TeamsSlider from "./TeamsSlider";
import Team from "./Team";

export default function TeamsPage() {

    const darkModeState = useContext(darkMode)
    const content = useContext(contentContext)

    useEffect(()=>{
        gsap.to("#Teams",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])

    return (
            <section id="Teams" className=" w-full ">
                <div className="relative">
                    {
                    content.contentState.status==="teams"?
                        <>
                        <div className="mb-6">
                            <SearchFotTeam />
                        </div>
                        <div className="w-full mt-8 min:h-[250px]">
                            {
                                content.contentState.league.name&&
                                <h1 className="text-2xl font-bold  mb-6">
                                    {` ${content.contentState.league.name} Teams `}
                                </h1>
                            }
                            <TeamsSlider
                            sliderIdd={"all-teams-slider"}
                            gap={20} //in px
                            boxWidth={250}// in px
                            boxHeight={250} // in px
                            moreInfo={false}
                            showNavigation={true}
                            >
                            </TeamsSlider>
                        </div>
                    </>:
                    content.contentState.status==="team"?
                    <>
                        <Team />
                    </>
                    :
                    ""}
                </div>
            </section>
    )
}





