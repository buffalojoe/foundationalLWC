import { LightningElement } from 'lwc';

export default class ColorPicker extends LightningElement {

    hexCode = ''

    handleColorChange(event) {
        this.hexCode = event.target.value;
    }

    get divStyle() {
        return `color: ${this.hexCode}`;
    }
}