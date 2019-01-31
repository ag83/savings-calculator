import React, { Component } from "react";


export default class SavingsRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
        this.changeInput = this.changeInput.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
       
        if(!state.data) {
            return {
                data: props.data
            };
        }
        return null;
    } 

    changeInput(evt) {
        evt.persist();
        let changedProp = evt.target.name.split(' ');
        changedProp = changedProp[changedProp.length-1];
        this.setState((prevState) => {
            const data = prevState.data;
            data[changedProp] = evt.target.value;
            return {data}
        }, () => {
            this.props.updateInputData(this.state.data)
        });
    }
    
    render() {
        const { data } = this.state;
		return (
            <div className="sc-inputs__row">
                <div className="sc-inputs__input-wrapper">
                    <label className="sc-inputs__label" htmlFor={`${data.name} amount`}>{data.name}</label>
                    <input type="text"
                        name={`${data.name} amount`}
                        value={data.amount}
                        onChange={this.changeInput}
                        className="sc-inputs__input"
                    />
                </div>
                <div className="sc-inputs__input-wrapper">
                    <label className="sc-inputs__label" htmlFor={`${data.name} from_age`} >From age</label>
                    <input type="text"
                        name={`${data.name} from_age`}
                        value={data.from_age}
                        onChange={this.changeInput}
                        className="sc-inputs__input"
                    />
                </div>
                <div className="sc-inputs__input-wrapper">
                    <label className="sc-inputs__label" htmlFor={`${data.name} to_age`}>To age</label>
                    <input type="text"
                        name={`${data.name} to_age`}
                        value={data.to_age}
                        onChange={this.changeInput}
                        className="sc-inputs__input"
                    />
                </div>
            </div>
		);
	}
}