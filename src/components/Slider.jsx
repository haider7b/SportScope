import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";


export default function Slider(
    { 
        sliderIdd, 
        list, 
        gap,
        boxWidth,
        boxHeight,
        moreInfo, 
    }) {

    
    // const [moving,setMoving]=useState({
    //     index:0,
    //     direction:"left"
    // })
    // useEffect(() => {
    //     setInterval(() => {
    //         setMoving((pre) => {
    //             const temp=pre

    //             if(temp.index -1>list.length - Math.floor(window.innerWidth / boxWidth)) {
    //                 temp.direction="right"
    //             }
    //             else if(temp.index===0){
    //                 temp.direction="left"
    //             }
    //             if(temp.direction=="left"){
    //                 temp.index=temp.index+1
    //             }else{
    //                 temp.index=temp.index-1
    //             }

    //             gsap.to("#" + sliderIdd , {
    //                 left: `-${(temp.index * boxWidth)}px`,
    //                 duration: 1.5,
    //                 delay: 0.5
    //             })

    //             // console.log("index*boxWidth==", temp.index * boxWidth)
    //             // console.log("window.innerWidth/boxWidth==", Math.floor(window.innerWidth / boxWidth))
    //             return temp
    //         })
    //     }, 4500)

    //     return () => clearInterval();
    // },[list.length,boxWidth,sliderIdd])

    const movingRef = useRef({ index: 0, direction: "left" });

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

    }, 4500);

    return () => clearInterval(intervalId);
}, [list, boxWidth, sliderIdd]);




// function moveTheSlider(newIndex,newDirection) {

//     const temp = movingRef.current;
//     temp.direction = newDirection;
//     temp.index = newIndex;
//     gsap.to("#" + sliderIdd, {
//         left: `-${temp.index * boxWidth}px`,
//         duration: 1.5,
//         delay: 0.5
//     });
    
// }


    return (
        <div  className='w-full relative overflow-hidden bg-amber-300 '
        style={{height:`${boxHeight}px`}}
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

                        onClick={() => {item.url && window.open(item.url, "_blank")}}
                    >
                        <div className={`${moreInfo ? "h-[70%]" : "h-full"} bg-gray-400  rounded-lg overflow-hidden`}>
                            {item.img &&<img src={item.img}
                                alert={item.name ? item.name : "undefined"}
                                className='w-full '
                            ></img>}
                        </div>
                        {moreInfo && <div>
                            {item.name &&
                                <h2 className='font-extrabold'>{item.name}</h2>
                            }
                            {item.url &&
                                <a href={item.url} className=''>
                                    More Details
                                </a>
                            }
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}
