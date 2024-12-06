
import React, { useEffect, useRef } from "react";


export default function Clients() {

    const logos = [
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
        "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
    ]; // Replace these paths with actual logo paths

    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.scrollLeft += 200; // Adjust scroll step

                // Reset to the start if at the end
                if (
                    sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
                    sliderRef.current.scrollWidth
                ) {
                    sliderRef.current.scrollLeft = 0;
                }
            }
        }, 2000); // Adjust speed in milliseconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    return (
        <>
            <section className="py-2">
                <div className="mx-auto max-w-screen-xl px-4 py-15  lg:flex  lg:items-center">
                    <div className="mx-auto max-w-xl text-center">

                        <h1 className="text-3xl font-extrabold sm:text-3xl mt-4">
                            <strong className="font-extrabold text-red-700 sm:block">Recent Clients (500 +)</strong>
                        </h1>
                        <p className="mt-4 sm:text-md/relaxed">
                            Here is a list of some of the recent clients i have worked with
                        </p>
                    </div>
                </div>

            </section>

            {/* slider logos */}
            <div className="overflow-hidden py-8 bg-gray-50 ">
                <div
                    ref={sliderRef}
                    className="flex space-x-8 overflow-x-scroll no-scrollbar items-center px-4 "
                    style={{ scrollBehavior: "smooth" }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-40 h-40 bg-white rounded-lg shadow-md flex justify-center items-center p-4 "
                        >
                            <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>


            


        </>
    )

}