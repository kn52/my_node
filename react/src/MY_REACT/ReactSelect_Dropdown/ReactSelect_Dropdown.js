import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const colourStyles = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#33b5e5" : "#33b5e5",
        boxShadow: state.isFocused ? null : null,
        width:'50%',
        "&:hover": {
            boxShadow: state.isFocused ? null : null,
            borderColor: state.isFocused ? "#33b5e5" : "#33b5e5"
        },
        '@media (max-width: 576px)':{
            width: '100%'
        }
    }),
    menu: base => ({
        ...base,
        width:'50%',
        borderRadius: 0,
        marginTop: 0,
        '@media (max-width: 576px)':{
            width: '100%'
        }
    }),
    menuList: base => ({
        ...base,
        width:'100%',
        padding: 0
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        width:'100%',
        background: isFocused
            ? '#33b5e5'
            : isSelected
                ? '#33b5e5'
                : undefined,
        color: isFocused ? "#FFF" : "#333333",
        zIndex: 1
    })
}

class ReactSelect_Dropdown extends React.Component {
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
                placeholder="Select chocolate"
            />
        );
    }
}

export default ReactSelect_Dropdown;