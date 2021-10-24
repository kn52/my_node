import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from './Card';


configure({ adapter: new Adapter() });
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders card component', () => {
  act(()=>{
    render(<Card />,container);
  })
});

describe("Card Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Card />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
  
describe("card Component props", () => {
    const wrapper = shallow(<Card />);
    const form = wrapper.find('input');
    const formProps = form.props();
    
    it("should have a <input> with length", () => {
      expect(form).toHaveLength(1);
    });
    
    it("should have a <input> with properly type prop", () => {
      expect(formProps.type).toEqual("text");
    });

    it("should have a <div> with properly onChange function prop", () => {
      expect(typeof formProps.onChange).toBe("function");
    });
});

describe("Calculator tests", () => {
  
  // function filterByTerm(inputArr, searchTerm) {
  //   return inputArr.filter(function(arrayElement) {
  //   return arrayElement.url.match(searchTerm);
  //   });
  // }
    
  const mathOperations = {
    sum: function (a, b) {
      return a + b;
    },
  
    diff: function (a, b) {
      return a - b;
    },
    product: function (a, b) {
      return a * b
    }
  }
  
  it('adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
})