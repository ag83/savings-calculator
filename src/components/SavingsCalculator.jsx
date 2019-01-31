import React, { Component } from "react";

import "../styles/range.scss";

export default class SavingsCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expenditures: null,
            savings: null,
            voted: false,
            voteMessage: "",
            refSavings: null
        }
        this.changeExp = this.changeExp.bind(this);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if(state.refSavings !== props.savings) {
            const expenditures =  props.expenditures.map(exp => {
                exp.initialAmount = exp.amount;
                return exp;
            });
            const vote = props.vote === null;
            return {
                expenditures: expenditures,
                savings: props.savings,
                refSavings: props.savings,
                voted: !props.vote === null

            };
        }
        return null;
    } 

    changeExp(evt) {
        evt.persist();
        this.setState((prevState) => {
            const spendings = prevState.expenditures
            const expIndex = spendings.findIndex( exp => exp.name === evt.target.name);
            const savedAmount = spendings[expIndex].amount - evt.target.value;
            const updatedSavings = prevState.savings + savedAmount;
            spendings[expIndex].amount = evt.target.value;
            return {
                inputsData: spendings,
                savings:  updatedSavings
            }
        });
    }

    upVote() {
        this.props.updateVote(true);
        this.setState({voted: true, voteMessage: "Thank you!"});
        setTimeout(() => {
            this.setState({voteMessage: ""});
        }, 3000)
    }

    downVote() {
        this.props.updateVote(false);
        this.setState({voted: true, voteMessage: "Oh, no! Why?"});
        setTimeout(() => {
            this.setState({voteMessage: ""});
        }, 3000);
    }
    
    render() {
		return (
            <section className="sc-widget">
                <h2 className="sc-widget__header" >spend less</h2>
                <div className="sc-calculator__info">Try reducing your monthly spendings to see how you forecast will improve!</div>
                <div className="sc-calculator__inputs">
                    {this.state.expenditures && this.state.expenditures.map((exp) => {
                        return (
                            <div key={exp.name} className="sc-calculator__input-wrapper">
                                <div className="sc-calculator__range-value">&#xa3;{exp.amount}</div>
                                <label className="sc-calculator__label" htmlFor={exp.name}>{exp.name}</label>
                                <div className="sc-calculator__range-wrapper">
                                    <input type="range"
                                        name={exp.name}
                                        className="sc-calculator__range"
                                        onChange={this.changeExp}
                                        value={exp.amount}
                                        max={exp.initialAmount}
                                        min="0"
                                        step="1"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="sc-calculator__result">This means you are saving <span>&#xa3;{this.state.savings}</span> per month</div>
                <div className="sc-calculator__more">
                    <a className="sc-calculator__more-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com">Find ways to save</a>
                </div>
                {
                    !this.state.voted && (
                        <div className="sc-calculator__review">
                            <span>Was this helpful?</span>
                            <button type="button"
                                onClick={this.upVote}
                                className="sc-calculator__vote sc-calculator__upvote">
                            &#128077;</button>
                            <button type="button"
                                onClick={this.downVote}
                                className="sc-calculator__vote sc-calculator__downvote">
                                &#128078;</button>
                        </div>
                    )
                }
                {
                    this.state.voteMessage && (
                        <div className="sc-calculator__review">{this.state.voteMessage}</div>
                    )
                }

            </section>
		);
	}
}