import { LightningElement } from 'lwc';

export default class ClickCounter extends LightningElement {

    clicks = 0;

    handleClick(event) {
        this.clicks++;
    }

    handleClearClick(event) {
        this.clicks = 0;
    }

    get getClicks() {
        return `${this.clicks}`;
    }
}