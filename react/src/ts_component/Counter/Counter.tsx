import * as React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as action_creator from '../../Redux/Actions/Counter/CounterActionCreator';
import { Count } from './Count';
import { Dispatch } from "redux"
import './Counter.scss'

export const Counter: React.FC = () => {

    const { counter, hits }: any = useSelector((state: any) => state?.count, shallowEqual);

    const dispatch: Dispatch<any> = useDispatch();

    const increment = () => dispatch(action_creator.incrementCount(counter,hits));

    const decrement = () => dispatch(action_creator.decrementCount(counter,hits));

    const reset = () => dispatch(action_creator.resetCount(0,0));

    return (
        <div className='counter_main'>
            <Count count={counter} hits={hits}/>
            <div className='btns'>
                <button onClick={decrement} className='decrement_button'>Decrement</button>
                <button onClick={increment} className='increment_button'>Increment</button>
            </div>
            <div className='btns'>
                <button onClick={reset} className='reset_button'>Reset</button>
            </div>
        </div>
    );
}