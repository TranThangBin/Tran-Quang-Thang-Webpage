import { setCollegeYear, setCopyrightYear } from "./modules/realtime-date.js";

const collegeYearElement = document.getElementById("collegeYear");

const copyrightYearElement = document.getElementById("copyrightYear");

setCollegeYear(collegeYearElement);

setCopyrightYear(copyrightYearElement);

import toggleSidebar from "./modules/toggle-sidebar.js";

const hamburgerBtn = document.getElementById("hamburger");

const navLinks = document.querySelectorAll("[data-nav-link]");

const sidebar = document.getElementById("sidebar");

if (hamburgerBtn)
    hamburgerBtn.addEventListener("click", (): void =>
        toggleSidebar(hamburgerBtn, sidebar)
    );

if (navLinks)
    Array.from(navLinks).forEach((navLink: Element): void => {
        navLink.addEventListener("click", (): void =>
            toggleSidebar(hamburgerBtn, sidebar)
        );
    });

import viewCenter from "./modules/view-center.js";

const projectsSectionElement = document.getElementById("projects");

const projectsImages = projectsSectionElement?.getElementsByTagName("img");

if (projectsImages)
    Array.from(projectsImages).forEach((image: Element): void => {
        image.addEventListener("click", (e: Event): void => {
            viewCenter(e);
        });
    });
