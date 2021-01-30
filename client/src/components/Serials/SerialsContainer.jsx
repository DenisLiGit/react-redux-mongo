import {Serials} from "./Serials";
import {connect} from "react-redux";
import {loaderAC} from "../../redux/contentReducer";
import {serialsTotalPagesAC, setSerialDataAC} from "../../redux/serialsReducer";

const mapStateToProps = (state) => {
    return {
        getSerials: () => {
            return state.serialsReducer.serials
        },
        getPageNum: () => {
            return state.serialsReducer.serialsPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        }
    }
}

const SerialContaimer = connect(mapStateToProps, {
    setSerialDataAC,
    serialsTotalPagesAC,
    loaderAC
})(Serials)

export default SerialContaimer