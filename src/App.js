import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
    
  }, []);

  return (
    <div className="app bg-deep-blue">
    <Navbar
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    isTopOfPage = {isTopOfPage}
    />
      <div className="w-5/6 m-auto pb-10 md:h-full">
      
        {isAboveMediumScreens && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )
      
      }
       <Landing setSelectedPage={setSelectedPage}/>
      </div>
     <LineGradient/>
     <div className="w-5/6 m-auto mb-64 md:h-full">
      <MySkills/>
     </div>
     <LineGradient/>
     <div className="w-5/6 m-auto">
     <Projects/>
     </div>
     <LineGradient/>
     <div className="w-5/6 m-auto mb-24 md:h-full">
      <Testimonials/>
     </div>
     <LineGradient/>
     <div className="w-5/6 m-auto md:h-full">
      <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
