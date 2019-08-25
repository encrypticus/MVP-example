interface IView {
  addValueHandler(handler: () => void): void;
  removeFirstValueHandler(handler: () => void): void;
  removeLastValueHandler(handler: () => void): void;
  removeAllValuesHandler(handler: () => void): void;
}

export default IView;