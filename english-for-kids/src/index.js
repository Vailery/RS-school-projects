import indexHeader from './js/IndexHeader';
import indexMain from './js/indexMain';
import indexFotter from './js/indexFotter';
import cardsMainGen from './js/CardsMainGen';
import addEvents from './js/Events';
import { localSrorageInit, localStoragePage } from './js/LocalStorage';


indexHeader();
localSrorageInit();
localStoragePage();
indexMain();
indexFotter();
cardsMainGen();
addEvents();