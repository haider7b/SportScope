import { useContext} from "react";
//import gsap from 'gsap';
import {showWhatContext} from "../../../const/index"

export default function Player() {

    const showWhat = useContext(showWhatContext)
  return (
    <>
        <div className="flex flex-col justify-center items-center ">
            <div className="w-[200px] lg:w-[150px] rounded-full  overflow-hidden">
                <img className="w-full" 
                src={showWhat.showWhatE.item.image} 
                alt={showWhat.showWhatE.item.name} />
            </div>
            <h1 className="font-bold my-1.5 text-center">
                {showWhat.showWhatE.item.name}
            </h1>
            <h2 className="text-center">
                {"Position : "+showWhat.showWhatE.item.position}
            </h2>
            <h2 className="text-center">
                {"Nationality : "+showWhat.showWhatE.item.nationality}
            </h2>
            <p className="w-full my-8">
                {showWhat.showWhatE.item.description}
            </p>
        </div>
        {showWhat.state}
    </>
  )
}
