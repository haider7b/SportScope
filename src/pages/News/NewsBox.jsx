
export default function NewsBox({New}) {
    return (
        <div className='flex lg:w-full    justify-end lg:justify-between lg:flex-row 
        flex-col-reverse  lg:h-[200px] md:h-[450px] rounded-md bg-gray-300 items-center lg:items-start'>
            <div className='p-4'>
                <h2 className='font-semibold md:text-[18px] text-[12px] opacity-60 mb-1 text-center lg:text-left'>
                    {New.League}
                </h2>
                <h1 className='font-bold text-xl mb-4 text-center lg:text-left'>
                    {New.title}
                </h1>
                <p>{New.description}</p>
            </div>
            <div className='lg:w-1/3  lg:h-[200px] h-1/2 flex justify-end '>
                <img src={New.img} className=' h-full  rounded-md'></img>
            </div>
        </div>
    )
}
