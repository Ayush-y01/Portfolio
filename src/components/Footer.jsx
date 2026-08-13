import React from "react";

const Footer = () => {
    return (
        <footer className="relative px-5 pb-6 pt-16 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

                {/* Main Footer */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-[#172535]
                        px-6
                        py-12
                        text-white

                        sm:px-10
                        sm:py-14

                        lg:px-14
                        lg:py-16
                    "
                >

                    {/* Decorative circle */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            border
                            border-white/10
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-10
                            -top-10
                            h-36
                            w-36
                            rounded-full
                            border
                            border-white/10
                        "
                    />


                    {/* Content */}

                    <div
                        className="
                            relative
                            flex
                            flex-col
                            gap-12

                            lg:flex-row
                            lg:items-end
                            lg:justify-between
                        "
                    >

                        {/* Heading */}

                        <div>

                            <p
                                className="
                                    mb-4
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.18em]
                                    text-white/40
                                "
                            >
                                Have a project?
                            </p>

                            <h2
                                className="
                                    max-w-2xl
                                    text-4xl
                                    font-semibold
                                    tracking-[-0.045em]

                                    sm:text-5xl

                                    lg:text-6xl
                                "
                            >
                                Let's make something
                                <br />

                                <span className="text-white/40">
                                    meaningful.
                                </span>
                            </h2>

                        </div>


                        {/* CTA */}

                        <a
                            href="#contact"
                            className="
                                group
                                flex
                                w-fit
                                items-center
                                gap-4
                                rounded-full
                                bg-white
                                px-6
                                py-3.5
                                text-sm
                                font-medium
                                text-[#172535]

                                transition-all
                                duration-300

                                hover:gap-5
                                hover:shadow-xl
                            "
                        >
                            Get in touch

                            
                        </a>

                    </div>


                    {/* Bottom */}

                    <div
                        className="
                            relative
                            mt-14
                            flex
                            flex-col
                            gap-6
                            border-t
                            border-white/10
                            pt-6

                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        {/* Copyright */}

                        <p
                            className="
                                text-xs
                                text-white/40
                            "
                        >
                            © {new Date().getFullYear()} Ayush.
                            All rights reserved.
                        </p>


                        {/* Links */}

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-5
                                text-xs
                            "
                        >

                            <a
                                href="#home"
                                className="
                                    text-white/50
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="
                                    text-white/50
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                About
                            </a>

                            <a
                                href="#projects"
                                className="
                                    text-white/50
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="
                                    text-white/50
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                Contact
                            </a>

                        </div>


                        {/* Social */}

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <a
                                href="https://github.com/ayush-y01"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    text-white/40
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/ayush-yadav-7a8846206"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    text-white/40
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;