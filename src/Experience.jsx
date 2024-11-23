import React from "react";



const Experience = () => {
    return(
        <div id="experience" className="flex flex-col items-center justify-center mt-5">
            <div className="headerBeforeAfter my-5">
                <p className="text-xl">Experience</p>
            </div>
            <div className="container mx-auto rounded grid grid-cols-1 md:grid-cols-4 justify-items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black before:opacity-70 before:h-full before:w-full">
                <div className="relative h-fit w-fit p-5 text-white flex flex-col items-center gap-5 rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-black before:opacity-70 hover:before:opacity-0 before:transition-all before:duration-300">
                    <p className="text-white">Traning of</p>
                    <img src="/gooweb.png" alt="" className="rounded-full w-[80%]" />
                </div>
                <div className="relative h-fit w-fit p-5 text-white flex flex-col items-center gap-5 rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-black before:opacity-70 hover:before:opacity-0 before:transition-all before:duration-300">
                    <p className="text-white">Work of</p>
                    <img src="/thebesAcademy.png" alt="" className="rounded-full w-[80%]" />
                </div>
            </div>
            
        </div>
    )
}

export default Experience;