/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html, js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "gray-0": "hsl(0,0%,50%,0)",
                "gray-1/2": "hsl(0,0%,50%,.5)",
            },
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
