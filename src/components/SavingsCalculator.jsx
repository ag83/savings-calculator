import React, { Component } from "react";

import "../styles/range.scss";

export default class SavingsCalculator extends Component {
    
    render() {
		return (
            <section className="sc-widget">
                <h2 className="sc-widget__header" >spend less</h2>
                <div className="sc-calculator__info">Try reducing your monthly spendings to see how you forecast will improve!</div>
                <div className="sc-calculator__inputs">
                    <div className="sc-calculator__input-wrapper">
                        <label className="sc-calculator__label">Mortgage</label>
                        <div className="sc-calculator__range-wrapper">
                            <input type="range"
                                className="sc-calculator__range"
                                />
                        </div>
                    </div>
                    <div className="sc-calculator__input-wrapper">
                        <label className="sc-calculator__label">Bills</label>
                        <div className="sc-calculator__range-wrapper">
                            <input type="range"
                                className="sc-calculator__range"
                                />
                        </div>
                    </div>
                    <div className="sc-calculator__input-wrapper">
                        <label className="sc-calculator__label">General spending</label>
                        <div className="sc-calculator__range-wrapper">
                            <input type="range"
                                className="sc-calculator__range"
                                />
                        </div>
                    </div>
                </div>
                <div className="sc-calculator__result">This means you are saving <span>222</span> per month</div>
                <div className="sc-calculator__more">
                    <a className="sc-calculator__more-link" href="#">Find ways to save</a>
                </div>
                <div className="sc-calculator__review">
                    <span>Was this helpful?</span>
                    <button type="button"
                        className="sc-calculator__vote sc-calculator__upvote">
                     &#128077;</button>
                    <button type="button"
                        className="sc-calculator__vote sc-calculator__downvote">
                        &#128078;</button>
                </div>
            </section>
		);
	}
}