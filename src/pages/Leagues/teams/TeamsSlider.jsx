import { useRef, useEffect ,useContext} from "react";
import gsap from 'gsap';
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import {showWhatContext} from "../../../const/index"

export default function TeamsSlider(
    { 
        sliderIdd, 
        list, 
        gap,
        boxWidth,
        boxHeight,
        moreInfo,
        showNavigation 
    }) {

    

    const movingRef = useRef({ index: 0, direction: "left" });
    const showWhat = useContext(showWhatContext)

useEffect(() => {
    const intervalId = setInterval(() => {
        const temp = movingRef.current;

        if (temp.index - 1 > list.length - Math.floor(window.innerWidth / boxWidth)) {
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

        

        if(showNavigation){
            
            gsap.to("#sliderDots"+sliderIdd,{
                left: `-${temp.index * 30}px`,
                duration:1,
                delay: 1
            })

            for(let ind=0;ind<list.length;ind++) {
                gsap.to("#dot"+ind+sliderIdd,{
                    backgroundColor:ind===temp.index?"white":"transparent",
                    duration:0.5,
                    delay: 0.7
                })    
            }
        }

    }, 4500);

    return () => clearInterval(intervalId);
}, [list, boxWidth, sliderIdd,showNavigation]);




function moveTheSlider(newIndex,newDirection) {

    const temp = movingRef.current;
    temp.direction = newDirection;
    temp.index = newIndex;
    gsap.to("#" + sliderIdd, {
        left: `-${temp.index * boxWidth}px`,
        duration: 1.5,
        delay: 0.5
    });
    
    gsap.to("#sliderDots"+sliderIdd,{
        left: `-${temp.index * 30}px`,
        duration:1,
        delay: 1
    })


    
}


    return (
        <div  className='w-full relative overflow-hidden  '
        style={{height:`${boxHeight+(showNavigation?70:0)}px`}}
        >
            <div id={sliderIdd}
            className={`flex justify-center absolute top-0 left-0
            items-center gap-[${gap}]  `}
            style={{ width: `${list.length * boxWidth}px`, gap: `${gap}px`
                    ,height:`${boxHeight}px`
            }}
            >
                {list.map((item,ind) => (
                    <div key={item.name.replace(" ", "-")+ind}
                        className={` h-[${boxHeight}]  rounded-lg 
                    fex justify-center items-center cursor-pointer
                    `}
                        style={{ width: `${boxWidth}px`, height: `${boxHeight}px` }}

                        onClick={() => {
                            showWhat.showWhatEDispatch(
                                
                                showWhat.showWhatE.state==="leagues"?{
                                    type:"all-teams",
                                    leagueId:ind,
                                    leagueName:item.name?item.name:"unknown",
                                    teamId:null,
                                    playerId:null,
                                    item:item,
                                    prevItem:[],

                                }:{
                                type:"team",
                                leagueId:showWhat.showWhatE.leagueId,
                                leagueName:showWhat.showWhatE.leagueName,
                                teamId:ind,
                                playerId:null,
                                item:item,
                                prevItem:[showWhat.showWhatE.item],
                                })
                        }}
                    >
                        <div className={`${moreInfo ? "h-[70%]" : "h-full"} bg-gray-400  rounded-lg overflow-hidden p-4`}>
                            {item.crest &&
                                <img src={ item.crest}
                                alert={item.name ? item.name : "undefined"}
                                className='w-full '>   
                                </img>
                            }
                            
                        </div>
                        {moreInfo && <div>
                            <h2 className='font-extrabold'>{item.name}</h2>
                            <a href={item.url} className=''>
                                More Details
                            </a>
                        </div>}
                    </div>
                ))}
            </div>
            {showNavigation&& 
                <div className="flex justify-center items-center gap-3 absolute top-[85%] w-1/2  
                left-[50%] translate-x-[-50%]">
                    <button 
                    className="cursor-pointer w-[25px] h-[25px] flex 
                    justify-center items-center hover:bg-amber-200 rounded-full text-2xl"
                    title="prev"
                    onClick={() => {
                        moveTheSlider(movingRef.current.index - 1, "left");
                    }}>
                        <IoChevronBack/>
                    </button>
                    <div className=" overflow-hidden w-1/2 relative h-[30px]">
                        <div 
                        id={"sliderDots"+sliderIdd}
                        className="flex z-40 gap-2 justify-center items-center absolute  h-full "
                        style={{width:`${list.length*30+(list.length-1)*8}px`}}
                        > 
                            {list.map((__, ind) => (
                                <div 
                                key={"dot"+ind}
                                id={"dot"+ind+sliderIdd}
                                className={` w-[30px] h-[30px] rounded-full  flex hover:bg-white!
                                justify-center items-center cursor-pointer ${ind===movingRef.current.index&&"bg-white"}`}
                                onClick={() => {
                                    moveTheSlider(ind,movingRef.current.index>ind?"right": "left");
                                }}
                                >
                                    {ind+1}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button 
                    className="cursor-pointer w-[25px] h-[25px] flex 
                    justify-center items-center hover:bg-amber-200 rounded-full text-2xl"
                    title="next"
                    onClick={() => {
                        moveTheSlider(movingRef.current.index+1,"right");
                        
                    }}>
                        <IoChevronForward/>
                    </button>
                </div>
            }
        </div>
    )
}