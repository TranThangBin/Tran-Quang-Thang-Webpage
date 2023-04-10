/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html, js}"],
    theme: {
        extend: {
            colors: {
                main: "#171810",
            },
            width: {
                sidebar_list: "34.25rem",
            },
            height: {
                view_minus_nav: "calc(100dvh - 8rem)",
            },
        },
    },
    plugins: [],
};
