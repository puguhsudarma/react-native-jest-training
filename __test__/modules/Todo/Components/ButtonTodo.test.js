import React from "react";
import renderer from "react-test-renderer";
import ButtonTodo from "../../../../src/modules/Todo/Components/ButtonTodo";

describe("Test Button Todo Render", () => {
  it("Render deep button todo correctly", () => {
    const tree = renderer.create(<ButtonTodo action={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
