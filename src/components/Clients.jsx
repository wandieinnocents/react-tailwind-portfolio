
import React, { useState, useEffect } from "react";


export default function Clients() {

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


            <section>
                <div>Add clients logos here </div>
            </section>
        </>
    )

}