import React, { useEffect, useState } from "react";

const words = ["web.", "apps.", "deployments."];
 

const Home = () => {

    const [index, setIndex] = useState(0);

useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="
                relative
                flex
                min-h-screen
                w-full
                items-center
                overflow-hidden
                px-5
                pt-28
                pb-20

                sm:px-8
                lg:px-12
                xl:px-20
            "
        >
            <div className="mx-auto w-full max-w-7xl">

                <div className="max-w-4xl">

                    {/* Small intro */}

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-3
                            text-sm
                            font-medium
                            text-slate-900
                        "
                    >
                        

                        Available for new opportunities
                    </div>


                    {/* Main heading */}

                    <h1
                        className="
                            text-[clamp(3.5rem,9vw,8rem)]
                            font-semibold
                            leading-[0.88]
                            tracking-[-0.065em]
                            text-[#172535]
                        "
                    >
                        Hi, I'm Ayush.

                        <br />

                       <span className="text-slate-900">
            I build for the{" "}
            <span
                key={index}
                className="inline-block animate-[fadeIn_0.6s_ease-in-out]"
            >
                {words[index]}
            </span>
        </span>
                    </h1>


                    {/* Description */}

                    <p
                        className="
                            mt-8
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-700

                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        Full-stack developer focused on building
                        clean, modern and meaningful digital
                        experiences with thoughtful interfaces
                        and solid engineering.
                    </p>


                    {/* Actions */}

                    <div
                        className="
                            mt-9
                            flex
                            flex-wrap
                            items-center
                            gap-3
                        "
                    >

                        {/* View Projects */}

                        <a
                            href="#projects"
                            className="
                                group
                                flex
                                items-center
                                gap-3
                                rounded-full
                                bg-[#172535]
                                px-6
                                py-3.5
                                text-sm
                                font-medium
                                text-white

                                transition-all
                                duration-300

                                hover:bg-[#24384d]
                                hover:shadow-xl

                                active:scale-[0.98]
                            "
                        >
                            View my work

                            
                        </a>


                        {/* Resume */}

                        <a
                            href="/resume.pdf"
                            download="Ayush-Resume.pdf"
                            className="
                                group
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/70
                                bg-white/15
                                px-6
                                py-3.5
                                text-sm
                                font-medium
                                text-[#172535]

                                backdrop-blur-md

                                transition-all
                                duration-300

                                hover:bg-white/50
                                hover:shadow-lg

                                active:scale-[0.98]
                            "
                        >
                            Download Resume

                            
                        </a>

                    </div>


                    {/* Bottom metadata */}

                    <div
                        className="
                            mt-16
                            flex
                            flex-col
                            gap-4
                            text-xs
                            text-slate-800

                            sm:flex-row
                            sm:items-center
                            sm:gap-8
                        "
                    >

                        <span>
                            Full Stack Developer
                        </span>

                        <span className="hidden sm:block">
                            —
                        </span>

                        <span>
                            Based in India
                        </span>

                    </div>

                </div>

            </div>


            {/* Bottom scroll indicator */}

            <a
                href="#about"
                className="
                    absolute
                    bottom-8
                    left-1/2
                    hidden
                    -translate-x-1/2
                    flex-col
                    items-center
                    gap-2

                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-slate-400

                    transition-colors
                    hover:text-slate-600

                    sm:flex
                "
            >
                <span>Scroll</span>

                <span
                    className="
                        h-8
                        w-px
                        bg-slate-400/50
                    "
                />
            </a>

        </section>
    );
};

export default Home;