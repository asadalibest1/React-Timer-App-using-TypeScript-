import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import MiliSeconds from "../components/miliSeconds";  

describe("MiliSeconds", () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<MiliSeconds />)));
  
  it("should render miliSeconds .starter div", () => {
    expect(container.find(".starter").length).toBe(1);
  });

  it("should render miliSeconds image", () => {
    expect(container.find("img").length).toEqual(1);
  })

  it("should render a miliSeconds span", () => {
    expect(container.find("span").length).toEqual(1)
  })
})

//     // const wrapper = mount(<ToDoList items={items} />);
// // expect(wrapper.find('ul').children()).to.have.lengthOf(items.length);

{/* <TimerButton
  buttonAction={jest.fn()}
  buttonValue={""}
/> */}

