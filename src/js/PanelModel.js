import Event from './Event';

class PanelModel {
  constructor() {
    this.values = [];
    this.addValueEvent = new Event();
    this.removeFirstValueEvent = new Event();
    this.removeLastValueEvent = new Event();
    this.removeAllValuesEvent = new Event();
  }

  getValues() {
    return this.values;
  }

  addValue(value) {
    this.values.push(value);
    this.addValueEvent.notify();
  }

  removeAllValues() {
    if (this.values.length === 0) return;
    this.values.splice(0, this.values.length);
    this.removeAllValuesEvent.notify();
  }

  removeLastValue() {
    if (this.values.length === 0) return;
    this.values.splice(-1, 1);
    this.removeLastValueEvent.notify();
  }

  removeFirstValue() {
    if (this.values.length === 0) return;
    this.values.splice(0, 1);
    this.removeFirstValueEvent.notify();
  }
}

export default PanelModel;
