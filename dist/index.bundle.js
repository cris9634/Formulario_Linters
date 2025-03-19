"use strict";
(self.webpackChunkformulario = self.webpackChunkformulario || []).push([
  [57],
  {
    660: () => {
      document.addEventListener("DOMContentLoaded", () => {
        !(function () {
          const e = document.getElementById("survey-form"),
            t = document.createElement("message-Container");
          e.addEventListener("submit", (n) => {
            n.preventDefault();
            const o = document.getElementById("name").value,
              c = document.getElementById("email").value,
              l = document.getElementById("number").value,
              u = document.getElementById("dropdown").value,
              m = document.querySelectorAll('input[name="choice"]:checked'),
              d = document.querySelectorAll('input[type="checkbox"]:checked'),
              r = document.getElementById("comments").value;
            o && c && l && u && m && d.length > 0 && r
              ? ((t.textContent = "FORMULARIO ENVIADO CON EXITO"),
                (t.style.color = "green"),
                e.reset())
              : ((t.textContent =
                  "Por favor complete todos los campos requeridos."),
                (t.style.color = "red"));
          });
        })();
      });
    },
  },
  (e) => {
    e((e.s = 660));
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJnR0FFQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixNQ0YvQixXQUNiLE1BQU1DLEVBQU9GLFNBQVNHLGVBQWUsZUFDL0JDLEVBQW1CSixTQUFTSyxjQUFjLHFCQUVoREgsRUFBS0QsaUJBQWlCLFVBQVdLLElBQy9CQSxFQUFNQyxpQkFFTixNQUFNQyxFQUFPUixTQUFTRyxlQUFlLFFBQVFNLE1BQ3ZDQyxFQUFRVixTQUFTRyxlQUFlLFNBQVNNLE1BQ3pDRSxFQUFNWCxTQUFTRyxlQUFlLFVBQVVNLE1BQ3hDRyxFQUFXWixTQUFTRyxlQUFlLFlBQVlNLE1BQy9DSSxFQUFlYixTQUFTYyxpQkFBaUIsZ0NBQ3pDQyxFQUFhZixTQUFTYyxpQkFBaUIsa0NBQ3ZDRSxFQUFXaEIsU0FBU0csZUFBZSxZQUFZTSxNQUVqREQsR0FBUUUsR0FBU0MsR0FBT0MsR0FBWUMsR0FBZ0JFLEVBQVdFLE9BQVMsR0FBS0QsR0FDL0VaLEVBQWlCYyxZQUFjLCtCQUMvQmQsRUFBaUJlLE1BQU1DLE1BQVEsUUFDL0JsQixFQUFLbUIsVUFFTGpCLEVBQWlCYyxZQUFjLGtEQUMvQmQsRUFBaUJlLE1BQU1DLE1BQVEsTUFDakMsR0FFSixDRHJCRUUsRUFBa0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vc3JjL2pzL21vZHVsZXMvZm9ybUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHVwRm9ybUhhbmRsZXIgZnJvbSAnLi9qcy9tb2R1bGVzL2Zvcm1IYW5kbGVyLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgc2V0dXBGb3JtSGFuZGxlcigpO1xyXG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEZvcm1IYW5kbGVyKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VydmV5LWZvcm0nKTtcclxuICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWVzc2FnZS1Db250YWluZXInKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcicpLnZhbHVlO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS52YWx1ZTtcclxuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJjaG9pY2VcIl06Y2hlY2tlZCcpO1xyXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyk7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpLnZhbHVlO1xyXG5cclxuICAgIGlmIChuYW1lICYmIGVtYWlsICYmIGFnZSAmJiBkcm9wZG93biAmJiByYWRpb0J1dHRvbnMgJiYgY2hlY2tib3hlcy5sZW5ndGggPiAwICYmIGNvbW1lbnRzKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnRk9STVVMQVJJTyBFTlZJQURPIENPTiBFWElUTyc7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBlc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIGXMgXhpdG9cclxuICAgICAgZm9ybS5yZXNldCgpOyAvLyBvcGNpb25hbDogcmVzZXRlYSBlbCBmb3JtdWxhcmlvIGRlc3B1ZXMgZGUgZW52aWFybG9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnUG9yIGZhdm9yIGNvbXBsZXRlIHRvZG9zIGxvcyBjYW1wb3MgcmVxdWVyaWRvcy4nO1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7IC8vIGVzdGlsbyBwYXJhIGVsIG1lbnNhamUgZGUgZXJyb3JcclxuICAgIH1cclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidmFsdWUiLCJlbWFpbCIsImFnZSIsImRyb3Bkb3duIiwicmFkaW9CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94ZXMiLCJjb21tZW50cyIsImxlbmd0aCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJjb2xvciIsInJlc2V0Iiwic2V0dXBGb3JtSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=
