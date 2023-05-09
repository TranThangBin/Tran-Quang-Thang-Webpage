export default (e) => {
    const imageClicked = e.currentTarget;
    if (imageClicked)
        imageClicked.scrollIntoView({
            block: "center",
            inline: "center",
        });
};
