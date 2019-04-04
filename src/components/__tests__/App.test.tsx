import {shallow} from "enzyme";
import App from "../App";
import * as React from "react";

describe("App Test", () => {

    it("should print message", () => {
        let app = shallow(<App message={"world"}/>);
        expect(app.text()).toContain("hello world");
    });
});