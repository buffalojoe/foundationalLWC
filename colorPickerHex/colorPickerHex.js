import { LightningElement } from 'lwc';

export default class ColorPickerHex extends LightningElement {
    hexCode = ''

    handleTextChange(event) {
        this.hexCode = event.target.value;
    }

    get divStyle() {
        return `background-color: ${this.hexCode}`;
    }
}