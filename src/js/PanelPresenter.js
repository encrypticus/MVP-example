class PanelPresenter {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.init();
    // this.view.addValue = this.addValue.bind(this);
  }

  init() {
    this.view.addButtonHandler(() => {
      this.addValue(this.view.addInput.value);
    });

    this.view.removeFirstValueButtonHandler(() => {
      this.removeFirstValue();
    });

    this.view.removeLastValueButtonHandler(() => {
      this.removeLastValue();
    });

    this.view.removeAllValuesButtonHandler(() => {
      this.removeAllValues();
    });

    this.model.addValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeFirstValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeLastValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeAllValuesEvent.attach(this.updatePanel.bind(this));
  }

  addValue(value) {
    this.model.addValue(value);
    // this.updatePanel();
  }

  removeFirstValue() {
    this.model.removeFirstValue();
  }

  removeLastValue() {
    this.model.removeLastValue();
  }

  removeAllValues() {
    this.model.removeAllValues();
  }

  updatePanel() {
    this.view.clearPanel();
    this.model.getValues().forEach((item, i) => {
      this.view.addItem(item);
    });
  }
}

export default PanelPresenter;
