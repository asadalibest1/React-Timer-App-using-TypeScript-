import React from "react"
import { shallow } from "enzyme"
import Clock from "../components/clock";

describe("Clock", () => {
  let container: any
  beforeEach(() => {
    container = shallow(

      <div className="date-time">
      <img src={require("../images/clocks/waterFire.gif")} alt="waterFire" />
      <span>{}</span>
      </div>
    )
  })
  it("should render childs of .date-time", () => {
    expect(container.find(".date-time").children().length).toBe(2)
  })

  it("should render a .date-time", () => {
    expect(container.find(".date-time").length).toBe(1)
  })
  it("should render a clock img", () => {
    expect(container.find("img").length).toBe(1)
  })
  it("should render a current time span", () => {
    expect(container.find("span").length).toBe(1)
  })
})


{/* <TimerButton
  buttonAction={jest.fn()}
  buttonValue={""}
/> */}