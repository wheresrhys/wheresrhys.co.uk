(function(){var e=!1,t=function(){var e=window,t=document;return e.pageYOffset||t.compatMode==="CSS1Compat"&&t.documentElement.scrollTop||t.body.scrollTop||0},n=function(){var t=window;!location.hash&&e!==!1&&t.scrollTo(0,e===1?0:1)},r=function(){var r=window,i=r.document,s;!location.hash&&r.addEventListener&&(window.scrollTo(0,1),e=1,s=setInterval(function(){i.body&&(clearInterval(s),e=t(),n())},15),r.addEventListener("load",function(){setTimeout(function(){t()<20&&n()},0)}))}(),i=document.querySelectorAll(".fake-json dd, .fake-json li");i=Array.prototype.filter.call(i,function(e){return!e.childElementCount}),i.forEach(function(e){e.innerHTML=e.innerHTML.replace(/(\sor\s|\sand\s|\(|\))/g,function(e,t){switch(t){case" or ":return' <b class="operator">||</b> ';case" and ":return' <b class="operator">&&</b> ';default:return'<b class="plain">'+t+"</b>"}})});var s=document.getElementById("age");s.innerHTML="0."+((new Date).getFullYear()-1981)/10;var o=document.querySelectorAll(".fake-json")[0],u=document.querySelectorAll(".accordion>li>span>a"),a=function(){return function(e){var t=document.createElement("a");return t.setAttribute("href",e.href),t.textContent=e.textContent,t}}();Array.prototype.forEach.call(u,function(e){var t=e.parentNode.nextElementSibling;if(!t)return!1;var n=document.createElement("h2");n.appendChild(a(e));var r=function(){var e=t.firstChild;while(e.nodeType===3)e=e.nextSibling;return e}();t.insertBefore(n,r)});var f=window.innerWidth>0?window.innerWidth:screen.width;if(f>480){var l=document.getElementsByTagName("img");Array.prototype.forEach.call(l,function(e){e.setAttribute("src",e.getAttribute("data-src"))})}o.addEventListener("click",function(e){if(e.target.nodeName==="A"&&e.target.parentNode.parentNode.parentNode.className.indexOf("accordion")>-1){var t=o.querySelectorAll(".expanded");return t.length&&t[0]!==e.target.parentNode.parentNode&&(t[0].className=""),e.target.parentNode.parentNode.className=e.target.parentNode.parentNode.className==="expanded"?"":"expanded",e.cancelBubble=!0,e.preventDefault(),e.stopPropagation(),!1}})})();