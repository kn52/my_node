import * as actionTypes from "./CounterActions"

const _createAction = (_actionType: any, _count: any, _hits: any) => ({ type: _actionType, count: _count, hits: _hits })

export const incrementCount = (_count: any, _hits: any) => _createAction(actionTypes.INCREMENT, _count,_hits)

export const decrementCount = (_count: any, _hits: any) =>  _createAction(actionTypes.DECREMENT, _count,_hits);

export const resetCount = (_count: any, _hits: any) => _createAction(actionTypes.RESET, _count,_hits);
