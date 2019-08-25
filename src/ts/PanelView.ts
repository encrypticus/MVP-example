import IView from './IView';

class PanelView implements IView {
  panel;
  addValueButton;
  removeFirstValueButton;
  removeLastValueButton;
  removeAllValuesButton;
  addInput;

  constructor() {
    this.panel = document.querySelector('.panel');
    this.addValueButton = document.querySelector('.addValueButton');
    this.removeFirstValueButton = document.querySelector('.removeFirstValueButton');
    this.removeLastValueButton = document.querySelector('.removeLastValueButton');
    this.removeAllValuesButton = document.querySelector('.removeAllValuesButton');
    this.addInput = document.querySelector('.addInput');
  }

  addValueHandler(handler: () => void): void {
    this.addValueButton.addEventListener('click', handler);
  }

  removeFirstValueHandler(handler: () => void): void {
    this.removeFirstValueButton.addEventListener('click', handler);
  }

  removeLastValueHandler(handler: () => void): void {
    this.removeLastValueButton.addEventListener('click', handler);
  }

  removeAllValuesHandler(handler: () => void): void {
    this.removeAllValuesButton.addEventListener('click', handler);
  }

  clearPanel(): void {
    this.panel.innerHTML = '';
    this.clearInput();
  }

  clearInput() {
    this.addInput.value = '';
  }

  addItem(value: any) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = value;
    this.panel.appendChild(div);
  }
}

export default PanelView;