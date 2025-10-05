import { useRef, useEffect ,useContext} from "react";
import gsap from 'gsap';
import { popularContentContext ,contentContext,apiKey} from "../../const/index";
import { useNavigate } from "react-router-dom"; 

export default function HomeSlider(
    { 
        type,
        sliderIdd,  
        gap,
        boxWidth,
        boxHeight,
        moreInfo, 
    }) {

    


    const movingRef = useRef({ index: 0, direction: "left" });
    const popularContentState=useContext(popularContentContext)
    const content = useContext(contentContext)
    const navigate = useNavigate();
    const list = type === "leagues" ? popularContentState.popularContentState.leagues : popularContentState.popularContentState.teams;
    const listLength = list?list.length:0;



    useEffect(() => {
        if(!list) return;
    const intervalId = setInterval(() => {
        const temp = movingRef.current;

        if (temp.index - 1 > listLength - Math.floor(window.innerWidth / boxWidth)) {
            temp.direction = "right";
        } else if (temp.index === 0) {
            temp.direction = "left";
        }
        if (temp.direction === "left") {
            temp.index += 1;
        } else {
            temp.index -= 1;
        }

        gsap.to("#" + sliderIdd, {
            left: `-${temp.index * boxWidth}px`,
            duration: 1.5,
            delay: 0.5
        });

    }, 4500);

    return () => clearInterval(intervalId);
}, [list,listLength, boxWidth, sliderIdd]);
    

    function handleClick(ind){
        if(type==="teams"){
            content.contentDispatch({type:"ADD_TEAM",payload:list[ind]})
            content.contentDispatch({type:"SET_STATUS",payload:"team"})

            navigate("/leagues");
        }else{
            const fetchTeams=async ()=>{
                try {
                    const response = await fetch(`https://corsproxy.io/?http://api.football-data.org/v4/competitions/${list[ind].code}/teams`, {
                        headers: {
                            "X-Auth-Token": apiKey,
                        },
                    });
                    const data = await response.json();
                    content.contentDispatch({type:"ADD_TEAMS",payload:data.teams})
                    content.contentDispatch({type:"ADD_LEAGUE",payload:list[ind]})
                    content.contentDispatch({type:"SET_STATUS",payload:"teams"})
                    navigate("/leagues");
                } catch (error) {
                    console.error("Error fetching teams:", error);
                }
            }
            
            //const reFetchTeam=setInterval
            //(
                fetchTeams()
                //,1000)
            //if(fetchCount>3||fetchRes){
              //  clearInterval(reFetchTeam)
            //}

            
        }
    }


    if(!list) return <>Error</>
    
    return (
        <div  className='w-full relative overflow-hidden'
        style={{height:`${boxHeight}px`}}
        >
            <div id={sliderIdd}
            className={`flex justify-center absolute top-0 left-0
            items-center gap-[${gap}]  `}
            style={{ width: `${listLength * boxWidth}px`, gap: `${gap}px`
                    ,height:`${boxHeight}px`
            }}
            >
                {listLength>0?   list.map((item,ind) => (
                    <div key={item.name.replace(" ", "-")+ind}
                    className={` h-[${boxHeight}]  rounded-lg 
                    fex justify-center items-center cursor-pointer
                    bg-gradient-to-t from-white via-gray-100 to-gray-200
                    `}
                    style={{ width: `${boxWidth}px`, height: `${boxHeight}px` }}
                    onClick={() => {handleClick(ind)}}
                    >
                        
                        <div className={`${moreInfo ? "h-[70%]" : "h-full"}
                        rounded-lg overflow-hidden flex justify-center items-center py-2`}>
                            {item.crest&&type==="teams" &&<img src={item.crest}
                                alert={item.shortName ? item.shortName :item.name?item.name: "undefined"}
                                className='h-full '
                            ></img>}
                            {type==="leagues" &&<h2 className=" font-bold text-2xl text-center ">{item.name}</h2>}
                        </div>
                        {moreInfo && <div>
                            {item.name &&
                                <h2 className='font-extrabold text-center'>{item.shortName?item.shortName:item.name}</h2>
                            }
                            {item.url &&
                                <a href={item.url} className=''
                                onClick={() => {item.website && window.open(item.website, "_blank")}}
                                
                                >
                                    More Details
                                </a>
                            }
                        </div>}
                        
                    </div>
                )):
                <h1>
                    No Data!
                </h1>
                }
            </div>
        </div>
    )
}
