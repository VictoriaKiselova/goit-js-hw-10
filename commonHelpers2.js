import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");function n(e){e.preventDefault();const t=e.target.elements.delay.value;let i=e.target.elements.state.value;((o,s)=>new Promise((m,a)=>{setTimeout(()=>{if(o==="fulfilled"){m(s);return}else a(s)},s)}))(i,t).then(o=>{r.show({message:`✅ Fulfilled promise in ${t} ms`,messageColor:"white",color:"#59a10d",position:"topRight"})}).catch(o=>{r.show({message:`❌ Rejected promise in ${t}ms`,messageColor:"white",color:"#E76969",position:"topRight"})})}l.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
