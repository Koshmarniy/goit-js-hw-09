const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");let o=null;t.addEventListener("click",(function(){o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.72a45db8.js.map
