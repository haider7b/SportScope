import{darkMode, webName,contactsLinks} from "../const/index"
import { useEffect,useContext } from "react";
import  gsap  from 'gsap';


export default function Footer() {
    const darkModeState = useContext(darkMode)


    useEffect(()=>{
        gsap.to("#footer",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])



    return (
    <section id="footer" className='section-padding py-6! border-t-2 border-[#ccc]  flex justify-center items-center '>
        <div>
            <h1 className="text-center text-md font-bold">All Rights Reserved {webName}</h1>
            <div className="flex gap-4 justify-center items-center mt-2.5">
                {
                    contactsLinks.map((link)=>(
                        <a 
                        key={link.name} 
                        title={link.name} 
                        href={link.url}
                        className="w-6 h-6 "
                        >
                            {link.icon&&( <img src={link.icon} className="w-full" ></img> )}
                            {!link.icon&&( <span>{link.name}</span> )}
                        </a>
                    ))
                }
            </div>
        </div>
    </section>
    )
}
