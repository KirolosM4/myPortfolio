import React from "react";
import { TbCertificate } from "react-icons/tb";


const Education = () => {
    return(
        <div className="flex flex-col items-center justify-center my-5">
            <div className="headerBeforeAfter">
                <p className="text-xl">Education</p>
            </div>
            <div className="relative container mx-auto h-[70vh]  w-full my-5 p-3 flex flex-col md:flex-row  items-center before:absolute before:content-[''] before:bg-black before:w-full before:h-full before:left-0 before:top-0 before:opacity-70">
                <div className="relative flex justify-center animEduImg">
                    <img src="../public/edu4.jpg" className="w-[70%] h-[70%]" alt="" />
                </div>
                <div className="w-full flex flex-col gap-7">
                    <div className="relative text-white text-center md:text-left flex flex-col md:flex-row  items-center gap-7 p-5 bg-[#1A1443] rounded before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:transition-all before:duration-700 before:bg-gradient-to-r before:from-indigo-800 before:via-indigo-300 before:to-indigo-800 before:h-[2px] hover:before:w-[100%]">
                        <TbCertificate className="text-2xl text-cyan-500" />
                        <p>Bachelor of Management Information Systems</p>
                    </div>
                    <div className="relative text-white text-center md:text-left flex flex-col md:flex-row  items-center gap-7 p-5 bg-[#1A1443] rounded before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:transition-all before:duration-700 before:bg-gradient-to-r before:from-indigo-800 before:via-indigo-300 before:to-indigo-800 before:h-[2px] hover:before:w-[100%]">
                        <TbCertificate className="text-2xl text-cyan-500" />
                        <p>Diploma in Computer Science</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education