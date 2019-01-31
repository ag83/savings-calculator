
export function updateInputs(inputs, data) {
    const changeIndex = inputs.findIndex(item => item.name === data.name);
    inputs[changeIndex] = {...data};
    return inputs
}

export function calculateSavings(inputs) {
    const income = inputs.incomes.reduce(incomeReducer, 0);
    const outcome = inputs.expenditures.reduce(incomeReducer, 0);
    return income - outcome;
}

const incomeReducer = (summa, inc) => {
    if(inc.frequency === 'annual') {
        return summa += Math.round(inc.amount/12);
    }
    if(inc.frequency === 'monthly') {
        return summa += +inc.amount;
    }
    return summa;
};

export function saveState(state) {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('savingsCalculator', serializedState);
    } catch(err) {
      console.log(err);
    }
};

export function loadState() {
    try {
      const serializedState = sessionStorage.getItem('savingsCalculator');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
    }
  };
    