import {Dispatch} from "redux";
import {Action, getClue} from "../Action/index.ts";
import {connect} from "react-redux";
import button from "../Components/Button.tsx";


const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fun: () =>
        dispatch(getClue())
});
const ClueButton = connect(null, mapDispatchToProps)(button);
export default ClueButton;

