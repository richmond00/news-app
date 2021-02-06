import React from "react";
import { mount } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import RealTime from "./RealTime";

const setup = () => {
    return mount(<RealTime />);
};

test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "section-realtime");
    expect(component.length).toBe(1);
});

// loading bar test

// error test

// data null test
