import React from "react";

const experiences = [
    {
        year: "2025 — Present",
        role: "Full Stack Developer",
        company: "GroNext Future Private Limited",
        description:
            "Building modern web applications, working across frontend, backend and APIs while focusing on clean and scalable solutions.",
        skills: ["React", "Vue", "Node.js", "Python","Postgresql", "Frappe","Javascript"],
    },
    {
        year: "2024 — 2025",
        role: "Frontend Developer",
        company: "Hex Business Soultion",
        description:
            "Developed responsive interfaces and interactive web experiences with a strong focus on usability and performance.",
        skills: ["React", "JavaScript", "Tailwind CSS"],
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
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

                        Experience
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
                        Where I've
                        <br />

                        <span className="text-slate-500">
                            been building.
                        </span>
                    </h2>

                </div>


                {/* Experience */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/60
                        bg-white/[0.22]
                        p-6
                        backdrop-blur-md
                        shadow-[0_20px_60px_rgba(50,110,150,0.06)]

                        sm:p-8
                        lg:p-10
                    "
                >

                    <div className="divide-y divide-slate-400/10">

                        {experiences.map((experience, index) => (
                            <div
                                key={experience.year}
                                className="
                                    grid
                                    gap-6
                                    py-8

                                    first:pt-2
                                    last:pb-2

                                    lg:grid-cols-[150px_1fr]
                                    lg:gap-10
                                "
                            >

                                {/* Year */}

                                <div
                                    className="
                                        font-mono
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    {experience.year}
                                </div>


                                {/* Content */}

                                <div>

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-1

                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                        "
                                    >

                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                tracking-[-0.02em]
                                                text-[#172535]
                                            "
                                        >
                                            {experience.role}
                                        </h3>

                                        <span
                                            className="
                                                text-sm
                                                text-slate-400
                                            "
                                        >
                                            {experience.company}
                                        </span>

                                    </div>


                                    <p
                                        className="
                                            mt-4
                                            max-w-2xl
                                            text-sm
                                            leading-7
                                            text-slate-500
                                            sm:text-base
                                        "
                                    >
                                        {experience.description}
                                    </p>


                                    {/* Skills */}

                                    <div
                                        className="
                                            mt-5
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >
                                        {experience.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/70
                                                    bg-white/35
                                                    px-3
                                                    py-1.5

                                                    font-mono
                                                    text-[10px]
                                                    text-slate-500
                                                "
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;