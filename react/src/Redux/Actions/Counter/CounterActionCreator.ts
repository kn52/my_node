import * as actionTypes from "./CounterActions"

const CreateAction = (_actionType: any, _count: any, _hits: any) => {
  const action: any = {
    type: _actionType,
    count: _count,
    hits: _hits
  }
  return action;
}

export const incrementCount = (_count: any, _hits: any) => CreateAction(actionTypes.INCREMENT, _count,_hits)

export const decrementCount = (_count: any, _hits: any) =>  CreateAction(actionTypes.DECREMENT, _count,_hits);

export const resetCount = (_count: any, _hits: any) => CreateAction(actionTypes.RESET, _count,_hits);
