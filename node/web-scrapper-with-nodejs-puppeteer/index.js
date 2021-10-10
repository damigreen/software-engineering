const puppeteer = require("puppeteer");
const IMDB_URL = (movie_id) => `https://www.imdb.com/title/${movie_id}/`;
const MOVIE_ID = "tt6763664";

(async () => {
  /* Initiate the Puppeteer browser */
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 /* 250ms slow down */ }); //Debug
  const page = await browser.newPage();

  /* Goto the IMDB movie page and wait for it to load */
  await page.goto(IMDB_URL(MOVIE_ID), { waitUntil: "networkidle0" });

  /* Run JavaScript inside the page */
  let data = await page.evaluate(() => {
    let title = document.querySelector(
      //   'div[class="title_wrapper"] > h1'
      "h1"
    ).innerText;
    let rating = document.querySelector(
      //   'span[itemprop="ratingValue"]'
      "h3.ipc-title__text"
    ).innerText;
    let ratingCount = 23;

    /* Return scrapping object data */
    return {
      title,
      rating,
      ratingCount,
    };
  });

  console.log(data);

  /* Goto a page that loada dynamic content */
  await page.goto("https://booking.com");

  /* Wait for a specific part of the website to load on the screen */
  await page.waitFor("#content");

  /* More than that, you can wait for a predicate custom function until its true */
  await page.waitFor(() => document.querySelector("#content"));

  await browser.close();
})();
