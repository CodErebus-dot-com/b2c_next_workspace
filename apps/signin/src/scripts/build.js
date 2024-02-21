const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

execSync(
  "pnpm run process-tw && cross-env NEXT_PRIVATE_LOCAL_WEBPACK=true next build",
  { stdio: "inherit" }
);

const outputDir = path.join(process.cwd(), "dist");

function cleanOutputDir() {
  console.info("Preparing Azure AD production ready distribution...");
  fs.readdirSync(outputDir).forEach((file) => {
    if (file !== "index.html") {
      const filePath = path.join(outputDir, file);
      fs.rmSync(filePath, { recursive: true, force: true }); // Delete files and directories recursively
    }
  });
  console.log("Done");
}

cleanOutputDir();
