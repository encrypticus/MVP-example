import PanelView from "../src/ts/PanelView";

describe('PanelView', () => {
  let view: PanelView;

  beforeEach(() => {
    setFixtures('<div class="container"><div class="panel"></div><input class="addInput"><button class="addValueButton"></button><button class="removeLastValueButton"></button><button class="removeFirstValueButton"></button><button class="removeAllValuesButton"></button></div>');
    view = new PanelView();
  });

  it('Переменная view будет ссылаться на объект класса PanelView', () => {
    expect(view instanceof PanelView).toBeTruthy();
  });

  it('Объект будет содержать свойство panel', () => {
    expect(view).toEqual(jasmine.objectContaining({panel: document.querySelector('.panel')}));
    expect(view.panel).toHaveClass('panel');
  });

  it('Объект будет содержать свойство addValueButton', () => {
    expect(view).toEqual(jasmine.objectContaining({addValueButton: document.querySelector('.addValueButton')}));
    expect(view.addValueButton).toHaveClass('addValueButton');
  });

  it('Объект будет содержать свойство removeFirstValueButton', () => {
    expect(view).toEqual(jasmine.objectContaining({removeFirstValueButton: document.querySelector('.removeFirstValueButton')}));
  });

  it('Объект будет содержать свойство removeAllValuesButton', () => {
    expect(view).toEqual(jasmine.objectContaining({removeAllValuesButton: document.querySelector('.removeAllValuesButton')}));
  });

  it('Объект будет содержать свойство removeLastValueButton', () => {
    expect(view).toEqual(jasmine.objectContaining({removeLastValueButton: document.querySelector('.removeLastValueButton')}));
    expect(view.removeLastValueButton).toHaveClass('removeLastValueButton');
  });

  it('Объект будет содержать свойство addInput', () => {
    expect(view).toEqual(jasmine.objectContaining({addInput: document.querySelector('.addInput')}));
    expect(view.addInput).toHaveClass('addInput');
  });

  it('Объект будет содержать метод addValueHandler', () => {
    expect(view.addValueHandler).toEqual(jasmine.any(Function));
  });

  it('Объект будет содержать метод removeFirstValueHandler', () => {
    expect(view.removeFirstValueHandler).toEqual(jasmine.any(Function));
  });

  it('Объект будет содержать метод removeLastValueHandler', () => {
    expect(view.removeLastValueHandler).toEqual(jasmine.any(Function));
  });

  it('Объект будет содержать метод removeAllValuesHandler', () => {
    expect(view.removeAllValuesHandler).toEqual(jasmine.any(Function));
  });

  it('Объект будет содержать метод clearPanel', () => {
    expect(view.clearPanel).toEqual(jasmine.any(Function));
  });

  it('Объект будет содержать метод addItem', () => {
    expect(view.addItem).toEqual(jasmine.any(Function));
  });

  it('Метод addValueHandler объекта view будет вызван', () => {
    spyOn(view, 'addValueHandler');
    view.addValueHandler(() => {console.log('method have been called')});

    expect(view.addValueHandler).toHaveBeenCalled();
  });

  it('Методу addValueHandler в качестве параметра будет передана функция', () => {
    spyOn(view, 'addValueHandler');

    const handler = function handler() {
      console.log('handler');
    };

    view.addValueHandler(handler);

    expect(view.addValueHandler).toHaveBeenCalledWith(handler);
    expect(typeof handler === 'function').toBeTruthy();
  });

  it('В панель будет добавлен новый элемент div', () => {
    view.addItem('Новый элемент');

    expect(view.panel).toContainElement('.item');
  });

  it('В панель будут добавлены 3 элемента div', () => {
    view.addItem('element1');
    view.addItem('element2');
    view.addItem('element3');

    expect($('.item').length).toBe(3);
  });

  it('Панель будет очищена', () => {
    view.addItem('element1');
    view.addItem('element2');
    view.addItem('element3');

    view.clearPanel();

    expect($('.item').length).toBe(0);
    expect(view.panel).not.toContainElement('.item');
  });

  it('Клик по кнопке с классом addValueButton выведет в консоль сообщение "В панель был добавлен новый элемент"', () => {
    view.addValueHandler(() => {console.log('В панель был добавлен новый элемент')});

    const spyEvent = spyOnEvent('.addValueButton', 'click');

    view.addValueButton.click();

    expect(spyEvent).toHaveBeenTriggered();
    expect('click').toHaveBeenTriggeredOn('.addValueButton');
  });

  it('Клик по кнопке с классом removeFirstValueButton выведет в консоль сообщение "Из панели был удален первый элемент"', () => {
    view.removeFirstValueHandler(() => {console.log('Из панели был удален первый элемент')});

    const spyEvent = spyOnEvent('.removeFirstValueButton', 'click');

    view.removeFirstValueButton.click();

    expect(spyEvent).toHaveBeenTriggered();
    expect('click').toHaveBeenTriggeredOn('.removeFirstValueButton');
  });

  it('Клик по кнопке с классом removeLastValueButton выведет в консоль сообщение "Из панели был удален последний элемент"', () => {
    view.removeLastValueHandler(() => {console.log('Из панели был удален последний элемент')});

    const spyEvent = spyOnEvent('.removeLastValueButton', 'click');

    view.removeLastValueButton.click();

    expect(spyEvent).toHaveBeenTriggered();
    expect('click').toHaveBeenTriggeredOn('.removeLastValueButton');
  });

  it('Клик по кнопке с классом removeAllValuesButton выведет в консоль сообщение "Из панели были удалены все элементы"', () => {
    view.removeAllValuesHandler(() => {console.log('Из панели были удаленты все элемнты')});

    const spyEvent = spyOnEvent('.removeAllValuesButton', 'click');
    view.removeAllValuesButton.click();

    expect(spyEvent).toHaveBeenTriggered();
    expect('click').toHaveBeenTriggeredOn('.removeAllValuesButton');
  });

  it('Клик по кнопке removeAlValuesButton вызовет метод clearInput', () => {
    const clearPanel = view.clearPanel.bind(view);
    view.removeAllValuesHandler(clearPanel);
    spyOn(view, 'clearInput');
    view.removeAllValuesButton.click();

    expect(view.clearInput).toHaveBeenCalled();
  });

});