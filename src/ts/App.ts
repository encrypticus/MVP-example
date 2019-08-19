import PanelModel from "./PanelModel";
import PanelView from "./PanelView";
import PanelPresenter from "./PanelPresenter";

const model: PanelModel = new PanelModel();
const view: PanelView = new PanelView();
const presenter: PanelPresenter = new PanelPresenter(view, model);