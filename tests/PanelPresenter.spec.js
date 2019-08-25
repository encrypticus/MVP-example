// /* eslint-disable */
// import PanelModel from '../src/js/PanelModel';
// import PanelView from '../src/js/PanelView';
// import PanelPresenter from '../src/js/PanelPresenter';
//
// describe('PanelPresenter', () => {
//   let model;
//   let view;
//   let presenter;
//
//   beforeAll(() => {
//     setFixtures('<div class="container"><div class="panel"></div><input class="addInput"><button class="addButton"></button><button class="removeLastValueButton"></button><button class="removeFirstValueButton"></button><button class="removeAllValuesButton"></button></div>');
//     model = new PanelModel();
//     view = new PanelView();
//     presenter = new PanelPresenter(view, model);
//   });
//
//   it('Переменная presenter будет ссылаться на объект класса PanelPresenter', () => {
//     expect(presenter instanceof PanelPresenter).toBeTruthy();
//   });
//
//   it('Свойство presenter.view будет ссылаться на объект класса PanelView', () => {
//     expect(presenter.view instanceof PanelView).toBeTruthy();
//   });
//
//   it('Свойство presenter.model будет ссылаться на экземпляр класса PanelModel', () => {
//     expect(presenter.model instanceof PanelModel).toBeTruthy();
//   });
//
//   it('В панель будет добавлен элемент div со значением "элемент 1"', () => {
//     presenter.view.addInput.value = "элемент 1";
//     const spyEvent = spyOnEvent(presenter.view.addButton, 'click');
//     presenter.view.addButton.click();
//
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.addButton);
//   });
//
//   it('В панель будут добавлены 4 элемента div', () => {
//     presenter.view.addInput.value = 'элемент 2';
//     const spyEvent = spyOnEvent(presenter.view.addButton, 'click');
//     view.addButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 2</div>');
//
//     presenter.view.addInput.value = 'элемент 3';
//     view.addButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 3</div>');
//
//     presenter.view.addInput.value = 'элемент 4';
//     view.addButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 4</div>');
//
//     presenter.view.addInput.value = 'элемент 5';
//     view.addButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 5</div>');
//
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.addButton);
//   });
//
//   it('Панель будет содержать 5 элементов div', () => {
//     const items = $(presenter.view.panel).find('div.item');
//     expect(items.length).toBe(5);
//   });
//
//   it('Из панели будет удален 1ый элемент, в итоге панель будет содержать 4 элемента', () => {
//     const spyEvent = spyOnEvent(presenter.view.removeFirstValueButton, 'click');
//     presenter.view.removeFirstValueButton.click();
//     const items = $(presenter.view.panel).find('div.item');
//
//     expect(items.length).toBe(4);
//     expect(presenter.view.panel).not.toContainHtml('<div class="item">элемент 1</div>');
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.removeFirstValueButton);
//   });
//
//   it('Из панели будет удален последний элемент, в итоге панель будет содержать 3 элемента', () => {
//     const spyEvent = spyOnEvent(presenter.view.removeLastValueButton, 'click');
//     presenter.view.removeLastValueButton.click();
//     const items = $(presenter.view.panel).find('div.item');
//
//     expect(items.length).toBe(3);
//     expect(presenter.view.panel).not.toContainHtml('<div class="item">элемент 5</div>');
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.removeLastValueButton);
//   });
//
//   it('Панель будет очищена и не будет содержать элементов', () => {
//     const spyEvent = spyOnEvent(presenter.view.removeAllValuesButton, 'click');
//     presenter.view.removeAllValuesButton.click();
//     const items = $(presenter.view.panel).find('div.item');
//
//     expect(items.length).toBe(0);
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.removeAllValuesButton);
//   });
// });
