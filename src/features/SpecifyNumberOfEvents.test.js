import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  let EventListWrapper;

  test("When user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page of the app", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user hasn’t specified a number of events", () => {
      AppWrapper.update();
    });

    then("the default number of displayed events will be thirty two", () => {
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      AppWrapper = await mount(<App />);
      console.log(AppWrapper.debug());
    });

    when(
      "the user set a number of events he or she wants to see in the “Number of events” box",
      () => {
        AppWrapper.update();
        const eventNumber = { target: { value: 1 } };
        AppWrapper.find(".numberOfEvents").simulate("change", eventNumber); // this is the only issue faced task 4.5 simulate not reconized
      }
    );

    then("this number of events will be displayed", () => {});
  });
});
