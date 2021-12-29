import{j as e,a as t,F as c,l as m,u as N,I as L,H as D,m as y,r as x,b as A,R as _,c as h,e as j,d as F,f as P,C as M,B as E}from"./vendor.2bec0872.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};R();const S="modulepreload",b={},I="/",d=function(s,n){return!n||n.length===0?s():Promise.all(n.map(l=>{if(l=`${I}${l}`,l in b)return;b[l]=!0;const r=l.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":S,r||(o.as="script",o.crossOrigin=""),o.href=l,document.head.appendChild(o),r)return new Promise((g,w)=>{o.addEventListener("load",g),o.addEventListener("error",w)})})).then(()=>s())};function T(){return e("div",{children:e("div",{className:"opacity-100 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-[#E174A7] rounded-full flex items-center justify-center",children:e("svg",{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00081 0.233398C6.68327 0.233398 6.39243 0.243215 5.48219 0.283343C4.57374 0.323644 3.95364 0.462973 3.41106 0.667403C2.84981 0.87855 2.37372 1.161 1.8994 1.62066C1.42473 2.08016 1.13317 2.54137 0.914502 3.08491C0.702944 3.61071 0.558942 4.2116 0.518053 5.09132C0.477342 5.97311 0.466675 6.25504 0.466675 8.50015C0.466675 10.7453 0.476986 11.0262 0.518231 11.9079C0.560009 12.788 0.703833 13.3887 0.914679 13.9144C1.13282 14.4581 1.42437 14.9193 1.89887 15.3788C2.37301 15.8386 2.8491 16.1218 3.40999 16.3329C3.95293 16.5373 4.57321 16.6767 5.48148 16.717C6.39171 16.7571 6.68238 16.7669 8.99974 16.7669C11.3175 16.7669 11.6074 16.7571 12.5176 16.717C13.4261 16.6767 14.0469 16.5373 14.5898 16.3329C15.1509 16.1218 15.6263 15.8386 16.1004 15.3788C16.5751 14.9193 16.8667 14.4581 17.0853 13.9145C17.2951 13.3887 17.4391 12.7878 17.4818 11.9081C17.5227 11.0263 17.5333 10.7453 17.5333 8.50015C17.5333 6.25504 17.5227 5.97328 17.4818 5.09149C17.4391 4.21143 17.2951 3.61071 17.0853 3.08508C16.8667 2.54137 16.5751 2.08016 16.1004 1.62066C15.6258 1.16082 15.1511 0.878377 14.5893 0.667403C14.0453 0.462973 13.4249 0.323644 12.5164 0.283343C11.6062 0.243215 11.3164 0.233398 8.99814 0.233398H9.00081ZM8.23525 1.72311C8.46245 1.72277 8.71597 1.72311 9.00077 1.72311C11.2792 1.72311 11.5492 1.73104 12.449 1.77065C13.281 1.8075 13.7326 1.94218 14.0334 2.05533C14.4316 2.20517 14.7155 2.38428 15.014 2.67362C15.3127 2.96295 15.4976 3.23851 15.6526 3.62429C15.7694 3.91535 15.9086 4.3528 15.9464 5.15881C15.9873 6.03026 15.9962 6.29204 15.9962 8.49823C15.9962 10.7044 15.9873 10.9662 15.9464 11.8377C15.9084 12.6437 15.7694 13.0811 15.6526 13.3722C15.4979 13.758 15.3127 14.0327 15.014 14.3218C14.7153 14.6112 14.4318 14.7903 14.0334 14.9401C13.7329 15.0538 13.281 15.1881 12.449 15.225C11.5494 15.2646 11.2792 15.2732 9.00077 15.2732C6.72217 15.2732 6.45212 15.2646 5.55256 15.225C4.72055 15.1878 4.26899 15.0531 3.96801 14.9399C3.56978 14.7901 3.28533 14.611 2.98666 14.3216C2.68799 14.0323 2.5031 13.7574 2.34808 13.3715C2.23128 13.0804 2.09208 12.643 2.05421 11.837C2.01332 10.9655 2.00514 10.7037 2.00514 8.49617C2.00514 6.2886 2.01332 6.0282 2.05421 5.15674C2.09226 4.35073 2.23128 3.91329 2.34808 3.62188C2.50275 3.2361 2.68799 2.96054 2.98666 2.67121C3.28533 2.38187 3.56978 2.20276 3.96801 2.05258C4.26881 1.93891 4.72055 1.80457 5.55256 1.76755C6.33977 1.7331 6.64484 1.72277 8.23525 1.72105V1.72311ZM13.5558 3.09574C12.9905 3.09574 12.5318 3.53956 12.5318 4.08741C12.5318 4.63508 12.9905 5.07942 13.5558 5.07942C14.1212 5.07942 14.5799 4.63508 14.5799 4.08741C14.5799 3.53974 14.1212 3.09574 13.5558 3.09574ZM9.00082 4.25481C6.58071 4.25481 4.61855 6.15564 4.61855 8.50013C4.61855 10.8446 6.58071 12.7446 9.00082 12.7446C11.4209 12.7446 13.3824 10.8446 13.3824 8.50013C13.3824 6.15564 11.4209 4.25481 9.00082 4.25481ZM9.00079 5.74454C10.5717 5.74454 11.8453 6.97818 11.8453 8.50013C11.8453 10.0219 10.5717 11.2557 9.00079 11.2557C7.42975 11.2557 6.15632 10.0219 6.15632 8.50013C6.15632 6.97818 7.42975 5.74454 9.00079 5.74454Z",fill:"white"})})})})}var v="/assets/logo.6fd1eb71.png";function B(){return e("div",{children:e("div",{className:"opacity-100  w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-blue-500 rounded-full flex items-center justify-center",children:e("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5208 3.59864L7.55438 4.13498L6.99479 4.0693C4.95791 3.81755 3.17843 2.9638 1.66756 1.52992L0.928908 0.818458L0.73865 1.34385C0.33575 2.51503 0.593158 3.75188 1.43253 4.58375C1.8802 5.04346 1.77948 5.10914 1.00725 4.8355C0.73865 4.74793 0.503625 4.68226 0.481242 4.71509C0.4029 4.79171 0.6715 5.78776 0.884142 6.18181C1.17513 6.72909 1.76828 7.26542 2.4174 7.58284L2.96579 7.83459L2.31668 7.84554C1.68994 7.84554 1.66756 7.85648 1.73471 8.08634C1.95854 8.79781 2.84268 9.55305 3.82755 9.88142L4.52143 10.1113L3.91708 10.4615C3.02175 10.965 1.96973 11.2496 0.917717 11.2715C0.414092 11.2825 0 11.3262 0 11.3591C0 11.4685 1.36538 12.0815 2.15999 12.3223C4.54382 13.0338 7.37531 12.7273 9.50173 11.5123C11.0126 10.6476 12.5235 8.92915 13.2286 7.26542C13.6091 6.37883 13.9896 4.75888 13.9896 3.98174C13.9896 3.47824 14.0232 3.41257 14.6499 2.81056C15.0192 2.4603 15.3662 2.0772 15.4333 1.96775C15.5452 1.75978 15.534 1.75978 14.9633 1.94586C14.012 2.27422 13.8777 2.23044 14.3477 1.73789C14.6947 1.38763 15.1088 0.752784 15.1088 0.566709C15.1088 0.533872 14.9409 0.5886 14.7506 0.68711C14.5492 0.796566 14.1015 0.96075 13.7658 1.05926L13.1614 1.24534L12.613 0.884131C12.3108 0.68711 11.8856 0.468198 11.6617 0.402524C11.0909 0.249286 10.218 0.271177 9.70318 0.446307C8.30422 0.938859 7.42008 2.20855 7.5208 3.59864Z",fill:"white"})})})})}function O(){return e("div",{children:e("div",{className:"opacity-100 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-red-500 rounded-full flex items-center justify-center",children:e("svg",{width:"18",height:"13",viewBox:"0 0 18 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6677 1.17143C16.4021 1.36664 16.9804 1.94183 17.1767 2.67227C17.5333 3.99611 17.5333 6.75832 17.5333 6.75832C17.5333 6.75832 17.5333 9.52043 17.1767 10.8444C16.9804 11.5748 16.4021 12.15 15.6677 12.3453C14.3369 12.7 9.00001 12.7 9.00001 12.7C9.00001 12.7 3.66309 12.7 2.33218 12.3453C1.59783 12.15 1.0195 11.5748 0.823232 10.8444C0.466675 9.52043 0.466675 6.75832 0.466675 6.75832C0.466675 6.75832 0.466675 3.99611 0.823232 2.67227C1.0195 1.94183 1.59783 1.36664 2.33218 1.17143C3.66309 0.81665 9.00001 0.81665 9.00001 0.81665C9.00001 0.81665 14.3369 0.81665 15.6677 1.17143ZM7.40002 4.43326V9.59993L11.6667 7.01669L7.40002 4.43326Z",fill:"white"})})})})}function H(){return t(c,{children:[t("footer",{className:"px-4 py-12 mx-auto max-w-7xl",children:[t("div",{className:"grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20",children:[t("div",{className:"col-span-3",children:[t("a",{href:"#",title:"Hellonext Home Page",className:"flex items-center",children:[e("img",{src:v,alt:"",className:"h-20"}),e("span",{className:"ml-3 text-xl",children:"Minvest"})]}),t("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[e("a",{href:" ",children:e(O,{})}),e("a",{href:"",className:"mx-3 ",children:e(T,{})}),e("a",{href:"",children:e(B,{})})]})]}),t("nav",{className:"col-span-1 md:col-span-1 lg:col-span-2",children:[e("p",{className:"mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase",children:"Product"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Features"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Pricing"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Feedback"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"FAQs"})]}),t("nav",{className:"col-span-2 md:col-span-1 lg:col-span-2",children:[e("p",{className:"mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase",children:"Support"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Chat"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Email Support"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"GDPR"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Help"})]}),t("nav",{className:"col-span-1 md:col-span-1 lg:col-span-2",children:[e("p",{className:"mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase",children:"Resources"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Blog"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Twitter"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Alternatives"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Why feature vote?"})]}),t("nav",{className:"col-span-1 md:col-span-1 lg:col-span-2",children:[e("p",{className:"mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase",children:"Company"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"About Us"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Privacy"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Terms"}),e("a",{className:"flex mb-3 text-sm font-medium text-primaryDark  dark:text-primaryLight  hover:text-lightAccent  cursor-pointer transition md:mb-2 ",href:"#",children:"Status"})]})]}),t("div",{className:"flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center",children:[e("p",{className:"mb-2 text-xs text-left text-primaryDark  dark:text-primaryLight md:mb-0",children:"Sometimes you gotta run before you can walk \u{1F642}"}),e("p",{className:"mb-0 text-xs text-left text-primaryDark  dark:text-primaryLight md:mb-0",children:"Copyright \xA9 2020 \xA9 2020 MayaEnterprises \u2014"})]})]}),t("p",{className:"shadow-xl animate-bounce-slow  shadow-lightAccent text-sm justify-center flex cursor-pointer  text-textLight hover:text-[#f57600] dark:hover:text-[#f57600]  dark:text-lightAccent ",children:["Made with ",e("div",{className:"animate-pulse",children:"\u2764\uFE0F"})]})]})}const V=m(()=>d(()=>import("./index.e1c7401a.js"),["assets/index.e1c7401a.js","assets/vendor.2bec0872.js","assets/ToggleTheme.1c4a5afc.js"])),Z=m(()=>d(()=>import("./ToggleTheme.1c4a5afc.js"),["assets/ToggleTheme.1c4a5afc.js","assets/vendor.2bec0872.js"])),p=m(()=>d(()=>import("./NavItems.d1d78904.js"),["assets/NavItems.d1d78904.js","assets/vendor.2bec0872.js"])),W=m(()=>d(()=>import("./index.050159fa.js"),["assets/index.050159fa.js","assets/vendor.2bec0872.js"]));function z(){const{isOpen:a,onOpen:s,onClose:n}=N();return t(c,{children:[e("nav",{className:"-z-[-1] bg-white dark:bg-primaryDark border-gray-200   py-2.5 sticky top-0 shadow w-screen ",children:e("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-1",children:t("div",{className:"relative flex items-center justify-between h-14",children:[t("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[t("div",{className:"flex-shrink-0 flex items-center",children:[e("img",{className:"block lg:hidden h-32 w-auto text-lg md:-mx-7 ",src:v,alt:"Workflow"}),e("div",{className:"absolute inset-y-0 left-0 lg:mx-28 sm:text-sm sm:mx-12 lg:text-lg md:mx-8  font-bold flex items-center",children:"Minvest"}),e("img",{className:"text-lg inset-y-0s hidden lg:block lg:h-32 md:h-32 w-auto  ",src:v,alt:"Workflow"})]}),e("div",{className:"absolute inset-y-0 right-0 flex items-center sm:hidden",children:e(L,{border:"none",variant:"link",size:"md",icon:e(D,{className:"h-6 ml-1 text-2xl"}),"aria-label":"Open Menu",display:{md:"none"},onClick:a?n:s})})]}),e("div",{className:"absolute inset-y-0  nset-x-0  right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:e("div",{className:"hidden sm:block sm:ml-6",children:t("div",{className:"flex space-x-4 items-center inset-y-0",children:[e(p,{title:"Home",path:"/"}),e(p,{title:"About",path:"/about"}),e(W,{title:"Services",dropdowns:[{id:1,itemName:"Minvest",path:"/sminvest"},{id:2,itemName:"GyanaSutra",path:"/gyanasutra"}]}),e(p,{title:"Blog",path:"/blog"}),e(p,{title:"Contact",path:"/contact"}),e("div",{className:"items-center",children:e(Z,{})})]})})})]})})}),a?e(V,{onClose:n,isOpen:a}):null]})}function $({children:a}){return e(c,{children:t("div",{className:"w-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark",children:[e(z,{}),a,e(H,{})]})})}function G(){return e("div",{children:"looks like ur lost"})}function u(){return e(c,{children:t("div",{className:"cursor-pointer hover:shadow-lightAccent p-4 md:w-1/3 flex flex-col text-center items-center shadow-sm   w-full hover:shadow-2xl lg:hover:translate-all transform-gpu ease-linear  duration-200 ",children:[e(y.div,{animate:{color:["#00bcf5","#006af5","#9b00f5","#00c4f5"]},transition:{duration:4,repeat:1/0},className:"order-solid border-2 border-lightAccent w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-primaryDark text-primaryDark  dark:text-primaryLight  flex-shrink-0",children:e("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-10 h-10",viewBox:"0 0 24 24",children:e("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),t("div",{className:"flex-grow",children:[e("h2",{className:"text-primaryDark  dark:text-primaryLight text-lg title-font font-medium mb-3",children:"Shooting Stars"}),e("p",{className:"leading-relaxed text-base text-primaryDark  dark:text-primaryLight",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."}),t("a",{className:"mt-3 text-primaryDark  dark:text-primaryLight inline-flex items-center",children:["Learn More",e("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:e("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})}function q(){return e("div",{children:e("section",{className:"text-primaryDark  dark:text-primaryLight body-font",children:t("div",{className:"container px-5 py-24 mx-auto",children:[t("div",{className:"text-center mb-20",children:[e("h1",{className:"sm:text-3xl text-2xl font-medium title-font text-primaryDark  dark:text-primaryLight mb-4",children:"Raw Denim Heirloom Man Braid"}),e("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."}),e("div",{className:"flex mt-6 justify-center",children:e("div",{className:"w-16 h-1 rounded-full bg-indigo-500 inline-flex"})})]}),t("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ",children:[e(u,{}),e(u,{}),e(u,{}),e(u,{}),e(u,{}),e(u,{})]})]})})})}var U="/assets/investment_data.4510d5ea.svg";const C=({from:a,to:s})=>{const n=x.exports.useRef(null);return x.exports.useEffect(()=>{const l=n.current;if(l){const r=A(a,s,{duration:1,onUpdate(i){l.textContent=parseInt(i.toFixed(0)).toLocaleString()}});return()=>r.stop()}},[a,s]),e("div",{ref:n})};function f({title:a,Icon:s,number:n}){return e(c,{children:t("div",{className:"p-6 card drop-shadow shadow-md",children:[t("div",{className:"flex items-start justify-between",children:[e("h2",{className:"mb-2 font-mono text-2xl font-light leading-none text-primaryDark  dark:text-primaryLight truncate",children:e(C,{from:0,to:n})}),t("span",{className:"flex items-center space-x-1 text-sm font-medium leading-none text-green-600",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"flex-none w-4 h-4",children:e("path",{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"})}),t("span",{children:[e(C,{from:0,to:n})," +"]})]})]}),e("p",{className:"text-sm leading-none text-primaryDark antialiased dark:text-primaryLight ",children:a})]})})}function K(){return e(c,{children:e("div",{className:"container px-5 mx-auto w-screen h-full bg-primaryLight dark:bg-primaryDark",children:t("section",{className:"px-4 py-12 mx-auto max-w-7xl",children:[e("div",{className:"flex flex-wrap items-center justify-between mb-4 space-y-1",children:e("h2",{className:"text-xl font-semibold text-primaryDark  dark:text-primaryLight justify-center",children:"Analytics Overview"})}),t("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4",children:[e(f,{title:"Sign-ups/downloads",number:308580}),e(f,{title:"Cities with customer presence",number:38580}),e(f,{title:"File formats u can import",number:5800}),e(f,{title:"File formats u can import",number:5800})]})]})})})}function Q(){return t(c,{children:[t("div",{className:" bg-primaryLight w-screen dark:bg-primaryDark grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2",children:[e("section",{className:"px-4 sm:py-[3rem] lg:py-24 mx-auto w-full",children:t("div",{className:"w-full  mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center",children:[t(y.h1,{animate:{fontSize:"56px"},className:"select-none py-8 mb-6 text-4xl font-extrabold leading-none tracking-normal text-primaryDark  dark:text-primaryLight  md:text-6xl md:tracking-tight",children:["Manage your",e(y.span,{animate:{color:["#00bcf5","#006af5","#9b00f5","#00c4f5"]},transition:{duration:4,repeat:1/0},className:"antialiased ml-3 mr-2 block w-full text-transparent bg-clip-text lg:inline animate-pulse",children:"Investments"}),"in one single place."]}),e("p",{className:"select-none  px-0  text-lg text-primaryDark  dark:text-primaryLight  md:text-xl lg:px-24",children:"Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop."})]})}),t("div",{className:"container px-10 py-24  mx-auto  text-center md:w-full lg:w-3/4",children:[e("img",{src:U,alt:" software screenshot",className:"w-full h-full shadow-2xl  shadow-lightAccent rounded-lg  cursor-wait bg-gradient-to-r from-[#cfd1f1d8] to-[#a5bdff] hover:bg-gradient-to-r hover:from-[#b5a9ee] hover:to-[#d9eff3] "}),e("p",{className:"-mt-3 shadow-xl animate-pulse  shadow-lightAccent  text-xs justify-center flex",children:e("div",{className:"animate-pulse",children:e("h1",{className:"opacity-0 ",children:"."})})})]})]}),e(K,{})]})}function k(){return t(c,{children:[e(Q,{}),e("hr",{}),e(q,{}),e("hr",{})]})}const Y=m(()=>d(()=>import("./ServicesPage.05f601c7.js"),["assets/ServicesPage.05f601c7.js","assets/vendor.2bec0872.js"])),J=m(()=>d(()=>import("./ContactPage.3870c5a9.js"),["assets/ContactPage.3870c5a9.js","assets/vendor.2bec0872.js"])),X=m(()=>d(()=>import("./BlogPage.eaa337ac.js"),["assets/BlogPage.eaa337ac.js","assets/vendor.2bec0872.js"])),ee=m(()=>d(()=>import("./AboutPage.3f753536.js"),["assets/AboutPage.3f753536.js","assets/vendor.2bec0872.js"]));function te(){return e(c,{children:e($,{children:t(_,{children:[e(h,{path:"/",element:e(k,{})}),e(h,{path:"/home",element:e(k,{})}),e(h,{path:"about",element:e(ee,{})}),e(h,{path:"services",element:e(Y,{})}),e(h,{path:"blog",element:e(X,{})}),e(h,{path:"contact",element:e(J,{})}),e(h,{path:"*",element:e(G,{})})]})})})}const re=()=>{if(typeof window!="undefined"&&window.localStorage){const a=window.localStorage.getItem("chakra-ui-color-mode");if(typeof a=="string")return a;if(window.matchMedia("(prefers-color-scheme:dark)").matches)return"dark"}return"light"},ae=x.exports.createContext({}),ie=({initialTheme:a,children:s})=>{const[n,l]=x.exports.useState(re),r=i=>{const o=window.document.documentElement,g=i==="dark";o.classList.remove(g?"light":"dark"),o.classList.add(i),localStorage.setItem("chakra-ui-color-mode",i)};return a&&r(a),x.exports.useEffect(()=>{r(n)},[n]),e(ae.Provider,{value:{theme:n,setTheme:l},children:s})},ne=j({colors:{primaryLight:"#FFFFFF",lightAccent:"#6C63FF",primaryDark:"#161822",darkAccent:"#6C63FF",textLight:"#1F2937",textDark:"#FFFFFF"},styles:{global:{body:({colorMode:a})=>({bg:a==="dark"?"primaryDark":"primaryLight"})}},components:{Button:{sizes:{},variants:{}}}});F.render(e(P.StrictMode,{children:e(M,{resetCSS:!0,theme:ne,children:e(ie,{initialTheme:"light",children:e(E,{children:e(te,{})})})})}),document.getElementById("root"));export{v as L,ae as T};