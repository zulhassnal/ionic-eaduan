function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab2-tab2-module~tab3-tab3-module"], {
  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExploreContainerComponent = /*#__PURE__*/function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    ExploreContainerComponent.ɵfac = function ExploreContainerComponent_Factory(t) {
      return new (t || ExploreContainerComponent)();
    };

    ExploreContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExploreContainerComponent,
      selectors: [["app-explore-container"]],
      inputs: {
        name: "name"
      },
      decls: 7,
      vars: 1,
      consts: [["id", "container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://ionicframework.com/docs/components"]],
      template: function ExploreContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UI Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96dWxoYXNzbmFsZmFpc2FsaW1hbm1vaXMvRG9jdW1lbnRzL2lvbmljL2lvbmljLWVhZHVhbi9zcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-explore-container',
          templateUrl: './explore-container.component.html',
          styleUrls: ['./explore-container.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExploreContainerComponentModule
    });
    ExploreContainerComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExploreContainerComponentModule_Factory(t) {
        return new (t || ExploreContainerComponentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExploreContainerComponentModule, {
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
          exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Camera = _capacitor_core__WEBP.Camera,
        Filesystem = _capacitor_core__WEBP.Filesystem,
        Storage = _capacitor_core__WEBP.Storage;

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService(platform) {
        _classCallCheck(this, PhotoService);

        this.photos = [];
        this.PHOTO_STORAGE = "photos";

        this.convertBlobToBase64 = function (blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        };

        this.platform = platform;
      }

      _createClass(PhotoService, [{
        key: "loadSaved",
        value: function loadSaved() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var photoList, _iterator, _step, photo, readFile;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photoList = _context.sent;
                    this.photos = JSON.parse(photoList.value) || []; // If running on the web...

                    if (this.platform.is('hybrid')) {
                      _context.next = 24;
                      break;
                    }

                    // Display the photo by reading into base64 format
                    _iterator = _createForOfIteratorHelper(this.photos);
                    _context.prev = 6;

                    _iterator.s();

                  case 8:
                    if ((_step = _iterator.n()).done) {
                      _context.next = 16;
                      break;
                    }

                    photo = _step.value;
                    _context.next = 12;
                    return Filesystem.readFile({
                      path: photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 12:
                    readFile = _context.sent;
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = "data:image/jpeg;base64,".concat(readFile.data);

                  case 14:
                    _context.next = 8;
                    break;

                  case 16:
                    _context.next = 21;
                    break;

                  case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](6);

                    _iterator.e(_context.t0);

                  case 21:
                    _context.prev = 21;

                    _iterator.f();

                    return _context.finish(21);

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 18, 21, 24]]);
          }));
        }
        /* Use the device camera to take a photo:
        // https://capacitor.ionicframework.com/docs/apis/camera
        
        // Store the photo data into permanent file storage:
        // https://capacitor.ionicframework.com/docs/apis/filesystem
        
        // Store a reference to all photo filepaths using Storage API:
        // https://capacitor.ionicframework.com/docs/apis/storage
        */

      }, {
        key: "addNewToGallery",
        value: function addNewToGallery() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                      quality: 100 // highest quality (0 to 100)

                    });

                  case 2:
                    capturedPhoto = _context2.sent;
                    _context2.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context2.sent;
                    // Add new photo to Photos array
                    this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: JSON.stringify(this.photos)
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addNewFromGallery",
        value: function addNewFromGallery() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos,
                      quality: 100 // highest quality (0 to 100)

                    });

                  case 2:
                    capturedPhoto = _context3.sent;
                    _context3.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context3.sent;
                    // Add new photo to Photos array
                    this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: JSON.stringify(this.photos)
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Save picture to file on device

      }, {
        key: "savePicture",
        value: function savePicture(cameraPhoto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var base64Data, fileName, savedFile;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.readAsBase64(cameraPhoto);

                  case 2:
                    base64Data = _context4.sent;
                    // Write the file to the data directory
                    fileName = new Date().getTime() + '.jpeg';
                    _context4.next = 6;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: base64Data,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 6:
                    savedFile = _context4.sent;

                    if (!this.platform.is('hybrid')) {
                      _context4.next = 11;
                      break;
                    }

                    return _context4.abrupt("return", {
                      filepath: savedFile.uri,
                      webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri)
                    });

                  case 11:
                    return _context4.abrupt("return", {
                      filepath: fileName,
                      webviewPath: cameraPhoto.webPath
                    });

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Read camera photo into base64 format based on the platform the app is running on

      }, {
        key: "readAsBase64",
        value: function readAsBase64(cameraPhoto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var file, response, blob;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context5.next = 7;
                      break;
                    }

                    _context5.next = 3;
                    return Filesystem.readFile({
                      path: cameraPhoto.path
                    });

                  case 3:
                    file = _context5.sent;
                    return _context5.abrupt("return", file.data);

                  case 7:
                    _context5.next = 9;
                    return fetch(cameraPhoto.webPath);

                  case 9:
                    response = _context5.sent;
                    _context5.next = 12;
                    return response.blob();

                  case 12:
                    blob = _context5.sent;
                    _context5.next = 15;
                    return this.convertBlobToBase64(blob);

                  case 15:
                    return _context5.abrupt("return", _context5.sent);

                  case 16:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Delete picture by removing it from reference data and the filesystem

      }, {
        key: "deletePicture",
        value: function deletePicture(photo, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var filename;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // Remove this photo from the Photos reference data array
                    this.photos.splice(position, 1); // Update photos array cache by overwriting the existing photo array

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: JSON.stringify(this.photos)
                    }); // delete photo file from filesystem

                    filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
                    _context6.next = 5;
                    return Filesystem.deleteFile({
                      path: filename,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "deleteAllPicture",
        value: function deleteAllPicture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var photoList, _iterator2, _step2, photo;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photoList = _context7.sent;
                    this.photos = JSON.parse(photoList.value) || []; // If running on the web...

                    if (this.platform.is('hybrid')) {
                      _context7.next = 22;
                      break;
                    }

                    // Display the photo by reading into base64 format
                    _iterator2 = _createForOfIteratorHelper(this.photos);
                    _context7.prev = 6;

                    _iterator2.s();

                  case 8:
                    if ((_step2 = _iterator2.n()).done) {
                      _context7.next = 14;
                      break;
                    }

                    photo = _step2.value;
                    _context7.next = 12;
                    return Filesystem.deleteFile({
                      path: photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 12:
                    _context7.next = 8;
                    break;

                  case 14:
                    _context7.next = 19;
                    break;

                  case 16:
                    _context7.prev = 16;
                    _context7.t0 = _context7["catch"](6);

                    _iterator2.e(_context7.t0);

                  case 19:
                    _context7.prev = 19;

                    _iterator2.f();

                    return _context7.finish(19);

                  case 22:
                    Storage.clear(); // Storage.set({
                    //   key: this.PHOTO_STORAGE,
                    //   value: ""
                    // });

                  case 23:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[6, 16, 19, 22]]);
          }));
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ɵfac = function PhotoService_Factory(t) {
      return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]));
    };

    PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PhotoService,
      factory: PhotoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~tab2-tab2-module~tab3-tab3-module-es5.js.map