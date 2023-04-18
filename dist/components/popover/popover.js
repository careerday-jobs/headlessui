import I,{createContext as X,createRef as ue,useContext as Y,useEffect as q,useMemo as D,useReducer as me,useRef as V,useState as ie}from"react";import{match as _}from'../../utils/match.js';import{forwardRefWithAs as $,render as J,Features as z}from'../../utils/render.js';import{optionalRef as ye,useSyncRefs as U}from'../../hooks/use-sync-refs.js';import{useId as K}from'../../hooks/use-id.js';import{Keys as k}from'../keyboard.js';import{isDisabledReactIssue7711 as fe}from'../../utils/bugs.js';import{getFocusableElements as ee,Focus as h,focusIn as w,isFocusableElement as Ee,FocusableMode as ge,FocusResult as te}from'../../utils/focus-management.js';import{OpenClosedProvider as be,State as W,useOpenClosed as Pe}from'../../internal/open-closed.js';import{useResolveButtonType as Se}from'../../hooks/use-resolve-button-type.js';import{useOutsideClick as Ae}from'../../hooks/use-outside-click.js';import{getOwnerDocument as Re}from'../../utils/owner.js';import{useOwnerDocument as oe}from'../../hooks/use-owner.js';import{useEventListener as Oe}from'../../hooks/use-event-listener.js';import{Hidden as re,Features as ne}from'../../internal/hidden.js';import{useEvent as b}from'../../hooks/use-event.js';import{useTabDirection as de,Direction as H}from'../../hooks/use-tab-direction.js';import'../../utils/micro-task.js';import{useLatestValue as ce}from'../../hooks/use-latest-value.js';import{useIsoMorphicEffect as Ce}from'../../hooks/use-iso-morphic-effect.js';var Fe=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Fe||{}),Ie=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(Ie||{});let xe={[0]:o=>({...o,popoverState:_(o.popoverState,{[0]:1,[1]:0})}),[1](o){return o.popoverState===1?o:{...o,popoverState:1}},[2](o,l){return o.button===l.button?o:{...o,button:l.button}},[3](o,l){return o.buttonId===l.buttonId?o:{...o,buttonId:l.buttonId}},[4](o,l){return o.panel===l.panel?o:{...o,panel:l.panel}},[5](o,l){return o.panelId===l.panelId?o:{...o,panelId:l.panelId}}},le=X(null);le.displayName="PopoverContext";function Q(o){let l=Y(le);if(l===null){let s=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Q),s}return l}let ae=X(null);ae.displayName="PopoverAPIContext";function pe(o){let l=Y(ae);if(l===null){let s=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,pe),s}return l}let se=X(null);se.displayName="PopoverGroupContext";function ve(){return Y(se)}let Z=X(null);Z.displayName="PopoverPanelContext";function Le(){return Y(Z)}function Me(o,l){return _(l.type,xe,o,l)}let Be="div";function De(o,l){var B;let s=V(null),R=U(l,ye(e=>{s.current=e})),C=V([]),r=me(Me,{popoverState:1,buttons:C,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:ue(),afterPanelSentinel:ue()}),[{popoverState:t,button:a,buttonId:v,panel:f,panelId:F,beforePanelSentinel:T,afterPanelSentinel:d},i]=r,p=oe((B=s.current)!=null?B:a),P=D(()=>{if(!a||!f)return!1;for(let N of document.querySelectorAll("body > *"))if(Number(N==null?void 0:N.contains(a))^Number(N==null?void 0:N.contains(f)))return!0;let e=ee(),n=e.indexOf(a),A=(n+e.length-1)%e.length,g=(n+1)%e.length,G=e[A],Te=e[g];return!f.contains(G)&&!f.contains(Te)},[a,f]),S=ce(v),y=ce(F),x=D(()=>({buttonId:S,panelId:y,close:()=>i({type:1})}),[S,y,i]),O=ve(),L=O==null?void 0:O.registerPopover,j=b(()=>{var e;return(e=O==null?void 0:O.isFocusWithinPopoverGroup())!=null?e:(p==null?void 0:p.activeElement)&&((a==null?void 0:a.contains(p.activeElement))||(f==null?void 0:f.contains(p.activeElement)))});q(()=>L==null?void 0:L(x),[L,x]),Oe(p==null?void 0:p.defaultView,"focus",e=>{var n,A,g,G;t===0&&(j()||a&&f&&e.target!==window&&((A=(n=T.current)==null?void 0:n.contains)!=null&&A.call(n,e.target)||(G=(g=d.current)==null?void 0:g.contains)!=null&&G.call(g,e.target)||i({type:1})))},!0),Ae([a,f],(e,n)=>{i({type:1}),Ee(n,ge.Loose)||(e.preventDefault(),a==null||a.focus())},t===0);let M=b(e=>{i({type:1});let n=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:a:a)();n==null||n.focus()}),u=D(()=>({close:M,isPortalled:P}),[M,P]),m=D(()=>({open:t===0,close:M}),[t,M]),E=o,c={ref:R};return I.createElement(Z.Provider,{value:null},I.createElement(le.Provider,{value:r},I.createElement(ae.Provider,{value:u},I.createElement(be,{value:_(t,{[0]:W.Open,[1]:W.Closed})},J({ourProps:c,theirProps:E,slot:m,defaultTag:Be,name:"Popover"})))))}let he="button";function He(o,l){let s=K(),{id:R=`headlessui-popover-button-${s}`,...C}=o,[r,t]=Q("Popover.Button"),{isPortalled:a}=pe("Popover.Button"),v=V(null),f=`headlessui-focus-sentinel-${K()}`,F=ve(),T=F==null?void 0:F.closeOthers,i=Le()!==null;q(()=>{if(!i)return t({type:3,buttonId:R}),()=>{t({type:3,buttonId:null})}},[i,R,t]);let[p]=ie(()=>Symbol()),P=U(v,l,i?null:e=>{if(e)r.buttons.current.push(p);else{let n=r.buttons.current.indexOf(p);n!==-1&&r.buttons.current.splice(n,1)}r.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&t({type:2,button:e})}),S=U(v,l),y=oe(v),x=b(e=>{var n,A,g;if(i){if(r.popoverState===1)return;switch(e.key){case k.Space:case k.Enter:e.preventDefault(),(A=(n=e.target).click)==null||A.call(n),t({type:1}),(g=r.button)==null||g.focus();break}}else switch(e.key){case k.Space:case k.Enter:e.preventDefault(),e.stopPropagation(),r.popoverState===1&&(T==null||T(r.buttonId)),t({type:0});break;case k.Escape:if(r.popoverState!==0)return T==null?void 0:T(r.buttonId);if(!v.current||y!=null&&y.activeElement&&!v.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),t({type:1});break}}),O=b(e=>{i||e.key===k.Space&&e.preventDefault()}),L=b(e=>{var n,A;fe(e.currentTarget)||o.disabled||(i?(t({type:1}),(n=r.button)==null||n.focus()):(e.preventDefault(),e.stopPropagation(),r.popoverState===1&&(T==null||T(r.buttonId)),t({type:0}),(A=r.button)==null||A.focus()))}),j=b(e=>{e.preventDefault(),e.stopPropagation()}),M=r.popoverState===0,u=D(()=>({open:M}),[M]),m=Se(o,v),E=i?{ref:S,type:m,onKeyDown:x,onClick:L}:{ref:P,id:r.buttonId,type:m,"aria-expanded":o.disabled?void 0:r.popoverState===0,"aria-controls":r.panel?r.panelId:void 0,onKeyDown:x,onKeyUp:O,onClick:L,onMouseDown:j},c=de(),B=b(()=>{let e=r.panel;if(!e)return;function n(){_(c.current,{[H.Forwards]:()=>w(e,h.First),[H.Backwards]:()=>w(e,h.Last)})===te.Error&&w(ee().filter(g=>g.dataset.headlessuiFocusGuard!=="true"),_(c.current,{[H.Forwards]:h.Next,[H.Backwards]:h.Previous}),{relativeTo:r.button})}n()});return I.createElement(I.Fragment,null,J({ourProps:E,theirProps:C,slot:u,defaultTag:he,name:"Popover.Button"}),M&&!i&&a&&I.createElement(re,{id:f,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}))}let Ge="div",_e=z.RenderStrategy|z.Static;function ke(o,l){let s=K(),{id:R=`headlessui-popover-overlay-${s}`,...C}=o,[{popoverState:r},t]=Q("Popover.Overlay"),a=U(l),v=Pe(),f=(()=>v!==null?(v&W.Open)===W.Open:r===0)(),F=b(i=>{if(fe(i.currentTarget))return i.preventDefault();t({type:1})}),T=D(()=>({open:r===0}),[r]);return J({ourProps:{ref:a,id:R,"aria-hidden":!0,onClick:F},theirProps:C,slot:T,defaultTag:Ge,features:_e,visible:f,name:"Popover.Overlay"})}let we="div",Ne=z.RenderStrategy|z.Static;function Ue(o,l){let s=K(),{id:R=`headlessui-popover-panel-${s}`,focus:C=!1,...r}=o,[t,a]=Q("Popover.Panel"),{close:v,isPortalled:f}=pe("Popover.Panel"),F=`headlessui-focus-sentinel-before-${K()}`,T=`headlessui-focus-sentinel-after-${K()}`,d=V(null),i=U(d,l,u=>{a({type:4,panel:u})}),p=oe(d);Ce(()=>(a({type:5,panelId:R}),()=>{a({type:5,panelId:null})}),[R,a]);let P=Pe(),S=(()=>P!==null?(P&W.Open)===W.Open:t.popoverState===0)(),y=b(u=>{var m;switch(u.key){case k.Escape:if(t.popoverState!==0||!d.current||p!=null&&p.activeElement&&!d.current.contains(p.activeElement))return;u.preventDefault(),u.stopPropagation(),a({type:1}),(m=t.button)==null||m.focus();break}});q(()=>{var u;o.static||t.popoverState===1&&((u=o.unmount)==null||u)&&a({type:4,panel:null})},[t.popoverState,o.unmount,o.static,a]),q(()=>{if(!C||t.popoverState!==0||!d.current)return;let u=p==null?void 0:p.activeElement;d.current.contains(u)||w(d.current,h.First)},[C,d,t.popoverState]);let x=D(()=>({open:t.popoverState===0,close:v}),[t,v]),O={ref:i,id:R,onKeyDown:y,onBlur:C&&t.popoverState===0?u=>{var E,c,B,e,n;let m=u.relatedTarget;m&&d.current&&((E=d.current)!=null&&E.contains(m)||(a({type:1}),((B=(c=t.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&B.call(c,m)||(n=(e=t.afterPanelSentinel.current)==null?void 0:e.contains)!=null&&n.call(e,m))&&m.focus({preventScroll:!0})))}:void 0,tabIndex:-1},L=de(),j=b(()=>{let u=d.current;if(!u)return;function m(){_(L.current,{[H.Forwards]:()=>{var c;w(u,h.First)===te.Error&&((c=t.afterPanelSentinel.current)==null||c.focus())},[H.Backwards]:()=>{var E;(E=t.button)==null||E.focus({preventScroll:!0})}})}m()}),M=b(()=>{let u=d.current;if(!u)return;function m(){_(L.current,{[H.Forwards]:()=>{var A;if(!t.button)return;let E=ee(),c=E.indexOf(t.button),B=E.slice(0,c+1),n=[...E.slice(c+1),...B];for(let g of n.slice())if(g.dataset.headlessuiFocusGuard==="true"||(A=t.panel)!=null&&A.contains(g)){let G=n.indexOf(g);G!==-1&&n.splice(G,1)}w(n,h.First,{sorted:!1})},[H.Backwards]:()=>{var c;w(u,h.Previous)===te.Error&&((c=t.button)==null||c.focus())}})}m()});return I.createElement(Z.Provider,{value:R},S&&f&&I.createElement(re,{id:F,ref:t.beforePanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j}),J({ourProps:O,theirProps:r,slot:x,defaultTag:we,features:Ne,visible:S,name:"Popover.Panel"}),S&&f&&I.createElement(re,{id:T,ref:t.afterPanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M}))}let Ke="div";function We(o,l){let s=V(null),R=U(s,l),[C,r]=ie([]),t=b(p=>{r(P=>{let S=P.indexOf(p);if(S!==-1){let y=P.slice();return y.splice(S,1),y}return P})}),a=b(p=>(r(P=>[...P,p]),()=>t(p))),v=b(()=>{var S;let p=Re(s);if(!p)return!1;let P=p.activeElement;return(S=s.current)!=null&&S.contains(P)?!0:C.some(y=>{var x,O;return((x=p.getElementById(y.buttonId.current))==null?void 0:x.contains(P))||((O=p.getElementById(y.panelId.current))==null?void 0:O.contains(P))})}),f=b(p=>{for(let P of C)P.buttonId.current!==p&&P.close()}),F=D(()=>({registerPopover:a,unregisterPopover:t,isFocusWithinPopoverGroup:v,closeOthers:f}),[a,t,v,f]),T=D(()=>({}),[]),d=o,i={ref:R};return I.createElement(se.Provider,{value:F},J({ourProps:i,theirProps:d,slot:T,defaultTag:Ke,name:"Popover.Group"}))}let je=$(De),Ve=$(He),$e=$(ke),Je=$(Ue),Xe=$(We),Lt=Object.assign(je,{Button:Ve,Overlay:$e,Panel:Je,Group:Xe});export{Lt as Popover};
