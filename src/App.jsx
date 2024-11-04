import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import About from "./About";
import Skills from "./Skills";
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed">
            <HeaderNav/>
            <MainContent/>
            <About/>
            <Skills/>
        </div>
    )
}

export default App;