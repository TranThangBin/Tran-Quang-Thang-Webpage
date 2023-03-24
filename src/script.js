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

hamburgerBtn.addEventListener("click", hamburger);

function hamburger() {
    const hamburgerBar = hamburgerBtn.getElementsByTagName("div");
    hamburgerBar[0].classList.toggle("transform-hamburger-top");
    hamburgerBar[1].classList.toggle("transform-hamburger-center");
    hamburgerBar[2].classList.toggle("transform-hamburger-bottom");
    const hiddenMenu = document.getElementById("hiddenMenu");
    hiddenMenu.classList.toggle("right-1/2");
}
