const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
 
    await page.setUserAgent(
        'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36'
    )
    await page.setViewport({
        width: 1920,
        height: 1920
    })

    await page.setRequestInterception(true);

    page.on('request', (request) => {
        request.continue()
    })

    await page.on('response', (response) => {
        if(response.url() == "https://www.nseindia.com/api/market-data-pre-open?key=NIFTY") {
            console.log('<<', response.status(), response.url())
            result = response;
        }
    })

    await page.goto('https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market', { waitUntil: 'networkidle0' });
    delay(4911)
    await page.screenshot({
        path: "./screenshot.png",
        fullPage: true
      });

    await browser.close();
})();
