import React, { Component } from 'react';
import './React_Render.scss';
import Home from '../../Home/Home';
import ReactChildrenRender from './ReactChildrenRender';

class React_Parent_Render extends Component {

    constructor(){
        super();
        this.state={
            count: 0
        }
    }

    handlePlus = async () =>{
        const { count } = this.state;
        let inc = count+1;
        await this.setState({count: inc})
    }

    handleMinus = async () =>{
        const { count } = this.state;
        let dec = count-1;
        await this.setState({count: dec})
    }

    handleReset = async () =>{
        await this.setState({count: 0})
    }

    render() {
        const { count } = this.state;
        console.log("===============RENDERING PARENT COMPONENT===============");
        return (
            <>
                <Home />
                <ReactChildrenRender nwc={count} plus={this.handlePlus} 
                    minus={this.handleMinus} reset={this.handleReset}/>
            </>
        );
    };
}

export default React_Parent_Render