import{webName,navLinks,darkMode} from "../const/index.js"
import { Link } from 'react-router-dom';
import "./css/navBar_style.css"
import { useState,useEffect,useContext } from "react";
import  gsap  from 'gsap';
// import{profileImg} from "../utils/index.js"
import { FaUser } from "react-icons/fa6";

export default function NavBar() {

    const [mobileMenu,setMobileMenu]=useState(false);
    const darkModeState = useContext(darkMode)
    const [activeLink,setActiveLink]=useState(0);


    useEffect(()=>{
        gsap.to("#mobileMenu",
                {
                    opacity:mobileMenu?1:0,
                    display:mobileMenu?"block":"none",
                    delay:0.2,
                    duration:0.3,
                    left:mobileMenu?"0%":"-100%"
                }
            )
        gsap.to(".s1",{
            width:mobileMenu?"100%":"15px",
            rotate:mobileMenu?45:0,
            delay:0.2,
            duration:0.4,
            x:mobileMenu?1:0,
            y:mobileMenu?9:0
        })

        gsap.to(".s2",{
            x:mobileMenu?"50px":0,
            opacity:mobileMenu?0:1,
            delay:0.2,
            duration:0.3
        })
        gsap.to(".s3",{
            width:mobileMenu?"100%":"15px",
            rotate:mobileMenu?-45:0,
            delay:0.2,
            duration:0.4,
            x:mobileMenu?-1: 0,
            y:mobileMenu?-11:0
        })
    },[mobileMenu])


    useEffect(()=>{
        gsap.to("#navBar",
                {
                backgroundColor:darkModeState.darkModeState.backGrandColor,
                color:darkModeState.darkModeState.mainTextColor
                }
            )

        gsap.to("#mobileMenu",
                {
                backgroundColor:darkModeState.darkModeState.backGrandColor,
                color:darkModeState.darkModeState.mainTextColor
                })
        gsap.to(".dark-mode-toggle span",{
            left:darkModeState.darkModeState.isDarkMode?"0%":"68%",
            backgroundColor:darkModeState.darkModeState.isDarkMode?"#000":"#fff", 
            duration:0.5
        })

        gsap.to(".dark-mode-toggle ",{
            backgroundColor:darkModeState.darkModeState.isDarkMode?"#fff":"#000",
            
            duration:0.5
        })
    },[darkModeState.darkModeState])

    

    return(
        <nav id="navBar" className="">
            <div className={`container `}>
                {/* big screen menu*/}
                <div className="flex justify-between">
                    <h1 className="text-2xl font-black mr-2.5"
                    id="logo">
                        {webName}
                    </h1>
                    <ul className="big-menu flex items-center justify-between gap-2.5">
                        { navLinks.map((link,ind)=>(
                            <li key={ind+link} 
                            className={`cursor-pointer ${activeLink===ind?"opacity-100":"opacity-60"}
                            hover:opacity-100
                            `}
                            onClick={()=>setActiveLink(ind)}
                            >
                                <Link to={"/"+(ind===0?"":link)} title={link+" page"}>
                                    {link.includes("-")?link.replace("-"," ").toUpperCase():link.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex  gap-4 items-center">
                    
                        
                    <button className="toggle-menu cursor-pointer"
                    onClick={() => setMobileMenu(!mobileMenu)}>
                        <span className="s1"></span>
                        <span className="s2"></span>
                        <span className="s3"></span>
                    </button>

                    <button className="dark-mode-toggle w-15 h-5 
                    cursor-pointer flex items-center justify-center
                    rounded-full  relative"
                    onClick={() => {
                        darkModeState.darkModeDispatch(darkModeState.darkModeState?"light":"dark")}}>
                            <span className={`bg-amber-100 absolute w-5 h-5  
                            rounded-full flex items-center justify-center
                            ${darkModeState.darkModeState.isDarkMode?"left-[0%]":"left-[68%]"}
                            transition-all duration-500 `}>
                                {darkModeState.darkModeState.isDarkMode?"🌜":"🌞"}
                            </span>
                    </button>
                                
                </div>
            </div>
            {/* mobile menu */}
            <div className="mobile-menu text-white"
            id="mobileMenu"> 
                <h1 className="text-2xl font-bold px-2.5 py-5">{webName}</h1>
                <div className="flex flex-col gap-2.5 px-2.5 py-5 ">
                    { navLinks.map((link,ind)=>(
                        <div key={ind+link} className=" font-bold text-xl">
                            <Link to={"/"+(ind===0?"":link)} title={link+" page"}>{link.includes("-")?link.replace("-"," ").toUpperCase():link.toUpperCase()}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}