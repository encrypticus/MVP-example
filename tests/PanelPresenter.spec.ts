import PanelModel from "../src/ts/PanelModel";
import PanelPresenter from "../src/ts/PanelPresenter";
import PanelView from '../src/ts/PanelView';
import RadioButtonView from "../src/ts/RadioButtonView";

describe('PanelPresenter', () => {
  let model: PanelModel;
  let views;
  let presenter: PanelPresenter;

  beforeAll(() => {
    setFixtures(
      `<div class="container">
            <div class="panel"></div>
              <input class="addInput">
              <button class="addValueButton"></button>
              <button class="removeLastValueButton"></button>
              <button class="removeFirstValueButton"></button>
              <button class="removeAllValuesButton"></button>
            </div>
            <form>
              <input class="addRadioInput" type="text">
              <input class="radio-btn" type="radio" name="radio-btn" value="addValue">
              <input class="radio-btn" type="radio" name="radio-btn" value="removeFirstValue">
              <input class="radio-btn" type="radio" name="radio-btn" value="removeLastValue">
              <input class="radio-btn" type="radio" name="radio-btn" value="removeAllValues">  
            </form>`
    );
    model = new PanelModel();
    views = {panelView: new PanelView(), radioButtonView: new RadioButtonView()};
    presenter = new PanelPresenter(views, model);
  });

  it('Переменная presenter будет ссылаться на объект класса PanelPresenter', () => {
    expect(presenter instanceof PanelPresenter).toBeTruthy();
  });

  it('Свойство presenter.view.panelView будет ссылаться на объект класса PanelView', () => {
    expect(presenter.views.panelView instanceof PanelView).toBeTruthy();
  });

  it('Свойство presenter.model будет ссылаться на экземпляр класса PanelModel', () => {
    expect(presenter.model instanceof PanelModel).toBeTruthy();
  });
//
//   it('В панель будет добавлен элемент div со значением "элемент 1"', () => {
//     presenter.view.addInput.value = "элемент 1";
//     const spyEvent = spyOnEvent(presenter.view.addValueButton, 'click');
//     presenter.view.addValueButton.click();
//
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 1</div>');
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.addValueButton);
//   });
//
//   it('В панель будут добавлены 4 элемента div', () => {
//     presenter.view.addInput.value = 'элемент 2';
//     const spyEvent = spyOnEvent(presenter.view.addValueButton, 'click');
//     view.addValueButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 2</div>');
//
//     presenter.view.addInput.value = 'элемент 3';
//     view.addValueButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 3</div>');
//
//     presenter.view.addInput.value = 'элемент 4';
//     view.addValueButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 4</div>');
//
//     presenter.view.addInput.value = 'элемент 5';
//     view.addValueButton.click();
//     expect($(presenter.view.panel)).toContainHtml('<div class="item">элемент 5</div>');
//
//     expect(spyEvent).toHaveBeenTriggered();
//     expect('click').toHaveBeenTriggeredOn(presenter.view.addValueButton);
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
});
