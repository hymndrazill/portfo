import React from 'react'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading,setLoading] = useState(false)
  
    const style = { 
      position: "fixed",
      top: "50%", 
      left: "50%",
      transform: "translate(-50%, -50%)" 
  };
  useEffect(()=> {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },5000)
  }, [])

  return (
    <>
   { loading ?       
   <ClimbingBoxLoader 
      loading={loading}
      cssOverride={style}
      color={"#5636d6"} 
      size={35}
         />
          :
          <>
      <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      <Footer/>
    </>
      }
   </>
  );
}

export default App;
