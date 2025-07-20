import{darkMode,newsList} from "../../const/index"
import { useEffect,useContext,useState } from "react";
import NewsBox from './NewsBox'
import FilterButton from './FilterButton'
import  gsap  from 'gsap';


const Leagues=["All","test",...new Set(newsList.map((New)=>New.League))]


export default function NewsPage() {

    const darkModeState = useContext(darkMode)
    const [newsListState, setNewsListState] = useState([...newsList]);
    
    useEffect(()=>{
        gsap.to("#news",{
            backgroundColor:darkModeState.darkModeState.backGrandColor,
            color:darkModeState.darkModeState.mainTextColor
            }
        )
    })

    // useEffect(()=>{

    // },[newsListState])

    function handelClick(League){
        setNewsListState(League==="All"?[...newsList]:[...newsList.filter((New)=>New.League===League)])
    }


    return (
        <section id="news" className="section-padding w-full "
        style={{height:`${newsListState.length>0?"auto":"80vh"}`}}>   
        
            <h1 className="text-3xl font-bold my-6">Lates News</h1>

            <div className=" flex items-center my-4 ">
                <FilterButton list={Leagues} handelClick={handelClick}/>
                
            </div>
            <div className="lg:flex lg:flex-col grid md:grid-cols-2 grid-cols-1 gap-4  flex-wrap ">
                {newsListState.length>0?
                newsListState.map((New,index)=>(
                    <NewsBox
                    key={index+New.League.replace(" ","")}
                    New={New}
                    />           
                )):
                <h1 className="font-bold text-2xl text-center my-4">No Result  </h1>
                }
            </div>
        </section>
        
    )
}
