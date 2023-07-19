const fs = require('fs');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const css = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;

// Process the CSS
postcss([tailwindcss, autoprefixer])
  .process(css, { from: undefined })
  .then(result => {
    // Write the CSS to a JS file
    fs.writeFileSync('./tw-styles.js', `export default ${JSON.stringify(result.css)}`);
    console.info('tailwind directives processed into tw-styles.js');
  });