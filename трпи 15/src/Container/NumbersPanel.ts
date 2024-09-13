import { connect } from 'react-redux'
import {Dispatch} from "redux";
import {Action, setNumber} from '../Action/index.ts'
import {State} from "../Reducer/index.ts";
import Number from "../Components/Number.tsx";

const mapStateToProps = (state : State) : {chosenNumber : number} => {
    console.log(state);
    return ({
    chosenNumber: state.number.n,
});
}
const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fun: (n:number) =>
        dispatch(setNumber(n))
});
const NumbersPanel = connect(mapStateToProps, mapDispatchToProps)(Number);
export default NumbersPanel;

