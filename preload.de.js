function _debounce(t,e=300){let a;return(...r)=>{clearTimeout(a),a=setTimeout(()=>t.apply(this,r),e)}}window.___mnag="userA"+(window.___mnag1||"")+"gent",window.___plt="plat"+(window.___mnag1||"")+"form";try{var t=navigator[window.___mnag],e=navigator[window.___plt];window.__isPSA=e.indexOf("x86_64")>-1&&0>t.indexOf("CrOS"),window.___mnag="!1",r=null}catch(a){window.__isPSA=!1;var r=null;window.___mnag="!1"}if(window.__isPSA=__isPSA,__isPSA){var n=new MutationObserver(t=>{t.forEach(({addedNodes:t})=>{t.forEach(t=>{1===t.nodeType&&"IFRAME"===t.tagName&&(t.setAttribute("loading","lazy"),t.setAttribute("data-src",t.src),t.removeAttribute("src")),1===t.nodeType&&"IMG"===t.tagName&&++i>s&&t.setAttribute("loading","lazy"),1===t.nodeType&&"SCRIPT"===t.tagName&&(t.setAttribute("data-src",t.src),t.removeAttribute("src"),t.type="text/lazyload")})})}),i=0,s=20;n.observe(document.documentElement,{childList:!0,subtree:!0})}