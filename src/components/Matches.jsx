import React, { useContext,useState,useEffect } from 'react'
import { contentContext } from '../const/index';
import {gsap } from 'gsap';
function Matches({ id,type, ind}) {

    const content = useContext(contentContext)
    const [loading,setLoading]=useState(true)
    id=id?id:"";



    // const matches = type === "one-team" ? 
    // content.contentState.teamMatches : 
    // content.contentState.allMatches.length> ind ? 
    // content.contentState.allMatches[ind].value :
    // [];

    let matches;
    if( type === "one-team"){
        matches=content.contentState.teamMatches
    }else{
        for(let i=0;i<content.contentState.allMatches.length;i++){
            if(content.contentState.allMatches[i].id===id){
                matches=content.contentState.allMatches[i].value;
            }
        }
    }

    matches?matches:[]


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);

        let i=1;

        const interval=setInterval(()=>{
            if(!loading){
                return;
            }
            gsap.to("#dot1", {
                opacity: i===1?0:1,
                duration: 0.1
            })
            gsap.to("#dot2", {
                opacity: i===2?0:1,
                duration: 0.1
            })
            gsap.to("#dot3", {
                opacity: i===3?0:1,
                duration: 0.1
            })
            i++;
            if(i>3){
                i=1;
            }
        },[100])
        
        return () => {
            clearInterval(interval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(type, " page, matches =>", matches);
    //? test
    //matches?.sort((a,b)=>new Date(b.date+" "+b.time)-new Date(a.date+" "+a.time)):null

    if(loading)
        return( 
            <div className='w-full h-[300px] text-2xl flex justify-center items-center'>
                Loading
                <span id='dot1'>.</span>
                <span id='dot2'>.</span>
                <span id='dot3'>.</span>
            </div>
        )
    if (!matches || matches.length === 0) 
        return (
                <div className='w-full h-[300px]  flex justify-center items-center'>
                    no matches for {id}-{ind}
                </div>
            )
    
    return (
        <div className='text-sm lg:text-lg rounded-lg overflow-hidden '
            style={{ 
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.2) 0px 8px 16px -8px",
            }}
        >
            <div
            className='flex justify-c enter items-center border-b-2
            border-[#ccc] font-black bg-blue-600 text-white '
            >
                <div className="py-1.5 lg:py-3 px-4 w-3/6 lg:w-2/6 flex lg:items-center 
                lg:justify-between flex-col lg:flex-row ">
                    <div className='lg:block hidden'>
                        Data
                    </div>
                    <div className='lg:block hidden'>
                        Time
                    </div>
                    <div className="lg:hidden block">Data & Time</div>
                </div>
                <div className='lg:w-4/6 w-3/6 flex lg:justify-center items-center  py-2 px-4'>
                    HomeTeam Against AwayTeam
                </div>
            </div>

            {
                matches.map((match, ind) =>
                    <div key={match.homeTeam?.replace(" ", "") + ind}
                        title='Click to see details'
                        className='flex justify-c enter items-center border-b-2 py-3 text-white
                        border-[#ccc]  bg-blue-400 font-semibold cursor-pointer hover:bg-blue-500'
                        >

                        <div className=" lg:py-3 px-4 w-3/6 lg:w-2/6 flex lg:items-center 
                        lg:justify-between flex-col lg:flex-row lg:gap-0 gap-2">
                            <div
                                className=''>
                                {match.date}
                            </div>
                            <div className=''>
                                {match.time}
                            </div>
                        </div>

                        <div className='lg:w-4/6 w-3/6 flex justify-center relative
                        lg:items-center   lg:py-3 px-4 flex-col lg:flex-row lg:gap-0 gap-2'>
                            {/* <span className="absolute top-[85%] left-1/2 text-[12px]">
                                {match.competition ? match.competition : ""}
                            </span> */}
                            <div className='flex lg:justify-end md:justify-normal lg:items-center justify-between gap-2 
                            lg:w-1/2 '>
                                <div className=''>{match.homeTeam?match.homeTeam : "unknown"}</div>
                                <div>{match.homeTeamScore ? match.homeTeamScore : "##"}</div>
                            </div>
                            <span className='hidden lg:block'>-</span>
                            <div className='flex lg:justify-start  lg:flex-row justify-between
                            flex-row-reverse lg:items-center gap-2  lg:w-1/2  '>
                                <div className="">{match.awayTeamScore ? match.awayTeamScore : "##"}</div>
                                <div className=''>{match.awayTeam?match.awayTeam : "unknown"}</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default React.memo(Matches)
