import React, { Component } from "react";


export default class SavingsInputs extends Component {
    
    render() {
		return (
            <section className="sc-widget">
                <h2 className="sc-widget__header" >your income & spend</h2>
                <div className="sc-inputs__block">
                    <h3 className="sc-inputs__header" >Annual income</h3>
                    <div className="sc-inputs__row">
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">Annual salary</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">From age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">To age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                    </div>
                </div>
                <div className="sc-inputs__block">
                    <h3 className="sc-inputs__header">Monthly spendings</h3>
                    <div className="sc-inputs__row">
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">Mortgage</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">From age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">To age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                    </div>
                    <div className="sc-inputs__row">
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">Bills</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">From age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">To age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                    </div>
                    <div className="sc-inputs__row">
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">General spendings</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">From age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                        <div className="sc-inputs__input-wrapper">
                            <label className="sc-inputs__label">To age</label>
                            <input type="text"
                                className="sc-inputs__input"
                             />
                        </div>
                    </div>
                </div>
            </section>
		);
	}
}