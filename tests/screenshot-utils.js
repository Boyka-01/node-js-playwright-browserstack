const fs = require('fs');
const path = require('path');

/**
 * Returns the path to the screenshots directory based on the browser and device.
 * @param {string} browserName - The name of the browser.
 * @param {string} projectName - The name of the project (device or browser configuration).
 * @returns {string} - The path to the screenshots directory.
 */
const getScreenshotsDir = (browserName, projectName) => {
    const baseDir = 'C:/Users/AHMAD/Desktop/Sample/node-js-playwright-browserstack/Screenshots';
    const deviceDir = projectName ? `/${projectName}` : '';
    const browserDir = `/${browserName}`;
    return path.join(baseDir, deviceDir, browserDir);
};

/**
 * Ensures that the specified directory exists, creating it if necessary.
 * @param {string} dir - The path to the directory.
 */
const ensureScreenshotsDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

/**
 * Saves a full-page screenshot to the specified directory with the given step name.
 * @param {object} page - The Playwright page object.
 * @param {string} step - The name of the step for the screenshot filename.
 * @param {string} screenshotsDir - The directory where screenshots will be saved.
 */
const saveScreenshot = async (page, step, screenshotsDir) => {
    const screenshotPath = path.join(screenshotsDir, `${step}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true }); 
};

module.exports = {
    getScreenshotsDir,
    ensureScreenshotsDirExists,
    saveScreenshot
};
