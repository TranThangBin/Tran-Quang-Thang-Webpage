"use strict";
//-Dynamic-Date------------------------------------------------------------------
const collegeYearElement = document.getElementById("collegeYear");
const copyrightYearElement = document.getElementById("copyrightYear");
setCollegeYear(collegeYearElement);
setCopyrightYear(copyrightYearElement);
function setCollegeYear(collegeYearElement) {
    if (!collegeYearElement)
        return;
    const currentDate = new Date();
    const startYear = 2022;
    const startMonthIndex = 8;
    let collegeYear = currentDate.getFullYear() - startYear;
    const displayText = [
        "first-year",
        "second-year",
        "third-year",
        "fourth-year",
        "graduated",
    ];
    if (currentDate.getMonth() < startMonthIndex)
        collegeYear--;
    if (collegeYear < 4)
        collegeYearElement.innerText = displayText[collegeYear];
    else
        collegeYearElement.innerText = displayText[4];
}
function setCopyrightYear(collegeYearElement) {
    if (!copyrightYearElement)
        return;
    const currentDate = new Date();
    copyrightYearElement.innerText = currentDate.getFullYear().toString();
}
//-HamburgerBtn-Click-Event------------------------------------------------------
const hamburgerBtn = document.getElementById("hamburger");
const navLinks = document.querySelectorAll("[data-nav-link]");
const sidebar = document.getElementById("sidebar");
if (hamburgerBtn)
    hamburgerBtn.addEventListener("click", (e) => toggleSidebar(e, hamburgerBtn, sidebar));
if (navLinks)
    Array.from(navLinks).forEach((navLink) => {
        navLink.addEventListener("click", (e) => toggleSidebar(e, hamburgerBtn, sidebar));
    });
function toggleSidebar(e, hamburgerBtn, sidebar) {
    const hamburgerBar = hamburgerBtn?.getElementsByTagName("div");
    if (!hamburgerBar)
        return;
    if (!sidebar)
        return;
    hamburgerBar[0].classList.toggle("transform-hamburger-top");
    hamburgerBar[1].classList.toggle("transform-hamburger-center");
    hamburgerBar[2].classList.toggle("transform-hamburger-bottom");
    sidebar.classList.toggle("right-full");
}
