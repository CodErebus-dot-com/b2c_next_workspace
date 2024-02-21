// This script processes the Tailwind directives into a JS file that can be then added into the DOM as an internal stylesheet.
// `pnpm run process-twd` is the command to run this script which is included as part of the build script.
// You can remove the process-twd from the build script if you want to use it as a standalone script.
// It should be used only for production builds.
// For development builds,the app will use the tailwind directives which are there in the styles/global.css file. This file is then imported into the _app.ts file.
const fs = require("fs");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Read the CSS from globals.css
const css = fs.readFileSync("./src/styles/globals.css", "utf8");

// Process the CSS
postcss([tailwindcss, autoprefixer])
  .process(css, { from: undefined })
  .then((result) => {
    // Write the CSS to a JS file
    fs.writeFileSync(
      "./tw-styles.js",
      `export default ${JSON.stringify(result.css)}`
    );
    console.info("tailwind directives processed into tw-styles.js");
  });
