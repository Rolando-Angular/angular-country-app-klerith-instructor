import{L as c,M as l,N as d,P as u,S as s,T as f,U as h,V as M,W as C,Z as g,g as e,i as a,j as r,r as n,s as p,t as m}from"./chunk-KTEI2SLG.js";var b=(()=>{class t{constructor(){this.title="countryApp"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(o,N){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,f]})}}return t})();var w=[{path:"",component:C},{path:"about",component:h},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-CHTM5ZIS.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],y=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=e({imports:[s.forRoot(w),s]})}}return t})();var v=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t,bootstrap:[b]})}static{this.\u0275inj=e({imports:[y,d,c,g]})}}return t})();l().bootstrapModule(v).catch(t=>console.error(t));
