import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as action_creator from '../../Redux/Actions/Counter/CounterActionCreator';
import { Count } from './Count';
import './Counter.scss'
class Counter extends React.Component<HeaderProps> {
    state: any = {
        counter: 0,
        hits: 0
    }

    increment = (ct: any, hts: any) => this.props.incrementSet(action_creator.incrementCount(ct,hts));

    decrement = (ct: any, hts: any) => this.props.decrementSet(action_creator.decrementCount(ct,hts));

    reset = (ct: any, hts: any) => this.props.resetSet(action_creator.resetCount(ct,hts));

    render() {
        return (
            <div className='counter_main'>
                <Count count={this.props.tcounter} hits={this.props.hits} />
                <div className='btns'>
                    <button onClick={() => this.decrement(this.props.tcounter, this.props.hits)} className='decrement_button'>Decrement</button>
                    <button onClick={() => this.increment(this.props.tcounter, this.props.hits)} className='increment_button'>Increment</button>
                </div>
                <div className='btns'>
                    <button onClick={() => this.reset(0,0)} className='reset_button'>Reset</button>
                </div>
            </div>
        )
    };
}

const mapState = (state: any) => {
    return {
        tcounter: state?.count?.counter,
        hits: state?.count?.hits
    }
}

const mapDispatch = (dispatch: any) => {
    return {
        incrementSet: (ele: any) => dispatch(ele),
        decrementSet: (ele: any) => dispatch(ele),
        resetSet: (ele: any) => dispatch(ele)
    }
}

const Connector = connect(mapState, mapDispatch);

type HeaderProps = ConnectedProps<typeof Connector>;

export default Connector<any>(Counter);