const themeDir = __dirname + "/../../";

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      themeDir + "layouts/**/*.html",
      themeDir + "content/**/*.html",
      "layouts/**/*.html",
      "config.toml",
      "content/**/*.html",
      "assets/js/search.js",
      "exampleSite/layouts/**/*.html",
      "exampleSite/config.toml",
      "exampleSite/content/**/*.html",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      width: {
        160: "40rem",
      },
      height: {
        120: "30rem",
      },
      maxWidth: {
        xxs: "9rem",
        xs: "20rem",
        sm: "24rem",
      },
      maxHeight: {
        56: "14rem",
      },
      colors: {
        black: {
          400: "#363636",
          700: "#101010",
          900: "#000000",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              a: {
                color: "inherit",
                fontWeight: "inherit",
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.500"),
              },
              code: {
                fontWeight: "normal",
                backgroundColor: theme("colors.gray.200"),
                padding: "0.2em 0.4em",
                margin: 0,
                borderRadius: "6px",
              },
              "code::before": { content: "&nbsp;" },
              "code::after": { content: "&nbsp;" },
            },
          ],
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                // color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.400"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: "inherit",
                backgroundColor: theme("colors.gray.800"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
