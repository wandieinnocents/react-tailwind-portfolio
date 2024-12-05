
import React, { useState, useEffect } from "react";
const testimonials = [
    {
        id: 1,
        quote:
            "I had the pleasure of working with Innocent during my studies at Kyambogo University, where he served as my graphics design teacher. Innocent's passion for his craft is evident in his work, and he consistently delivers high-quality results. His expertise as a programmer, developer, designer, and trainer is exceptional, and I highly recommend him for any project in those fields. It was a pleasure to work with him",
        name: "Yonah Byarugaba",
        position: "Data Scientist",
        image: "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
    },
    {
        id: 2,
        quote: "Wandie Innocent is an inspiration to many, personally i have known him since 2014 in Kyambogo when we were exploring different fields in the IT realm. He is passionate and committed to accomplishing whatever task that comes to him. As a designer, I have benefited from his self-taught craft that has branded my company to meet latest industry standards and drive forward company objectives.",
        name: "Muchunguzi Gilbert",
        position: "Network Engineer Dimension data",
        image: "https://cdn-icons-png.freepik.com/512/6858/6858471.png",
    },

];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <>
            <section className="py-2">
                <div className="mx-auto max-w-screen-xl px-4 py-15  lg:flex  lg:items-center">
                    <div className="mx-auto max-w-xl text-center">

                        <h1 className="text-3xl font-extrabold sm:text-3xl mt-4">
                            <strong className="font-extrabold text-red-700 sm:block">What People Say                            </strong>
                        </h1>
                        <p className="mt-4 sm:text-md/relaxed">
                            Checkout the previous ratings on the previous work that i have done.
                        </p>
                    </div>
                </div>

            </section>


            {/* testimonial slider */}

            <div className="relative w-full max-w-5xl mx-auto p-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`transition-all duration-500 ${index === current ? "opacity-100" : "opacity-0 absolute"
                                }`}
                        >
                            <div className="flex flex-col items-center p-6 text-center bg-white">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <span className="text-sm text-gray-500">{testimonial.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                >
                    ❯
                </button>
                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>


            {/* end slider testimonials */}


        </>
    )

}