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
            maxWidth: {
                64: "16rem",
                px_2222: "2222px",
            },
            maxHeight: {
                px_2222: "2222px",
            },
            minHeight: {
                view_minus_nav: "calc(100dvh - 8rem)",
            },
        },
    },
    plugins: [],
};
