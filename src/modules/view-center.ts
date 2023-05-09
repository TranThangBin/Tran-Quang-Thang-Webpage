export default (e: Event) => {
    const imageClicked = e.currentTarget as HTMLElement;
    if (imageClicked)
        imageClicked.scrollIntoView({
            block: "center",
            inline: "center",
        });
};
