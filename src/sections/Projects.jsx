import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Complete Zomato Clone",
    image: "##",
    type: "Full Stack",
    category: "Food Delivery",
  },
  {
    id: 2,
    title: "AI Power Resume Analysis",
    image: "/projects/kaelio.png",
    type: "Full Stack",
    category: "AI SaaS",
  },
  {
    id: 3,
    title: "Complete Uber Clone",
    image: "/projects/project-3.png",
    type: "Full Stack",
    category: "Taxi Service",
  },
  {
    id: 4,
    title: "Sales Connect",
    image: "/projects/project-4.png",
    type: "Full Stack",
    category: "SaaS",
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = projects.length;

  const next = () => {
    if (animating) return;

    setAnimating(true);
    setActive((prev) => (prev + 1) % total);

    setTimeout(() => {
      setAnimating(false);
    }, 650);
  };

  const previous = () => {
    if (animating) return;

    setAnimating(true);
    setActive((prev) => (prev - 1 + total) % total);

    setTimeout(() => {
      setAnimating(false);
    }, 650);
  };

  const goTo = (index) => {
    if (animating || index === active) return;

    setAnimating(true);
    setActive(index);

    setTimeout(() => {
      setAnimating(false);
    }, 650);
  };

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [animating]);

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
      "
    >
      {/* =========================
          CAROUSEL
      ========================= */}

      <div
        className="
          relative
          h-[470px]
          sm:h-[520px]
          lg:h-[590px]
          w-full
        "
      >
        {projects.map((project, index) => {
          let position = index - active;

          // Infinite positioning
          if (position > total / 2) {
            position -= total;
          }

          if (position < -total / 2) {
            position += total;
          }

          const isActive = position === 0;
          const isLeft = position === -1;
          const isRight = position === 1;

          return (
            <article
              key={project.id}
              className={`
                absolute
                left-1/2
                top-0

                w-[calc(100vw-44px)]
                sm:w-[65vw]
                lg:w-[53vw]
                lg:max-w-[820px]

                transition-all
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  isActive
                    ? `
                      z-30
                      translate-x-[-50%]
                      scale-100
                      opacity-100
                      pointer-events-auto
                    `
                    : ""
                }

                ${
                  isLeft
                    ? `
                       z-10

      -translate-x-[140%]
      sm:translate-x-[calc(-50%-48vw)]
      lg:translate-x-[calc(-50%-43vw)]

      scale-[0.94]
      sm:scale-[0.82]

      opacity-0
      sm:opacity-70

      pointer-events-none
                    `
                    : ""
                }

                ${
                  isRight
                    ? `
                      z-10

      translate-x-[40%]
      sm:translate-x-[calc(-50%+48vw)]
      lg:translate-x-[calc(-50%+43vw)]

      scale-[0.94]
      sm:scale-[0.82]

      opacity-0
      sm:opacity-70

      pointer-events-none
                    `
                    : ""
                }

                ${
                  !isActive && !isLeft && !isRight
                    ? `
                      z-0
                      translate-x-[-50%]
                      scale-75
                      opacity-0
                      pointer-events-none
                    `
                    : ""
                }
              `}
            >
              {/* =========================
                  CARD
              ========================= */}

              <div
                className="
                  rounded-[20px]
                  border
                  border-white/90
                  bg-white/[0.92]
                  p-2.5
                  shadow-[0_18px_45px_rgba(35,100,140,0.14)]
                  backdrop-blur-sm

                  sm:rounded-[20px]

                  max-sm:p-2
                  max-sm:rounded-[18px]
                "
              >
                {/* Image */}
                {/* Image */}
<div
  className="
    group
    relative
    aspect-[16/10]
    overflow-hidden
    rounded-[13px]
    bg-sky-100

    max-sm:aspect-[0.98/1]
    max-sm:rounded-[11px]
  "
>
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      draggable="false"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextElementSibling.style.display = "flex";
      }}
      className="
        h-full
        w-full
        select-none
        object-cover

        transition-transform
        duration-700
        ease-out

        group-hover:scale-[1.015]
      "
    />
  ) : null}

  {/* Coming Soon */}
  <div
    className={`
      absolute
      inset-0
      items-center
      justify-center
      text-center
      ${project.image ? "hidden" : "flex"}
    `}
  >
    <span
      className="
        text-xl
        font-semibold
        tracking-tight
        text-slate-500

        max-sm:text-lg
      "
    >
      Image Available Soon..
    </span>
  </div>

  {/* Open button */}
  <button
    className="
      absolute
      right-3
      top-3

      flex
      h-11
      w-11
      items-center
      justify-center

      rounded-full
      border
      border-white/60
      bg-white/20

      text-lg
      text-white

      shadow-sm
      backdrop-blur-xl

      transition-all
      duration-200

      hover:scale-105
      hover:bg-white/35

      max-sm:right-2.5
      max-sm:top-2.5
      max-sm:h-9
      max-sm:w-9
      max-sm:text-base
    "
  >
    ↗
  </button>
</div>

                {/* Bottom */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-1.5
                    pb-0.5
                    pt-3

                    max-sm:px-1
                    max-sm:pt-2.5
                  "
                >
                  {/* Project name */}
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-[7px]
                        w-[7px]
                        shrink-0
                        rounded-[2px]
                        bg-emerald-600
                      "
                    />

                    <h3
                      className="
                        text-[20px]
                        font-bold
                        tracking-[-0.03em]
                        text-[#172535]

                        max-sm:text-[17px]
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 max-sm:gap-1">
                    <span
                      className="
                        rounded-full
                        border
                        border-orange-500/25
                        bg-orange-500/[0.07]
                        px-2.5
                        py-1

                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.08em]
                        text-orange-500

                        max-sm:px-2
                        max-sm:py-[5px]
                        max-sm:text-[8px]
                      "
                    >
                      {project.type}
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-slate-400/15
                        bg-slate-500/[0.04]
                        px-2.5
                        py-1

                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.08em]
                        text-slate-500

                        max-sm:px-2
                        max-sm:py-[5px]
                        max-sm:text-[8px]
                      "
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* =========================
          CONTROLS
      ========================= */}

      <div
        className="
          relative
          z-40
          mt-1
          flex
          flex-col
          items-center
          gap-5
        "
      >
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
              className={`
                h-1.5
                rounded-full

                transition-all
                duration-300

                ${
                  active === index
                    ? "w-8 bg-orange-500"
                    : "w-6 bg-sky-600/25 hover:bg-sky-600/40"
                }
              `}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={previous}
            disabled={animating}
            aria-label="Previous project"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-[13px]
              bg-white/90

              text-xl
              text-[#172535]

              shadow-[0_7px_20px_rgba(30,90,130,0.10)]

              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:bg-white
              active:scale-95

              disabled:cursor-default
              disabled:opacity-70
            "
          >
            ‹
          </button>

          <button
            onClick={next}
            disabled={animating}
            aria-label="Next project"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-[13px]
              bg-white/90

              text-xl
              text-[#172535]

              shadow-[0_7px_20px_rgba(30,90,130,0.10)]

              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:bg-white
              active:scale-95

              disabled:cursor-default
              disabled:opacity-70
            "
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;