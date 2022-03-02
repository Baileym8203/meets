
import Puppeteer from "puppeteer";

import timeout from 'jest'


describe("show/hide an event details", () => {
  //afterAll() not working via browser.close? as close in undefined for some reason!



  test("An event element is collapsed by default", async () => {
       jest.setTimeout(30);
    const browser = await Puppeteer.launch();
     const page = await browser.newPage();
     await page.goto("http://localhost:3000/");
     await page.waitForSelector(".event");
    const eventDetails = await page.$(".event .event_Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test("User can expand an event to see its details", async () => {
       jest.setTimeout(30);
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
    await page.click(" .event #details"); // use of ID instead of class name with button due to collapse state!
    const eventDetails = await page.$(".event .event_Details");
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  test("User can collapse an event to hide its details", async () => {
       jest.setTimeout(30);
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
    await page.click(".event #details");
    const eventDetails = await page.$(".event event_Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
