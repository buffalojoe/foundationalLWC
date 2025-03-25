import { LightningElement } from 'lwc';

export default class DynamicGreeting extends LightningElement {
    name;

    handleNameChange(event) {
        this.name = event.target.value;
    }
}