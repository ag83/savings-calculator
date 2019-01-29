import React, { Component } from "react";

import SavingsInputs from "./SavingsInputs";
import SavingsCalculator from "./SavingsCalculator";

import "../styles/savings.scss";

export default class Savings extends Component {
    
    render() {
		return (
            <article className="sc-savings">
                <SavingsInputs />
                <SavingsCalculator />
            </article>
		);
	}
}