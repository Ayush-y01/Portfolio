import React from "react";
import {
    siReact,
    siVuedotjs,
    siNodedotjs,
    siPython,
    siPostgresql,
    siFrappe,
    siJavascript,
    siTailwindcss,
} from "simple-icons/icons";

const experiences = [
    {
        year: "2025 — Present",
        role: "Full Stack Developer",
        company: "GroNext Future Private Limited",
        description:
            "Building and maintaining business applications across frontend, backend, APIs, and internal systems with a focus on scalable, reliable, and practical solutions.",
        current: true,
        skills: [
            { name: "React", icon: siReact },
            { name: "Vue", icon: siVuedotjs },
            { name: "Node.js", icon: siNodedotjs },
            { name: "Python", icon: siPython },
            { name: "PostgreSQL", icon: siPostgresql },
            { name: "Frappe", icon: siFrappe },
            { name: "JavaScript", icon: siJavascript },
        ],
    },
    {
        year: "2024 — 2025",
        role: "Frontend Developer",
        company: "Hex Business Solution",
        description:
            "Developed responsive and interactive web interfaces with a strong focus on usability, performance, and clean component-based development.",
        current: false,
        skills: [
            { name: "React", icon: siReact },
            { name: "JavaScript", icon: siJavascript },
            { name: "Tailwind CSS", icon: siTailwindcss },
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative w-full px-5 py-24 sm:px-8 lg:px-12 xl:px-20"
        >
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-16 max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-slate-300" />

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-900">
                            Experience
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
                        Where I've
                        <br />
                        <span className="text-slate-800">
                            been building.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-900 sm:text-base">
                        A journey through the roles, products, and technologies
                        I've worked with as a developer.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Timeline */}
                    <div
                        className="
                            absolute
                            left-[7px]
                            top-2
                            bottom-2
                            w-px
                            bg-gradient-to-b
                            from-slate-300
                            via-slate-200
                            to-transparent
                            sm:left-[9px]
                        "
                    />

                    <div className="space-y-12">

                        {experiences.map((experience) => (
                            <article
                                key={experience.year}
                                className="group relative pl-10 sm:pl-14"
                            >

                                {/* Timeline dot */}
                                <div
                                    className={`
                                        absolute
                                        left-0
                                        top-8
                                        z-10
                                        flex
                                        h-[17px]
                                        w-[17px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        border-4
                                        border-[#f8fafc]
                                        transition-all
                                        duration-300
                                        ${
                                            experience.current
                                                ? "bg-[#172535] shadow-[0_0_0_5px_rgba(23,37,53,0.08)]"
                                                : "bg-slate-300 group-hover:bg-[#172535]"
                                        }
                                    `}
                                />

                                {/* Card */}
                                <div
                                    className="
                                        relative
                                        overflow-hidden
                                        rounded-[28px]
                                        border
                                        border-slate-200/70
                                        bg-white/10
                                        p-6
                                        backdrop-blur-md
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-slate-300
                                        hover:bg-white/20
                                        hover:shadow-[0_25px_70px_rgba(50,80,110,0.08)]
                                        sm:p-8
                                    "
                                >

                                    {/* Subtle accent */}
                                    <div
                                        className={`
                                            absolute
                                            left-0
                                            top-0
                                            h-full
                                            w-[2px]
                                            transition-all
                                            duration-300
                                            ${
                                                experience.current
                                                    ? "bg-[#172535]"
                                                    : "bg-slate-200 group-hover:bg-slate-600"
                                            }
                                        `}
                                    />

                                    {/* Top section */}
                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-5
                                            sm:flex-row
                                            sm:items-start
                                            sm:justify-between
                                        "
                                    >

                                        <div>

                                            {/* Current badge */}
                                            {experience.current && (
                                                <div className="mb-3 flex items-center gap-2">
                                                    

                                                    <span
                                                        className="
                                                            text-[10px]
                                                            font-medium
                                                            uppercase
                                                            tracking-[0.15em]
                                                            text-green-500
                                                        "
                                                    >
                                                        Currently here
                                                    </span>
                                                </div>
                                            )}

                                            <h3
                                                className="
                                                    text-2xl
                                                    font-semibold
                                                    tracking-[-0.04em]
                                                    text-[#172535]
                                                    sm:text-3xl
                                                "
                                            >
                                                {experience.role}
                                            </h3>

                                            <p className="mt-1.5 text-sm font-medium text-slate-900">
                                                {experience.company}
                                            </p>
                                        </div>

                                        {/* Year */}
                                        <div
                                            className="
                                                rounded-full
                                                border
                                                border-slate-200
                                                bg-white/30
                                                px-3.5
                                                py-1.5
                                                font-mono
                                                text-[10px]
                                                tracking-tight
                                                text-slate-900
                                            "
                                        >
                                            {experience.year}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="
                                            mt-6
                                            max-w-3xl
                                            text-sm
                                            leading-7
                                            text-slate-800
                                            sm:text-[15px]
                                        "
                                    >
                                        {experience.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-7">

                                        <p
                                            className="
                                                mb-3
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-[0.16em]
                                                text-slate-900
                                            "
                                        >
                                            Technologies
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            {experience.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    title={skill.name}
                                                    className="
                                                        group/skill
                                                        flex
                                                        items-center
                                                        gap-2
                                                        rounded-full
                                                        border
                                                        border-slate-200/80
                                                        bg-white/15
                                                        px-3
                                                        py-1.5
                                                        transition-all
                                                        duration-300
                                                        hover:-translate-y-0.5
                                                        hover:border-slate-300
                                                        hover:bg-white/50
                                                        hover:shadow-sm
                                                    "
                                                >

                                                    {/* Full color icon */}
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="
                                                            h-3.5
                                                            w-3.5
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

                                                    <span
                                                        className="
                                                            text-[10px]
                                                            font-medium
                                                            text-slate-700
                                                            transition-colors
                                                            duration-300
                                                            group-hover/skill:text-slate-900
                                                        "
                                                    >
                                                        {skill.name}
                                                    </span>

                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;