import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
const App = () => {
    return(
        <div className="bg-mainContent bg-fixed">
            <HeaderNav/>
            <MainContent/>
            <div>
                <img src="../image/darkBack.jpg" alt="" />
            </div>
        </div>
    )
}

export default App;