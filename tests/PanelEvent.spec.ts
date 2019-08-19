import Event from '../src/ts/Event';

describe('PanelEvent', () => {
  let event: Event;

  beforeEach(() => {
    event = new Event();
  });

  it('Переменная event ссылается на объект класса Event', () => {
    expect(event instanceof Event).toBeTruthy();
    expect(event).toEqual(jasmine.objectContaining({listeners: []}));
    expect(event.attach).toEqual(jasmine.any(Function));
    expect(event.notify).toEqual(jasmine.any(Function));
  });

  it('В свойство-массив listeners можно добавить только функции', () => {
    event.attach(function () {});
    event.attach(function () {});
    event.attach(1);
    event.attach('beep');
    event.attach(true);

    expect(typeof event.listeners[0]).toEqual('function');
    expect(typeof event.listeners[1]).toEqual('function');
    expect(typeof event.listeners[2]).toEqual('undefined');
    expect(typeof event.listeners[3]).toEqual('undefined');
    expect(typeof event.listeners[4]).toEqual('undefined');

    event.attach(() => {});

    expect(typeof event.listeners[2]).toEqual('function');
    expect(event.listeners.length).toBe(3);
  });
});