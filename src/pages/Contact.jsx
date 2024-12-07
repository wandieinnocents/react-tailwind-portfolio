
import Hero from "../components/Hero"
export default function Contact() {
    return (
        <>
            <Hero
                page_title="Contact Me"
                page_description="Talk to me for detailed discussions"

            />



            {/* page content */}
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">


                        <iframe
                            class="w-full h-full border-0 absolute  inset-0"
                            width="100%" height="100%"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.01929580474!2d32.647373060288636!3d0.329330493924343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db90314cab9dd%3A0xc4ac7ae741189762!2sBweyogerere%2C%20Kampala!5e0!3m2!1sen!2sug!4v1733564116722!5m2!1sen!2sug"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                        <div class="bg-white relative flex flex-wrap py-6 mt-[50%] rounded shadow-md w-full">
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <a class="text-indigo-500 leading-relaxed">Bweyogerere, kampala</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WHATSAPP</h2>
                                <p class="leading-relaxed">+256 706382817</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">wandieinnocent2@gmail.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">+256 706382817</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>

        </>
    );
}