import PanelModel from "./PanelModel";
import PanelView from "./PanelView";
import RadioButtonView from './RadioButtonView';
import PanelPresenter from "./PanelPresenter";

const model: PanelModel = new PanelModel();
const views = {panelView: new PanelView(), radioButtonView: new RadioButtonView()};
const presenter: PanelPresenter = new PanelPresenter(views, model);
