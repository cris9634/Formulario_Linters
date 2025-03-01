"use strict";
(self["webpackChunkformulario1"] = self["webpackChunkformulario1"] || []).push([["index"],{

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
    const radioButtons = document.querySelectorAll('input[name="choice]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green'; // estilo para el mensaje de éxito
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
/* harmony import */ var _js_modules_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/formHandler */ "./src/js/modules/formHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_formHandler__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hCd0Q7O0FBRXhEO0FBQ0EsRUFBRSxtRUFBZ0I7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8xLy4vc3JjL2pzL21vZHVsZXMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpbzEvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEZvcm1IYW5kbGVyKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cnZleS1mb3JtJyk7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXNzYWdlLUNvbnRhaW5lcicpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcicpLnZhbHVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykudmFsdWU7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImNob2ljZV06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJykudmFsdWU7XG5cbiAgICBpZiAobmFtZSAmJiBlbWFpbCAmJiBhZ2UgJiYgZHJvcGRvd24gJiYgcmFkaW9CdXR0b25zICYmIGNoZWNrYm94ZXMubGVuZ3RoID4gMCAmJiBjb21tZW50cykge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdGT1JNVUxBUklPIEVOVklBRE8gQ09OIEVYSVRPJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBlc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIMOpeGl0b1xuICAgICAgZm9ybS5yZXNldCgpOyAvLyBvcGNpb25hbDogcmVzZXRlYSBlbCBmb3JtdWxhcmlvIGRlc3B1ZXMgZGUgZW52aWFybG9cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdQb3IgZmF2b3IgY29tcGxldGUgdG9kb3MgbG9zIGNhbXBvcyByZXF1ZXJpZG9zLic7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7IC8vIGVzdGlsbyBwYXJhIGVsIG1lbnNhamUgZGUgZXJyb3JcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBzZXR1cEZvcm1IYW5kbGVyIGZyb20gJy4vanMvbW9kdWxlcy9mb3JtSGFuZGxlcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHNldHVwRm9ybUhhbmRsZXIoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==