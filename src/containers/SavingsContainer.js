import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Savings from "../components/Savings";
import * as actions from "../actions/savingsActions";


function mapStateToProps({savings}) {
	return {
		...savings
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Savings);