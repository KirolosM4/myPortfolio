import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import About from "./About";
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed">
            <HeaderNav/>
            <MainContent/>
            <About/>
        </div>
    )
}

export default App;