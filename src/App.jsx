import { useReducer, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";
import './App.css'
import Home from './pages/home/Home';
//import TeamsPage from './pages/Leagues/teams/TeamsPage';
import Leagues from './pages/Leagues/Leagues';
import NavBar from "./components/NavBar"
import MatchesPage from './pages/Matches/MatchesPage';
import NewsPage from './pages/News/NewsPage';
import TestHome from "./pages/testPage/TestHome";

// eslint-disable-next-line no-unused-vars
import {darkMode} from './const/index'
import Footer from './components/footer';




//const initialState =0
const initialMode = {
  isDarkMode:false,
  backGrandColor:"#fff",
  mainTextColor:"#000",
  secondaryTextColor:"#777",
  primaryColor:"#000",
  secondaryColor:"#777"
}

// const reducer = (state,action) => {
//   switch(action){
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }




const modeReducer = (state,action) => {
  if(state.isDarkMode||action==='darkMode'){
    return {
      isDarkMode:false,
      backGrandColor:"#fff",
      mainTextColor:"#000",
      secondaryTextColor:"#777",
      primaryColor:"#000",
      secondaryColor:"#777"
    }
  }else{
    return{
      isDarkMode:true,
      backGrandColor:"#102470",
      mainTextColor:"#fff",
      secondaryTextColor:"#999",
      primaryColor:"#fff",
      secondaryColor:"#999"
    }
  }
}

function App() {

  //const [count,dispatch] = useReducer(reducer,initialState)
  const [mode,modeDispatch] = useReducer(modeReducer,initialMode)

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
    
  }




  return (
    
    <darkMode.Provider value={{darkModeState:mode,darkModeDispatch:modeDispatch}}>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leagues" element={<Leagues />} />
          <Route path="/News" element={<NewsPage />} />
          <Route path="/Matches" element={<MatchesPage />} />
          <Route path="/Teams" element={<TestHome />} />
        </Routes>
      
      <Footer />
    </darkMode.Provider>
  )
}

export default App
//search for
//<circle cx="15" cy="15" r="10" className="w-[30px] opacity-50  h-[30px] bg-red-600 fill-[#777] " />












