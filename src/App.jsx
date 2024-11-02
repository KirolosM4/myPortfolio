import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
import darkBack from "../image/darkBack.jpg"
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed">
            <HeaderNav/>
            <MainContent/>
            <div>
                <img src={darkBack} alt="" />
            </div>
        </div>
    )
}

export default App;