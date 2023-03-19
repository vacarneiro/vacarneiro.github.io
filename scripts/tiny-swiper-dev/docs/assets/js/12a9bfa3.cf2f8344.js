(self.webpackChunktiny_swiper_website=self.webpackChunktiny_swiper_website||[]).push([[599],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=i,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(w,l(l({ref:t},u),{},{components:r})):n.createElement(w,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6470:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=r(4034),i=r(9973),a=(r(7294),r(3905)),l=["components"],p={id:"get-started",title:"Get Started",sidebar_label:"Get Started",slug:"/"},s={unversionedId:"get-started",id:"version-1.x/get-started",isDocsHomePage:!1,title:"Get Started",description:"Install Swiper via npm or yarn:",source:"@site/versioned_docs/version-1.x/get-started.md",sourceDirName:".",slug:"/",permalink:"/docs/1.x/",editUrl:"https://github.com/joe223/tiny-swiper/blob/dev_2.0/packages/website/docs/versioned_docs/version-1.x/get-started.md",version:"1.x",sidebar_label:"Get Started",frontMatter:{id:"get-started",title:"Get Started",sidebar_label:"Get Started",slug:"/"},sidebar:"version-1.x/someSidebar",next:{title:"APIs",permalink:"/docs/1.x/api"}},o=[],c={toc:o};function u(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install Swiper via npm or yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install tiny-swiper --save\n$ yarn add tiny-swiper\n")),(0,a.kt)("p",null,"If you prefer CDN, just make sure constructor ",(0,a.kt)("inlineCode",{parentName:"p"},"Swiper")," is defined in browser global environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/tiny-swiper@latest"><\/script>\n')),(0,a.kt)("p",null,"Html code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Slider main container --\x3e\n<div class="swiper-container">\n    \x3c!-- Additional required wrapper --\x3e\n    <div class="swiper-wrapper">\n        \x3c!-- Slides --\x3e\n        <div class="swiper-slide">Slide 1</div>\n        <div class="swiper-slide">Slide 2</div>\n        <div class="swiper-slide">Slide 3</div>\n        ...\n    </div>\n    \x3c!-- If we need pagination --\x3e\n    <div class="swiper-pagination"></div>\n</div>\n')),(0,a.kt)("p",null,"JavaScript/TypeScript code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Swiper, {\n    SwiperPluginLazyload,\n    SwiperPluginPagination\n} from 'tiny-swiper'\n\nSwiper.use([ SwiperPluginLazyload, SwiperPluginPagination ])\n\nconst swiper = new Swiper(swiperContainer: HTMLElement | string, parameters?: TinySwiperParameters)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new Swiper()")," - initialize swiper with options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Swiper.use()")," - Register plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swiperContainer")," - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parameters")," - object with Swiper parameters. Optional.")),(0,a.kt)("p",null,"You also can load full-featured Tiny-Swiper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Swiper from 'tiny-swiper/lib/index.full.js'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/tiny-swiper@latest/lib/index.full.js"><\/script>\n')))}u.isMDXComponent=!0}}]);