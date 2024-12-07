
import { useState } from 'react'
import TriangleShape from './TriangleShape'

export default function Hero(props) {

    return (
        <>
            <section className="bg-blue-100 py-20">
                <div className="mx-auto max-w-screen-xl px-4 py-15  lg:flex  lg:items-center">
                    <div className="mx-auto max-w-xl text-center">

                        <h1 className="text-3xl font-extrabold sm:text-3xl mt-4">
                            <strong className="font-extrabold text-red-700 sm:block">{props.page_title}</strong>
                        </h1>
                        <p className="mt-4 sm:text-md/relaxed"> {props.page_description}</p>
                    </div>
                </div>

            </section>
            <TriangleShape />



        </>
    )

}