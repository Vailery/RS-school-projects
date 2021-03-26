import {
    getDataForMap,
    getByCountryTotalAllStatus,
    getByCountryTotal,
    getByCountryLive,
    getByCountryAllStatus,
    getByCountry,
    getDayOneTotalAllStatus,
    defaultInfo,
    summaryByCountry,
    getCountries,
    getCountryInfoFromDayOne,
    getDayOneAllStatus,
    getDayOneAnyStatusLive,
    getOneTotal,
} from './src/data.js';
import title from './src/js/title.js';
import mainCases from './src/js/mainCases.js';
import footer from './src/js/footer.js';
import controllers from './src/js/controllers.js';
import changeFilterControllers from './src/js/changeFilterControllers.js';
import list from './src/js/list.js';
import search from './src/js/search.js';
import getInfoList from './src/js/getInfoList.js';
import filterOfCountries from './src/js/filterOfCountries.js';
import getCorrectData from './src/js/getCorrectData.js';
import onLoading from './src/js/onLoading.js';
import getCorrectDataType from './src/js/getCorrectDataType.js';
import getPer100 from './src/js/getPer100';
import map from './src/js/map.js';
import getMap from './src/js/getMap';
import { createMarkers } from './src/js/getMarkerForMap';
import graph from './src/js/graph.js';
import updateGraph from './src/js/addGraph.js';

const covidDashboard = {
    worldPopulation: 7827000000,
    hundredThousand: 100000,
    mainCases: 'mainCases',
    list: 'list',
    map: 'map',
    graph: 'graph',
    arrayMarker: [],
    search: '',
    dataToShow: 'confirmed',
    optAllLastDay: 'all',
    optTotalPer100: 'total',
    destination: false,

    getTitle() {
        return title(this);
    },

    getMainCases() {
        return mainCases(this);
    },

    getControllers() {
        return controllers(this);
    },

    changeFilterControllers() {
        return changeFilterControllers(this);
    },

    getList() {
        return list(this);
    },

    getInfoForList() {
        return getInfoList(this);
    },

    getSearchField() {
        return search(this);
    },

    getFilterOfCountries() {
        return filterOfCountries(this);
    },

    getCorrectDataToTheList() {
        return getCorrectData(this);
    },

    getOnLoadingScreen() {
        return onLoading(this);
    },

    getCorrectTypeOfData() {
        return getCorrectDataType(this);
    },

    getPer100Data() {
        return getPer100(this);
    },

    getFooter() {
        return footer(this);
    },

    getTheMap() {
        return getMap(this);
    },

    getMapContainer() {
        return map(this);
    },

    getMarkers() {
        return createMarkers(this);
    },

    getGraph() {
        return graph(this);
    },

    addGraphForSite() {
        return updateGraph(this);
    },

}

export { covidDashboard };