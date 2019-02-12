import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import ButtonTodo from "../../../../src/modules/Todo/Components/ButtonTodo";

describe("Test Button Todo Render", () => {
  it("Render deep button todo correctly", () => {
    const tree = renderer.create(<ButtonTodo action={() => {}} />);
    expect(tree).toMatchSnapshot();
  });

  it("Render shallow button todo correctly", () => {
    const rendererInstance = new ShallowRenderer();
    rendererInstance.render(<ButtonTodo action={() => {}} />);
    const tree = rendererInstance.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
