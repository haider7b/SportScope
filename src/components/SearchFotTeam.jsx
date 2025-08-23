import { useEffect,useContext, useState } from "react";
import  gsap  from 'gsap';
import{darkMode,teams} from "../const/index.js"
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
export default function SearchFotTeam() {

    const darkModeState = useContext(darkMode)
    const [inputValue, setInputValue] = useState('')
    const [searchResults, setSearchResults] = useState([])

    
    useEffect(() => {
        if(inputValue===""){
            setSearchResults([])
            return
        }
        const filteredTeams = teams.filter((team) =>
            team.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSearchResults(filteredTeams);
    }, [inputValue]);


    useEffect(()=>{
        gsap.to("#SearchFotTeam",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    },[darkModeState.darkModeState])
    return (
        <div id="SearchFotTeam"
        className='w-full h-[50px] flex items-center py-2 px-4  justify-center border-2
        border-[#ccc] rounded-xl relative'>
            <IoSearch className="w-[30px] opacity-50  h-full " />
            {inputValue!==""&&(
                <div className="w-[30px] rounded-full text-2xl hover:bg-[#ccc] cursor-pointer
                opacity-50 h-[30px] flex justify-center items-center absolute right-1"
                onClick={()=>setInputValue("")}
                >
                    <IoCloseSharp/>
                </div>  
                
            )}
            <input type="text" placeholder="Search for a team" 
            className='w-full h-full bg-transparent  font-bold
            border-[#ccc]  placeholder:text-[#ccc] pl-6 outline-none '
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            {
                searchResults.length>0&&(
                    <div className="absolute z-30 top-[50px] bg-[inherit]
                    w-full gap-2 flex flex-col py-2 px-4 ">
                        {searchResults.map((team,ind)=>(
                            <a 
                            key={team.id+ind}
                            href={`/teams/${team.id}`}
                            className="text-[#777] text-sm font-bold hover:text-black"
                            >
                                {team.name}
                            </a>))}
                    </div>
                )
            }
        </div>  
    )
}
