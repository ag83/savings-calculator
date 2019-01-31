import React, { Component } from "react";

import  SawingsRow from "./SawingsRow";

export default class SavingsInputs extends Component {

    
    render() {
        const yearlyIncome = this.props.inputsData.incomes.filter((inc) => inc.frequency === 'annual');
        const monthlyExpenditures = this.props.inputsData.expenditures.filter((exp) => exp.frequency === 'monthly');
		return (
            <section className="sc-widget">
                <h2 className="sc-widget__header" >your income & spend</h2>
                <div className="sc-inputs__block">
                    {
                        yearlyIncome.length? (<h3 className="sc-inputs__header">Annual income</h3>) : null
                    }
                    {
                        
                        yearlyIncome.map((income) => {
                            const rowProps = {
                                data: income,
                                updateInputData: this.props.updateIncome
                            }
                            return (
                                <SawingsRow key={income.name} {...rowProps}/>
                            )
                        })
                    }
                </div>
                <div className="sc-inputs__block">
                    {
                        monthlyExpenditures.length? (<h3 className="sc-inputs__header">Monthly spendings</h3>) : null
                    }
                    {
                        
                        monthlyExpenditures.map((exp) => {
                            const rowProps = {
                                data: exp,
                                updateInputData: this.props.updateExpenditures
                            }
                            return (
                                <SawingsRow key={exp.name} {...rowProps}/>
                            )
                        })
                    }
                </div>
            </section>
		);
	}
}