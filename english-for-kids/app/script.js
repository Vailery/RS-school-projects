/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_IndexHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/IndexHeader */ "./src/js/IndexHeader.js");
/* harmony import */ var _js_indexMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/indexMain */ "./src/js/indexMain.js");
/* harmony import */ var _js_indexFotter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/indexFotter */ "./src/js/indexFotter.js");
/* harmony import */ var _js_CardsMainGen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/CardsMainGen */ "./src/js/CardsMainGen.js");
/* harmony import */ var _js_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Events */ "./src/js/Events.js");
/* harmony import */ var _js_LocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/LocalStorage */ "./src/js/LocalStorage.js");






Object(_js_IndexHeader__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_js_LocalStorage__WEBPACK_IMPORTED_MODULE_5__["localSrorageInit"])();
Object(_js_LocalStorage__WEBPACK_IMPORTED_MODULE_5__["localStoragePage"])();
Object(_js_indexMain__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_js_indexFotter__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_js_CardsMainGen__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_js_Events__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/js/Audio.js":
/*!*************************!*\
  !*** ./src/js/Audio.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function audioPlay(fileName) {
  var audio = new Audio("audio/".concat(fileName, ".mp3"));

  if (audio) {
    audio.play();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (audioPlay);

/***/ }),

/***/ "./src/js/Cards.js":
/*!*************************!*\
  !*** ./src/js/Cards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([['Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Fruits', 'Transport'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'argue',
  translation: 'спорить',
  image: 'img/argue.jpg',
  audioSrc: 'audio/argue.mp3'
}, {
  word: 'build',
  translation: 'строить',
  image: 'img/build.jpg',
  audioSrc: 'audio/build.mp3'
}, {
  word: 'carry',
  translation: 'нести',
  image: 'img/carry.jpg',
  audioSrc: 'audio/carry.mp3'
}, {
  word: 'catch',
  translation: 'ловить',
  image: 'img/catch.jpg',
  audioSrc: 'audio/catch.mp3'
}, {
  word: 'drive',
  translation: 'водить',
  image: 'img/drive.jpg',
  audioSrc: 'audio/drive.mp3'
}, {
  word: 'drop',
  translation: 'падать',
  image: 'img/drop.jpg',
  audioSrc: 'audio/drop.mp3'
}, {
  word: 'pull',
  translation: 'тянуть',
  image: 'img/pull.jpg',
  audioSrc: 'audio/pull.mp3'
}, {
  word: 'push',
  translation: 'толкать',
  image: 'img/push.jpg',
  audioSrc: 'audio/push.mp3'
}], [{
  word: 'big',
  translation: 'большой',
  image: 'img/big.jpg',
  audioSrc: 'audio/big.mp3'
}, {
  word: 'small',
  translation: 'маленький',
  image: 'img/small.jpg',
  audioSrc: 'audio/small.mp3'
}, {
  word: 'fast',
  translation: 'быстрый',
  image: 'img/fast.jpg',
  audioSrc: 'audio/fast.mp3'
}, {
  word: 'slow',
  translation: 'медленный',
  image: 'img/slow.jpg',
  audioSrc: 'audio/slow.mp3'
}, {
  word: 'friendly',
  translation: 'дружелюбный',
  image: 'img/friendly.jpg',
  audioSrc: 'audio/friendly.mp3'
}, {
  word: 'unfriendly',
  translation: 'недружелюбный',
  image: 'img/unfriendly.jpg',
  audioSrc: 'audio/unfriendly.mp3'
}, {
  word: 'young',
  translation: 'молодой',
  image: 'img/young.jpg',
  audioSrc: 'audio/young.mp3'
}, {
  word: 'old',
  translation: 'старый',
  image: 'img/old.jpg',
  audioSrc: 'audio/old.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жираф',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'pineapple',
  translation: 'ананас',
  image: 'img/pineapple.jpg',
  audioSrc: 'audio/pineapple.mp3'
}, {
  word: 'pear',
  translation: 'груша',
  image: 'img/pear.jpg',
  audioSrc: 'audio/pear.mp3'
}, {
  word: 'peach',
  translation: 'персик',
  image: 'img/peach.jpg',
  audioSrc: 'audio/peach.mp3'
}, {
  word: 'orange',
  translation: 'апельсин',
  image: 'img/orange.jpg',
  audioSrc: 'audio/orange.mp3'
}, {
  word: 'lemon',
  translation: 'лимон',
  image: 'img/lemon.jpg',
  audioSrc: 'audio/lemon.mp3'
}, {
  word: 'banana',
  translation: 'банан',
  image: 'img/banana.jpg',
  audioSrc: 'audio/banana.mp3'
}, {
  word: 'avocado',
  translation: 'авокадо',
  image: 'img/avocado.jpg',
  audioSrc: 'audio/avocado.mp3'
}, {
  word: 'apple',
  translation: 'яблоко',
  image: 'img/apple.jpg',
  audioSrc: 'audio/apple.mp3'
}], [{
  word: 'airplane',
  translation: 'самолёт',
  image: 'img/airplane.jpg',
  audioSrc: 'audio/airplane.mp3'
}, {
  word: 'bus',
  translation: 'автобус',
  image: 'img/bus.jpg',
  audioSrc: 'audio/bus.mp3'
}, {
  word: 'car',
  translation: 'машина',
  image: 'img/car.jpg',
  audioSrc: 'audio/car.mp3'
}, {
  word: 'ship',
  translation: 'корабль',
  image: 'img/ship.jpg',
  audioSrc: 'audio/ship.mp3'
}, {
  word: 'train',
  translation: 'поезд',
  image: 'img/train.jpg',
  audioSrc: 'audio/train.mp3'
}, {
  word: 'bicycle',
  translation: 'велосипед',
  image: 'img/bicycle.jpg',
  audioSrc: 'audio/bicycle.mp3'
}, {
  word: 'helicopter',
  translation: 'вертолёт',
  image: 'img/helicopter.jpg',
  audioSrc: 'audio/helicopter.mp3'
}, {
  word: 'underground',
  translation: 'метро',
  image: 'img/underground.jpg',
  audioSrc: 'audio/underground.mp3'
}]]);

/***/ }),

/***/ "./src/js/CardsCatGen.js":
/*!*******************************!*\
  !*** ./src/js/CardsCatGen.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards */ "./src/js/Cards.js");
/* harmony import */ var _Random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Random */ "./src/js/Random.js");



function cardsCatGen(cat) {
  var word = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var fragment = document.createDocumentFragment();
  var category = cat;
  var categoryArr = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][0];
  var getPositionSet = categoryArr.indexOf(category) + 1;
  var selectedCadegory = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][getPositionSet];
  var _localStorage = localStorage,
      gameMode = _localStorage.gameMode;
  var currentWords = '';
  var selectedCadegoryLen = selectedCadegory.length;

  var targetWordpos = function targetWordpos() {
    var str = '';
    selectedCadegory.forEach(function (el) {
      str += " ".concat(el.word);
    });
    var arr = str.trim().split(' ');
    return arr.indexOf(word);
  };

  var arr = [];
  arr.push(targetWordpos());
  var randomArr = word === null ? Object(_Random__WEBPACK_IMPORTED_MODULE_1__["randomArray"])(selectedCadegoryLen) : arr;

  var cardGen = function cardGen() {
    while (randomArr.length > 0) {
      var fragmentCard = document.createDocumentFragment();
      var numWord = randomArr.pop();
      var wordObj = selectedCadegory[numWord];
      currentWords += " ".concat(wordObj.word);
      var cardCategory = document.createElement('div');
      cardCategory.classList.add('cards-category');
      fragmentCard.appendChild(cardCategory);
      var card = document.createElement('div');
      card.classList.add('card');
      fragmentCard.querySelector('.cards-category').appendChild(card);
      var front = document.createElement('div');
      front.classList.add('card__fliped');
      front.classList.add('front');
      var srcImg = wordObj.image;
      front.setAttribute('style', "background-image: url(".concat(srcImg, ");"));
      fragmentCard.querySelector('.card').appendChild(front);
      var cardText = document.createElement('div');
      cardText.classList.add('card__text');
      cardText.innerText = wordObj.word; // Front

      fragmentCard.querySelector('.front').appendChild(cardText);
      var buttonRotate = document.createElement('div');

      if (gameMode !== 'true' || word) {
        cardText.classList.add('audio');
        fragmentCard.querySelector('.front').appendChild(cardText);
        front.classList.add('audio');
        var cardTextBack = document.createElement('div');
        cardTextBack.classList.add('card__text');
        cardTextBack.innerText = wordObj.translation;
        var back = document.createElement('div');
        back.classList.add('card__fliped');
        back.classList.add('back');
        back.setAttribute('style', "background-image: url(".concat(srcImg, ");"));
        fragmentCard.querySelector('.card').appendChild(back);
        fragmentCard.querySelector('.back').appendChild(cardTextBack);
        buttonRotate.classList.add('card__button-rotate');
        var buttonRotateImg = 'img/rotate.png';
        buttonRotate.setAttribute('style', "background-image: url(".concat(buttonRotateImg, ");"));
        fragmentCard.querySelector('.card').appendChild(buttonRotate);
      }

      if (gameMode === 'true' && !word) {
        front.classList.add('cards-category--cover');
        buttonRotate.classList.add('display__none');
        cardText.classList.add('display__none');
      }

      fragment.append(fragmentCard);
    }
  };

  var buttonStart = document.querySelector('.button__start').classList;
  gameMode === 'true' && !word ? buttonStart.remove('display__none') : buttonStart.add('display__none');
  cardGen();

  if (!word) {
    localStorage.setItem('words', currentWords);
    var container = document.querySelector('.container');
    container.innerHTML = '';
    container.append(fragment);
  }

  if (word) {
    return fragment;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cardsCatGen);

/***/ }),

/***/ "./src/js/CardsMainGen.js":
/*!********************************!*\
  !*** ./src/js/CardsMainGen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards */ "./src/js/Cards.js");


function cardsMainGen() {
  var fragmentMain = document.createDocumentFragment();
  var category = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][0];
  var cardImage = [1, 7, 5, 4, 0, 0, 2, 6];
  var gameMode = localStorage.getItem('gameMode');
  var classOrange = 'cards-main--orange';

  for (var count = 0; count < category.length; count += 1) {
    var curretCategory = category[count];
    var getPositionSet = category.indexOf(curretCategory) + 1;
    var selectedCadegory = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][getPositionSet];
    var getSrcImg = selectedCadegory[cardImage[count]].image;
    var fragment = document.createDocumentFragment();
    var card = document.createElement('div');
    card.classList.add('card__main');
    gameMode === 'true' ? card.classList.add(classOrange) : card.classList.remove(classOrange);
    fragment.appendChild(card);
    var cardFront = document.createElement('div');
    cardFront.classList.add('front');
    fragment.querySelector('.card__main').appendChild(cardFront);
    var img = document.createElement('img');
    img.setAttribute('src', getSrcImg); // path

    img.setAttribute('alt', "".concat(curretCategory));
    fragment.querySelector('.front').appendChild(img);
    var span = document.createElement('span');
    span.innerText = curretCategory;
    fragment.querySelector('.front').appendChild(span);
    fragmentMain.append(fragment);
  }

  var buttonStart = document.querySelector('.button__start').classList;
  buttonStart.add('display__none');
  var container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragmentMain);
}

/* harmony default export */ __webpack_exports__["default"] = (cardsMainGen);

/***/ }),

/***/ "./src/js/DifficultWordsGen.js":
/*!*************************************!*\
  !*** ./src/js/DifficultWordsGen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistics */ "./src/js/Statistics.js");
/* harmony import */ var _CardsCatGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsCatGen */ "./src/js/CardsCatGen.js");



function diffWordGen() {
  var arrElements = Object(_Statistics__WEBPACK_IMPORTED_MODULE_0__["sortGrid"])(7, 'number', true).splice(0, 8);
  var categ = [];
  var words = [];
  var rate = [];
  arrElements.forEach(function (el) {
    categ.push(el.firstChild.innerText);
    words.push(el.firstChild.nextSibling.innerText);
    rate.push(el.lastChild.innerText);
  });

  for (var count = 0; count < rate.length; count += 1) {
    if (rate[count] === '0') {
      rate.splice(count, 1);
      count -= 1;
    }
  }

  if (!rate.length) {
    document.querySelector('.container').innerHTML = '<p>You don\'t have difficult words. Please come play more</p>';
  } else {
    var fragment = document.createDocumentFragment();
    var rateLen = rate.length;
    categ.slice(0, rateLen);
    words.slice(0, rateLen);

    for (var _count = 0; _count < rateLen; _count += 1) {
      var currCard = Object(_CardsCatGen__WEBPACK_IMPORTED_MODULE_1__["default"])(categ[_count], words[_count]);
      fragment.append(currCard);
    }

    var container = document.querySelector('.container');
    container.innerHTML = '';
    container.append(fragment);
    localStorage.setItem('page', 'Difficult Words');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (diffWordGen);

/***/ }),

/***/ "./src/js/Events.js":
/*!**************************!*\
  !*** ./src/js/Events.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsMainGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsMainGen */ "./src/js/CardsMainGen.js");
/* harmony import */ var _CardsCatGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsCatGen */ "./src/js/CardsCatGen.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statistics */ "./src/js/Statistics.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalStorage */ "./src/js/LocalStorage.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Audio */ "./src/js/Audio.js");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rating */ "./src/js/Rating.js");
/* harmony import */ var _DifficultWordsGen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DifficultWordsGen */ "./src/js/DifficultWordsGen.js");









function addEvents() {
  var hamburger = function hamburger() {
    return document.getElementById('hamburgerButton');
  };

  var headerMenu = function headerMenu() {
    return document.querySelector('.header__menu-mobile');
  };

  var links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Fruits', 'Transport', 'Statistic'];

  function swh(stat) {
    var tables = document.getElementsByTagName('table');
    var tableCls = tables[0].classList;

    if (stat) {
      localStorage.setItem('gameMode', 'true');
      tableCls.add('table--play');
    } else {
      localStorage.setItem('gameMode', 'false');
      tableCls.remove('table--play');
    }
  }

  function swhDiff(stat) {
    // Function under construction
    if (stat) {
      localStorage.setItem('gameMode', 'true');
    } else {
      localStorage.setItem('gameMode', 'false');
    }
  }

  document.addEventListener('click', function (event) {
    var eventIsHtml = event.target.tagName === 'HTML';
    var eventIsBody = event.target.tagName === 'BODY';

    function getTxt() {
      if (!eventIsHtml && !eventIsBody) {
        return event.target.parentElement.innerText;
      }

      return null;
    }

    var eventText = getTxt();
    var haveAudio = event.target.classList.contains('audio');
    var elClassList = event.target.classList;
    var cardText = event.target.innerText;
    var eventClasses = event.target.classList.value;
    var eventId = event.target.id;
    var gameStarted = localStorage.getItem('gameStarted');
    var cardFront = getTxt() === null ? null : event.target.parentElement.parentElement.querySelector('.front');
    var cardEngText = cardFront === null ? null : cardFront.innerText;
    var tableTh = cardText.toString().indexOf("\u2191") !== -1;

    if (haveAudio) {
      Object(_Audio__WEBPACK_IMPORTED_MODULE_5__["default"])(cardText);
      Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["setWordStats"])(cardEngText, 1, 0, 0, 0);
    }

    if (links.includes(eventText)) {
      Object(_Game__WEBPACK_IMPORTED_MODULE_4__["gameBreak"])();

      if (eventText === 'Main Page') {
        Object(_CardsMainGen__WEBPACK_IMPORTED_MODULE_0__["default"])();
        Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["localStoragePage"])();
      } else if (eventText === 'Statistic') {
        Object(_Statistics__WEBPACK_IMPORTED_MODULE_2__["tableHeadGen"])();
        Object(_Statistics__WEBPACK_IMPORTED_MODULE_2__["statisticGen"])();
        Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["localStoragePage"])('Statistic');
      } else {
        Object(_CardsCatGen__WEBPACK_IMPORTED_MODULE_1__["default"])(eventText);
        Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["localStoragePage"])(eventText);
      }

      document.querySelectorAll('.menu-mobile_item a').forEach(function (el) {
        if (el.classList.contains('header__menu_active')) {
          el.classList.remove('header__menu_active');
        }

        if (el.innerText === eventText) {
          el.classList.add('header__menu_active');
        }
      });
    }

    if (eventClasses === 'card__button-rotate') {
      var targetCard = event.target.parentElement;
      Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["setWordStats"])(cardEngText, 0, 1, 0, 0);
      targetCard.classList.add('is-flipped');
      event.target.classList.add('display__none');
      targetCard.addEventListener('mouseleave', function () {
        var cardsEventOnFocus = document.querySelectorAll('.card');
        var CardButtons = document.querySelectorAll('.card__button-rotate');
        cardsEventOnFocus.forEach(function (el) {
          el.classList.remove('is-flipped');
          CardButtons.forEach(function (elem) {
            elem.classList.remove('display__none');
          });
        });
      });
    } // game events


    if (eventId === 'buttonStart') {
      localStorage.setItem('gameStarted', 'true');
      Object(_Game__WEBPACK_IMPORTED_MODULE_4__["gameStart"])();
      Object(_Game__WEBPACK_IMPORTED_MODULE_4__["game"])();
    }

    if (elClassList.contains('cards-category--cover')) {
      var currentWord = localStorage.getItem('currentWord');
      var cardClick = event.target.firstChild.innerText;
      var isActive = !elClassList.contains('guessed');

      if (cardClick !== currentWord && gameStarted === 'true' && isActive) {
        Object(_Audio__WEBPACK_IMPORTED_MODULE_5__["default"])('error');
        var errorsCount = parseInt(localStorage.getItem('errors'), 10);
        errorsCount += 1;
        Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["setWordStats"])(currentWord, 0, 0, 0, 1);
        localStorage.setItem('errors', errorsCount);
        Object(_Rating__WEBPACK_IMPORTED_MODULE_6__["rating"])('star-error');
      } else if (cardClick === currentWord) {
        Object(_Audio__WEBPACK_IMPORTED_MODULE_5__["default"])('correct');
        elClassList.add('guessed');
        Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["setWordStats"])(currentWord, 0, 0, 1, 0);
        localStorage.removeItem('currentWord');
        Object(_Rating__WEBPACK_IMPORTED_MODULE_6__["rating"])('star-succes');
        setTimeout(function () {
          Object(_Game__WEBPACK_IMPORTED_MODULE_4__["game"])();
        }, 1500);
      }
    } // Statistic events


    if (eventId === 'resetButton') {
      Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["resetButton"])();
      Object(_Statistics__WEBPACK_IMPORTED_MODULE_2__["statisticGen"])();
    }

    if (eventId === 'repeatWordButton') {
      Object(_DifficultWordsGen__WEBPACK_IMPORTED_MODULE_7__["default"])();
    }

    if (tableTh) {
      var th = event.target.tagName === 'TH' ? event.target : event.target.parentElement;
      Object(_Statistics__WEBPACK_IMPORTED_MODULE_2__["sortGrid"])(th.cellIndex, th.dataset.type);
    } // hamburger events


    if (eventId === 'hamburgerButton') {
      hamburger().classList.toggle('hamburger_rotate');
      headerMenu().classList.toggle('menu-mobile__wrapper--visible');
    } else if (eventId !== 'hamburger__menu') {
      hamburger().classList.remove('hamburger_rotate');
      headerMenu().classList.remove('menu-mobile__wrapper--visible');
    }
  });
  document.addEventListener('change', function (event) {
    var mySwitcher = event.target;
    var currentPage = localStorage.page;

    if (currentPage === 'Statistic') {
      mySwitcher.checked ? swh(true) : swh(false);
    }

    if (currentPage === 'Difficult Words') {
      mySwitcher.checked ? swhDiff(true) : swhDiff(false); // Function under construction
    } else {
      mySwitcher.checked ? Object(_Game__WEBPACK_IMPORTED_MODULE_4__["gameStart"])() : Object(_Game__WEBPACK_IMPORTED_MODULE_4__["gameStop"])();
      localStorage.page === 'Main Page' ? Object(_CardsMainGen__WEBPACK_IMPORTED_MODULE_0__["default"])() : Object(_CardsCatGen__WEBPACK_IMPORTED_MODULE_1__["default"])(currentPage);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (addEvents);

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: game, gameStart, gameStop, buttonText, gameBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameStart", function() { return gameStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameStop", function() { return gameStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonText", function() { return buttonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameBreak", function() { return gameBreak; });
/* harmony import */ var _Random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Random */ "./src/js/Random.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audio */ "./src/js/Audio.js");
/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endGame */ "./src/js/endGame.js");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rating */ "./src/js/Rating.js");





function game() {
  var imgArr = localStorage.words.trim().split(' ');
  var imgArrLen = imgArr.length;
  var wordPos = Object(_Random__WEBPACK_IMPORTED_MODULE_0__["randomInteger"])(0, imgArrLen - 1);
  var currentWord = localStorage.getItem('currentWord') || imgArr.splice(wordPos, 1).toString();
  localStorage.setItem('currentWord', currentWord);
  var activeWords = imgArr.join(' ');
  localStorage.setItem('words', activeWords);

  if (currentWord) {
    Object(_Audio__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWord);
  }

  if (!currentWord) {
    Object(_endGame__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

function buttonText() {
  var gameMode = localStorage.getItem('gameMode');
  var gameStarted = localStorage.getItem('gameStarted');
  var button = document.getElementById('buttonStart'); // This function appeared thanks eslint and rules no-unused-expressions

  function text() {
    function start() {
      button.classList.remove('button__start--rotate');
      button.innerText = 'Start Game';
    }

    function repeat() {
      button.innerText = 'Repeat';
      button.classList.add('button__start--rotate');
    }

    return gameMode === 'true' && gameStarted === 'true' ? repeat() : start();
  }

  text();
}

function gameStart() {
  localStorage.setItem('gameMode', 'true');
  buttonText();
}

function gameStop() {
  localStorage.setItem('gameMode', 'false');
  localStorage.setItem('gameStarted', 'false');
  localStorage.removeItem('currentWord');
  localStorage.setItem('errors', '0');
  Object(_Rating__WEBPACK_IMPORTED_MODULE_3__["ratingRemove"])();
  buttonText();
}

function gameBreak() {
  localStorage.setItem('gameStarted', 'false');
  localStorage.removeItem('currentWord');
  localStorage.setItem('errors', '0');
  Object(_Rating__WEBPACK_IMPORTED_MODULE_3__["ratingRemove"])();
  buttonText();
}



/***/ }),

/***/ "./src/js/IndexHeader.js":
/*!*******************************!*\
  !*** ./src/js/IndexHeader.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function indexHeader() {
  var fragment = document.createDocumentFragment();

  var liCostr = function liCostr(text) {
    var liFragment = document.createDocumentFragment();
    var li = document.createElement('li');
    li.classList.add('menu-mobile_item');
    liFragment.appendChild(li);
    var link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('class', 'header__menu_link');

    if (text === 'Main Page') {
      link.setAttribute('class', 'header__menu_active header__menu_link');
    }

    link.innerText = text;
    liFragment.querySelector('li').appendChild(link);
    return liFragment;
  };

  var header = document.createElement('header');
  header.classList.add('header');
  fragment.append(header);
  var headerNavigation = document.createElement('nav');
  headerNavigation.classList.add('header__menu-mobile');
  fragment.querySelector('.header').append(headerNavigation);
  var hamburgerButton = document.createElement('span');
  hamburgerButton.classList.add('header__hamburger');
  hamburgerButton.classList.add('hamburger');
  hamburgerButton.setAttribute('id', 'hamburgerButton');
  fragment.querySelector('.header').append(hamburgerButton);
  var hamburgerLine = document.createElement('span');
  hamburgerLine.classList.add('hamburger__line');
  fragment.querySelector('#hamburgerButton').append(hamburgerLine);
  var menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-mobile__wrapper');
  menuWrapper.setAttribute('id', 'hamburger__menu');
  fragment.querySelector('.header__menu-mobile').appendChild(menuWrapper);
  var menuMobile = document.createElement('ul');
  menuMobile.classList.add('menu-mobile_table');
  fragment.querySelector('#hamburger__menu').appendChild(menuMobile); // UL

  var links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Fruits', 'Transport', 'Statistic'];
  links.forEach(function (link) {
    fragment.querySelector('.menu-mobile_table').appendChild(liCostr(link));
  }); // Switcher

  var switcher = document.createElement('div');
  switcher.classList.add('switcher');
  fragment.querySelector('.header').append(switcher);
  var switcherCheckbox = document.createElement('input');
  switcherCheckbox.setAttribute('type', 'checkbox');
  switcherCheckbox.setAttribute('name', 'switcher');
  switcherCheckbox.setAttribute('class', 'switcher__checkbox');
  switcherCheckbox.setAttribute('id', 'myswitcher');
  fragment.querySelector('.switcher').append(switcherCheckbox);
  var switcherLabel = document.createElement('label');
  switcherLabel.setAttribute('class', 'switcher__label');
  switcherLabel.setAttribute('for', 'myswitcher');
  fragment.querySelector('.switcher').append(switcherLabel);
  var switcherInner = document.createElement('span');
  switcherInner.setAttribute('class', 'switcher__inner');
  fragment.querySelector('.switcher__label').append(switcherInner);
  var switcherSwitch = document.createElement('span');
  switcherSwitch.setAttribute('class', 'switcher__switch');
  fragment.querySelector('.switcher__label').append(switcherSwitch);
  document.body.innerHTML = '';
  document.body.append(fragment); // add all in body
}

/* harmony default export */ __webpack_exports__["default"] = (indexHeader);

/***/ }),

/***/ "./src/js/LocalStorage.js":
/*!********************************!*\
  !*** ./src/js/LocalStorage.js ***!
  \********************************/
/*! exports provided: localSrorageInit, localStoragePage, setWordStats, getWordStats, resetButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localSrorageInit", function() { return localSrorageInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStoragePage", function() { return localStoragePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWordStats", function() { return setWordStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordStats", function() { return getWordStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetButton", function() { return resetButton; });
function localSrorageInit() {
  localStorage.setItem('gameMode', 'false');
  localStorage.setItem('gameStarted', 'false');
  localStorage.setItem('errors', '0');
}

function localStoragePage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Main Page';
  localStorage.setItem('page', page);
}

var setWordStats = function setWordStats(word) {
  var click = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var flip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var guess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var getWord = localStorage.getItem(word);
  var newStats = '';

  if (getWord) {
    var wordArr = getWord.trim().split(' ');
    wordArr[0] = parseInt(wordArr[0], 10) + click;
    wordArr[1] = parseInt(wordArr[1], 10) + flip;
    wordArr[2] = parseInt(wordArr[2], 10) + guess;
    wordArr[3] = parseInt(wordArr[3], 10) + error;
    newStats = wordArr.join(' ');
  } else {
    newStats = "".concat(click, " ").concat(flip, " ").concat(guess, " ").concat(error);
  }

  localStorage.setItem(word, newStats);
  return newStats.split(' ');
};

var getWordStats = function getWordStats(word) {
  var stat = localStorage.getItem(word);
  var wordArr = stat === null ? setWordStats(word) : localStorage.getItem(word).trim().split(' ');
  return wordArr;
};

var resetButton = function resetButton() {
  var gameMode = localStorage.getItem('gameMode');
  localStorage.clear();
  localSrorageInit();
  localStorage.setItem('gameMode', gameMode);
  localStoragePage('Statistic');
};



/***/ }),

/***/ "./src/js/Random.js":
/*!**************************!*\
  !*** ./src/js/Random.js ***!
  \**************************/
/*! exports provided: randomInteger, randomArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return randomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomArray", function() { return randomArray; });
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomArray(numMax) {
  var numMin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var randomArr = [];

  while (randomArr.length < numMax) {
    var num = randomInteger(numMin, numMax - 1);
    if (!randomArr.includes(num)) randomArr.push(num);
  }

  return randomArr;
}



/***/ }),

/***/ "./src/js/Rating.js":
/*!**************************!*\
  !*** ./src/js/Rating.js ***!
  \**************************/
/*! exports provided: rating, ratingRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rating", function() { return rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratingRemove", function() { return ratingRemove; });
function isRating() {
  return document.querySelector('.rating') || false;
}

function rating(star) {
  var elRating = isRating();
  var wrapper = document.querySelector('.wrapper');
  var wrapperChild = document.querySelector('.wrapper').firstChild;
  var stars = document.createElement('div');
  stars.classList.add(star);

  if (!elRating) {
    var fragment = document.createDocumentFragment();
    var ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');
    fragment.append(ratingContainer);
    fragment.querySelector('.rating').appendChild(stars);
    wrapper.insertBefore(fragment, wrapperChild);
  } else {
    elRating.appendChild(stars);
  }
}

var ratingRemove = function ratingRemove() {
  var elRating = isRating();

  if (elRating) {
    elRating.remove();
  }
};



/***/ }),

/***/ "./src/js/Statistics.js":
/*!******************************!*\
  !*** ./src/js/Statistics.js ***!
  \******************************/
/*! exports provided: tableHeadGen, statisticGen, sortGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHeadGen", function() { return tableHeadGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticGen", function() { return statisticGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortGrid", function() { return sortGrid; });
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards */ "./src/js/Cards.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage */ "./src/js/LocalStorage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function tableHeadGen() {
  var thText = ['Category', 'Word', 'Translate', 'Click in training', 'Flipped card', 'Right answers', 'Mistakes', '%Percrnt of mistakes'];
  var gameStatus = localStorage.getItem('gameMode');
  var buttonStart = document.getElementById('buttonStart');
  buttonStart.classList.add('display__none');
  var fragmentTable = document.createDocumentFragment();
  var tableWrapper = document.createElement('div');
  tableWrapper.classList.add('wrapper_table');
  fragmentTable.append(tableWrapper);
  var fragmentWrap = fragmentTable.querySelector('.wrapper_table');
  var resetButton = document.createElement('button');
  resetButton.classList.add('button');
  resetButton.setAttribute('id', 'resetButton');
  resetButton.innerText = 'Reset';
  fragmentWrap.append(resetButton);
  var repeatWordButton = document.createElement('button');
  repeatWordButton.classList.add('button');
  repeatWordButton.setAttribute('id', 'repeatWordButton');
  repeatWordButton.innerText = 'Repeat difficult words';
  fragmentWrap.append(repeatWordButton);
  var tableWrap = document.createElement('div');
  tableWrap.classList.add('wrapper_table--scroll');
  fragmentWrap.append(tableWrap);
  var fragment = fragmentWrap.querySelector('.wrapper_table--scroll');
  var table = document.createElement('table');
  table.setAttribute('id', 'grid');

  if (gameStatus === 'true') {
    table.classList.add('table--play');
  }

  table.createTHead().insertRow();
  var tableTr = table.querySelector('tr');

  for (var count = 0; count < thText.length; count += 1) {
    var thFragment = document.createDocumentFragment();
    var el = thText[count];
    var tableTh = document.createElement('th');
    tableTh.innerText = el;

    if (count <= 2) {
      tableTh.setAttribute('data-type', 'string');
    } else {
      tableTh.setAttribute('data-type', 'number');
    }

    thFragment.appendChild(tableTh);
    var span = document.createElement('span');
    span.innerText = " \u2191";
    thFragment.firstChild.appendChild(span);
    tableTr.appendChild(thFragment);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  var thead = table.tHead;
  thead.firstChild.append();
  fragment.append(table);
  var container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragmentTable);
}

function statisticGen() {
  var tableBody = document.querySelector('tbody');
  var category = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][0];
  tableBody.innerHTML = '';

  function tdConstr(text) {
    var td = document.createElement('td');
    td.innerText = text;
    return td;
  }

  category.forEach(function (el) {
    var fragmentStat = document.createDocumentFragment();
    var getPositionSet = category.indexOf(el) + 1;
    var selectedCadegory = _Cards__WEBPACK_IMPORTED_MODULE_0__["default"][getPositionSet];
    var categoryLen = selectedCadegory.length;

    for (var count = 0; count < categoryLen; count += 1) {
      var firstCol = document.createElement('td');
      firstCol.innerText = el;
      fragmentStat.append(firstCol);
      var obj = selectedCadegory[count];
      var word = obj.word;
      fragmentStat.append(tdConstr(word));
      var translation = obj.translation;
      fragmentStat.append(tdConstr(translation));
      var getStats = Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["getWordStats"])(word);
      getStats.forEach(function (elem) {
        fragmentStat.append(tdConstr(parseInt(elem, 10)));
      });
      var err = parseInt(getStats[3], 10);
      var gues = parseInt(getStats[2], 10);
      var errorsRate = parseInt(err / (err + gues) * 100, 10) || 0;
      fragmentStat.append(tdConstr("".concat(errorsRate)));
      tableBody.insertRow().append(fragmentStat);
    }
  });
}

function sortGrid(colNum, type) {
  var handly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tbody = document.querySelector('tbody');
  var rowsArray = Array.from(tbody.rows);
  var compare;

  switch (type) {
    case 'string':
      compare = function str(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };

      break;

    default:
      compare = function num(rowA, rowB) {
        return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
      };

      break;
  }

  rowsArray.sort(compare);

  if (!handly) {
    tbody.append.apply(tbody, _toConsumableArray(rowsArray));
  }

  if (handly) {
    return rowsArray;
  }
}



/***/ }),

/***/ "./src/js/endGame.js":
/*!***************************!*\
  !*** ./src/js/endGame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audio */ "./src/js/Audio.js");
/* harmony import */ var _IndexHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexHeader */ "./src/js/IndexHeader.js");
/* harmony import */ var _indexMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexMain */ "./src/js/indexMain.js");
/* harmony import */ var _CardsMainGen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardsMainGen */ "./src/js/CardsMainGen.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalStorage */ "./src/js/LocalStorage.js");






function endGame() {
  var wrapper = document.body.querySelector('.wrapper');
  var errors = localStorage.getItem('errors');
  var finalContent = errors === '0' ? 'success' : 'failure';

  var _final = document.createElement('div');

  _final.classList.add('final');

  var img = document.createElement('img');
  img.setAttribute('src', "img/".concat(finalContent, ".png"));
  img.setAttribute('alt', finalContent);
  var elErrors = document.createElement('div');
  elErrors.innerText = "".concat(errors, " Errors");
  wrapper.innerHTML = '';
  wrapper.append(_final);

  if (finalContent === 'failure') {
    wrapper.querySelector('.final').appendChild(elErrors);
  }

  wrapper.querySelector('.final').appendChild(img);
  Object(_Audio__WEBPACK_IMPORTED_MODULE_0__["default"])(finalContent);
  setTimeout(function () {
    Object(_IndexHeader__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_4__["localSrorageInit"])();
    Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_4__["localStoragePage"])();
    Object(_indexMain__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_CardsMainGen__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, 4000);
}

/* harmony default export */ __webpack_exports__["default"] = (endGame);

/***/ }),

/***/ "./src/js/indexFotter.js":
/*!*******************************!*\
  !*** ./src/js/indexFotter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function indexFotter() {
  var fragment = document.createDocumentFragment();
  var fotter = document.createElement('fotter');
  fragment.append(fotter);
  var main = document.createElement('div');
  main.classList.add('fotter');
  fragment.querySelector('fotter').appendChild(main);
  main.innerHTML = '<div><span>Author: <a href="https://github.com/Vailery">Vailery</a> | </span><span>2020 | </span><span><a href="https://rs.school/js/"><img src="img/rs_school_js.svg" alt="RSSchool" width="200"></a></span></div>';
  document.body.appendChild(fragment);
}

/* harmony default export */ __webpack_exports__["default"] = (indexFotter);

/***/ }),

/***/ "./src/js/indexMain.js":
/*!*****************************!*\
  !*** ./src/js/indexMain.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function indexMain() {
  var fragment = document.createDocumentFragment();
  var main = document.createElement('main');
  fragment.append(main);
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  fragment.querySelector('main').appendChild(wrapper);
  var container = document.createElement('div');
  container.classList.add('container');
  var startButton = document.createElement('button');
  startButton.classList.add('button__start');
  startButton.setAttribute('id', 'buttonStart');
  startButton.classList.add('display__none');
  startButton.innerText = 'Start Game';
  fragment.querySelector('.wrapper').appendChild(startButton);
  fragment.querySelector('.wrapper').appendChild(container);
  document.body.appendChild(fragment);
}

/* harmony default export */ __webpack_exports__["default"] = (indexMain);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map