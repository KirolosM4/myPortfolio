import React from "react";
import HeaderNav from "./Component/HeaderNav";
import MainContent from "./MainContent";
const App = () => {
    return(
        <div className="bg-grad">
            <HeaderNav/>
            <MainContent/>
            <MainContent/>
            <img src={"../public/darkBack.jfif"} alt="" />
        </div>
    )
}

export default App;