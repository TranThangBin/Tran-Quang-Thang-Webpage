const navBar = document.getElementById("nav");

const homeElement = document.getElementById("home");
const aboutElement = document.getElementById("about");
const contactElement = document.getElementById("contact");

setHeightAll();

window.addEventListener("resize", setHeightAll);

function setHeight(element) {
    const minHeight = 420;
    const elementHeight = element.height;
    const navHeight = navBar.offsetHeight;
    const viewHeight = window.innerHeight;
    const expectedHeight = viewHeight - navHeight;
    if (expectedHeight < minHeight) element.style.height = `${minHeight}px`;
    else element.style.height = `${expectedHeight}px`;
}

function setHeightAll() {
    setHeight(homeElement);
    setHeight(aboutElement);
    setHeight(contactElement);
}

//-------------------------------------------------------------------------------

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
