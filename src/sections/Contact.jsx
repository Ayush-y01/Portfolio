import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="
                relative
                w-full
                px-5
                py-24
                sm:px-8
                lg:px-12
                xl:px-20
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}

                <div className="mb-12 max-w-3xl">

                    <div
                        className="
                            mb-4
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-slate-500
                        "
                    >
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-orange-500
                            "
                        />

                        Contact
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            tracking-[-0.045em]
                            text-[#172535]

                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Have an idea?
                        <br />

                        <span className="text-slate-500">
                            Let's talk.
                        </span>
                    </h2>

                </div>


                {/* Main Contact Card */}

                <div
                    className="
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/60
                        bg-white/[0.25]
                        backdrop-blur-md
                        shadow-[0_20px_70px_rgba(50,110,150,0.08)]
                    "
                >

                    <div
                        className="
                            grid
                            lg:grid-cols-[1.2fr_0.8fr]
                        "
                    >

                        {/* Left */}

                        <div
                            className="
                                p-7
                                sm:p-10
                                lg:p-14
                            "
                        >

                            <p
                                className="
                                    max-w-xl
                                    text-base
                                    leading-7
                                    text-slate-600

                                    sm:text-lg
                                    sm:leading-8
                                "
                            >
                                I'm always interested in working on
                                interesting products, creative ideas
                                and meaningful projects.
                            </p>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-base
                                    leading-7
                                    text-slate-500
                                "
                            >
                                If you think we could build something
                                great together, feel free to reach out.
                            </p>


                            {/* Email CTA */}

                            <a
                                href="mailto:ayushyadav8900@gmail.com"
                                className="
                                    group
                                    mt-10
                                    inline-flex
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
                                    hover:shadow-lg
                                "
                            >
                                Let's work together

                                <span
                                    className="
                                        text-lg
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    ↗
                                </span>
                            </a>

                        </div>


                        {/* Right */}

                        <div
                            className="
                                border-t
                                border-white/40
                                p-7

                                sm:p-10

                                lg:border-l
                                lg:border-t-0
                                lg:p-14
                            "
                        >

                            <p
                                className="
                                    mb-5
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.16em]
                                    text-slate-400
                                "
                            >
                                Find me online
                            </p>


                            <div className="space-y-3">

                                {/* Email */}

                                <a
                                    href="mailto:ayushyadav8900@gmail.com"
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border
                                        border-white/70
                                        bg-white/30
                                        px-4
                                        py-4

                                        transition-all
                                        duration-200

                                        hover:bg-white/55
                                    "
                                >
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Email
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-slate-700
                                            "
                                        >
                                            ayushyadav8900@gmail.com
                                        </p>
                                    </div>

                                    <span
                                        className="
                                            text-lg
                                            text-slate-400
                                            transition-transform
                                            duration-200
                                            group-hover:translate-x-1
                                        "
                                    >
                                        ↗
                                    </span>
                                </a>


                                {/* GitHub */}

                                <a
                                    href="https://github.com/ayush-y01"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border
                                        border-white/70
                                        bg-white/30
                                        px-4
                                        py-4

                                        transition-all
                                        duration-200

                                        hover:bg-white/55
                                    "
                                >
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            GitHub
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-slate-700
                                            "
                                        >
                                            github.com/ayush-y01
                                        </p>
                                    </div>

                                    <span
                                        className="
                                            text-lg
                                            text-slate-400
                                            transition-transform
                                            duration-200
                                            group-hover:translate-x-1
                                        "
                                    >
                                        ↗
                                    </span>
                                </a>


                                {/* LinkedIn */}

                                <a
                                    href="https://linkedin.com/in/ayush-yadav-7a8846206"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border
                                        border-white/70
                                        bg-white/30
                                        px-4
                                        py-4

                                        transition-all
                                        duration-200

                                        hover:bg-white/55
                                    "
                                >
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            LinkedIn
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-slate-700
                                            "
                                        >
                                            linkedin.com/in/ayush-yadav-7a8846206
                                        </p>
                                    </div>

                                    <span
                                        className="
                                            text-lg
                                            text-slate-400
                                            transition-transform
                                            duration-200
                                            group-hover:translate-x-1
                                        "
                                    >
                                        ↗
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Footer */}

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/40
                        pt-6

                        text-xs
                        text-slate-400

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <span>
                        © {new Date().getFullYear()} Ayush
                    </span>

                    <span>
                        Let's Built with Me
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Contact;