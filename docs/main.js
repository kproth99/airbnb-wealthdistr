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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/index.js":
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Components/MainPage.js */ "./docs/src/Components/MainPage.js");
/* harmony import */ var _src_Components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Components/ProjectPage.js */ "./docs/src/Components/ProjectPage.js");
/* harmony import */ var _src_Components_ProjectPage2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Components/ProjectPage2.js */ "./docs/src/Components/ProjectPage2.js");
/* harmony import */ var _src_Components_ProjectPage3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Components/ProjectPage3.js */ "./docs/src/Components/ProjectPage3.js");





fetch("assets/data.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const params = new URLSearchParams(window.location.search);
        console.log(params);
        console.log('projects.param', params.get('project'));
        if (params.get("project") === null) {
            Object(_src_Components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);  
        } 
        else if (params.get("project") === "austin"){
            let id = params.get("project");
            console.log(id);
            let project = data.projects.find(function(project){
            console.log(project.id)
                return project.id === id;
        } );
        Object(_src_Components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
    }
    else if (params.get("project") === "newyork"){
        let id = params.get("project");
        console.log(id);
        let project = data.projects.find(function(project){
        console.log(project.id)
            return project.id === id;
    } );
        Object(_src_Components_ProjectPage2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
}
    else if (params.get("project") === "sanfran"){
    let id = params.get("project");
    console.log(id);
    let project = data.projects.find(function(project){
    console.log(project.id)
        return project.id === id;
} );
    Object(_src_Components_ProjectPage3_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
}
    
});


/***/ }),

/***/ "./docs/src/Components/About.js":
/*!**************************************!*\
  !*** ./docs/src/Components/About.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderAbout; });


function renderAbout(about) {
    return (
            `
            <section id="about">
            <div class=headertitle><strong> Meet our Group Members!</strong><br> </div>
            <div id="about" class="row">
            <div class="col-62">
                 <img class="profile-img" src="${about.photo1}" >
                 <figcaption> <strong> Kieran Roth </strong> <br> Class of 2021 <br> B.S. in Computer Science; B.S. in Marketing </figcaption>
                     <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                 <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo2}" >
            <figcaption> <strong> Lizzy Hanley </strong> <br> Class of 2020 <br> B.A. in Computer Science; B.S. in Management, Concentrations in Finance & Information Systems </figcaption>
            <a href="https://www.linkedin.com/in/lizzyhanley/" target="_blank">
            <i  class="fab fa-linkedin"></i> LinkedIn</a> 
            </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo3}" >
            <figcaption> <strong> Catriona Sullivan </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>   
            <a href="https://www.linkedin.com/in/catriona-sullivan-844878153/" target="_blank">
            <i  class="fab fa-linkedin"></i> LinkedIn</a>  
          </div> 
        <div class="col-62">
            <img class="profile-img" src="${about.photo4}" >
                <figcaption> <strong> Kevin Li </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
            </div>
        </div>
        <h1 class="title">About</h1>
         <div class="abstract">
         ${about.desc} 
         <p>
        </section>
            
            `
    );
}

/***/ }),

/***/ "./docs/src/Components/MainPage.js":
/*!*****************************************!*\
  !*** ./docs/src/Components/MainPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderMainPage; });
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.js */ "./docs/src/Components/About.js");
/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.js */ "./docs/src/Components/Navbar.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./News.js */ "./docs/src/Components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.js */ "./docs/src/Components/Projects.js");





function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
        ${Object(_Navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])('main', Object.keys(data))}
        ${Object(_About_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.about)}
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.projects)}
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.news)}
            <div>
             <footer>Copyright © 2020 </footer>
        </div
        `;
        
}

/***/ }),

/***/ "./docs/src/Components/Navbar.js":
/*!***************************************!*\
  !*** ./docs/src/Components/Navbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderNavbar; });
function renderNavbar(navbar){
    return (
        `<div class="parallax"></div>
        <nav> 
        <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                 <a href="#projects">Maps</a>
            </li>
            <li>
                <a href="#news">Deliverables</a>
            </li>
        </ul>
        
    </nav>`
     );

}

/***/ }),

/***/ "./docs/src/Components/News.js":
/*!*************************************!*\
  !*** ./docs/src/Components/News.js ***!
  \*************************************/
/*! exports provided: default, renderNewsItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNewsItems", function() { return renderNewsItems; });
function renderNews(news) {
    return `
     <section id = "news">
        <h1 class="title">Project Deliverables</h1>
        <div class = "news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `;
    
}

function renderNewsItems(news){
    return news.map(
        n => `

        <div>
            <div class="deliverable-title">
            <strong>${n.title}</strong>
            </div>
        </div>

        <div class="row">
        <div class="col-6">
            <div class="date" style="text-align:left"> 
            <em>${n.date} </em> 
            </div>
            <div class="delauthors" style="text-align:left"> 
                ${n.authors} 
            </div>
            
  
            <div class="label" style="text-align:left">
                <span><a href="${n.materials[0].path}"> <i class="${n.icon1}"></i> 
                    ${n.materials[0].label} </a> |
                </span> 
                <span><a href="${n.materials[1].path}"> <i class="${n.icon2}"></i> 
                ${n.materials[1].label} </a>
            </span> 
            </div>
            
        </div>
        </div>
    <br>`
    ).join('');
}



/***/ }),

/***/ "./docs/src/Components/ProjectPage.js":
/*!********************************************!*\
  !*** ./docs/src/Components/ProjectPage.js ***!
  \********************************************/
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
                    <a class="backtitle" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
 <h1 class="pagetitle">${d.title}</h1>
  <div>
            <div class="map"> 
            <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 80%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=1008916e3c054874a8776dc63a0bf32f&extent=-98.1281,30.1188,-97.4442,30.4991&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="TX airbnb prices" src="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=1008916e3c054874a8776dc63a0bf32f&extent=-98.1281,30.1188,-97.4442,30.4991&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light"></iframe></div>
               </div>
    <br>
 <div>
        <div class ="pagetitle">
         How to Use the Map
         </div>
    <div class = "description"> ${d.description} </div>
  </div>
    <br>
  
  <div>
  <br>

  <footer>Copyright © 2020 </footer>
  
  </div>
  <br>
  </div> `
}


/***/ }),

/***/ "./docs/src/Components/ProjectPage2.js":
/*!*********************************************!*\
  !*** ./docs/src/Components/ProjectPage2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderProjectPage2; });
function renderProjectPage2(d) {
    document.querySelector(".container").innerHTML = `
    <nav>
            <ul>
                <li>
                    <a class="backtitle" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
<h1 class="pagetitle">${d.title}</h1>
  <div>
            <div class="map"> 
            <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 80%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=a88dc2bf07174729986597150b4daa8d&extent=-73.9145,40.7773,-73.7768,40.8444&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="NY airbnb prices" src="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=a88dc2bf07174729986597150b4daa8d&extent=-73.9145,40.7773,-73.7768,40.8444&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light"></iframe></div>
                </div>
            <br>
  <div>
    <div class ="pagetitle">
            How to Use the Map
    </div>
    <div class = "description"> ${d.description} </div>
  </div>
    <br>

  <div>
  <br>

  <footer>Copyright © 2020 </footer>
  
  </div>
  <br>
  </div> `
}


/***/ }),

/***/ "./docs/src/Components/ProjectPage3.js":
/*!*********************************************!*\
  !*** ./docs/src/Components/ProjectPage3.js ***!
  \*********************************************/
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
                    <a class="backtitle" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
        <h1 class="pagetitle">${d.title}</h1>
  <div>
            <div class="map"> 
                <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 80%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=3eacee614b304209a91aaad835860aab&extent=-122.4751,37.7363,-122.3803,37.7846&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="SF airbnb prices" src="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=3eacee614b304209a91aaad835860aab&extent=-122.4751,37.7363,-122.3803,37.7846&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light"></iframe></div>
                </div>
      <br>
<div>
      <div class ="pagetitle">
              How to Use the Map
      </div>
    <div class = "description"> ${d.description} </div>
  </div>
  <div>
  <br>
  <footer>Copyright © 2020 </footer>
  
  </div>
  <br>
  </div> `
}


/***/ }),

/***/ "./docs/src/Components/Projects.js":
/*!*****************************************!*\
  !*** ./docs/src/Components/Projects.js ***!
  \*****************************************/
/*! exports provided: default, renderProjectItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProjectItems", function() { return renderProjectItems; });
function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Airbnb Price Distribution Maps</h1>
        <div class="project-list">
        ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                <img src="${d.teaser1}" width=325px>
                <div class="project-title">
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                 
        </div>
    `).join('');
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL3NyYy9Db21wb25lbnRzL0Fib3V0LmpzIiwid2VicGFjazovLy8uL2RvY3Mvc3JjL0NvbXBvbmVudHMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL2RvY3Mvc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0UGFnZTIuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0UGFnZTMuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDTTtBQUNFO0FBQ0E7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJFQUFjLE87QUFDMUIsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDhFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLCtFQUFrQjtBQUN0Qjs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDYztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxhQUFhO0FBQzlELDhHQUE4RztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pELDBHQUEwRztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNFO0FBQ0o7QUFDUTs7QUFFM0I7QUFDZjtBQUNBLFVBQVUsMERBQVk7QUFDdEIsVUFBVSx5REFBVztBQUNyQixVQUFVLDREQUFjO0FBQ3hCLFVBQVUsd0RBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSxrQkFBa0IsVTtBQUNsQjs7O0FBR0E7QUFDQSxpQ0FBaUMsb0JBQW9CLGVBQWUsUUFBUTtBQUM1RSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0EsaUNBQWlDLG9CQUFvQixlQUFlLFFBQVE7QUFDNUUsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CLHFCQUFxQixXQUFXLGlCQUFpQiwyRUFBMkUsbUJBQW1CLFFBQVEsU0FBUyxhQUFhLGVBQWUsT0FBTyxtQkFBbUIsYUFBYSxXQUFXLHVCQUF1QixvV0FBb1c7QUFDanFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQixxQkFBcUIsV0FBVyxpQkFBaUIsMkVBQTJFLG1CQUFtQixRQUFRLFNBQVMsYUFBYSxlQUFlLE9BQU8sbUJBQW1CLGFBQWEsV0FBVyx1QkFBdUIsb1dBQW9XO0FBQ2pxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUIscUJBQXFCLFdBQVcsaUJBQWlCLDJFQUEyRSxtQkFBbUIsUUFBUSxTQUFTLGFBQWEsZUFBZSxPQUFPLG1CQUFtQixhQUFhLFdBQVcsdUJBQXVCLHNXQUFzVztBQUN2cUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBLHdDQUF3QyxLQUFLLFlBQVksUUFBUTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZG9jcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCByZW5kZXJNYWluUGFnZSBmcm9tICcuL3NyYy9Db21wb25lbnRzL01haW5QYWdlLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RQYWdlIGZyb20gJy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMnXG5pbXBvcnQgcmVuZGVyUHJvamVjdFBhZ2UyIGZyb20gJy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UyLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RQYWdlMyBmcm9tICcuL3NyYy9Db21wb25lbnRzL1Byb2plY3RQYWdlMy5qcydcblxuZmV0Y2goXCJhc3NldHMvZGF0YS5qc29uXCIpXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0cy5wYXJhbScsIHBhcmFtcy5nZXQoJ3Byb2plY3QnKSk7XG4gICAgICAgIGlmIChwYXJhbXMuZ2V0KFwicHJvamVjdFwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVuZGVyTWFpblBhZ2UoZGF0YSk7ICBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAocGFyYW1zLmdldChcInByb2plY3RcIikgPT09IFwiYXVzdGluXCIpe1xuICAgICAgICAgICAgbGV0IGlkID0gcGFyYW1zLmdldChcInByb2plY3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT09IGlkO1xuICAgICAgICB9ICk7XG4gICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJhbXMuZ2V0KFwicHJvamVjdFwiKSA9PT0gXCJuZXd5b3JrXCIpe1xuICAgICAgICBsZXQgaWQgPSBwYXJhbXMuZ2V0KFwicHJvamVjdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5pZClcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBpZDtcbiAgICB9ICk7XG4gICAgICAgIHJlbmRlclByb2plY3RQYWdlMihwcm9qZWN0KTtcbn1cbiAgICBlbHNlIGlmIChwYXJhbXMuZ2V0KFwicHJvamVjdFwiKSA9PT0gXCJzYW5mcmFuXCIpe1xuICAgIGxldCBpZCA9IHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBsZXQgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChmdW5jdGlvbihwcm9qZWN0KXtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKVxuICAgICAgICByZXR1cm4gcHJvamVjdC5pZCA9PT0gaWQ7XG59ICk7XG4gICAgcmVuZGVyUHJvamVjdFBhZ2UzKHByb2plY3QpO1xufVxuICAgIFxufSk7XG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWJvdXQoYWJvdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1oZWFkZXJ0aXRsZT48c3Ryb25nPiBNZWV0IG91ciBHcm91cCBNZW1iZXJzITwvc3Ryb25nPjxicj4gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXRcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZmlsZS1pbWdcIiBzcmM9XCIke2Fib3V0LnBob3RvMX1cIiA+XG4gICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiA8c3Ryb25nPiBLaWVyYW4gUm90aCA8L3N0cm9uZz4gPGJyPiBDbGFzcyBvZiAyMDIxIDxicj4gQi5TLiBpbiBDb21wdXRlciBTY2llbmNlOyBCLlMuIGluIE1hcmtldGluZyA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tpZXJhbi1yb3RoLThhYWE1MTE4OS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgPGkgIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPiBMaW5rZWRJbjwvYT4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZmlsZS1pbWdcIiBzcmM9XCIke2Fib3V0LnBob3RvMn1cIiA+XG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj4gPHN0cm9uZz4gTGl6enkgSGFubGV5IDwvc3Ryb25nPiA8YnI+IENsYXNzIG9mIDIwMjAgPGJyPiBCLkEuIGluIENvbXB1dGVyIFNjaWVuY2U7IEIuUy4gaW4gTWFuYWdlbWVudCwgQ29uY2VudHJhdGlvbnMgaW4gRmluYW5jZSAmIEluZm9ybWF0aW9uIFN5c3RlbXMgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9saXp6eWhhbmxleS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpICBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gTGlua2VkSW48L2E+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZmlsZS1pbWdcIiBzcmM9XCIke2Fib3V0LnBob3RvM31cIiA+XG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj4gPHN0cm9uZz4gQ2F0cmlvbmEgU3VsbGl2YW4gPC9zdHJvbmc+IDxicj4gQ2xhc3Mgb2YgMjAyMCA8YnI+IEIuQS4gaW4gQ29tcHV0ZXIgU2NpZW5jZSA8L2ZpZ2NhcHRpb24+ICAgXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NhdHJpb25hLXN1bGxpdmFuLTg0NDg3ODE1My9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpICBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gTGlua2VkSW48L2E+ICBcbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNjJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcm9maWxlLWltZ1wiIHNyYz1cIiR7YWJvdXQucGhvdG80fVwiID5cbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4gPHN0cm9uZz4gS2V2aW4gTGkgPC9zdHJvbmc+IDxicj4gQ2xhc3Mgb2YgMjAyMCA8YnI+IEIuQS4gaW4gQ29tcHV0ZXIgU2NpZW5jZSA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+QWJvdXQ8L2gxPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImFic3RyYWN0XCI+XG4gICAgICAgICAke2Fib3V0LmRlc2N9IFxuICAgICAgICAgPHA+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYFxuICAgICk7XG59IiwiaW1wb3J0IHJlbmRlckFib3V0IGZyb20gJy4vQWJvdXQuanMnXG5pbXBvcnQgcmVuZGVyTmF2YmFyIGZyb20gJy4vTmF2YmFyLmpzJ1xuaW1wb3J0IHJlbmRlck5ld3MgZnJvbSAnLi9OZXdzLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vUHJvamVjdHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKGRhdGEpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke3JlbmRlck5hdmJhcignbWFpbicsIE9iamVjdC5rZXlzKGRhdGEpKX1cbiAgICAgICAgJHtyZW5kZXJBYm91dChkYXRhLmFib3V0KX1cbiAgICAgICAgJHtyZW5kZXJQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgICAgJHtyZW5kZXJOZXdzKGRhdGEubmV3cyl9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2XG4gICAgICAgIGA7XG4gICAgICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck5hdmJhcihuYXZiYXIpe1xuICAgIHJldHVybiAoXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwicGFyYWxsYXhcIj48L2Rpdj5cbiAgICAgICAgPG5hdj4gXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2plY3RzXCI+TWFwczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNuZXdzXCI+RGVsaXZlcmFibGVzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgPC9uYXY+YFxuICAgICApO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTmV3cyhuZXdzKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgPHNlY3Rpb24gaWQgPSBcIm5ld3NcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5Qcm9qZWN0IERlbGl2ZXJhYmxlczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5ld3MtbGlzdFwiPlxuICAgICAgICAgICAgJHtyZW5kZXJOZXdzSXRlbXMobmV3cyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3c0l0ZW1zKG5ld3Mpe1xuICAgIHJldHVybiBuZXdzLm1hcChcbiAgICAgICAgbiA9PiBgXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpdmVyYWJsZS10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz4ke24udGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj4gXG4gICAgICAgICAgICA8ZW0+JHtuLmRhdGV9IDwvZW0+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsYXV0aG9yc1wiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+IFxuICAgICAgICAgICAgICAgICR7bi5hdXRob3JzfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiJHtuLm1hdGVyaWFsc1swXS5wYXRofVwiPiA8aSBjbGFzcz1cIiR7bi5pY29uMX1cIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAke24ubWF0ZXJpYWxzWzBdLmxhYmVsfSA8L2E+IHxcbiAgICAgICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIke24ubWF0ZXJpYWxzWzFdLnBhdGh9XCI+IDxpIGNsYXNzPVwiJHtuLmljb24yfVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgJHtuLm1hdGVyaWFsc1sxXS5sYWJlbH0gPC9hPlxuICAgICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8YnI+YFxuICAgICkuam9pbignJyk7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKGQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBgXG4gICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmFja3RpdGxlXCIgaHJlZj1cImluZGV4Lmh0bWxcIiB0b3A6MzBweD5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+IEdvIEJhY2s8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuIDxoMSBjbGFzcz1cInBhZ2V0aXRsZVwiPiR7ZC50aXRsZX08L2gxPlxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgIDxzdHlsZT4uZW1iZWQtY29udGFpbmVyIHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiA4MCU7IGhlaWdodDogMDsgbWF4LXdpZHRoOiA4MCU7fSAuZW1iZWQtY29udGFpbmVyIGlmcmFtZSwgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsIC5lbWJlZC1jb250YWluZXIgaWZyYW1le3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO30gc21hbGx7cG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA0MDsgYm90dG9tOiAwOyBtYXJnaW4tYm90dG9tOiAtMTVweDt9PC9zdHlsZT48ZGl2IGNsYXNzPVwiZW1iZWQtY29udGFpbmVyXCI+PHNtYWxsPjxhIGhyZWY9XCIvL2xpenp5bG92ZXNkYXRhLm1hcHMuYXJjZ2lzLmNvbS9hcHBzL0VtYmVkL2luZGV4Lmh0bWw/d2VibWFwPTEwMDg5MTZlM2MwNTQ4NzRhODc3NmRjNjNhMGJmMzJmJmV4dGVudD0tOTguMTI4MSwzMC4xMTg4LC05Ny40NDQyLDMwLjQ5OTEmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJUWCBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0xMDA4OTE2ZTNjMDU0ODc0YTg3NzZkYzYzYTBiZjMyZiZleHRlbnQ9LTk4LjEyODEsMzAuMTE4OCwtOTcuNDQ0MiwzMC40OTkxJmhvbWU9dHJ1ZSZ6b29tPXRydWUmcHJldmlld0ltYWdlPXRydWUmc2NhbGU9dHJ1ZSZzZWFyY2g9dHJ1ZSZzZWFyY2hleHRlbnQ9dHJ1ZSZkZXRhaWxzPXRydWUmbGVnZW5kbGF5ZXJzPXRydWUmYWN0aXZlX3BhbmVsPWRldGFpbHMmZGlzYWJsZV9zY3JvbGw9dHJ1ZSZ0aGVtZT1saWdodFwiPjwvaWZyYW1lPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgPGJyPlxuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPVwicGFnZXRpdGxlXCI+XG4gICAgICAgICBIb3cgdG8gVXNlIHRoZSBNYXBcbiAgICAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImRlc2NyaXB0aW9uXCI+ICR7ZC5kZXNjcmlwdGlvbn0gPC9kaXY+XG4gIDwvZGl2PlxuICAgIDxicj5cbiAgXG4gIDxkaXY+XG4gIDxicj5cblxuICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICBcbiAgPC9kaXY+XG4gIDxicj5cbiAgPC9kaXY+IGBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlMihkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxuICAgIDxuYXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJhY2t0aXRsZVwiIGhyZWY9XCJpbmRleC5odG1sXCIgdG9wOjMwcHg+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPiBHbyBCYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbjxoMSBjbGFzcz1cInBhZ2V0aXRsZVwiPiR7ZC50aXRsZX08L2gxPlxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgIDxzdHlsZT4uZW1iZWQtY29udGFpbmVyIHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiA4MCU7IGhlaWdodDogMDsgbWF4LXdpZHRoOiA4MCU7fSAuZW1iZWQtY29udGFpbmVyIGlmcmFtZSwgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsIC5lbWJlZC1jb250YWluZXIgaWZyYW1le3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO30gc21hbGx7cG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA0MDsgYm90dG9tOiAwOyBtYXJnaW4tYm90dG9tOiAtMTVweDt9PC9zdHlsZT48ZGl2IGNsYXNzPVwiZW1iZWQtY29udGFpbmVyXCI+PHNtYWxsPjxhIGhyZWY9XCIvL2xpenp5bG92ZXNkYXRhLm1hcHMuYXJjZ2lzLmNvbS9hcHBzL0VtYmVkL2luZGV4Lmh0bWw/d2VibWFwPWE4OGRjMmJmMDcxNzQ3Mjk5ODY1OTcxNTBiNGRhYThkJmV4dGVudD0tNzMuOTE0NSw0MC43NzczLC03My43NzY4LDQwLjg0NDQmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJOWSBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD1hODhkYzJiZjA3MTc0NzI5OTg2NTk3MTUwYjRkYWE4ZCZleHRlbnQ9LTczLjkxNDUsNDAuNzc3MywtNzMuNzc2OCw0MC44NDQ0JmhvbWU9dHJ1ZSZ6b29tPXRydWUmcHJldmlld0ltYWdlPXRydWUmc2NhbGU9dHJ1ZSZzZWFyY2g9dHJ1ZSZzZWFyY2hleHRlbnQ9dHJ1ZSZkZXRhaWxzPXRydWUmbGVnZW5kbGF5ZXJzPXRydWUmYWN0aXZlX3BhbmVsPWRldGFpbHMmZGlzYWJsZV9zY3JvbGw9dHJ1ZSZ0aGVtZT1saWdodFwiPjwvaWZyYW1lPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3MgPVwicGFnZXRpdGxlXCI+XG4gICAgICAgICAgICBIb3cgdG8gVXNlIHRoZSBNYXBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8YnI+XG5cbiAgPGRpdj5cbiAgPGJyPlxuXG4gIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgPC9mb290ZXI+XG4gIFxuICA8L2Rpdj5cbiAgPGJyPlxuICA8L2Rpdj4gYFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJiYWNrdGl0bGVcIiBocmVmPVwiaW5kZXguaHRtbFwiIHRvcDozMHB4PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT4gR28gQmFjazwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxoMSBjbGFzcz1cInBhZ2V0aXRsZVwiPiR7ZC50aXRsZX08L2gxPlxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgICAgICA8c3R5bGU+LmVtYmVkLWNvbnRhaW5lciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogODAlOyBoZWlnaHQ6IDA7IG1heC13aWR0aDogODAlO30gLmVtYmVkLWNvbnRhaW5lciBpZnJhbWUsIC5lbWJlZC1jb250YWluZXIgb2JqZWN0LCAuZW1iZWQtY29udGFpbmVyIGlmcmFtZXtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTt9IHNtYWxse3Bvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNDA7IGJvdHRvbTogMDsgbWFyZ2luLWJvdHRvbTogLTE1cHg7fTwvc3R5bGU+PGRpdiBjbGFzcz1cImVtYmVkLWNvbnRhaW5lclwiPjxzbWFsbD48YSBocmVmPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJTRiBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZwcmV2aWV3SW1hZ2U9dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCI+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8YnI+XG48ZGl2PlxuICAgICAgPGRpdiBjbGFzcyA9XCJwYWdldGl0bGVcIj5cbiAgICAgICAgICAgICAgSG93IHRvIFVzZSB0aGUgTWFwXG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgPGJyPlxuICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICBcbiAgPC9kaXY+XG4gIDxicj5cbiAgPC9kaXY+IGBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKXtcbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BaXJibmIgUHJpY2UgRGlzdHJpYnV0aW9uIE1hcHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICR7cmVuZGVyUHJvamVjdEl0ZW1zKHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbXMocHJvamVjdHMpe1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoZD0+YFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZC50ZWFzZXIxfVwiIHdpZHRoPTMyNXB4PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCI/cHJvamVjdD0ke2QuaWR9XCI+PHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYCkuam9pbignJyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=