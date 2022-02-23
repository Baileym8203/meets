import React from 'react'
import { shallow } from 'enzyme';
import Event from '../Event';

import mockData from '../mock-data';

describe('<Event />, component', () => {
 let EventWrapper;

 beforeAll(() => {
  EventWrapper = shallow(<Event event={mockData[1]} />);
 });


 test('render a single event', () => {
  expect(EventWrapper.find('.event')).toHaveLength(1);
 })

 test('render the location of the event', () => {
  expect(EventWrapper.find('.location')).toHaveLength(1);
 })

 test('render the summary of the event', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  })

  test('render the show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
});

test('open details when the button is clicked', () => {
  EventWrapper.setState({
      collapsed: true
  });
  EventWrapper.find('.show-details').simulate('click');
  expect(EventWrapper.state('collapsed')).toBe(false);
});

test('hide details when the button is clicked', () => {
  EventWrapper.setState({
      collapsed: false
  });
  EventWrapper.find('.hide-details').simulate('click');
  expect(EventWrapper.state('collapsed')).toBe(true);
 });

 test('show if this can be seen', () => {
 expect(EventWrapper.find('.this')).toHaveLength(1);
 })
});

