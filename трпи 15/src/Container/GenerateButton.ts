import {Dispatch} from "redux";
import {Action, generateField} from "../Action/index.ts";
import {connect} from "react-redux";
import button from "../Components/Button.tsx";


const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fun: () =>
        dispatch(generateField())
});
const GenerateButton = connect(null, mapDispatchToProps)(button);
export default GenerateButton;

