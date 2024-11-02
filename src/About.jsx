import React, { useEffect, useState } from "react";
import AboutMe from "/Me.jpg"
const About = () => {
    return(
        <div className="flex flex-col items-center">
            <div className="headerBeforeAfter">
                <p className="text-xl">About Me</p>
            </div>
            <div className="w-full my-5 p-3  relative before:absolute before:content-[''] before:bg-black before:w-full before:h-full before:left-0 before:top-0 before:opacity-70">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                    <div className="text-white relative text-sm md:text-xl text-center md:text-left">
                        <p className="text-cyan-500">WHO IAM</p>
                        <p>My name is Kirolos Magdy, iam 24 years old. iam a Frontend developer [React] ,</p>
                        <p>And I work as a teaching assistant at thebes academy </p>
                        <p>And iam a Frontend developer [React] , i learned this track in Goo Web</p>

                    </div>
                    <div className="relative flex justify-center">
                        <img src={AboutMe} className="h-full w-1/2 rounded-full border-4 border-cyan-500 border-dashed grayscale scale-75 transition ease-in-out delay-150  hover:grayscale-0 hover:scale-95 duration-700" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

