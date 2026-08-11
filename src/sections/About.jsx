import React from "react";
import {
    siReact,
    siNextdotjs,
    siJavascript,
    siTypescript,
    siTailwindcss,
    siVuedotjs,
    siNodedotjs,
    siPython,
    siMongodb,
    siMysql,
    siPostgresql,
    siLinux,
    siGithub,
    siFrappe,
    siDocker,
    siKubernetes,
    siPhp,
    siShopify
} from "simple-icons/icons";

const skills = [
    { name: "React", icon: siReact },
    { name: "JavaScript", icon: siJavascript },
    { name: "TypeScript", icon: siTypescript },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "Vue", icon: siVuedotjs },
    { name: "Node.js", icon: siNodedotjs },
    { name: "Python", icon: siPython },
    { name: "MongoDB", icon: siMongodb },
    { name: "MySQL", icon: siMysql },
    { name: "Postgresql", icon: siPostgresql },
    { name: "Linux", icon: siLinux },
    { name: "GitHub", icon: siGithub },
    { name: "Docker", icon: siDocker },
    { name: "Frappe", icon: siFrappe },
    { name: "Nextjs", icon: siNextdotjs},
    { name: "Kubernetes", icon: siKubernetes},
    { name: "PHP", icon: siPhp},
    { name:"Shopify", icon:siShopify}
];

const About = () => {
    return (
        <section
            id="about"
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

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mb-12 max-w-2xl">

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

                        About me
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
                        I build things for
                        <br />

                        <span className="text-slate-500">
                            the web.
                        </span>
                    </h2>

                </div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                    className="
                        grid
                        gap-6
                        lg:grid-cols-[1fr_1.15fr]
                    "
                >

                    {/* =================================================
                        ABOUT CARD
                    ================================================= */}

                    <div
                        className="
                            rounded-[28px]
                            border
                            border-white/60
                            bg-white/[0.28]
                            p-7

                            shadow-[0_20px_60px_rgba(50,110,150,0.08)]

                            backdrop-blur-md

                            sm:p-9
                            lg:p-10
                        "
                    >

                        <div
                            className="
                                flex
                                h-full
                                flex-col
                                justify-between
                                gap-12
                            "
                        >

                            <div>

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
                                    I'm Ayush, a developer who enjoys
                                    turning ideas into clean,
                                    interactive and useful digital
                                    experiences.
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
                                    I work across the frontend and
                                    backend, building modern web
                                    applications with a strong focus
                                    on performance, simplicity and
                                    good user experience.
                                </p>

                            </div>


                            {/* Currently */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-white/70
                                    bg-white/30
                                    px-4
                                    py-3
                                "
                            >

                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-500
                                        shadow-[0_0_0_4px_rgba(16,185,129,0.12)]
                                    "
                                />

                                <div>
                                    <p
                                        className="
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-[0.15em]
                                            text-slate-400
                                        "
                                    >
                                        Currently
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-sm
                                            font-medium
                                            text-slate-700
                                        "
                                    >
                                        Building & learning
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        SKILLS
                    ================================================= */}

                    <div
    className="
        rounded-[28px]
        border border-white/60
        bg-white/[0.22]
        p-7
        backdrop-blur-md
        shadow-[0_20px_60px_rgba(50,110,150,0.06)]

        sm:p-9
        lg:p-10
    "
>
    <div className="mb-8">
        <p
            className="
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-slate-400
            "
        >
            What I work with
        </p>

        <h3
            className="
                mt-1
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-[#172535]
            "
        >
            Skills & expertise
        </h3>
    </div>


    {/* Icons */}

    <div
        className="
            grid
            grid-cols-4
            gap-3

            sm:grid-cols-5
            lg:grid-cols-6
        "
    >
        {skills.map((skill) => (
            <div
                key={skill.name}
                title={skill.name}
                className="
                    group
                    flex
                    aspect-square
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/30

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white/60
                    hover:shadow-sm
                "
            >
                <svg
                    viewBox="0 0 24 24"
                    className="
                        h-7
                        w-7
                        fill-current
                        text-slate-600

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-[#172535]
                    "
                    aria-label={skill.name}
                >
                    <path d={skill.icon.path} />
                </svg>
            </div>
        ))}
    </div>
</div>

                </div>

            </div>
        </section>
    );
};

export default About;