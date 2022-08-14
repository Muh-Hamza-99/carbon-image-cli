const puppeteer = require("puppeteer");

const headlessVisit = async (url, filetype) => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 2 });
	await page.goto(url, { waitUntil: "load" });
	await page._client.send("Page.setDownloadBehavior", { behavior: "allow", downloadPath: process.cwd() });
	const saveImageTrigger = await page.waitForSelector("#export-menu");
	await saveImageTrigger.click();
	const PNGExportTrigger = await page.$("#export-png");
	const SVGExportTrigger = await page.$("#export-svg");
	switch (filetype) {
		case "png": {
			await PNGExportTrigger.click();
			break;
		};
		case "svg": {
			await SVGExportTrigger.click();
			break;
		};
		default: {
			throw new Error("Only png and svg are supported.");
		};
    };
	await page.waitFor(2000);
	await browser.close();
};

module.exports = headlessVisit;