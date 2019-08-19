import PanelView from "./PanelView";
import PanelModel from "./PanelModel";

class PanelPresenter {
  view: PanelView;
  model: PanelModel;

  constructor(view: PanelView, model: PanelModel) {
    this.view = view;
    this.model = model;
    this.init();
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

  addValue(value): void {
    this.model.addValue(value);
    // this.updatePanel();
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
    this.view.clearPanel();
    this.model.getValues().forEach((item, i) => {
      this.view.addItem(item);
    });
  }
}

export default PanelPresenter;