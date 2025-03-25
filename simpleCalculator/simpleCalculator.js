import { LightningElement } from 'lwc';


export default class SimpleCalculator extends LightningElement {

    number1 = 0;
    number2 = 0;
    result = 0;

    handleNum1Change(event) {
        this.number1 = event.target.value;
    }

    handleNum2Change(event) {
        this.number2 = event.target.value;
    }

    handleAdd(event) {
        this.result = Number(this.number1) + Number(this.number2);
    }

    handleSubtract(event) {
        this.result = Number(this.number1) - Number(this.number2);
    }

    handleMultiply(event) {
        this.result = Number(this.number1) * Number(this.number2);
    }

    handleDivide(event) {
        this.result = Number(this.number1) / Number(this.number2);
    }

    get getResult() {
        return `${this.result}`;
    }
}