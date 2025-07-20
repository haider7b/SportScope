import { useContext} from "react";
//import gsap from 'gsap';
import Matches from "../../../components/Matches";
import {showWhatContext} from "../../../const/index"




export default function Team() {

    const showWhat = useContext(showWhatContext)
    //showWhat.showWhatE.item?console.log("team =>",showWhat.showWhatE.item):
    //console.log("Error in the team component")
    
    return (
        <>
        {showWhat.showWhatE.item?
        <>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                <div className="lg:w-1/3 px-4 w-[150px] bg-amber-300">
                    <img className="w-full" 
                    src={showWhat.showWhatE.item.teamInfo.logo} 
                    alt={showWhat.showWhatE.item.name} />
                </div>
                <div className="flex flex-col justify-center items-center gap-2.5">
                    <h1 className="w-full bg-amber-400 lg:text-2xl text-xl font-black text-center lg:text-start">
                        {showWhat.showWhatE.item.name}
                    </h1>
                    <p className="bg-red-400 lg:text-lg text-[15px] ">
                        {showWhat.showWhatE.item.teamInfo.description}
                    </p>
                </div>
            </div>
            <div className="my-8">
                <h1 className="my-4 text-2xl font-bold">
                    Players
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2    gap-4">
                    {showWhat.showWhatE.item.teamInfo.players.map((player,ind)=>
                    <div 
                    key={player.name+ind} 
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={()=>{
                        console.log("set the previous item",showWhat.showWhatE.item)
                        showWhat.showWhatEDispatch({
                            type:"show-player",
                            leagueId:showWhat.showWhatE.leagueId,
                            leagueName:showWhat.showWhatE.leagueName,
                            teamId:showWhat.showWhatE.teamId,
                            playerId:ind,
                            item:player,
                            prevItem:[...showWhat.showWhatE.prevItem,showWhat.showWhatE.item],
                        })
                    }}
                    >
                        <div className="w-full rounded-md overflow-hidden">
                            <img className="w-full" src={player.image} alt={player.name} />
                        </div>
                        <span className="font-bold my-1.5">
                            {player.name}
                        </span>
                    </div>)
                    }
                </div>
                <div className="my-8">
                    <h1 className="my-4 text-2xl font-bold">Matches</h1>
                    <Matches
                    matches={showWhat.showWhatE.item.teamInfo.matches}
                    />
                </div>
            </div>
        </>:
        <div>something went wrong
            0{showWhat.showWhatE.item}0
        </div>
        } 
        </>   
    )
}
