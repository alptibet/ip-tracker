import * as model from './model.js';
import * as viewInitializeMap from './views/viewInitializeMap.js';
import { addHandlerSubmit } from './views/viewAddHandlerSubmit.js';
import { renderMap } from './views/viewRenderMap.js';
import { renderInfo } from './views/viewRenderInfo.js';

const controlGetOwnInfo = function () {
  model.getOwnInfo();
  const addr = model.ipAddress;
  console.log(addr);
};

const controlSubmit = function (address) {
  model.getData(address);
};

const init = function () {
  controlGetOwnInfo();
  viewInitializeMap.initializeMap();
  addHandlerSubmit(controlSubmit);
};

init();
