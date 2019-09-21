import IView from './IView';

class RadioButtonView implements IView {
  addValueRadioButton;
  removeFirstValueRadioButton;
  removeLastValueRadioButton;
  removeAllValuesRadioButton;
  addInput;
  form;

  constructor() {
    this.addValueRadioButton = document.querySelectorAll('.radio-btn')[0];
    this.removeFirstValueRadioButton = document.querySelectorAll('.radio-btn')[1];
    this.removeLastValueRadioButton = document.querySelectorAll('.radio-btn')[2];
    this.removeAllValuesRadioButton = document.querySelectorAll('.radio-btn')[3];
    this.addInput = document.querySelector('.addRadioInput');
    this.form = document.querySelector('.radio-form');
  }

  addValueHandler(handler: () => void): void {
    this.addValueRadioButton.addEventListener('change', handler);
    this.form.addEventListener('submit', handler);
  }

  removeFirstValueHandler(handler: () => void): void {
    this.removeFirstValueRadioButton.addEventListener('change', handler);
  }

  removeLastValueHandler(handler: () => void): void {
    this.removeLastValueRadioButton.addEventListener('change', handler);
  }

  removeAllValuesHandler(handler: () => void): void {
    this.removeAllValuesRadioButton.addEventListener('change', handler);
  }

  clearInput() {
    this.addInput.value = '';
  }
}

export default RadioButtonView;