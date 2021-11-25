import React from 'react';
import $ from 'jquery';

class Select_Options extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car:""
        }
    }

    setCar = (e) => {
        this.setState({car:e.target.value})
    }

    akertM = () => {
        alert("HI");
    }

    componentDidMount(){
        $("#cars").click(function(){
            // alert("HI");
        })
    }

    render(){
        const { car } = this.state;
        
        return (
            <>
                <div className="main-container">
                    <select name="cars" id="cars" onChange={this.setCar}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <br></br>
                <div>{car}</div>
            </>
        );
    }
}

export default Select_Options;



































































