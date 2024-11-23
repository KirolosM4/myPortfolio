import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import About from "./About";
import Skills from "./Skills";
import Education from "./education";
import Experience from "./Experience";
import Footer from "./Footer";
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed ">
            <HeaderNav/>
            <MainContent/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default App;