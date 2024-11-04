import React ,{ useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaHtml5,FaBootstrap } from "react-icons/fa";
import { IoLogoCss3,IoLogoJavascript } from "react-icons/io";
import { SiReactbootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";



const Skills = () => {
    return(
        <di className="flex flex-col items-center">
            <div className="headerBeforeAfter">
                <p className="text-xl">Skills</p>
            </div>
            <div className="container h-[40vh] mx-auto p-5 relative before:w-full before:h-[1px] before:bg-gradient-to-r before:from-indigo-800 before:via-indigo-300 before:to-indigo-800 before:my-5 before:rounded-[50%] before:absolute before:top-[-10px] before:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-indigo-800 after:via-indigo-300 after:to-indigo-800 after:my-5 after:rounded-[50%] after:absolute after:left-0 after:bottom-[-10px]">
                <div className="h-full w-full flex items-center">
                    <Swiper
                        slidesPerView={window.innerWidth >1200 ? 5 : window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 3 : window.innerWidth > 450 ? 2 : 1}
                        spaceBetween={70}
                        centeredSlides={false}
                        loop={true}
                        speed={2100}
                        autoplay={{
                        delay:0,
                        disableOnInteraction: false,

                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Navigation]}
                    >
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}} >
                            <FaHtml5 color="orange" className="text-5xl w-full" />
                            <p className="p-2">HTML5</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <IoLogoCss3 color="blue"  className="text-5xl w-full" />
                            <p className="p-2">CSS3</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <IoLogoJavascript color="yellow"  className="text-5xl w-full" />
                            <p className="p-2">JS</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <FaBootstrap color="purple"  className="text-5xl w-full" />
                            <p className="p-2">BOOTSTRAP</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <SiReactbootstrap color="cyan"  className="text-5xl w-full" />
                            <p className="p-2">BOOTSTRAP REACT</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <RiTailwindCssFill color="cyan"  className="text-5xl w-full" />
                            <p className="p-2">TAILWIND CSS</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <RiReactjsFill color="cyan"  className="text-5xl w-full" />
                            <p className="p-2">REACT JS</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <FaGithub color="white"  className="text-5xl w-full" />
                            <p className="p-2">GIT HUB</p>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlice" style={{height:"fit-content"}}>
                            <SiNextdotjs color="green"  className="text-5xl w-full" />
                            <p className="p-2">NEXT JS</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </di>
    )
}


export default Skills