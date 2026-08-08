import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const email = "ayushyadav8900@gmail.com";

    /* =====================================================
       NAVBAR SHOW / HIDE ON SCROLL
    ===================================================== */

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar at top
            if (currentScrollY <= 20) {
                setShowNavbar(true);
            }

            // Scrolling down → hide navbar
            else if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
                setMenuOpen(false);
            }

            // Scrolling up → show navbar
            else if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    /* =====================================================
       DETECT CURRENT SECTION
    ===================================================== */

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id
                    );
                }
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <nav
            className={`
                fixed
                left-0
                top-0
                z-50
                w-full
                px-3
                pt-3
                sm:px-4
                sm:pt-4

                transition-transform
                duration-300
                ease-out

                ${
                    showNavbar
                        ? "translate-y-0"
                        : "-translate-y-full"
                }
            `}
        >

            <div
                className="
                    mx-auto
                    flex
                    max-w-8xl
                    items-center
                    justify-between
                    gap-3
                "
            >

                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                    className="
                        shrink-0
                        rounded-full
                        border border-white/40
                        bg-white/10
                        px-4 py-2
                        backdrop-blur-md
                        shadow-sm
                    "
                >
                    <a
                        href="#home"
                        className="
                            text-sm
                            font-medium
                            text-white
                            sm:text-base
                        "
                    >
                        Ayush
                    </a>
                </div>


                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================= */}

                <div
                    className="
                        hidden
                        items-center
                        gap-6
                        rounded-full
                        border border-white/40
                        bg-transparent
                        px-6
                        py-2
                        text-base
                        backdrop-blur-md
                        shadow-sm

                        md:flex

                        lg:gap-10
                        lg:px-10
                        lg:text-xl
                    "
                >

                    <NavItem
                        href="#home"
                        label="Home"
                        active={activeSection === "home"}
                    />
                    <NavItem
                        href="#projects"
                        label="Projects"
                        active={activeSection === "projects"}
                    />

                    <NavItem
                        href="#about"
                        label="About"
                        active={activeSection === "about"}
                    />


                    <NavItem
                        href="#experience"
                        label="Experience"
                        active={activeSection === "experience"}
                    />
                    <NavItem
                        href="#contact"
                        label="Contact"
                        active={activeSection === "contact"}
                    />

                </div>


                {/* =================================================
                    DESKTOP CTA
                ================================================= */}

                <div
                    className="
                        hidden
                        shrink-0
                        rounded-full
                        border border-white/40
                        bg-white/10
                        px-4 py-2
                        backdrop-blur-md
                        shadow-sm

                        md:block
                    "
                >
                    <a
                        className="
                            text-sm
                            text-white
                            lg:text-base
                            cursor-pointer
                        "
                        href={`mailto:${email}`}
                    >
                        ayushyadav8900@gmail.com
                    </a>
                </div>


                {/* =================================================
                    MOBILE
                ================================================= */}

                <div
                    className="
                        flex
                        items-center
                        gap-2

                        md:hidden
                    "
                >

                    {/* Check Out */}

                    <div
                        className="
                            rounded-full
                            border border-white/40
                            bg-white/10
                            px-4 py-2
                            backdrop-blur-md
                            shadow-sm
                        "
                    >
                        <a
                            className="
                                text-xs
                                font-medium
                                text-white
                                cursor-pointer
                            "
                            href={`mailto:${email}`}
                        >
                            ayushyadav8900@gmail.com
                        </a>
                    </div>


                    {/* Hamburger */}

                    <button
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border border-white/40
                            bg-white/10
                            backdrop-blur-md
                            shadow-sm

                            transition-all
                            duration-200

                            active:scale-95
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-[5px]
                            "
                        >

                            {/* Top */}

                            <span
                                className={`
                                    block
                                    h-[2px]
                                    w-5
                                    rounded-full
                                    bg-white

                                    transition-all
                                    duration-300

                                    ${
                                        menuOpen
                                            ? "translate-y-[7px] rotate-45"
                                            : ""
                                    }
                                `}
                            />

                            {/* Middle */}

                            <span
                                className={`
                                    block
                                    h-[2px]
                                    w-5
                                    rounded-full
                                    bg-white

                                    transition-all
                                    duration-300

                                    ${
                                        menuOpen
                                            ? "opacity-0"
                                            : ""
                                    }
                                `}
                            />

                            {/* Bottom */}

                            <span
                                className={`
                                    block
                                    h-[2px]
                                    w-5
                                    rounded-full
                                    bg-white

                                    transition-all
                                    duration-300

                                    ${
                                        menuOpen
                                            ? "-translate-y-[7px] -rotate-45"
                                            : ""
                                    }
                                `}
                            />

                        </div>

                    </button>

                </div>

            </div>


            {/* =====================================================
                MOBILE MENU
            ===================================================== */}

            <div
                className={`
                    absolute
                    left-3
                    right-3
                    top-[calc(100%+10px)]

                    overflow-hidden
                    rounded-2xl

                    border
                    border-white/40

                    bg-white/10

                    backdrop-blur-xl

                    shadow-[0_12px_40px_rgba(0,0,0,0.12)]

                    transition-all
                    duration-300

                    md:hidden

                    ${
                        menuOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-3 opacity-0"
                    }
                `}
            >

                <div className="p-2">

                    <MobileNavItem
                        href="#home"
                        label="Home"
                        active={
                            activeSection === "home"
                        }
                        onClick={closeMenu}
                    />

                    <MobileNavItem
                        href="#about"
                        label="About"
                        active={
                            activeSection === "about"
                        }
                        onClick={closeMenu}
                    />

                    <MobileNavItem
                        href="#contact"
                        label="Contact"
                        active={
                            activeSection === "contact"
                        }
                        onClick={closeMenu}
                    />

                    <MobileNavItem
                        href="#projects"
                        label="Projects"
                        active={
                            activeSection === "projects"
                        }
                        onClick={closeMenu}
                    />

                    <MobileNavItem
                        href="#experience"
                        label="Experience"
                        active={
                            activeSection === "experience"
                        }
                        onClick={closeMenu}
                    />

                </div>

            </div>

        </nav>
    );
};


/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

const NavItem = ({
    href,
    label,
    active,
}) => {
    return (
        <a
            href={href}
            className={`
                transition-colors
                duration-200

                ${
                    active
                        ? "font-semibold text-white"
                        : "text-white/70 hover:text-white"
                }
            `}
        >
            {label}
        </a>
    );
};


/* =========================================================
   MOBILE NAV ITEM
========================================================= */

const MobileNavItem = ({
    href,
    label,
    active,
    onClick,
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`
                flex
                items-center
                rounded-xl
                px-4
                py-3.5
                text-sm

                transition-all
                duration-200

                ${
                    active
                        ? `
                            bg-white/70
                            font-semibold
                            text-[#071525]
                            shadow-sm
                        `
                        : `
                            text-white/90
                            hover:bg-white/15
                        `
                }
            `}
        >
            {label}
        </a>
    );
};


export default Navbar;