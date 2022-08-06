import * as React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../../Redux/Actions/Counter/CounterActionCreator';
import { Count } from './Count';
import { Dispatch } from "redux"
import './Counter.scss'

export const Counter: React.FC = () => {

    const counNum: any = useSelector((state: any) => state?.count?.counter, shallowEqual);

    const dispatch: Dispatch<any> = useDispatch();

    const increment = () => dispatch(incrementCount(counNum));

    const decrement = () => dispatch(decrementCount(counNum));

    return (
        <div className='counter_main'>
            <Count count={counNum} />
            <div className='btns'>
                <button onClick={decrement} className='decrement_button'>Decrement</button>
                <button onClick={increment} className='increment_button'>Increment</button>
            </div>
        </div>
    );
}