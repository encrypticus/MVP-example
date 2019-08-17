class PanelView {
  constructor() {
    // this.addValue = function () {};
    this.init();
  }

  init() {
    this.panel = document.querySelector('.panel');
    this.addButton = document.querySelector('.addButton');
    this.removeFirstValueButton = document.querySelector('.removeFirstValueButton');
    this.removeLastValueButton = document.querySelector('.removeLastValueButton');
    this.removeAllValuesButton = document.querySelector('.removeAllValuesButton');
    this.addInput = document.querySelector('.addInput');

    // this.addButton.addEventListener('click', () => {
    //   this.addValue(this.addInput.value);
    // });
  }

  addButtonHandler(handler) {
    this.addButton.addEventListener('click', handler);
  }

  removeFirstValueButtonHandler(handler) {
    this.removeFirstValueButton.addEventListener('click', handler);
  }

  removeLastValueButtonHandler(handler) {
    this.removeLastValueButton.addEventListener('click', handler);
  }

  removeAllValuesButtonHandler(handler) {
    this.removeAllValuesButton.addEventListener('click', handler);
  }

  clearPanel() {
    this.panel.innerHTML = '';
    this.clearInput();
  }

  clearInput() {
    this.addInput.value = '';
  }

  addItem(value) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = value;
    this.panel.appendChild(div);
  }
}

export default PanelView;
