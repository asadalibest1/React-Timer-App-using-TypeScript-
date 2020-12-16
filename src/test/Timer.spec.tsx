import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Timer from "../components/Timer";
import Recent from '../components/recent';
import MiliSeconds from "../components/miliSeconds";
import Clock from "../components/clock"

describe("Timer", () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a <div/>", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(5);
  });

  it("should render animatedCircle elements", () => {
    expect(container.find('.animatedCircle').children().length).toBe(2);
  });

  it("should render a control-buttons div", () => {
    expect(container.find(".control-buttons").length).toBe(1);
  });
  
  it("should render three control-buttons", () => {
    expect(container.find('.control-buttons').children().length).toBe(3);
  });


  // it("should render instances of the TimerButton component", () => {
  //   expect(container.find("TimerButton").length).toEqual(3);
  // });

});

describe("Testing Recent, MiliSeconds, Clock Components",()=>{
  let container: ShallowWrapper = shallow(<Timer />);

  it("should render the Recent Component", () => {
    expect(container.containsMatchingElement(<Recent />)).toEqual(true)
  })
  it("should render the MiliSeconds Component", () => {
    expect(container.containsMatchingElement(<MiliSeconds />)).toEqual(true)
  })
  it("should render the Clock Component", () => {
    expect(container.containsMatchingElement(<Clock />)).toEqual(true)
  })
})


// const wrapper = mount(<ToDoList items={items} />);
// expect(wrapper.find('ul').children()).to.have.lengthOf(items.length);

// describe("Timer", () => {
//   // let container: any;

//   // beforeEach(() => (container = shallow(<Timer />)));
//   const _clas = document.getElementsByClassName("control-buttons")[0];

//   it("should render a <div/>", () => {
//     expect(_clas.find("div").length).toBeGreaterThanOrEqual(5);
//   });
//   it("should render a <div/>", () => {
//     expect(_clas.find(".control-buttons").length).toBe(1);
//   });
  

//   // it("should render instances of the TimerButton component", () => {
//   //   expect(container.find("TimerButton").length).toEqual(3);
//   // });

// });