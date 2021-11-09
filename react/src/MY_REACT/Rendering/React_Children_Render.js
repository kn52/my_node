import React, { Component } from 'react';
import './React_Render.scss';

class React_Children_Render extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Component SHOULD UPDATE!')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        const { nwc } = this.props;
        console.log("========================================================");
        return (
            <>
                <div className="main_cont">
                    <div className="parent_cont">
                        <h1 className="nw_count">{nwc}</h1>
                        <div className="button_cont">
                            <button className="button_sts" onClick={() => this.props.minus()}>Minus</button>
                            &nbsp;&nbsp;
                            <button className="button_sts" onClick={() => this.props.plus()}>Plus</button>
                        </div>
                        <div className="button_cont">
                            <button className="button_sts" onClick={() => this.props.reset()}>Reset</button>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default React_Children_Render;