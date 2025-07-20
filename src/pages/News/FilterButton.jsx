import { useEffect,useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import  gsap  from 'gsap';

export default function FilterButton({list,handelClick}) {
    const[active,setActive] = useState(0)
    const [showList,setShowList] = useState(false)


    useEffect(()=>{

        // gsap.to("#button",{
        //     borderRadius:showList?"12px 12px 0 0":"12px",
        //     duration:0.2
        // })
        gsap.to("#arrowDown",{
            rotate:showList?180:0,
            duration:0.3
        })

        gsap.to("#options",{
            zIndex:showList?30:-1,
            
            onComplete:()=>{
                gsap.to("#options",{
                    opacity:showList?1:0,
                    top:showList?"50%":"0%",
                    duration:0.3,
                    display:showList?"flex":"none",
                })
            },
            
        })
    },[showList])

    return (
        <div id="button" className="bg-neutral-300 p-2 w-fit rounded-xl relative  
        flex justify-between items-center min-w-[150px] cursor-pointer font-semibold"
        onClick={()=>{
            setShowList(()=>{return !showList})
        }}
        >
            <div className="z-40">{list[active]}</div>
            <IoIosArrowDown id="arrowDown" className="z-40"/>
            <div id="options" 
            className=" absolute top-full left-0 pt-4 
            w-full hidden  flex-col bg-[inherit]">
                {list.map((li,ind)=>(
                    li===list[active]?null:
                    <div 
                    onClick={()=>{
                        setActive(ind)
                        handelClick(li)
                    }}
                    className="p-2  border-1 border-[#ccc] 
                    cursor-pointer hover:bg-neutral-400"
                    key={li.replace(" ","")+ind}>
                        {li}
                    </div>
                ))}
            </div>
        </div>
    )
}
