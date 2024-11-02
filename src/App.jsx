import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import darkBack from "../image/darkBack.jpg"
const App = () => {
    return(
        <div className="bg-mainContent">
            <HeaderNav/>
            <MainContent/>
            <div className="h-screen" style={{backgroundImage:darkBack}}>
                
            </div>
        </div>
    )
}

export default App;