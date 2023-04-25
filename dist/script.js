"use strict";
//-Dynamic-Date------------------------------------------------------------------
const collegeYearElement = document.getElementById("collegeYear");
setCollegeYear();
setCopyrightYear();
function setCollegeYear() {
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
function setCopyrightYear() {
    const copyrightYearElement = document.getElementById("copyrightYear");
    const currentDate = new Date();
    if (!copyrightYearElement)
        return;
    copyrightYearElement.innerText = currentDate.getFullYear().toString();
}
//-HamburgerBtn-Click-Event------------------------------------------------------
const hamburgerBtn = document.getElementById("hamburger");
const hamburgerBar = hamburgerBtn?.getElementsByTagName("div");
const navLinks = document.querySelectorAll("[data-nav-link]");
const sidebar = document.getElementById("sidebar");
if (hamburgerBtn)
    hamburgerBtn.addEventListener("click", toggleSidebar);
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", toggleSidebar);
});
function toggleSidebar() {
    if (!hamburgerBtn)
        return;
    if (!hamburgerBar)
        return;
    if (!sidebar)
        return;
    hamburgerBar[0].classList.toggle("transform-hamburger-top");
    hamburgerBar[1].classList.toggle("transform-hamburger-center");
    hamburgerBar[2].classList.toggle("transform-hamburger-bottom");
    sidebar.classList.toggle("right-full");
}
