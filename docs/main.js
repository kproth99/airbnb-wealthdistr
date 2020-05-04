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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL3NyYy9Db21wb25lbnRzL0Fib3V0LmpzIiwid2VicGFjazovLy8uL2RvY3Mvc3JjL0NvbXBvbmVudHMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL2RvY3Mvc3JjL0NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0UGFnZTIuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0UGFnZTMuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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QTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CLHFCQUFxQixXQUFXLGlCQUFpQiwyRUFBMkUsbUJBQW1CLFFBQVEsU0FBUyxhQUFhLGVBQWUsT0FBTyxtQkFBbUIsYUFBYSxXQUFXLHVCQUF1QixzV0FBc1c7QUFDdnFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQSx3Q0FBd0MsS0FBSyxZQUFZLFFBQVE7QUFDakU7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RvY3MvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcmVuZGVyTWFpblBhZ2UgZnJvbSAnLi9zcmMvQ29tcG9uZW50cy9NYWluUGFnZS5qcydcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZSBmcm9tICcuL3NyYy9Db21wb25lbnRzL1Byb2plY3RQYWdlLmpzJ1xuaW1wb3J0IHJlbmRlclByb2plY3RQYWdlMiBmcm9tICcuL3NyYy9Db21wb25lbnRzL1Byb2plY3RQYWdlMi5qcydcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZTMgZnJvbSAnLi9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0UGFnZTMuanMnXG5cbmZldGNoKFwiYXNzZXRzL2RhdGEuanNvblwiKVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdHMucGFyYW0nLCBwYXJhbXMuZ2V0KCdwcm9qZWN0JykpO1xuICAgICAgICBpZiAocGFyYW1zLmdldChcInByb2plY3RcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbmRlck1haW5QYWdlKGRhdGEpOyAgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBcImF1c3RpblwiKXtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBpZDtcbiAgICAgICAgfSApO1xuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW1zLmdldChcInByb2plY3RcIikgPT09IFwibmV3eW9ya1wiKXtcbiAgICAgICAgbGV0IGlkID0gcGFyYW1zLmdldChcInByb2plY3RcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuaWQpXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC5pZCA9PT0gaWQ7XG4gICAgfSApO1xuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZTIocHJvamVjdCk7XG59XG4gICAgZWxzZSBpZiAocGFyYW1zLmdldChcInByb2plY3RcIikgPT09IFwic2FuZnJhblwiKXtcbiAgICBsZXQgaWQgPSBwYXJhbXMuZ2V0KFwicHJvamVjdFwiKTtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5pZClcbiAgICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT09IGlkO1xufSApO1xuICAgIHJlbmRlclByb2plY3RQYWdlMyhwcm9qZWN0KTtcbn1cbiAgICBcbn0pO1xuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9aGVhZGVydGl0bGU+PHN0cm9uZz4gTWVldCBvdXIgR3JvdXAgTWVtYmVycyE8L3N0cm9uZz48YnI+IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNjJcIj5cbiAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzF9XCIgPlxuICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4gPHN0cm9uZz4gS2llcmFuIFJvdGggPC9zdHJvbmc+IDxicj4gQ2xhc3Mgb2YgMjAyMSA8YnI+IEIuUy4gaW4gQ29tcHV0ZXIgU2NpZW5jZTsgQi5TLiBpbiBNYXJrZXRpbmcgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9raWVyYW4tcm90aC04YWFhNTExODkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgIDxpICBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gTGlua2VkSW48L2E+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzJ9XCIgPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+IDxzdHJvbmc+IExpenp5IEhhbmxleSA8L3N0cm9uZz4gPGJyPiBDbGFzcyBvZiAyMDIwIDxicj4gQi5BLiBpbiBDb21wdXRlciBTY2llbmNlOyBCLlMuIGluIE1hbmFnZW1lbnQsIENvbmNlbnRyYXRpb25zIGluIEZpbmFuY2UgJiBJbmZvcm1hdGlvbiBTeXN0ZW1zIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGl6enloYW5sZXkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aSAgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+IExpbmtlZEluPC9hPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02MlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90bzN9XCIgPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+IDxzdHJvbmc+IENhdHJpb25hIFN1bGxpdmFuIDwvc3Ryb25nPiA8YnI+IENsYXNzIG9mIDIwMjAgPGJyPiBCLkEuIGluIENvbXB1dGVyIFNjaWVuY2UgPC9maWdjYXB0aW9uPiAgIFxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jYXRyaW9uYS1zdWxsaXZhbi04NDQ4NzgxNTMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aSAgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+IExpbmtlZEluPC9hPiAgXG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZmlsZS1pbWdcIiBzcmM9XCIke2Fib3V0LnBob3RvNH1cIiA+XG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+IDxzdHJvbmc+IEtldmluIExpIDwvc3Ryb25nPiA8YnI+IENsYXNzIG9mIDIwMjAgPGJyPiBCLkEuIGluIENvbXB1dGVyIFNjaWVuY2UgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkFib3V0PC9oMT5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPlxuICAgICAgICAgJHthYm91dC5kZXNjfSBcbiAgICAgICAgIDxwPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGBcbiAgICApO1xufSIsImltcG9ydCByZW5kZXJBYm91dCBmcm9tICcuL0Fib3V0LmpzJ1xuaW1wb3J0IHJlbmRlck5hdmJhciBmcm9tICcuL05hdmJhci5qcydcbmltcG9ydCByZW5kZXJOZXdzIGZyb20gJy4vTmV3cy5qcydcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL1Byb2plY3RzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShkYXRhKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtyZW5kZXJOYXZiYXIoJ21haW4nLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7cmVuZGVyQWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgICR7cmVuZGVyUHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XG4gICAgICAgICR7cmVuZGVyTmV3cyhkYXRhLm5ld3MpfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICAgICAgICA8L2RpdlxuICAgICAgICBgO1xuICAgICAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJOYXZiYXIobmF2YmFyKXtcbiAgICByZXR1cm4gKFxuICAgICAgICBgPGRpdiBjbGFzcz1cInBhcmFsbGF4XCI+PC9kaXY+XG4gICAgICAgIDxuYXY+IFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9qZWN0c1wiPk1hcHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPkRlbGl2ZXJhYmxlczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgIDwvbmF2PmBcbiAgICAgKTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck5ld3MobmV3cykge1xuICAgIHJldHVybiBgXG4gICAgIDxzZWN0aW9uIGlkID0gXCJuZXdzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UHJvamVjdCBEZWxpdmVyYWJsZXM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7cmVuZGVyTmV3c0l0ZW1zKG5ld3MpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld3NJdGVtcyhuZXdzKXtcbiAgICByZXR1cm4gbmV3cy5tYXAoXG4gICAgICAgIG4gPT4gYFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaXZlcmFibGUtdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCI/ZGVsaXZlcmFibGU9JHtuLmlkfVwiPjxzdHJvbmc+JHtuLnRpdGxlfTwvc3Ryb25nPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPiBcbiAgICAgICAgICAgIDxlbT4ke24uZGF0ZX0gPC9lbT4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxhdXRob3JzXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj4gXG4gICAgICAgICAgICAgICAgJHtuLmF1dGhvcnN9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIke24ubWF0ZXJpYWxzWzBdLnBhdGh9XCI+IDxpIGNsYXNzPVwiJHtuLmljb24xfVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICR7bi5tYXRlcmlhbHNbMF0ubGFiZWx9IDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDxicj5gXG4gICAgKS5qb2luKCcnKTtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJiYWNrdGl0bGVcIiBocmVmPVwiaW5kZXguaHRtbFwiIHRvcDozMHB4PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT4gR28gQmFjazwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gPGgxIGNsYXNzPVwicGFnZXRpdGxlXCI+JHtkLnRpdGxlfTwvaDE+XG4gIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwXCI+IFxuICAgICAgICAgICAgPHN0eWxlPi5lbWJlZC1jb250YWluZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDgwJTsgaGVpZ2h0OiAwOyBtYXgtd2lkdGg6IDgwJTt9IC5lbWJlZC1jb250YWluZXIgaWZyYW1lLCAuZW1iZWQtY29udGFpbmVyIG9iamVjdCwgLmVtYmVkLWNvbnRhaW5lciBpZnJhbWV7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7fSBzbWFsbHtwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDQwOyBib3R0b206IDA7IG1hcmdpbi1ib3R0b206IC0xNXB4O308L3N0eWxlPjxkaXYgY2xhc3M9XCJlbWJlZC1jb250YWluZXJcIj48c21hbGw+PGEgaHJlZj1cIi8vbGl6enlsb3Zlc2RhdGEubWFwcy5hcmNnaXMuY29tL2FwcHMvRW1iZWQvaW5kZXguaHRtbD93ZWJtYXA9MTAwODkxNmUzYzA1NDg3NGE4Nzc2ZGM2M2EwYmYzMmYmZXh0ZW50PS05OC4xMjgxLDMwLjExODgsLTk3LjQ0NDIsMzAuNDk5MSZob21lPXRydWUmem9vbT10cnVlJnNjYWxlPXRydWUmc2VhcmNoPXRydWUmc2VhcmNoZXh0ZW50PXRydWUmZGV0YWlscz10cnVlJmxlZ2VuZGxheWVycz10cnVlJmFjdGl2ZV9wYW5lbD1kZXRhaWxzJmRpc2FibGVfc2Nyb2xsPXRydWUmdGhlbWU9bGlnaHRcIiBzdHlsZT1cImNvbG9yOiMwMDAwRkY7dGV4dC1hbGlnbjpsZWZ0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBsYXJnZXIgbWFwPC9hPjwvc21hbGw+PGJyPjxpZnJhbWUgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI0MDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiB0aXRsZT1cIlRYIGFpcmJuYiBwcmljZXNcIiBzcmM9XCIvL2xpenp5bG92ZXNkYXRhLm1hcHMuYXJjZ2lzLmNvbS9hcHBzL0VtYmVkL2luZGV4Lmh0bWw/d2VibWFwPTEwMDg5MTZlM2MwNTQ4NzRhODc3NmRjNjNhMGJmMzJmJmV4dGVudD0tOTguMTI4MSwzMC4xMTg4LC05Ny40NDQyLDMwLjQ5OTEmaG9tZT10cnVlJnpvb209dHJ1ZSZwcmV2aWV3SW1hZ2U9dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCI+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICA8YnI+XG4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9XCJwYWdldGl0bGVcIj5cbiAgICAgICAgIEhvdyB0byBVc2UgdGhlIE1hcFxuICAgICAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZGVzY3JpcHRpb25cIj4gJHtkLmRlc2NyaXB0aW9ufSA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgPGJyPlxuICBcbiAgPGRpdj5cbiAgPGJyPlxuXG4gIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgPC9mb290ZXI+XG4gIFxuICA8L2Rpdj5cbiAgPGJyPlxuICA8L2Rpdj4gYFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UyKGQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBgXG4gICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmFja3RpdGxlXCIgaHJlZj1cImluZGV4Lmh0bWxcIiB0b3A6MzBweD5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+IEdvIEJhY2s8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuPGgxIGNsYXNzPVwicGFnZXRpdGxlXCI+JHtkLnRpdGxlfTwvaDE+XG4gIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwXCI+IFxuICAgICAgICAgICAgPHN0eWxlPi5lbWJlZC1jb250YWluZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDgwJTsgaGVpZ2h0OiAwOyBtYXgtd2lkdGg6IDgwJTt9IC5lbWJlZC1jb250YWluZXIgaWZyYW1lLCAuZW1iZWQtY29udGFpbmVyIG9iamVjdCwgLmVtYmVkLWNvbnRhaW5lciBpZnJhbWV7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7fSBzbWFsbHtwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDQwOyBib3R0b206IDA7IG1hcmdpbi1ib3R0b206IC0xNXB4O308L3N0eWxlPjxkaXYgY2xhc3M9XCJlbWJlZC1jb250YWluZXJcIj48c21hbGw+PGEgaHJlZj1cIi8vbGl6enlsb3Zlc2RhdGEubWFwcy5hcmNnaXMuY29tL2FwcHMvRW1iZWQvaW5kZXguaHRtbD93ZWJtYXA9YTg4ZGMyYmYwNzE3NDcyOTk4NjU5NzE1MGI0ZGFhOGQmZXh0ZW50PS03My45MTQ1LDQwLjc3NzMsLTczLjc3NjgsNDAuODQ0NCZob21lPXRydWUmem9vbT10cnVlJnNjYWxlPXRydWUmc2VhcmNoPXRydWUmc2VhcmNoZXh0ZW50PXRydWUmZGV0YWlscz10cnVlJmxlZ2VuZGxheWVycz10cnVlJmFjdGl2ZV9wYW5lbD1kZXRhaWxzJmRpc2FibGVfc2Nyb2xsPXRydWUmdGhlbWU9bGlnaHRcIiBzdHlsZT1cImNvbG9yOiMwMDAwRkY7dGV4dC1hbGlnbjpsZWZ0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBsYXJnZXIgbWFwPC9hPjwvc21hbGw+PGJyPjxpZnJhbWUgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI0MDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiB0aXRsZT1cIk5ZIGFpcmJuYiBwcmljZXNcIiBzcmM9XCIvL2xpenp5bG92ZXNkYXRhLm1hcHMuYXJjZ2lzLmNvbS9hcHBzL0VtYmVkL2luZGV4Lmh0bWw/d2VibWFwPWE4OGRjMmJmMDcxNzQ3Mjk5ODY1OTcxNTBiNGRhYThkJmV4dGVudD0tNzMuOTE0NSw0MC43NzczLC03My43NzY4LDQwLjg0NDQmaG9tZT10cnVlJnpvb209dHJ1ZSZwcmV2aWV3SW1hZ2U9dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCI+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnI+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcyA9XCJwYWdldGl0bGVcIj5cbiAgICAgICAgICAgIEhvdyB0byBVc2UgdGhlIE1hcFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImRlc2NyaXB0aW9uXCI+ICR7ZC5kZXNjcmlwdGlvbn0gPC9kaXY+XG4gIDwvZGl2PlxuICAgIDxicj5cblxuICA8ZGl2PlxuICA8YnI+XG5cbiAgPGZvb3Rlcj5Db3B5cmlnaHQgwqkgMjAyMCA8L2Zvb3Rlcj5cbiAgXG4gIDwvZGl2PlxuICA8YnI+XG4gIDwvZGl2PiBgXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxuICAgIDxuYXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJhY2t0aXRsZVwiIGhyZWY9XCJpbmRleC5odG1sXCIgdG9wOjMwcHg+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPiBHbyBCYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPiBcbiAgICAgICAgICAgICAgICA8c3R5bGU+LmVtYmVkLWNvbnRhaW5lciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogODAlOyBoZWlnaHQ6IDA7IG1heC13aWR0aDogODAlO30gLmVtYmVkLWNvbnRhaW5lciBpZnJhbWUsIC5lbWJlZC1jb250YWluZXIgb2JqZWN0LCAuZW1iZWQtY29udGFpbmVyIGlmcmFtZXtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTt9IHNtYWxse3Bvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNDA7IGJvdHRvbTogMDsgbWFyZ2luLWJvdHRvbTogLTE1cHg7fTwvc3R5bGU+PGRpdiBjbGFzcz1cImVtYmVkLWNvbnRhaW5lclwiPjxzbWFsbD48YSBocmVmPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojMDAwMEZGO3RleHQtYWxpZ246bGVmdFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGFyZ2VyIG1hcDwvYT48L3NtYWxsPjxicj48aWZyYW1lIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgdGl0bGU9XCJTRiBhaXJibmIgcHJpY2VzXCIgc3JjPVwiLy9saXp6eWxvdmVzZGF0YS5tYXBzLmFyY2dpcy5jb20vYXBwcy9FbWJlZC9pbmRleC5odG1sP3dlYm1hcD0zZWFjZWU2MTRiMzA0MjA5YTkxYWFhZDgzNTg2MGFhYiZleHRlbnQ9LTEyMi40NzUxLDM3LjczNjMsLTEyMi4zODAzLDM3Ljc4NDYmaG9tZT10cnVlJnpvb209dHJ1ZSZwcmV2aWV3SW1hZ2U9dHJ1ZSZzY2FsZT10cnVlJnNlYXJjaD10cnVlJnNlYXJjaGV4dGVudD10cnVlJmRldGFpbHM9dHJ1ZSZsZWdlbmRsYXllcnM9dHJ1ZSZhY3RpdmVfcGFuZWw9ZGV0YWlscyZkaXNhYmxlX3Njcm9sbD10cnVlJnRoZW1lPWxpZ2h0XCI+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8YnI+XG48ZGl2PlxuICAgICAgPGRpdiBjbGFzcyA9XCJwYWdldGl0bGVcIj5cbiAgICAgICAgICAgICAgSG93IHRvIFVzZSB0aGUgTWFwXG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJkZXNjcmlwdGlvblwiPiAke2QuZGVzY3JpcHRpb259IDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgPGJyPlxuICA8Zm9vdGVyPkNvcHlyaWdodCDCqSAyMDIwIDwvZm9vdGVyPlxuICBcbiAgPC9kaXY+XG4gIDxicj5cbiAgPC9kaXY+IGBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKXtcbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BaXJibmIgUHJpY2UgRGlzdHJpYnV0aW9uIE1hcHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICR7cmVuZGVyUHJvamVjdEl0ZW1zKHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbXMocHJvamVjdHMpe1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoZD0+YFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZC50ZWFzZXIxfVwiIHdpZHRoPTMyNXB4PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCI/cHJvamVjdD0ke2QuaWR9XCI+PHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYCkuam9pbignJyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=