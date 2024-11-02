import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { SiReact } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainContent = () => {
    return(
        <div>
            <div className="container mx-auto h-[90vh] text-2xl px-6">
                <div className="flex flex-col md:flex-row justify-between h-[80%] items-center text-center md:text-left">
                    <div className="flex flex-col gap-7 grow">
                            <p className="text-white flex gap-3 items-center justify-center md:justify-start p-3">Hello <span className="block text-3xl hello">👋</span></p>
                            <p className="text-white">Iam <span className="text-cyan-500">Kirolos Magdy</span> this is my portfolio</p>
                            <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Frontend Developer',
                                3000,
                                'Reactjs',
                                3000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-cyan-500 text-5xl"
                            />
                        </div>
                        <div className="grow flex justify-center">
                            <SiReact className="text-cyan-500 text-[150px] md:text-[250px] animate-spin"/>
                        </div>
                </div>
                <div className="h-[20%] flex text-3xl justify-center gap-8">
                    <Link to="https://www.facebook.com/profile.php?id=100006111548977">
                        <FaFacebook className="text-cyan-500" />
                    </Link>
                    <Link to="https://github.com/KirolosM4">
                        <FaGithub  className="text-cyan-500" />
                    </Link>
                    <Link>
                        <FaLinkedin  className="text-cyan-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainContent;