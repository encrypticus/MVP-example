import Event from './Event';

class PanelModel {
  values = [];
  addValueEvent: Event;
  removeFirstValueEvent: Event;
  removeLastValueEvent: Event;
  removeAllValuesEvent: Event;

  constructor() {
    this.addValueEvent = new Event();
    this.removeFirstValueEvent = new Event();
    this.removeLastValueEvent = new Event();
    this.removeAllValuesEvent = new Event();
  }

  getValues(): any[] {
    return this.values;
  }

  addValue(value): void {
    this.values.push(value);
    this.addValueEvent.notify();
  }

  removeFirstValue(): void {
    if (this.values.length === 0) return;
    this.values.splice(0, 1);
    this.removeFirstValueEvent.notify();
  }

  removeAllValues(): void {
    if (this.values.length === 0) return;
    this.values.splice(0, this.values.length);
    this.removeAllValuesEvent.notify();
  }

  removeLastValue(): void {
    if (this.values.length === 0) return;
    this.values.splice(-1, 1);
    this.removeLastValueEvent.notify();
  }
}

export default PanelModel;