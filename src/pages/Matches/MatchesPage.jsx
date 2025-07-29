import{darkMode,matches} from "../../const/index"
import { useEffect,useContext,useState } from "react";
import  gsap  from 'gsap';
import Matches from "../../components/Matches";


//http://api.football-data.org/v4/teams/759/matches

const links=["yesterday","today","tomorrow"]

export default function MatchesPage() {

    const darkModeState = useContext(darkMode)

    const [active,setActive] = useState(0)


    const handleClick = (index)=>{
        setActive(index)

        for(let i=0;i<links.length;i++){
        gsap.to(`#link${i} `,{
            duration:0.5,
            color:i===index?"#155dfc":"#777"
        })
        }
        gsap.to(`#link0 div`,{
            left:index*100+"%",
            duration:0.5
        })

        gsap.to("#matches-slider",{
            left:-index*100+"%",
            duration:0.5
        })

    }
    useEffect(()=>{
        gsap.to("#matches",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])
    
    return (
        <section id="matches" className="section-padding w-full ">
            <div>
                <h1 className="text-2xl font-bold my-4 text-[26px]">Matches</h1>
                <div className="flex  items-center my-6 gap-4 relative">
                    <div className="w-full h-[2px] bg-[#ccc] absolute left-0 bottom-0"></div>
                    {
                        links.map((link,index)=>(
                            <div 
                            key={link}
                            id={"link"+index}
                            className={`py-4 cursor-pointer font-bold   relative 
                            ${active===index?"text-[#155dfc]":"text-[#777]"}
                            `}
                            onClick={()=>handleClick(index)}>
                                {link.toUpperCase()}
                                {index==0&&
                                    <div className="z-30  w-full h-[3px] bg-[#155dfc] absolute left-0 bottom-0">
                                    </div>}
                                
                            </div>))
                    }
                    
                </div>
                <div className="w-full overflow-x-hidden relative"
                style={{height:`${(matches.length+1)*55+50}px`}}
                >
                    <div
                    id="matches-slider"
                    style={{width:`${links.length*100}%`}}
                    className="flex items-center absolute top-0 left-0">
                        <div id={`${links[0]}`} className="w-1/3">
                            <Matches matches={matches}/>
                        </div>
                        <div id={`${links[1]}`} className="w-1/3">
                            <Matches matches={matches}/>
                        </div>
                        <div id={`${links[2]}`}className="w-1/3">
                            <Matches matches={matches}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}
