import puppeteerExtra from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

(async () => {
    puppeteerExtra.use(stealthPlugin());
    const browser = await puppeteerExtra.launch({headless: false});


    await browser.close();
})();