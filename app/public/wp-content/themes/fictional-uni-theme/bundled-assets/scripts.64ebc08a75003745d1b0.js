!function(e){function t(t){for(var s,i,a=t[0],l=t[1],c=t[2],h=0,p=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={0:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wp-content/themes/fictional-uni-theme/bundled-assets/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([2,1]),n()}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var s=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},r=n(0);var o=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let n=0;n<e;n++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${n}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new r.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}};var i=class{constructor(){document.querySelectorAll(".acf-map").forEach(e=>{this.new_map(e)})}new_map(e){var t=e.querySelectorAll(".marker"),n={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP},s=new google.maps.Map(e,n);s.markers=[];var r=this;t.forEach((function(e){r.add_marker(e,s)})),this.center_map(s)}add_marker(e,t){var n=new google.maps.LatLng(e.getAttribute("data-lat"),e.getAttribute("data-lng")),s=new google.maps.Marker({position:n,map:t});if(t.markers.push(s),e.innerHTML){var r=new google.maps.InfoWindow({content:e.innerHTML});google.maps.event.addListener(s,"click",(function(){r.open(t,s)}))}}center_map(e){var t=new google.maps.LatLngBounds;e.markers.forEach((function(e){var n=new google.maps.LatLng(e.position.lat(),e.position.lng());t.extend(n)})),1==e.markers.length?(e.setCenter(t.getCenter()),e.setZoom(16)):e.fitBounds(t)}};var a=class{constructor(){this.openButton=document.querySelectorAll(".js-search-trigger"),this.closeButton=document.querySelector(".search-overlay__close"),this.searchOverlay=document.querySelector(".search-overlay"),this.body=document.querySelector("body"),this.searchInput=document.querySelector("#search-term"),this.results=document.querySelector("#search-overlay__results"),this.spinner=document.createElement("div"),this.spinner.classList.add("spinner-loader"),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.typingTimer,this.previousValue,this.events()}events(){this.openButton[0].addEventListener("click",this.openOverlay.bind(this)),this.openButton[1].addEventListener("click",this.openOverlay.bind(this)),this.closeButton.addEventListener("click",this.closeOverlay.bind(this)),document.addEventListener("keydown",this.keyPressDispatcher.bind(this)),this.searchInput.addEventListener("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchInput.value!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchInput.value?(this.isSpinnerVisible||(this.results.innerHTML="<div class='spinner-loader'></div>",this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.loadResults.bind(this),2e3)):(this.results.innerHTML="",this.isSpinnerVisible=!1)),this.previousValue=this.searchInput.value}loadResults(){fetch("/wp-json/wp/v2/posts?search="+this.searchInput.value).then(e=>e.json()).then(e=>console.log(e[0].title.rendered)).catch((function(){console.log("Well that failed")}))}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.classList.add("search-overlay--active"),this.body.classList.add("body-no-scroll"),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.classList.remove("search-overlay--active"),this.body.classList.remove("body-no-scroll"),this.isOverlayOpen=!1}};new s,new o;new i,new a}]);