const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
const plugins = [tailwindcss("tailwind.config.js"), autoprefixer];

if (!IS_DEVELOPMENT) {
  const purgecss = require("@fullhuman/postcss-purgecss");

  plugins.push(
    purgecss({
      content: ["src/**/*.html"],
    })
  );
}

module.exports = { plugins };
