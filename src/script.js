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
