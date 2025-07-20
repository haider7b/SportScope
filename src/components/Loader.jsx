import { webName } from "../const/index.js";
export default function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-[#396afc] to-[#2948ff] z-50"
        style={{backgroundColor:"blue"}}
        
        >
            <div className='flex justify-center items-center lg:w-[50%] 
                md:w-[40%] w-[60%]   rounded-full overflow-hidden '>
                <h1 className="text-5xl text-white font-black text-center m-0">{webName}</h1>
            </div>
            <div className="loader "></div>
        </div>
    );
}