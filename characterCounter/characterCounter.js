import { LightningElement } from 'lwc';

export default class CharacterCounter extends LightningElement {
    inputText = '';

    handleTextChange(event) {
        this.inputText = event.target.value;
    }

    get inputTextLength() {
        return this.inputText.length;
    }
}