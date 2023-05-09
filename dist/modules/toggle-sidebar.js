export default (hamburgerBtn, sidebar) => {
    const hamburgerBar = hamburgerBtn?.getElementsByTagName("div");
    if (!hamburgerBar)
        return;
    if (!sidebar)
        return;
    hamburgerBar[0].classList.toggle("transform-hamburger-top");
    hamburgerBar[1].classList.toggle("transform-hamburger-center");
    hamburgerBar[2].classList.toggle("transform-hamburger-bottom");
    sidebar.classList.toggle("right-full");
};
