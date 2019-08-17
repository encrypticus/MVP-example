/* eslint-disable */
import Event from '../src/js/Event';
import PanelModel from '../src/js/PanelModel';

describe('PanelModel', () => {
  let model;

  beforeAll(() => {
    model = new PanelModel();
  });

  it('Переменная model будет ссылаться на объект класса PanelModel', () => {
    // model является экземпляром класса PanelModel
    expect(model instanceof PanelModel).toBeTruthy();

    // model содержит свойство values, являющееся пустым массивом
    expect(model).toEqual(jasmine.objectContaining({values: []}));

    // model содержит свойство addValueEvent, являющееся экземпляром класса Event
    expect(model).toEqual(jasmine.objectContaining({addValueEvent: new Event()}));

    // model содержит свойство removeFirstValueEvent, являющееся экземпляром класса Event
    expect(model).toEqual(jasmine.objectContaining({removeFirstValueEvent: new Event()}));

    //model содержит указанные методы
    expect(model.getValues).toEqual(jasmine.any(Function));
    expect(model.addValue).toEqual(jasmine.any(Function));
    expect(model.removeAllValues).toEqual(jasmine.any(Function));
    expect(model.removeLastValue).toEqual(jasmine.any(Function));
    expect(model.removeFirstValue).toEqual(jasmine.any(Function));
  });

  it('Свойство values объекта model будет содержать пустой массив', () => {
    expect(model.getValues()).toEqual([]);
    expect(model.values).toEqual([]);
  });

  it('Метод model.getValues будет вызван с аргументом "one"', () => {
    spyOn(model, 'addValue').and.callThrough();
    model.addValue('one');

    expect(model.addValue).toHaveBeenCalled();
    expect(model.addValue).toHaveBeenCalledWith('one');
  });

  it('Свойство values объекта model будет содержать массив ["one", two]', () => {
    model.addValue('two');

    expect(model.getValues()).toEqual(['one', 'two']);
    expect(model.values).toEqual(['one', 'two']);
  });

  it('Свойство values объекта model по прежнему будет содержать массив ["one", "two"]', () => {
    expect(model.getValues()).toEqual(['one', 'two']);
    expect(model.values).toEqual(['one', 'two']);
  });

  it('Свойство values объекта model будет содержать массив ["one", "two", "three", "four", "five"]', () => {
    model.addValue('three');
    model.addValue('four');
    model.addValue('five');

    expect(model.getValues()).toEqual(['one', 'two', 'three', 'four', 'five']);
    expect(model.values).toEqual(['one', 'two', 'three', 'four', 'five']);
  });

  it('Свойство values объекта model будет содержать массив ["two", "three", "four", "five"]', () => {
    model.removeFirstValue();

    expect(model.getValues()).toEqual(['two', 'three', 'four', 'five']);
    expect(model.values).toEqual(['two', 'three', 'four', 'five']);
  });

  it('Свойство values объекта model будет содержать массив ["two", "three", "four"}', () => {
    model.removeLastValue();

    expect(model.getValues()).toEqual(['two', 'three', 'four']);
    expect(model.values).toEqual(['two', 'three', 'four']);
  });

  it('Свойство values объекта model будет содержать пустой массив', () => {
    model.removeAllValues();

    expect(model.getValues()).toEqual([]);
    expect(model.values).toEqual([]);
  })

});
