import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {
    test("Status from the props should be in the state", () => {
        const component = create(<Status status={'temaz-kamaz'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('temaz-kamaz');
    });
    // test("after creation <span> should be displayed with correct status", () => {
    //     const component = create(<Status status={'temaz-kamaz'}/>);
    //     const instance = component.root;
    //     let span = instance.findByType('span');
    //     expect(span).not.toBeNull();
    // });
    // test("after creation <span> should be contains correct status", () => {
    //     const component = create(<Status status={'temaz-kamaz'}/>);
    //     const instance = component.root;
    //     let div = instance.findByType('div');
    //     expect(div.innerText).toBe('temaz-kamaz');
    // });
});
