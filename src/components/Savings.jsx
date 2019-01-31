import React, { Component } from "react";

import SavingsInputs from "./SavingsInputs";
import SavingsCalculator from "./SavingsCalculator";

import "../styles/savings.scss";

export default class Savings extends Component {
    
    render() {

        const savingInput = {
            inputsData: this.props.inputsData,
            updateIncome: this.props.updateIncome,
            updateExpenditures: this.props.updateExpenditures
        }

        const savingCalculator = {
            expenditures: this.props.inputsData.expenditures,
            savings: this.props.savings,
            vote: this.props.vote,
            updateVote: this.props.updateVote
        }

		return (
            <article className="sc-savings">
                <SavingsInputs {...savingInput} />
                <SavingsCalculator {...savingCalculator} />
            </article>
		);
	}
}