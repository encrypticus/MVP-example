class Event {
  listeners = [];

  attach(listener: any): void {
    if (typeof listener !== 'function') return;
    this.listeners.push(listener);
  }

  notify(args?): void {
    for (let i = 0; i < this.listeners.length; i += 1) {
      this.listeners[i](args);
    }
  }
}

export default Event;