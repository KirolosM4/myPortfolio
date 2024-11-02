import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
const App = () => {
    return(
        <div className="bg-grad">
            <HeaderNav/>
            <MainContent/>
            <MainContent/>
            <div className="h-screen">
                h
            </div>
        </div>
    )
}

export default App;