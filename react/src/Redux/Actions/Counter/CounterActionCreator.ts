import * as actionTypes from "./CounterActions"

export function incrementCount(ct: any) {
  const action: any = {
    type: actionTypes.INCREMENT,
    count: ct,
  }
  return action;
}

export function decrementCount(ct: any) {
  const action: any = {
    type: actionTypes.DECREMENT,
    count: ct,
  }
  return action;
}