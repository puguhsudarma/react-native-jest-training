import React from "react";
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import ButtonTodo from "../../../../src/modules/Todo/Components/ButtonTodo";

describe("Test Button Todo Render", () => {
  // mock function
  const actionFn = jest.fn();

  it("Render deep button todo correctly", () => {
    const tree = renderer.create(<ButtonTodo action={actionFn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Render shallow button todo correctly", () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ButtonTodo action={actionFn} />);
    const tree = shallow.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
