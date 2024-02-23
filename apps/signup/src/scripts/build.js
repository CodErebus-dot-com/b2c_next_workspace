const { execSync } = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const cheerio = require("cheerio");

async function runBuildProcess() {
  try {
    execSync(
      "pnpm run process-tw && cross-env NEXT_PRIVATE_LOCAL_WEBPACK=true next build && next-image-export-optimizer",
      { stdio: "inherit" }
    );
    console.log("Build process completed successfully.");
  } catch (error) {
    console.error("Build process failed:", error);
  }
}
const outputDir = path.join(process.cwd(), "dist");

async function cleanupDist() {
  console.info("Preparing Azure AD production ready distribution...");
  const filesToKeep = ["index.html", "favicon.ico"];

  try {
    const files = await fs.readdir(outputDir);

    await Promise.all(
      files.map(async (file) => {
        if (!filesToKeep.includes(file)) {
          const filePath = path.join(outputDir, file);
          await fs.rm(filePath, { recursive: true, force: true }); // Delete files and directories recursively
        }
      })
    );

    console.log("Done");
  } catch (error) {
    console.error("Error during cleanup:", error);
  }
}

async function modifyIndexHtml() {
  const indexPath = path.join(outputDir, "index.html");
  console.log("Modifying index.html at:", indexPath);

  try {
    let html = await fs.readFile(indexPath, "utf-8");
    const $ = cheerio.load(html);

    // Remove script tags
    $('script[src^="/_next/"]').remove();
    // Remove link tags
    $('link[href^="/_next/"]').remove();
    // Remove noscript tags
    $("noscript").remove();

    await fs.writeFile(indexPath, $.html());
    console.log("Done");
  } catch (error) {
    console.error("Error modifying index.html:", error);
  }
}

async function main() {
  await runBuildProcess();
  await cleanupDist();
  await modifyIndexHtml();
}

main();
