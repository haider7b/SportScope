import{darkMode,TeamsContext} from "../../const/index"
import { useEffect,useContext } from "react";
import Slider from "../../components/Slider";
import SearchFotTeam from "../../components/SearchFotTeam";
import  gsap  from 'gsap';


export default function Home() {

  const darkModeState = useContext(darkMode)
  const {teams} = useContext(TeamsContext)
  


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
              popular Leagues
            </h1>
            <Slider
            sliderIdd={"home-leagues-slider"}
            const list={teams}
            gap={5} //in px
            boxWidth={250}// in px
            boxHeight={250} // in px
            moreInfo={false}
            >
            </Slider>
          </div>
          <div className="w-full mt-8 min:h-[250px]">
            <h1 className="text-2xl font-bold  mb-6">
              popular Teams
            </h1>
            <Slider
            sliderIdd={"home-teams-slider"}
            list={teams}
            gap={20} //in px
            boxWidth={200}// in px
            boxHeight={200} // in px
            moreInfo={true}
            >
            </Slider>
          </div>
      </div>
    </section>
  )
}
