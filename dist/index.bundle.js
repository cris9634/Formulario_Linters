"use strict";
(self["webpackChunkformulario"] = self["webpackChunkformulario"] || []).push([["index"],{

/***/ "./src/js/modules/formHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/formHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.createElement('message-Container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green'; // estilo para el mensaje de éxito
      form.reset(); // opcional: resetea el formulario despues de enviarlo
    } else {
      messageContainer.textContent = 'Por favor complete todos los campos requeridos.';
      messageContainer.style.color = 'red'; // estilo para el mensaje de error
    }
  });
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/formHandler.js */ "./src/js/modules/formHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hCMkQ7O0FBRTNEO0FBQ0EsRUFBRSxzRUFBZ0I7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvanMvbW9kdWxlcy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBGb3JtSGFuZGxlcigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXJ2ZXktZm9ybScpO1xuICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWVzc2FnZS1Db250YWluZXInKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xuICAgIGNvbnN0IGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1iZXInKS52YWx1ZTtcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpLnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJjaG9pY2VcIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJykudmFsdWU7XG5cbiAgICBpZiAobmFtZSAmJiBlbWFpbCAmJiBhZ2UgJiYgZHJvcGRvd24gJiYgcmFkaW9CdXR0b25zICYmIGNoZWNrYm94ZXMubGVuZ3RoID4gMCAmJiBjb21tZW50cykge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdGT1JNVUxBUklPIEVOVklBRE8gQ09OIEVYSVRPJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBlc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIGXMgXhpdG9cbiAgICAgIGZvcm0ucmVzZXQoKTsgLy8gb3BjaW9uYWw6IHJlc2V0ZWEgZWwgZm9ybXVsYXJpbyBkZXNwdWVzIGRlIGVudmlhcmxvXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnUG9yIGZhdm9yIGNvbXBsZXRlIHRvZG9zIGxvcyBjYW1wb3MgcmVxdWVyaWRvcy4nO1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdyZWQnOyAvLyBlc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIGVycm9yXG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgc2V0dXBGb3JtSGFuZGxlciBmcm9tICcuL2pzL21vZHVsZXMvZm9ybUhhbmRsZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXR1cEZvcm1IYW5kbGVyKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=