import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as b}from"./assets/vendor-77e16229.js";const h="/goit-js-hw-10/assets/icon-8fe9c699.svg",o=document.querySelector("[data-start]");o.setAttribute("disabled",!1);const r=document.getElementById("datetime-picker");let g=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),i;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);let n=new Date(t[0]),e=new Date;i=n.getTime()-e.getTime(),n.getTime()<e.getTime()?(o.setAttribute("disabled",!1),b.show({iconUrl:h,message:"Please choose a date in the future",color:"#ef4040",messageColor:"white",timeout:3e3,imageWidth:50,position:"topRight"})):o.removeAttribute("disabled")}};f(r,T);function v(t){console.log(t);const n=1e3,e=n*60,a=e*60,s=a*24,d=setInterval(()=>{t-=1e3;const l=Math.floor(t/s),c=Math.floor(t%s/a),u=Math.floor(t%s%a/e),m=Math.floor(t%s%a%e/n);if(t<=0){clearInterval(d),o.removeAttribute("disabled"),r.removeAttribute("disabled");return}g.textContent=`${l}`.padStart(2,"0"),p.textContent=`${c}`.padStart(2,"0"),y.textContent=`${u}`.padStart(2,"0"),S.textContent=`${m}`.padStart(2,"0")},1e3)}o.addEventListener("click",function(){o.setAttribute("disabled",!1),r.setAttribute("disabled",!1),v(i)});
//# sourceMappingURL=commonHelpers.js.map