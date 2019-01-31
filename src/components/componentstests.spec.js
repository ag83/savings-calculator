import React from 'react'
import { shallow, mount } from 'enzyme';

import SavingsInputs from "./SavingsInputs";
import SavingsCalculator from "./SavingsCalculator";
import SavingsRow from "./SavingsRow";
import { calculateSavings } from "../helpers/reducerHelpers";

import initialData from "../../initialData";

describe('SavingsInputs', ()=>{

    let savings ={
        inputsData: initialData,
    }
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<SavingsInputs {...savings}/>);
    });

    it("should render SavingsInputs", () => {
        expect(wrapper.length).toEqual(1)
    });

    it("should render incomes", () => {
        let number = savings.inputsData.expenditures.length + savings.inputsData.incomes.length
        expect(wrapper.find(SavingsRow)).toHaveLength(number);
    });

    it("should render two sections", () => {
        expect(wrapper.find('.sc-inputs__block').length).toEqual(2)
    });

    it("should not render monthly income currently", () => {
        let incomes = [...savings.inputsData.incomes];
        incomes[0] = {...incomes[0]}
        incomes[0].frequency = 'monthly';
        let data ={
            inputsData: {
                incomes,
                expenditures: savings.inputsData.expenditures
            }
        }
        let number = data.inputsData.expenditures.length + data.inputsData.incomes.length;
        wrapper = shallow(<SavingsInputs {...data}/>);
        expect(wrapper.find(SavingsRow)).toHaveLength(number - 1);
    });

    it("should not render yearly spendings currently", () => {
        let spendings = [...savings.inputsData.expenditures];
        spendings[0] = {...spendings[0]}
        spendings[0].frequency = 'annual';
        let data ={
            inputsData: {
                incomes: savings.inputsData.incomes,
                expenditures: spendings
            }
        }
        let number = data.inputsData.expenditures.length + data.inputsData.incomes.length;
        wrapper = shallow(<SavingsInputs {...data}/>);
        expect(wrapper.find(SavingsRow)).toHaveLength(number - 1);
    });

});

describe('SavingsRow', ()=>{

    let savings ={
        data: {...initialData.incomes[0]},
        updateInputData: jest.fn()
    }

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<SavingsRow {...savings}/>);
    });

    it("should render SavingsRow", () => {
        expect(wrapper.length).toEqual(1)
    });

    it("should render 3 inputs", () => {
        expect(wrapper.find('input')).toHaveLength(3);
    });

    it("should render amount input with value", () => {
        expect(wrapper.find(`input[name="${savings.data.name} amount"]`).prop('value')).toEqual(savings.data.amount);
    });

    it("should render from age input with value", () => {
        expect(wrapper.find(`input[name="${savings.data.name} from_age"]`).prop('value')).toEqual(savings.data.from_age);
    });

    it("should render to age input with value", () => {
        expect(wrapper.find(`input[name="${savings.data.name} to_age"]`).prop('value')).toEqual(savings.data.to_age);
    });

    it("should call update input function on amount field", () => {
        const event = {
            persist: jest.fn(),
            target: { value: 100, name: 'test name amount' }
        };
        wrapper.find(`input[name="${savings.data.name} amount"]`).simulate('change', event);
        expect(savings.updateInputData).toBeCalledWith( {"amount": 100, "frequency": "annual", "from_age": 30, "name": "Annual salary", "to_age": 67});
    });

    it("should call update input function on from age field", () => {
        const event = {
            persist: jest.fn(),
            target: { value: 100, name: 'test name from_age' }
        };
        wrapper.find(`input[name="${savings.data.name} from_age"]`).simulate('change', event);
        expect(savings.updateInputData).toBeCalledWith( {"amount": 100, "frequency": "annual", "from_age": 100, "name": "Annual salary", "to_age": 67});
    });

    it("should call update input function on to age field", () => {
        const event = {
            persist: jest.fn(),
            target: { value: 100, name: 'test name to_age' }
        };
        wrapper.find(`input[name="${savings.data.name} to_age"]`).simulate('change', event);
        expect(savings.updateInputData).toBeCalledWith( {"amount": 100, "frequency": "annual", "from_age": 100, "name": "Annual salary", "to_age": 100});
    });

});


describe('SavingsCalculator', ()=>{

    let savings ={
        expenditures: initialData.expenditures,
        savings: calculateSavings(initialData),
        vote: null,
        updateVote: jest.fn()
    }
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<SavingsCalculator {...savings}/>);
    });

    it("should render SavingsCalculator", () => {
        expect(wrapper.length).toEqual(1)
    });

    it("should render spendings ranges", () => {
        let number = savings.expenditures.length
        expect(wrapper.find('input[type="range"]')).toHaveLength(number);
    });

    it("should handle spending value and max value", () => {
        let spending = savings.expenditures[0];
        expect(wrapper.find(`input[name="${spending.name}"]`).prop('value')).toEqual(spending.amount);
        expect(wrapper.find(`input[name="${spending.name}"]`).prop('max')).toEqual(spending.amount);
    });

    it("should render spendings", () => {
        let savings = calculateSavings(initialData);
        expect(wrapper.find(".sc-calculator__result").text()).toContain(savings);
    });

    it("should render vote buttons", () => {
        let savings = calculateSavings(initialData);
        expect(wrapper.find(".sc-calculator__vote")).toHaveLength(2);
    });

    it("should call updateVote", () => {
        wrapper.find(".sc-calculator__vote").at(0).simulate('click',  {});
        expect(savings.updateVote).toHaveBeenCalledTimes(1);
        savings.updateVote.mockClear();
    });

    it("should hide buttons after click and show message", () => {
        wrapper.find(".sc-calculator__vote").at(0).simulate('click',  {});
        expect(wrapper.find(".sc-calculator__vote")).toHaveLength(0);
        expect(wrapper.find(".sc-calculator__review").text()).toEqual("Thank you!");
        savings.updateVote.mockClear();
    });

    it("should hide message after 3s", () => {
        wrapper.find(".sc-calculator__vote").at(1).simulate('click',  {});
        expect(wrapper.find(".sc-calculator__vote")).toHaveLength(0);
        expect(wrapper.find(".sc-calculator__review").text()).toEqual("Oh, no! Why?");
        setTimeout(() => {
            expect(wrapper.find(".sc-calculator__review").text()).toEqual("");
        }, 3100)
        savings.updateVote.mockClear();
    });

});
