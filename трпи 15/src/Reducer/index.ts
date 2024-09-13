import { combineReducers } from 'redux'
import fieldReducer, {Field} from "./field.ts";
import numberReducer, {Numbers} from "./number.ts";

export interface State {
    field: Field;
    number: Numbers;
}

export const rootReducer = combineReducers({
    field: fieldReducer,
    number: numberReducer,
})