class PanelView {
  panel;
  addButton;
  removeFirstValueButton;
  removeLastValueButton;
  removeAllValuesButton;
  addInput;

  constructor() {
    this.panel = document.querySelector('.panel');
    this.addButton = document.querySelector('.addButton');
    this.removeFirstValueButton = document.querySelector('.removeFirstValueButton');
    this.removeLastValueButton = document.querySelector('.removeLastValueButton');
    this.removeAllValuesButton = document.querySelector('.removeAllValuesButton');
    this.addInput = document.querySelector('.addInput');
  }

  addButtonHandler(handler: () => void): void {
    this.addButton.addEventListener('click', handler);
  }

  removeFirstValueButtonHandler(handler: () => void): void {
    this.removeFirstValueButton.addEventListener('click', handler);
  }

  removeLastValueButtonHandler(handler: () => void): void {
    this.removeLastValueButton.addEventListener('click', handler);
  }

  removeAllValuesButtonHandler(handler: () => void): void {
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