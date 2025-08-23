import { useReducer, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";
import './App.css'
import Home from './pages/home/Home';
import Leagues from './pages/Leagues/Leagues';
import NavBar from "./components/NavBar"
import MatchesPage from './pages/Matches/MatchesPage';
import PopularContentProvider from './context/popularContentContext';
// eslint-disable-next-line no-unused-vars
import {darkMode} from './const/index'
import Footer from './components/footer';
import ContentProvider from './context/ContentContext';


const initialMode = {
  isDarkMode:false,
  backGrandColor:"#fff",
  mainTextColor:"#000",
  secondaryTextColor:"#777",
  primaryColor:"#000",
  secondaryColor:"#777"
}


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
      <ContentProvider>
          <PopularContentProvider>
            <Routes>
              <Route path="/" element={<Home ></Home>} />
              <Route path="/leagues" element={<Leagues />} />
              <Route path="/Matches" element={<MatchesPage />} />
            </Routes>
          </PopularContentProvider>
      </ContentProvider>
      <Footer />
    </darkMode.Provider>
  )
}

export default App













