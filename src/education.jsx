import React from "react";
import edu from "/edu4.jpg";
import { TbCertificate } from "react-icons/tb";


const Education = () => {
    return(
        <div className="flex flex-col items-center justify-center my-5">
            <div className="headerBeforeAfter">
                <p className="text-xl">Education</p>
            </div>
            <div className="relative container mx-auto h-[70vh]  w-full my-5 p-3 flex flex-col md:flex-row  items-center before:absolute before:content-[''] before:bg-black before:w-full before:h-full before:left-0 before:top-0 before:opacity-70">
                <div className="relative flex justify-center ">
                    <img src={edu} className="relative w-[70%] h-[70%] animEduImg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Education