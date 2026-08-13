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
    siShopify,
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
    { name: "PostgreSQL", icon: siPostgresql },
    { name: "Linux", icon: siLinux },
    { name: "GitHub", icon: siGithub },
    { name: "Docker", icon: siDocker },
    { name: "Frappe", icon: siFrappe },
    { name: "Next.js", icon: siNextdotjs },
    { name: "Kubernetes", icon: siKubernetes },
    { name: "PHP", icon: siPhp },
    { name: "Shopify", icon: siShopify },
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
            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}

                <div className="mb-16 max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-slate-100" />

                        <span className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-slate-900
                        ">
                            About me
                        </span>
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.05em]
                            text-[#172535]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Developer,
                        <br />
                        <span className="text-slate-800">
                            builder & learner.
                        </span>
                    </h2>

                    <p className="
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-900
                        sm:text-base
                    ">
                        I enjoy turning ideas into useful digital products,
                        working across the frontend, backend and everything
                        in between.
                    </p>
                </div>

                {/* ================= MAIN GRID ================= */}

                <div className="
                    grid
                    gap-6
                    lg:grid-cols-[0.9fr_1.1fr]
                ">

                    {/* ================= ABOUT CARD ================= */}

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-slate-200/70
                            bg-white/10
                            p-7
                            backdrop-blur-md
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:border-slate-300
                            hover:bg-white/20
                            hover:shadow-[0_25px_70px_rgba(50,80,110,0.08)]
                            sm:p-9
                        "
                    >

                        {/* Decorative gradient */}
                        <div className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-40
                            w-40
                            rounded-full
                            bg-slate-200/30
                            blur-3xl
                            transition-all
                            duration-500
                            group-hover:bg-slate-300/30
                        " />

                        <div className="
                            relative
                            flex
                            h-full
                            flex-col
                            justify-between
                            gap-12
                        ">

                            <div>

                                <div className="mb-7 flex items-center gap-3">

                                    <div className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white/30
                                        text-[#172535]
                                    ">
                                        <span className="text-sm font-semibold">
                                            AY
                                        </span>
                                    </div>

                                    <div>
                                        <p className="
                                            text-xs
                                            font-medium
                                            text-slate-900
                                        ">
                                            Ayush Yadav
                                        </p>

                                        <p className="
                                            mt-0.5
                                            text-[10px]
                                            uppercase
                                            tracking-[0.12em]
                                            text-slate-900
                                        ">
                                            Full Stack Developer
                                        </p>
                                    </div>

                                </div>

                                <p className="
                                    max-w-xl
                                    text-base
                                    leading-7
                                    text-slate-800
                                    sm:text-lg
                                    sm:leading-8
                                ">
                                    I'm a developer who enjoys turning ideas
                                    into clean, interactive and useful digital
                                    experiences.
                                </p>

                                <p className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-slate-700
                                    sm:text-base
                                ">
                                    I work across frontend and backend
                                    development, building modern applications
                                    with a strong focus on performance,
                                    simplicity and good user experience.
                                </p>

                            </div>

                            {/* Current status */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                rounded-2xl
                                border
                                border-slate-200/80
                                bg-white/20
                                px-4
                                py-4
                            ">

                                <div className="flex items-center gap-3">

                                    

                                    <div>
                                        <p className="
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-[0.15em]
                                            text-slate-700
                                        ">
                                            Currently
                                        </p>

                                        <p className="
                                            mt-0.5
                                            text-sm
                                            font-medium
                                            text-slate-900
                                        ">
                                            Building & learning
                                        </p>
                                    </div>

                                </div>

                                <span className="
                                    hidden
                                    font-mono
                                    text-[10px]
                                    text-slate-900
                                    sm:block
                                ">
                                    2026
                                </span>

                            </div>

                        </div>
                    </div>

                    {/* ================= SKILLS CARD ================= */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-slate-200/70
                            bg-white/10
                            p-7
                            backdrop-blur-md
                            shadow-[0_20px_60px_rgba(50,110,150,0.05)]
                            sm:p-9
                        "
                    >

                        {/* Header */}

                        <div className="mb-8">

                            <p className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.16em]
                                text-slate-700
                            ">
                                What I work with
                            </p>

                            <div className="
                                mt-2
                                flex
                                items-end
                                justify-between
                                gap-4
                            ">

                                <h3 className="
                                    text-2xl
                                    font-semibold
                                    tracking-[-0.03em]
                                    text-[#172535]
                                    sm:text-3xl
                                ">
                                    Skills & expertise
                                </h3>

                                <span className="
                                    hidden
                                    font-mono
                                    text-[10px]
                                    text-slate-900
                                    sm:block
                                ">
                                    18 technologies
                                </span>

                            </div>

                        </div>

                        {/* Skills */}

                        <div className="
                            grid
                            grid-cols-3
                            gap-2.5
                            sm:grid-cols-4
                            lg:grid-cols-5
                        ">

                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    title={skill.name}
                                    className="
                                        group/skill
                                        flex
                                        aspect-square
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-slate-200/70
                                        bg-white/15
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-slate-300
                                        hover:bg-white/50
                                        hover:shadow-[0_10px_25px_rgba(50,80,110,0.07)]
                                    "
                                >

                                    <svg
                                        viewBox="0 0 24 24"
                                        className="
                                            h-7
                                            w-7
                                            transition-transform
                                            duration-300
                                            group-hover/skill:scale-110
                                        "
                                        aria-label={skill.name}
                                    >
                                        <path
                                            d={skill.icon.path}
                                            fill={`#${skill.icon.hex}`}
                                        />
                                    </svg>

                                    <span className="
                                        max-w-[80px]
                                        truncate
                                        text-center
                                        text-[9px]
                                        font-medium
                                        text-slate-900
                                        transition-colors
                                        duration-300
                                        group-hover/skill:text-slate-700
                                    ">
                                        {skill.name}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* ================= BOTTOM STATS ================= */}

                <div className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-4
                ">

                    <div className="
                        rounded-2xl
                        border
                        border-slate-200/70
                        bg-white/25
                        px-5
                        py-4
                    ">
                        <p className="
                            font-mono
                            text-xl
                            font-semibold
                            text-[#172535]
                        ">
                            2+
                        </p>

                        <p className="
                            mt-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-slate-900
                        ">
                            Years building
                        </p>
                    </div>

                    <div className="
                        rounded-2xl
                        border
                        border-slate-200/70
                        bg-white/25
                        px-5
                        py-4
                    ">
                        <p className="
                            font-mono
                            text-xl
                            font-semibold
                            text-[#172535]
                        ">
                            18+
                        </p>

                        <p className="
                            mt-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-slate-900
                        ">
                            Technologies
                        </p>
                    </div>

                    <div className="
                        rounded-2xl
                        border
                        border-slate-200/70
                        bg-white/25
                        px-5
                        py-4
                    ">
                        <p className="
                            font-mono
                            text-xl
                            font-semibold
                            text-[#172535]
                        ">
                            Full
                        </p>

                        <p className="
                            mt-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-slate-900
                        ">
                            Stack focus
                        </p>
                    </div>

                    <div className="
                        rounded-2xl
                        border
                        border-slate-200/70
                        bg-white/25
                        px-5
                        py-4
                    ">
                        <p className="
                            font-mono
                            text-xl
                            font-semibold
                            text-[#172535]
                        ">
                            ∞
                        </p>

                        <p className="
                            mt-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-slate-900
                        ">
                            Things to learn
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;