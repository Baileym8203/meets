import jest from "jest";
import Puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser; // removed jest.SetTimeout(30000) as it was coming back undefined!
  let page;
  beforeAll(async () => {
    browser = await Puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  //afterAll() not working via browser.close? as close in undefined for some reason!

  test("An event element is collapsed by default", async () => {
    const browser = await Puppeteer.launch();
    const eventDetails = await page.$(".event .event_Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test("User can expand an event to see its details", async () => {
    const browser = await Puppeteer.launch();
    await page.click(" .event #details"); // use of ID instead of class name with button due to collapse state!
    const eventDetails = await page.$(".event .event_Details");
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  test("User can collapse an event to hide its details", async () => {
    const browser = await Puppeteer.launch();
    await page.click(".event #details");
    const eventDetails = await page.$(".event event_Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
