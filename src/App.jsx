import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import bgDark from "../image/darkBack.jfif"
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed" style={{backgroundImage:bgDark}}>
            <HeaderNav/>
            <MainContent/>
        </div>
    )
}

export default App;