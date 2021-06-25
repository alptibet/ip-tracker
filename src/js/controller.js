import * as model from './model.js';
import * as viewInitializeMap from './views/viewInitializeMap.js';
import { addHandlerSubmit } from './views/viewAddHandlerSubmit.js';
import { renderMap } from './views/viewRenderMap.js';
import { renderInfo } from './views/viewRenderInfo.js';

const controlGetOwnInfo = function () {
  model
    .getOwnInfo()
    .then(res => model.getData(res))
    .then(res => renderInfo(model.state));
};

const controlSubmit = function (address) {
  model.getData(address).then(res => {
    renderInfo(model.state);
    renderMap(model.state.lat, model.state.lng);
  });
};

const init = function () {
  controlGetOwnInfo();
  viewInitializeMap.initializeMap();
  addHandlerSubmit(controlSubmit);
};

init();
