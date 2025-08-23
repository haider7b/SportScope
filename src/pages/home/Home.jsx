import{darkMode} from "../../const/index"
import { useEffect,useContext } from "react";
import SearchFotTeam from "../../components/SearchFotTeam";
import  gsap  from 'gsap';
import HomeSlider from "./HomeSlider";


export default function Home() {

  const darkModeState = useContext(darkMode)
  

  useEffect(()=>{
    gsap.to("#home",{
      backgroundColor:darkModeState.darkModeState.backGrandColor,
      color:darkModeState.darkModeState.mainTextColor
      }
    )
  },[darkModeState.darkModeState])

  

  return (
    <section id="home" className="section-padding w-full ">
      <div>
          <div className="mb-6">
            <SearchFotTeam />
          </div>
          <div className="w-full min:h-[300px]">
            <h1 className="text-2xl font-bold  mb-6">
              popular competitions
            </h1>
            <HomeSlider
            type={"leagues"}
            sliderIdd={"home-leagues-slider"}
            gap={5} //in px
            boxWidth={250}// in px
            boxHeight={250} // in px
            moreInfo={false}
            >
            </HomeSlider>
          </div>
          <div className="w-full mt-8 min:h-[250px]">
            <h1 className="text-2xl font-bold  mb-6">
              popular Teams
            </h1>
            <HomeSlider
            type={"teams"}
            sliderIdd={"home-teams-slider"}
            gap={20} //in px
            boxWidth={200}// in px
            boxHeight={200} // in px
            moreInfo={true}
            >
            </HomeSlider>
          </div>
      </div>
    </section>
  )
}
