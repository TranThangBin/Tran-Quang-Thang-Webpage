/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html, js}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                starry: "url(../public/images/background/bg-starry.jpg)",
            },
            width: {
                "sidebar-list": "34.25rem",
            },
            maxWidth: {
                64: "16rem",
                screen: "100vw",
            },
            maxHeight: {
                "px-2222": "2222px",
            },
            minHeight: {
                "view-navless": "calc(100dvh - 8rem)",
            },
        },
    },
    plugins: [],
};
