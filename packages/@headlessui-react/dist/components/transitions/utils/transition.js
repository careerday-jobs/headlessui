import{once as T}from'../../../utils/once.js';import{disposables as g}from'../../../utils/disposables.js';import{match as s}from'../../../utils/match.js';function d(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=g();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:o}=getComputedStyle(t),[u,p]=[m,o].map(a=>{let[r=0]=a.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,f)=>f-i);return r}),l=u+p;if(l!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose()},l),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose()})});let a=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),a())})}else e();return n.add(()=>e()),n.dispose}function y(t,e,n,m){let o=n?"enter":"leave",u=g(),p=m!==void 0?T(m):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let l=s(o,{enter:()=>e.enter,leave:()=>e.leave}),a=s(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=s(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),d(t,...l,...r),u.nextFrame(()=>{v(t,...r),d(t,...a),F(t,()=>(v(t,...l),d(t,...e.entered),p()))}),u.dispose}export{y as transition};