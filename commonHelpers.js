import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as b}from"./assets/vendor-77e16229.js";const o=document.querySelector("[data-start]");o.setAttribute("disabled",!1);const s=document.getElementById("datetime-picker");let h=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]"),i;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);let a=new Date(t[0]),e=new Date;i=a.getTime()-e.getTime(),a.getTime()<e.getTime()?(o.setAttribute("disabled",!1),b.show({iconUrl:"../img/javascript.svg#fa-solid",message:"Please choose a date in the future",color:"#ef4040",messageColor:"white",timeout:3e3,iconColor:"black",position:"topRight"})):o.removeAttribute("disabled")}};f(s,S);function v(t){console.log(t);const a=1e3,e=a*60,n=e*60,r=n*24,l=setInterval(()=>{t-=1e3;const d=Math.floor(t/r),c=Math.floor(t%r/n),u=Math.floor(t%r%n/e),m=Math.floor(t%r%n%e/a);if(t<=0){clearInterval(l),o.removeAttribute("disabled"),s.removeAttribute("disabled");return}h.textContent=`${d}`.padStart(2,"0"),p.textContent=`${c}`.padStart(2,"0"),g.textContent=`${u}`.padStart(2,"0"),y.textContent=`${m}`.padStart(2,"0")},1e3)}o.addEventListener("click",function(){o.setAttribute("disabled",!1),s.setAttribute("disabled",!1),v(i)});
//# sourceMappingURL=commonHelpers.js.map