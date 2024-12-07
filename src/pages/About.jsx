
import Hero from "../components/Hero"
import wandieimg from "../assets/wandie.png"
export default function About() {
    return (
        <>
            <Hero
                page_title="About Me"
                page_description="Know more about Me"

            />

            {/* page content */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-10 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            class="lg:w-1/2 w-full lg:h-auto h-75 sm:h-64 object-cover object-center rounded-3xl"
                            src={wandieimg}
                        />

                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex items-center">
                            <div>
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                                    KNOW ME MORE
                                </h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                                    Who exactly is Wandie
                                </h1>

                                <p class="leading-relaxed text-justify pt-3">
                                    I am a self-driven Software Engineer that is passionate about
                                    creating world-class software products and leading highly effective
                                    teams. I Graduated with a Bachelor’s degree in Information
                                    Technology & Computing from Kyambogo University. I value teamwork
                                    and also enjoy contributing ideas to improving team delivery and
                                    customer satisfaction. I also have excellent business, management,
                                    and analytical skills. I am a Full Stack Software Developer with
                                    Skills in Front End | UI/UX, Php(Laravel), Javascript, React
                                    Native, Ionic Framework, Apis, Python, Human Centered Design,
                                    Product Management & Project Management. I lectured design and
                                    programming at Uganda Martyrs University Campuses, to equip
                                    middle-career students with industrial on-demand skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col sm:flex-row bg-gray-600 py-[10%] px-[5%]">
                    <p className="w-full mx-auto text-center">
                        <div class="flex items-center">
                            <div>
                                <h2 class="text-sm title-font text-white tracking-widest">
                                    My Goal ?
                                </h2>
                                <h1 class="text-white text-3xl title-font font-medium mb-1">
                                    Get to know my goal
                                </h1>

                                <p class="text-gray-300 text-center pt-3">
                                    My goal in life is to create value wherever I am , and change the lives of people or organizations or startups in the world using the power of technology. I also want to be a great software engineer and user experience designer capable of improving my skill set to keep delivering top notch products and leading highly effective teams  to  create great company products, business or personal projects. I like to be in a community where I can be challenged , learn something new and I also like mentoring and training my fellow peers where I have strength. I like to change the world and the people who live in it using technology and this is my main goal in life.
                                </p>
                            </div>
                        </div>
                    </p>

                </div>
            </section>


            {/* stats */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap m-4 text-center">
                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">HTML</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">CSS</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">JS</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">BOOTSTRAP</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">TAILWIND CSS</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">PHP/LARAVEL</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">REACT.JS</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">PYTHON</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">UI/UX</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">PRODUCT M'NT</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">PROJECT M'NT</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">REACT NATIVE</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">WORDPRESS</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">MATERIAL UI</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">MYSQL</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">GRAPHIC DESIGN</p>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/6 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <i class="fa-solid fa-circle-check text-yellow-500 text-2xl"></i>
                                <p class="leading-relaxed">API's</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


        </>
    );
}