import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";const f="/goit-js-hw-10/assets/icon-8fe9c699.svg",e=document.querySelector("[data-start]");e.setAttribute("disabled",!1);const n=document.getElementById("datetime-picker");let b=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),r;const s={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){console.log(o[0]),o[0]<s.defaultDate?(e.setAttribute("disabled",!0),h.show({iconUrl:f,message:"Please choose a date in the future",color:"#ef4040",messageColor:"white",timeout:3e3,imageWidth:50,position:"topRight"})):(e.removeAttribute("disabled"),r=o[0])}};m(n,s);function g(){const a=setInterval(()=>{const i=Date.now();let t=r-i;t-=1e3,console.log(t);const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);if(t<=0){clearInterval(a),e.removeAttribute("disabled"),n.removeAttribute("disabled");return}b.textContent=`${d}`.padStart(2,"0"),y.textContent=`${u}`.padStart(2,"0"),p.textContent=`${c}`.padStart(2,"0"),S.textContent=`${l}`.padStart(2,"0")},1e3)}e.addEventListener("click",function(){e.setAttribute("disabled",!0),n.setAttribute("disabled",!0),g()});
//# sourceMappingURL=commonHelpers.js.map
