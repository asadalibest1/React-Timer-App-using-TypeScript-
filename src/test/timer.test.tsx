import React from "react"
import { shallow } from "enzyme"
import Timer from '../components/timer';

describe("Timer.js", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <Timer />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})