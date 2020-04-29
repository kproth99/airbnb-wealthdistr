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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/About.js":
/*!*********************************!*\
  !*** ./src/Components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderAbout; });


function renderAbout(about) {
    return (
        `
    <section id="about">
        <h1 class="animated infinite flash delay-3s">Kieran Roth</h1>
        <div id="about" class="row">
                <div class="col-6">
                    <img class="profile-img" src="${sample(about.photos)}" width="200" height="300">
                    <p>
                        <strong> Computer Science BS Student @ Boston College</strong><br>
                        rothki@bc.edu<br>
                        140 Commonwealth Avenue, Chestnut Hill, MA 02467<br>
                        <a href="assets/Kieran Roth Resume.pdf" target="_blank"><i class="far fa-file-alt"></i> Resume | </a>
                        <a href="https://www.instagram.com/kproth99/" target="_blank">
                            <i class="fab fa-instagram"></i> | </a>
                        <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        |</a> <br>

                    </p>
                </div>
                <div class="col22">
                    <p>
                        Kieran Roth is a student in the Morrissey College of Arts & Science here at BC. 
                        He is studying for a Bachelor of Science in <strong>Computer Science</strong>, as well as a minor in <strong>Marketing</strong>
                        in the Carroll School of Management. In addition, his extracurriculars include being the <strong>Music Director</strong> 
                        of the <a href="https://www.thebcdynamics.com/" target="_blank">Boston College Dynamics</a>, the premiere co-ed A Cappella group at BC.
                        He is also a part of The University Chorale; a staple of Boston College. Besides that, he truly enjoys spending time with friends, photography,
                        and all things fun!
                         <strong></strong>
                    </p>       
                </div>

            </div> `

    )
    
} 

/***/ }),

/***/ "./src/Components/MainPage.js":
/*!************************************!*\
  !*** ./src/Components/MainPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderMainPage; });
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.js */ "./src/Components/About.js");
/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.js */ "./src/Components/Navbar.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./News.js */ "./src/Components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.js */ "./src/Components/Projects.js");





function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
        ${Object(_Navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('main', Object.keys(data))}
        ${Object(_About_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.about)}
        <h1 class="title">News</h1>
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.news)}
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.projects)}
            <div>
             <footer>Copyright © 2020 Kieran Roth</footer>
        </div
        `;
        Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["searchSort"])(data);
        Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["radioSort"])(data);
}

/***/ }),

/***/ "./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderNavbar; });
function renderNavbar(navbar){
    return (
        `<nav> 
        <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul>
    </nav>`
     );

}

/***/ }),

/***/ "./src/Components/News.js":
/*!********************************!*\
  !*** ./src/Components/News.js ***!
  \********************************/
/*! exports provided: default, renderNewsItems, searchSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNewsItems", function() { return renderNewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSort", function() { return searchSort; });
function renderNews(news) {
    return `
     <section id = "news">
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <div class = "news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `;
    
}

function renderNewsItems(news){
    return news.map(
        n =>
        ` <br> 
        <div class="row1">
                <div class="col-8">
                ${n.title}
                </div>
                <div class="col-4">
                ${n.date}
                </div>
        </div>
        </br> ` 
    )
    .join('')
}

function searchSort(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input',(event)=>{
        console.log(event.target.value);
        const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
}

/***/ }),

/***/ "./src/Components/ProjectPage.js":
/*!***************************************!*\
  !*** ./src/Components/ProjectPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderProjectPage; });
function renderProjectPage(d) {
    document.querySelector(".container").innerHTML = `
    <nav>
            <ul>
                <li>
                    <a class="title" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
        <div>
      <div class="title"><h1 "${d.id}" ${d.title} </h1></div>
  </div>
  <div class="row">
      <div class="col-6">
        <img src="${d.teaser1}" style="width: 30%; margin-left: 10px; border-radius: 25px" /> 
      </div>
      
  </div>
  <div>
          <div class="authors" style="text-align:left"> ${d.authors} </div>
          <div class="source" style="text-align:left"> 
              <em>${d.source}</em> 
          </div>

          
      </div>
      <br>
  <div>
    <div class = "description"> ${d.description} </div>
  </div>
    <br>
    <div class="label" style="text-align:left">
    <span><a href="${d.materials[0].path}"> <i class="${d.icon1}"></i> 
        ${d.materials[0].label} </a>
    </span> |
    <span><a href="${d.materials[1].path}"> <i class="${d.icon2}"></i> 
        ${d.materials[1].label} </a>
    </span>
</div>
  
  <div>
  <br>

  <footer>Copyright © 2020 Kieran Roth</footer>
  
  </div>
  <br>
  </div> `
}


/***/ }),

/***/ "./src/Components/Projects.js":
/*!************************************!*\
  !*** ./src/Components/Projects.js ***!
  \************************************/
/*! exports provided: default, renderProjectItems, radioSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProjectItems", function() { return renderProjectItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioSort", function() { return radioSort; });
function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>

        <div class="filter">
        <label>
            <input type="radio" name="filter" value="all" checked> All
        </label>
        <label>
            <input type="radio" name="filter" value="Class"> Class
        </label>
        <label>
            <input type="radio" name="filter" value="Final Project"> Final Project
        </label>
        <label>
            <input type="radio" name="filter" value="Music"> Music
        </label>

    </div>

    <br>

        <div class="project-list">
        ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
    return projects.map(
        d => `

        <div>
            <div class="project-title">
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
            </div>
        </div>

        <div class="row">
        <div class="col-6">
            <div class="authors" style="text-align:left"> 
                ${d.authors} 
            </div>
            <div class="source" style="text-align:left"> 
                <em>${d.source}</em> 
            </div>
            
  
            <div class="label" style="text-align:left">
                <span><a href="${d.materials[0].path}"> <i class="${d.icon1}"></i> 
                    ${d.materials[0].label} </a>
                </span> |
                <span><a href="${d.materials[1].path}"> <i class="${d.icon2}"></i> 
                    ${d.materials[1].label} </a>
                </span>
            </div>
            
  
        </div>
        </div>
    <br>`
    ).join('');
}

function radioSort(data){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let tag = event.target.value;
        if(tag === "all"){
            document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
        }
        else{
            const filtered = data.projects.filter(projects=>((projects.tags===(event.target.value))));
            document.querySelector('project-list').innerHTML = renderProjectItems(filtered);
        }
    }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/MainPage.js */ "./src/Components/MainPage.js");
/* harmony import */ var _Components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/ProjectPage.js */ "./src/Components/ProjectPage.js");



fetch("assets/data.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const params = new URLSearchParams(window.location.search);
        console.log(params);
        console.log('projects.param', params.get('project'));
        if (params.get("project") === null) {
            Object(_Components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);  
        } 
        else {
            let id = params.get("project");
            console.log(id);
            let project = data.projects.find(function(project){
            console.log(project.id)
                return project.id === id;
        }
        );
        Object(_Components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHFCQUFx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Q3pCO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWJvdXQoYWJvdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBgXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJhbmltYXRlZCBpbmZpbml0ZSBmbGFzaCBkZWxheS0zc1wiPktpZXJhbiBSb3RoPC9oMT5cbiAgICAgICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHtzYW1wbGUoYWJvdXQucGhvdG9zKX1cIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IENvbXB1dGVyIFNjaWVuY2UgQlMgU3R1ZGVudCBAIEJvc3RvbiBDb2xsZWdlPC9zdHJvbmc+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgcm90aGtpQGJjLmVkdTxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDE0MCBDb21tb253ZWFsdGggQXZlbnVlLCBDaGVzdG51dCBIaWxsLCBNQSAwMjQ2Nzxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvS2llcmFuIFJvdGggUmVzdW1lLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPiBSZXN1bWUgfCA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9rcHJvdGg5OS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+IHwgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9raWVyYW4tcm90aC04YWFhNTExODkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICB8PC9hPiA8YnI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wyMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEtpZXJhbiBSb3RoIGlzIGEgc3R1ZGVudCBpbiB0aGUgTW9ycmlzc2V5IENvbGxlZ2Ugb2YgQXJ0cyAmIFNjaWVuY2UgaGVyZSBhdCBCQy4gXG4gICAgICAgICAgICAgICAgICAgICAgICBIZSBpcyBzdHVkeWluZyBmb3IgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIDxzdHJvbmc+Q29tcHV0ZXIgU2NpZW5jZTwvc3Ryb25nPiwgYXMgd2VsbCBhcyBhIG1pbm9yIGluIDxzdHJvbmc+TWFya2V0aW5nPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgQ2Fycm9sbCBTY2hvb2wgb2YgTWFuYWdlbWVudC4gSW4gYWRkaXRpb24sIGhpcyBleHRyYWN1cnJpY3VsYXJzIGluY2x1ZGUgYmVpbmcgdGhlIDxzdHJvbmc+TXVzaWMgRGlyZWN0b3I8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZWJjZHluYW1pY3MuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkJvc3RvbiBDb2xsZWdlIER5bmFtaWNzPC9hPiwgdGhlIHByZW1pZXJlIGNvLWVkIEEgQ2FwcGVsbGEgZ3JvdXAgYXQgQkMuXG4gICAgICAgICAgICAgICAgICAgICAgICBIZSBpcyBhbHNvIGEgcGFydCBvZiBUaGUgVW5pdmVyc2l0eSBDaG9yYWxlOyBhIHN0YXBsZSBvZiBCb3N0b24gQ29sbGVnZS4gQmVzaWRlcyB0aGF0LCBoZSB0cnVseSBlbmpveXMgc3BlbmRpbmcgdGltZSB3aXRoIGZyaWVuZHMsIHBob3RvZ3JhcGh5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGFsbCB0aGluZ3MgZnVuIVxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvcD4gICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PiBgXG5cbiAgICApXG4gICAgXG59ICIsImltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL0Fib3V0LmpzJ1xuaW1wb3J0IHJlbmRlck5hdmJhciBmcm9tICcuL05hdmJhci5qcydcbmltcG9ydCByZW5kZXJOZXdzLCB7c2VhcmNoU29ydH0gZnJvbSAnLi9OZXdzLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RzLCB7cmFkaW9Tb3J0fSBmcm9tICcuL1Byb2plY3RzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShkYXRhKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtyZW5kZXJOYXZiYXIoJ21haW4nLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7cmVuZGVyQWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TmV3czwvaDE+XG4gICAgICAgICR7cmVuZGVyTmV3cyhkYXRhLm5ld3MpfVxuICAgICAgICAke3JlbmRlclByb2plY3RzKGRhdGEucHJvamVjdHMpfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIEtpZXJhbiBSb3RoPC9mb290ZXI+XG4gICAgICAgIDwvZGl2XG4gICAgICAgIGA7XG4gICAgICAgIHNlYXJjaFNvcnQoZGF0YSk7XG4gICAgICAgIHJhZGlvU29ydChkYXRhKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJOYXZiYXIobmF2YmFyKXtcbiAgICByZXR1cm4gKFxuICAgICAgICBgPG5hdj4gXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPk5ld3M8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvamVjdHNcIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+YFxuICAgICApO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTmV3cyhuZXdzKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgPHNlY3Rpb24gaWQgPSBcIm5ld3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPSduZXdzJyBwbGFjZWhvbGRlcj1cIlNlYXJjaCBOZXdzLi4uXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7cmVuZGVyTmV3c0l0ZW1zKG5ld3MpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld3NJdGVtcyhuZXdzKXtcbiAgICByZXR1cm4gbmV3cy5tYXAoXG4gICAgICAgIG4gPT5cbiAgICAgICAgYCA8YnI+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93MVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICR7bi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAke24uZGF0ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnI+IGAgXG4gICAgKVxuICAgIC5qb2luKCcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoU29ydChkYXRhKXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGV2ZW50KT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGRhdGEubmV3cy5maWx0ZXIobmV3cz0+bmV3cy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWxpc3QnKS5pbm5lckhUTUwgPSByZW5kZXJOZXdzSXRlbXMoZmlsdGVyZWQpO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKGQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBgXG4gICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIiBocmVmPVwiaW5kZXguaHRtbFwiIHRvcDozMHB4PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT4gR28gQmFjazwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDEgXCIke2QuaWR9XCIgJHtkLnRpdGxlfSA8L2gxPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtkLnRlYXNlcjF9XCIgc3R5bGU9XCJ3aWR0aDogMzAlOyBtYXJnaW4tbGVmdDogMTBweDsgYm9yZGVyLXJhZGl1czogMjVweFwiIC8+IFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvcnNcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPiAke2QuYXV0aG9yc30gPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNvdXJjZVwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+IFxuICAgICAgICAgICAgICA8ZW0+JHtkLnNvdXJjZX08L2VtPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8YnI+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZGVzY3JpcHRpb25cIj4gJHtkLmRlc2NyaXB0aW9ufSA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+XG4gICAgPHNwYW4+PGEgaHJlZj1cIiR7ZC5tYXRlcmlhbHNbMF0ucGF0aH1cIj4gPGkgY2xhc3M9XCIke2QuaWNvbjF9XCI+PC9pPiBcbiAgICAgICAgJHtkLm1hdGVyaWFsc1swXS5sYWJlbH0gPC9hPlxuICAgIDwvc3Bhbj4gfFxuICAgIDxzcGFuPjxhIGhyZWY9XCIke2QubWF0ZXJpYWxzWzFdLnBhdGh9XCI+IDxpIGNsYXNzPVwiJHtkLmljb24yfVwiPjwvaT4gXG4gICAgICAgICR7ZC5tYXRlcmlhbHNbMV0ubGFiZWx9IDwvYT5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbiAgXG4gIDxkaXY+XG4gIDxicj5cblxuICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIEtpZXJhbiBSb3RoPC9mb290ZXI+XG4gIFxuICA8L2Rpdj5cbiAgPGJyPlxuICA8L2Rpdj4gYFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpe1xuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlByb2plY3RzPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJhbGxcIiBjaGVja2VkPiBBbGxcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIkNsYXNzXCI+IENsYXNzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJGaW5hbCBQcm9qZWN0XCI+IEZpbmFsIFByb2plY3RcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIk11c2ljXCI+IE11c2ljXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxicj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICR7cmVuZGVyUHJvamVjdEl0ZW1zKHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbXMocHJvamVjdHMpe1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoXG4gICAgICAgIGQgPT4gYFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIj9wcm9qZWN0PSR7ZC5pZH1cIj48c3Ryb25nPiR7ZC50aXRsZX08L3N0cm9uZz48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JzXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj4gXG4gICAgICAgICAgICAgICAgJHtkLmF1dGhvcnN9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic291cmNlXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj4gXG4gICAgICAgICAgICAgICAgPGVtPiR7ZC5zb3VyY2V9PC9lbT4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cIiR7ZC5tYXRlcmlhbHNbMF0ucGF0aH1cIj4gPGkgY2xhc3M9XCIke2QuaWNvbjF9XCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgJHtkLm1hdGVyaWFsc1swXS5sYWJlbH0gPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gfFxuICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIke2QubWF0ZXJpYWxzWzFdLnBhdGh9XCI+IDxpIGNsYXNzPVwiJHtkLmljb24yfVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICR7ZC5tYXRlcmlhbHNbMV0ubGFiZWx9IDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDxicj5gXG4gICAgKS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlvU29ydChkYXRhKXtcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXIgaW5wdXRbbmFtZT1cImZpbHRlclwiXScpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChjb25kPT5jb25kLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHRhZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgaWYodGFnID09PSBcImFsbFwiKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpLmlubmVySFRNTCA9IHJlbmRlclByb2plY3RJdGVtcyhkYXRhLnByb2plY3RzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhLnByb2plY3RzLmZpbHRlcihwcm9qZWN0cz0+KChwcm9qZWN0cy50YWdzPT09KGV2ZW50LnRhcmdldC52YWx1ZSkpKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm9qZWN0LWxpc3QnKS5pbm5lckhUTUwgPSByZW5kZXJQcm9qZWN0SXRlbXMoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgfSkpO1xufSIsImltcG9ydCByZW5kZXJNYWluUGFnZSBmcm9tICcuL0NvbXBvbmVudHMvTWFpblBhZ2UuanMnXG5pbXBvcnQgcmVuZGVyUHJvamVjdFBhZ2UgZnJvbSAnLi9Db21wb25lbnRzL1Byb2plY3RQYWdlLmpzJ1xuXG5mZXRjaChcImFzc2V0cy9kYXRhLmpzb25cIilcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RzLnBhcmFtJywgcGFyYW1zLmdldCgncHJvamVjdCcpKTtcbiAgICAgICAgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZW5kZXJNYWluUGFnZShkYXRhKTsgIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBpZDtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=