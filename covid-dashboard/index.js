import 'bootstrap/dist/css/bootstrap.min.css';
import "@babel/polyfill";
import './src/styles/index.scss';

import { covidDashboard } from './covidDashboard.js';

// r-row
//c-column

const container = document.createElement('div');
container.className = ('container-fluid p-1 height bg-white align-items-stretch the-most-container');

// const rTitle = document.createElement('div');
// rTitle.className = ('row p-0 m-0 mb-2 d-flex justify-content-between align-items-center  ');

const rMainCases = document.createElement('div');
rMainCases.className = ('row p-0 m-0 d-flex justify-content-end');

const rControllers = document.createElement('div');
rControllers.className = ('row justify-content-around    m-0 mb-2   row-controllers');

const rContent = document.createElement('div');
rContent.className = ('row content justify-content-between   align-items-stretch m-0 p-0    rowHeight');

// const cTitle = document.createElement('div');
// cTitle.className = ('p-0 m-0 col-12 h3 d-flex    justify-content-between align-items-center');

const cControllers = document.createElement('div');
cControllers.className = ('p-2 col-12 h3     ');

const cMainCases = document.createElement('div');
cMainCases.className = ('p-2 col-12 h3     ');

const cTitle = document.createElement('div');
cTitle.className = ('rContentTitle p-0 col-sm-12 col-lg-3');

const cList = document.createElement('div');
cList.className = ('rContentList p-0 m-0 col-sm-12 col-lg-4 h3');

const cMap = document.createElement('div');
cMap.className = ('rContentMap p-0 col-sm-12 col-lg-5');

// const cTable = document.createElement('div');
// cTable.className = ('rContentTable p-0 col-sm-12 col-lg-4');

const cGraph = document.createElement('div');
cGraph.className = ('rContentGraph p-0 col-sm-12');

const rFooter = document.createElement('div');
rFooter.className = ('row p-0 m-0 mb-2 d-flex justify-content-between align-items-center  ');

const cFooter = document.createElement('div');
cFooter.className = ('p-0 m-0 col-12 h3 d-flex    justify-content-between align-items-center');

document.body.appendChild(container);

// container.appendChild(rTitle);
container.appendChild(rMainCases);
container.appendChild(rControllers);
container.appendChild(rContent);
container.appendChild(rFooter);


// rTitle.appendChild(cTitle);
rMainCases.appendChild(cMainCases);
rControllers.appendChild(cControllers);
rContent.appendChild(cTitle);


rContent.appendChild(cMap);
rContent.appendChild(cList);

// rContent.appendChild(cTable);
rFooter.appendChild(cFooter);

cMainCases.appendChild(covidDashboard.getMainCases());
cTitle.appendChild(covidDashboard.getTitle());
cFooter.appendChild(covidDashboard.getFooter());
cControllers.appendChild(covidDashboard.getControllers());
cList.appendChild(covidDashboard.getList());
cMap.appendChild(covidDashboard.getMapContainer());


cGraph.appendChild(covidDashboard.getGraph());
covidDashboard.addGraphForSite();
cTitle.appendChild(cGraph);

covidDashboard.getTheMap();
covidDashboard.getMarkers();