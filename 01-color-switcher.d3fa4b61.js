!function(){var t=!1,o=null,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(n){console.log("Start Clicked"),t||(t=!0,o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0)})),n.addEventListener("click",(function(n){console.log("Stop Clicked"),clearInterval(o),t=!1,document.body.style.backgroundColor="white",e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d3fa4b61.js.map