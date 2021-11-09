import React, { Component } from 'react';
import './React_Render.scss';

class React_Children_Render extends Component {

    constructor(){
        super();
        this.state={
            msg: "React rendering sequence"
        }
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!');
        console.log(newProps);
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Component SHOULD UPDATE!')
        console.log(newProps);
        console.log(newState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log(nextProps);
        console.log(nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
        console.log(prevProps);
        console.log(prevState);
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps method is called');
        console.log(props);
        console.log(state);
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError method is called ');
        console.log(error);
        return {
           err: true,
        };
     }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate method is called ');
        console.log(prevProps);
        console.log(prevState);
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