import {State} from "../Reducer/index.ts";
import {Dispatch} from "redux";
import {Action, changeCell, setNumber} from "../Action/index.ts";
import {connect} from "react-redux";
import Sudoku from "../Components/Sudoku.tsx";
import {Field} from "../Reducer/field.ts";

const mapStateToProps = (state : State) : {field:Field, n:number, isCorrect:boolean} => ({
    field: state.field,
    n: state.number.n,
    isCorrect: state.field.isCorrect,
});

const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    changeNumber: (i:number, j:number, n:number) =>
        dispatch(changeCell(i, j, n))
});
const NumbersPanel = connect(mapStateToProps, mapDispatchToProps)(Sudoku);
export default NumbersPanel;

