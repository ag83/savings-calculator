import React, { Component } from 'react';

import CalculatorContainer from "./containers/SavingsContainer";

import "./styles/app.scss";

export default class App extends Component {
    render() {
        return (
            <>
                <header className="sc-header"><h1 className="sc-header__name">Hatch</h1></header>
                <CalculatorContainer />
            </>
        );
      }
};