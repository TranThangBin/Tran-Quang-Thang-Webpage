setCollegeYear();
setCopyrightYear();

function setCollegeYear() {
    const collegeYearElement = document.getElementById("collegeYear");
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
    if (currentDate.getMonth() < startMonthIndex) collegeYear--;
    if (collegeYear < 4)
        collegeYearElement.innerText = displayText[collegeYear];
    else collegeYearElement.innerText = displayText[4];
}

function setCopyrightYear() {
    const copyrightYearElement = document.getElementById("copyrightYear");
    const currentDate = new Date();
    copyrightYearElement.innerText = currentDate.getFullYear();
}

//-------------------------------------------------------------------------------

const hamburgerBtn = document.getElementById("hamburger");

const navLinks = document.querySelectorAll("[data-nav-link]");

hamburgerBtn.addEventListener("click", toggleMenu);

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", toggleMenu);
});

function toggleMenu() {
    const hamburgerBar = hamburgerBtn.getElementsByTagName("div");
    hamburgerBar[0].classList.toggle("transform-hamburger-top");
    hamburgerBar[1].classList.toggle("transform-hamburger-center");
    hamburgerBar[2].classList.toggle("transform-hamburger-bottom");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("right-full");
}
