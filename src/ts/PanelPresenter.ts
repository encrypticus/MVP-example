import PanelModel from './PanelModel';

class PanelPresenter {
  views;
  model: PanelModel;

  constructor(views, model: PanelModel) {
    this.views = views;
    this.model = model;
    this.init();
  }

  init() {

    for(let view in this.views) {
      let currentView = this.views[view];
      currentView.addValueHandler((event) => {
        event.preventDefault();

        let value = this.views[view].addInput.value;
        value = value.trim();

        if (value === '') return;

        this.addValue(value);
      });

      currentView.removeFirstValueHandler(() => {
        this.removeFirstValue();
      });

      currentView.removeLastValueHandler(() => {
        this.removeLastValue();
      });

      currentView.removeAllValuesHandler(() => {
        this.removeAllValues();
      });
    }


    this.model.addValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeFirstValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeLastValueEvent.attach(this.updatePanel.bind(this));
    this.model.removeAllValuesEvent.attach(this.updatePanel.bind(this));
  }

  addValue(value): void {
    this.model.addValue(value);
  }

  removeFirstValue(): void {
    this.model.removeFirstValue();
  }

  removeLastValue(): void {
    this.model.removeLastValue();
  }

  removeAllValues(): void {
    this.model.removeAllValues();
  }

  updatePanel(): void {
    this.views.panelView.clearPanel();
    this.views.radioButtonView.clearInput();
    this.model.getValues().forEach((item, i) => {
      this.views.panelView.addItem(item);
    });
  }
}

export default PanelPresenter;