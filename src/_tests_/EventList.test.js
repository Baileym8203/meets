import React from "react";
import { shallow } from "enzyme";
import EventList from "../EventList";
import mockData from "../mock-data";
import Event from "../Event";
describe("<EventList /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});
