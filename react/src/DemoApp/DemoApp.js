import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

//   const colourStyles = {
//       option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//           // const color = chroma(data.color);
//           console.log({ data, isDisabled, isFocused, isSelected });
//           return {
//               ...styles,
//               borderColor:"hsl(0, 0%, 80%)",
//               boxShadow:"hsl(0, 0%, 80%)",
//               backgroundColor: isFocused ? "#FE6000" : null,
//               color:  isFocused ? "#FFF" : "#333333"
//           };
//       }
//   };


const colourStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "#FE6000" : "#FE6000",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      boxShadow: state.isFocused ? null : null,
      borderColor: state.isFocused ? "#FE6000" : "#FE6000"
    }
  }),
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused
      ? '#FE6000'
      : isSelected
        ? '#FE6000'
        : undefined,
    color: isFocused ? "#FFF" : "#333333",
    zIndex: 1
  })
}

class DemoApp extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={colourStyles}
      />
    );
  }
}

export default DemoApp;