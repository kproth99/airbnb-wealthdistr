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
            <img class="profile-img" src="${about.photo4}" >
                <figcaption> <strong> Kevin Li </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
            </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo3}" >
                <figcaption> <strong> Catriona Sullivan </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
             <a href=“www.linkedin.com/in/catriona-sullivan-844878153” target="_blank">
             <i  class="fab fa-linkedin"></i> LinkedIn</a>       
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
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.projects)}
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.news)}
            <div>
             <footer>Copyright © 2020 </footer>
        </div
        `;
        
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

/***/ "./src/Components/News.js":
/*!********************************!*\
  !*** ./src/Components/News.js ***!
  \********************************/
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
            <a href="?deliverable=${n.id}"><strong>${n.title}</strong></a>
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
                    ${n.materials[0].label} </a>
                </span> 
            </div>
            
        </div>
        </div>
    <br>`
    ).join('');
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

/***/ "./src/Components/ProjectPage2.js":
/*!****************************************!*\
  !*** ./src/Components/ProjectPage2.js ***!
  \****************************************/
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
                    <a class="title" href="index.html" top:30px>
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

/***/ "./src/Components/ProjectPage3.js":
/*!****************************************!*\
  !*** ./src/Components/ProjectPage3.js ***!
  \****************************************/
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

/***/ "./src/Components/Projects.js":
/*!************************************!*\
  !*** ./src/Components/Projects.js ***!
  \************************************/
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
/* harmony import */ var _Components_ProjectPage2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/ProjectPage2.js */ "./src/Components/ProjectPage2.js");
/* harmony import */ var _Components_ProjectPage3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/ProjectPage3.js */ "./src/Components/ProjectPage3.js");





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
        else if (params.get("project") === "austin"){
            let id = params.get("project");
            console.log(id);
            let project = data.projects.find(function(project){
            console.log(project.id)
                return project.id === id;
        } );
        Object(_Components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
    }
    else if (params.get("project") === "newyork"){
        let id = params.get("project");
        console.log(id);
        let project = data.projects.find(function(project){
        console.log(project.id)
            return project.id === id;
    } );
        Object(_Components_ProjectPage2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
}
    else if (params.get("project") === "sanfran"){
    let id = params.get("project");
    console.log(id);
    let project = data.projects.find(function(project){
    console.log(project.id)
        return project.id === id;
} );
    Object(_Components_ProjectPage3_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
}
    
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Byb2plY3RQYWdlMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0Esd0NBQXdDLEtBQUssWUFBWSxRQUFRO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNNO0FBQ0U7QUFDQTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUVBQWMsTztBQUMxQixTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsMEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsMkVBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksMkVBQWtCO0FBQ3RCOztBQUVBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9aGVhZGVydGl0bGU+PHN0cm9uZz4gTWVldCBvdXIgR3JvdXAgTWVtYmVycyE8L3N0cm9uZz48YnI+IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNjJcIj5cbiAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzF9XCIgPlxuICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4gPHN0cm9uZz4gS2llcmFuIFJvdGggPC9zdHJvbmc+IDxicj4gQ2xhc3Mgb2YgMjAyMSA8YnI+IEIuUy4gaW4gQ29tcHV0ZXIgU2NpZW5jZTsgQi5TLiBpbiBNYXJrZXRpbmcgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9raWVyYW4tcm90aC04YWFhNTExODkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgIDxpICBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gTGlua2VkSW48L2E+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzJ9XCIgPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+IDxzdHJvbmc+IExpenp5IEhhbmxleSA8L3N0cm9uZz4gPGJyPiBDbGFzcyBvZiAyMDIwIDxicj4gQi5BLiBpbiBDb21wdXRlciBTY2llbmNlOyBCLlMuIGluIE1hbmFnZW1lbnQsIENvbmNlbnRyYXRpb25zIGluIEZpbmFuY2UgJiBJbmZvcm1hdGlvbiBTeXN0ZW1zIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGl6enloYW5sZXkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aSAgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+IExpbmtlZEluPC9hPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzR9XCIgPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiA8c3Ryb25nPiBLZXZpbiBMaSA8L3N0cm9uZz4gPGJyPiBDbGFzcyBvZiAyMDIwIDxicj4gQi5BLiBpbiBDb21wdXRlciBTY2llbmNlIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzN9XCIgPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiA8c3Ryb25nPiBDYXRyaW9uYSBTdWxsaXZhbiA8L3N0cm9uZz4gPGJyPiBDbGFzcyBvZiAyMDIwIDxicj4gQi5BLiBpbiBDb21wdXRlciBTY2llbmNlIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICA8YSBocmVmPeKAnHd3dy5saW5rZWRpbi5jb20vaW4vY2F0cmlvbmEtc3VsbGl2YW4tODQ0ODc4MTUz4oCdIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgIDxpICBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gTGlua2VkSW48L2E+ICAgICAgIFxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkFib3V0PC9oMT5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPlxuICAgICAgICAgJHthYm91dC5kZXNjfSBcbiAgICAgICAgIDxwPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGBcbiAgICApO1xufSIsImltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL0Fib3V0LmpzJ1xuaW1wb3J0IHJlbmRlck5hdmJhciBmcm9tICcuL05hdmJhci5qcydcbmltcG9ydCByZW5kZXJOZXdzIGZyb20gJy4vTmV3cy5qcydcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL1Byb2plY3RzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShkYXRhKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtyZW5kZXJOYXZiYXIoJ21haW4nLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7cmVuZGVyQWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgICR7cmVuZGVyUHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XG4gICAgICAgICR7cmVuZGVyTmV3cyhkYXRhLm5ld3MpfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICAgICAgICA8L2RpdlxuICAgICAgICBgO1xuICAgICAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJOYXZiYXIobmF2YmFyKXtcbiAgICByZXR1cm4gKFxuICAgICAgICBgPGRpdiBjbGFzcz1cInBhcmFsbGF4XCI+PC9kaXY+XG4gICAgICAgIDxuYXY+IFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9qZWN0c1wiPk1hcHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPkRlbGl2ZXJhYmxlczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgIDwvbmF2PmBcbiAgICAgKTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck5ld3MobmV3cykge1xuICAgIHJldHVybiBgXG4gICAgIDxzZWN0aW9uIGlkID0gXCJuZXdzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UHJvamVjdCBEZWxpdmVyYWJsZXM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7cmVuZGVyTmV3c0l0ZW1zKG5ld3MpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld3NJdGVtcyhuZXdzKXtcbiAgICByZXR1cm4gbmV3cy5tYXAoXG4gICAgICAgIG4gPT4gYFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaXZlcmFibGUtdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCI/ZGVsaXZlcmFibGU9JHtuLmlkfVwiPjxzdHJvbmc+JHtuLnRpdGxlfTwvc3Ryb25nPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPiBcbiAgICAgICAgICAgIDxlbT4ke24uZGF0ZX0gPC9lbT4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxhdXRob3JzXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj4gXG4gICAgICAgICAgICAgICAgJHtuLmF1dGhvcnN9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIke24ubWF0ZXJpYWxzWzBdLnBhdGh9XCI+IDxpIGNsYXNzPVwiJHtuLmljb24xfVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICR7bi5tYXRlcmlhbHNbMF0ubGFiZWx9IDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDxicj5gXG4gICAgKS5qb2luKCcnKTtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiIGhyZWY9XCJpbmRleC5odG1sXCIgdG9wOjMwcHg+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPiBHbyBCYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiA8aDEgY2xhc3M9XCJwYWdldGl0bGVcIj4ke2QudGl0bGV9PC9oMT5cbiAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBcIj4gXG4gICAgICAgICAgICA8c3R5bGU+LmVtYmVkLWNvbnRhaW5lciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogODAlOyBoZWlnaHQ6IDA7IG1heC13aWR0aDogODAlO30gLmVtYmVkLWNvbnRhaW5lciBpZnJhbWUsIC5lbWJlZC1jb250YWluZXIgb2JqZWN0LCAuZW1iZWQtY29udGFpbmVyIGlmcmFtZXtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTt9IHNtYWxse3Bvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNDA7IGJvdHRvbTogMDsgbWFyZ2luLWJvdHRvbTogLTE1cHg7fTwvc3R5bGU+PGRpdiBjbGFzcz1cImVtYmVkLWNvbnRhaW5lclwiPjxzbWFsbD48YSBocmVmPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0xMDA4OTE2ZTNjMDU0ODc0YTg3NzZkYzYzYTBiZjMyZiZleHRlbnQ9LTk4LjEyODEsMzAuMTE4OCwtOTcuNDQ0MiwzMC40OTkxJmhvbWU9dHJ1ZSZ6b29tPXRydWUmc2NhbGU9dHJ1ZSZzZWFyY2g9dHJ1ZSZzZWFyY2hleHRlbnQ9dHJ1ZSZkZXRhaWxzPXRydWUmbGVnZW5kbGF5ZXJzPXRydWUmYWN0aXZlX3BhbmVsPWRldGFpbHMmZGlzYWJsZV9zY3JvbGw9dHJ1ZSZ0aGVtZT1saWdodFwiIHN0eWxlPVwiY29sb3I6IzAwMDBGRjt0ZXh0LWFsaWduOmxlZnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IGxhcmdlciBtYXA8L2E+PC9zbWFsbD48YnI+PGlmcmFtZSB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjQwMFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCIgbWFyZ2luaGVpZ2h0PVwiMFwiIG1hcmdpbndpZHRoPVwiMFwiIHRpdGxlPVwiVFggYWlyYm5iIHByaWNlc1wiIHNyYz1cIi8vbGl6enlsb3Zlc2RhdGEubWFwcy5hcmNnaXMuY29tL2FwcHMvRW1iZWQvaW5kZXguaHRtbD93ZWJtYXA9MTAwODkxNmUzYzA1NDg3NGE4Nzc2ZGM2M2EwYmYzMmYmZXh0ZW50PS05OC4xMjgxLDMwLjExODgsLTk3LjQ0NDIsMzAuNDk5MSZob21lPXRydWUmem9vbT10cnVlJnByZXZpZXdJbWFnZT10cnVlJnNjYWxlPXRydWUmc2VhcmNoPXRydWUmc2VhcmNoZXh0ZW50PXRydWUmZGV0YWlscz10cnVlJmxlZ2VuZGxheWVycz10cnVlJmFjdGl2ZV9wYW5lbD1kZXRhaWxzJmRpc2FibGVfc2Nyb2xsPXRydWUmdGhlbWU9bGlnaHRcIj48L2lmcmFtZT48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIDxicj5cbiA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID1cInBhZ2V0aXRsZVwiPlxuICAgICAgICAgSG93IHRvIFVzZSB0aGUgTWFwXG4gICAgICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8YnI+XG4gIFxuICA8ZGl2PlxuICA8YnI+XG5cbiAgPGZvb3Rlcj5Db3B5cmlnaHQgwqkgMjAyMCA8L2Zvb3Rlcj5cbiAgXG4gIDwvZGl2PlxuICA8YnI+XG4gIDwvZGl2PiBgXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZTIoZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiIGhyZWY9XCJpbmRleC5odG1sXCIgdG9wOjMwcHg+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPiBHbyBCYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbjxoMSBjbGFzcz1cInBhZ2V0aXRsZVwiPiR7ZC50aXRsZX08L2gxPlxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgIDxzdHlsZT4uZW1iZWQtY29udGFpbmVyIHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiA4MCU7IGhlaWdodDogMDsgbWF4LXdpZHRoOiA4MCU7fSAuZW1iZWQtY29udGFpbmVyIGlmcmFtZSwgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsIC5lbWJlZC1jb250YWluZXIgaWZyYW1le3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO30gc21hbGx7cG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA0MDsgYm90dG9tOiAwOyBtYXJnaW4tYm90dG9tOiAtMTVweDt9PC9zdHlsZT48ZGl2IGNsYXNzPVwiZW1iZWQtY29udGFpbmVyXCI+PHNtYWxsPjxhIGhyZWY9XCIvL2xpenp5bG92ZXNkYXRhLm1hcHMuYXJjZ2lzLmNvbS9hcHBzL0VtYmVkL2luZGV4Lmh0bWw/d2VibWFwPWE4OGRjMmJmMDcxNzQ3Mjk5ODY1OTcxNTBiNGRhYThkJmV4dGVudD0tNzMuOTE0NSw0MC43NzczLC03My43NzY4LDQwLjg0NDQmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJOWSBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD1hODhkYzJiZjA3MTc0NzI5OTg2NTk3MTUwYjRkYWE4ZCZleHRlbnQ9LTczLjkxNDUsNDAuNzc3MywtNzMuNzc2OCw0MC44NDQ0JmhvbWU9dHJ1ZSZ6b29tPXRydWUmcHJldmlld0ltYWdlPXRydWUmc2NhbGU9dHJ1ZSZzZWFyY2g9dHJ1ZSZzZWFyY2hleHRlbnQ9dHJ1ZSZkZXRhaWxzPXRydWUmbGVnZW5kbGF5ZXJzPXRydWUmYWN0aXZlX3BhbmVsPWRldGFpbHMmZGlzYWJsZV9zY3JvbGw9dHJ1ZSZ0aGVtZT1saWdodFwiPjwvaWZyYW1lPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3MgPVwicGFnZXRpdGxlXCI+XG4gICAgICAgICAgICBIb3cgdG8gVXNlIHRoZSBNYXBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8YnI+XG5cbiAgPGRpdj5cbiAgPGJyPlxuXG4gIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgPC9mb290ZXI+XG4gIFxuICA8L2Rpdj5cbiAgPGJyPlxuICA8L2Rpdj4gYFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiIGhyZWY9XCJpbmRleC5odG1sXCIgdG9wOjMwcHg+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPiBHbyBCYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgICAgICA8c3R5bGU+LmVtYmVkLWNvbnRhaW5lciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogODAlOyBoZWlnaHQ6IDA7IG1heC13aWR0aDogODAlO30gLmVtYmVkLWNvbnRhaW5lciBpZnJhbWUsIC5lbWJlZC1jb250YWluZXIgb2JqZWN0LCAuZW1iZWQtY29udGFpbmVyIGlmcmFtZXtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTt9IHNtYWxse3Bvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNDA7IGJvdHRvbTogMDsgbWFyZ2luLWJvdHRvbTogLTE1cHg7fTwvc3R5bGU+PGRpdiBjbGFzcz1cImVtYmVkLWNvbnRhaW5lclwiPjxzbWFsbD48YSBocmVmPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJTRiBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZwcmV2aWV3SW1hZ2U9dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCI+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8YnI+XG48ZGl2PlxuICAgICAgPGRpdiBjbGFzcyA9XCJwYWdldGl0bGVcIj5cbiAgICAgICAgICAgICAgSG93IHRvIFVzZSB0aGUgTWFwXG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgPGJyPlxuICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICBcbiAgPC9kaXY+XG4gIDxicj5cbiAgPC9kaXY+IGBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKXtcbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BaXJibmIgUHJpY2UgRGlzdHJpYnV0aW9uIE1hcHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICR7cmVuZGVyUHJvamVjdEl0ZW1zKHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbXMocHJvamVjdHMpe1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoZD0+YFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZC50ZWFzZXIxfVwiIHdpZHRoPTMyNXB4PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCI/cHJvamVjdD0ke2QuaWR9XCI+PHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYCkuam9pbignJyk7XG59XG5cbiIsImltcG9ydCByZW5kZXJNYWluUGFnZSBmcm9tICcuL0NvbXBvbmVudHMvTWFpblBhZ2UuanMnXG5pbXBvcnQgcmVuZGVyUHJvamVjdFBhZ2UgZnJvbSAnLi9Db21wb25lbnRzL1Byb2plY3RQYWdlLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RQYWdlMiBmcm9tICcuL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UyLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RQYWdlMyBmcm9tICcuL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UzLmpzJ1xuXG5mZXRjaChcImFzc2V0cy9kYXRhLmpzb25cIilcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RzLnBhcmFtJywgcGFyYW1zLmdldCgncHJvamVjdCcpKTtcbiAgICAgICAgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZW5kZXJNYWluUGFnZShkYXRhKTsgIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChwYXJhbXMuZ2V0KFwicHJvamVjdFwiKSA9PT0gXCJhdXN0aW5cIil7XG4gICAgICAgICAgICBsZXQgaWQgPSBwYXJhbXMuZ2V0KFwicHJvamVjdFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5pZCA9PT0gaWQ7XG4gICAgICAgIH0gKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBcIm5ld3lvcmtcIil7XG4gICAgICAgIGxldCBpZCA9IHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKVxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT09IGlkO1xuICAgIH0gKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UyKHByb2plY3QpO1xufVxuICAgIGVsc2UgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBcInNhbmZyYW5cIil7XG4gICAgbGV0IGlkID0gcGFyYW1zLmdldChcInByb2plY3RcIik7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGxldCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuaWQpXG4gICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBpZDtcbn0gKTtcbiAgICByZW5kZXJQcm9qZWN0UGFnZTMocHJvamVjdCk7XG59XG4gICAgXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=