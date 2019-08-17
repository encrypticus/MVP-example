import PanelModel from './PanelModel';
import PanelView from './PanelView';
import PanelPresenter from './PanelPresenter';

const model = new PanelModel();
const view = new PanelView();
const presenter = new PanelPresenter(view, model);
