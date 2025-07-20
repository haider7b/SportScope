import React from 'react'

export default function Matches({matches}) {
    return (
        <div className='text-sm lg:text-lg rounded-lg overflow-hidden '
        style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}
        >
            <div 
            className='flex justify-c enter items-center border-b-2
            border-[#ccc] font-black bg-red-600'
            > 
                <div className="py-1.5 lg:py-3 px-4 w-3/6 lg:w-2/6 flex lg:items-center 
                lg:justify-between flex-col lg:flex-row ">
                    <div className='lg:block hidden'>
                        Data
                    </div>
                    <div className='lg:block hidden'>
                        Time
                    </div>
                    <div>Data&Time</div>
                </div>
                <div className='lg:w-4/6 w-3/6 flex lg:justify-center items-center  py-2 px-4'>
                    HomeTeam Against AwayTeam
                </div>
            </div>

            {matches.map((match,ind)=>
            <div key={match.homeTeam.replace(" ","")+ind}
            title='Click to see details'
            className='flex justify-c enter items-center border-b-2
            border-[#ccc]  bg-red-400 font-semibold cursor-pointer hover:bg-red-500'
            > 

                <div className="py-1.5 lg:py-3 px-4 w-3/6 lg:w-2/6 flex lg:items-center 
                lg:justify-between flex-col lg:flex-row lg:gap-0 gap-2">
                    <div
                    className=''>
                        {match.data}
                    </div>
                    <div className=''>
                        {match.time}
                    </div>
                </div>
                
                <div className='lg:w-4/6 w-3/6 flex justify-center 
                lg:items-center py-1.5  lg:py-3 px-4 flex-col lg:flex-row lg:gap-0 gap-2'>
                    <div className='flex lg:justify-end md:justify-normal lg:items-center just ify-between gap-2 
                    lg:w-1/2 '>
                        <div className='w-[50%] lg:w-fit'>{match.homeTeam}</div>
                        <div>{match.homeTeamScore}</div>
                    </div>
                    <span className='hidden lg:block'>-</span>
                    <div className='flex lg:justify-start justify-end    lg:flex-row 
                    flex-row-reverse lg:items-center gap-2  lg:w-1/2  '>
                        <div >{match.awayTeamScore}</div>
                        <div className='w-[50%] lg:w-fit '>{match.awayTeam}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
