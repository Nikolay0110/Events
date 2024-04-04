/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoleGame)
/* harmony export */ });
class MoleGame {
  constructor(fieldSize) {
    this.fieldSize = fieldSize ** 2;
    this.score = 0;
    this.miss = 0;
    this.pass = 0;
  }

  // создание игрового поля исходя из указанного fieldSize
  creatingField() {
    const allField = document.querySelector('.hole-game');
    for (let i = 0; i < this.fieldSize; i += 1) {
      const field = document.createElement('div');
      field.classList.add('hole');
      field.id = `hole-${i}`;
      allField.appendChild(field);
    }
    this.randomHole();
    this.logicHit();
  }
  randomHole() {
    this.pass = 0; // Инициализируем счетчик
    this.prevHole = null; // Инициализируем предыдущий элемент
    setInterval(() => {
      this.pass++;
      console.log(this.pass);
      const holes = document.querySelectorAll('.hole');
      const activeCell = 'hole_has-mole';

      // Удаляем класс у предыдущего элемента, если он существует
      if (this.prevHole) {
        this.prevHole.classList.remove(activeCell);
      }

      // Генерируем случайный индекс
      this.rand = Math.floor(Math.random() * holes.length);

      // Получаем случайный элемент и добавляем класс
      this.prevHole = holes[this.rand];
      this.prevHole.classList.add(activeCell);
      if (this.pass === 5) {
        this.gameOver();
      }
    }, 1000);
  }
  gameOver() {
    this.miss = 0;
    const passMiss = document.querySelector('.miss');
    passMiss.innerText = `Количество промахов: ${this.miss}`;
    this.score = 0;
    const passHit = document.querySelector('.hit');
    passHit.innerText = `Количество попаданий: ${this.score}`;
    this.pass = 0;
    alert('Вы проиграли, попробуйте еще раз!');
  }
  logicHit() {
    const gameCell = document.querySelector('.content');
    const firstHole = gameCell.firstElementChild;
    const holes = document.querySelectorAll('.hole');
    const passHit = document.createElement('div');
    passHit.classList.add('hit');
    passHit.textContent = `Количество попаданий: ${this.score}`;
    gameCell.insertBefore(passHit, firstHole);
    const passMiss = document.createElement('div');
    passMiss.classList.add('miss');
    passMiss.textContent = `Количество промахов: ${this.miss}`;
    gameCell.insertBefore(passMiss, firstHole);
    holes.forEach(hole => {
      hole.addEventListener('click', () => {
        if (this.miss === 5) {
          this.gameOver();
        } else {
          if (hole.classList.contains('hole_has-mole')) {
            this.score++;
            passHit.textContent = `Количество попаданий: ${this.score}`;
            this.pass = 0;
          } else {
            this.miss++;
            passMiss.textContent = `Количество промахов: ${this.miss}`;
            this.pass = 0;
          }
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");


const newGame = new _js_app_js__WEBPACK_IMPORTED_MODULE_1__["default"](4);
newGame.creatingField();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map