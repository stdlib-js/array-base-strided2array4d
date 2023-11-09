// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,u,f,o){var p,s,h,t,a,e,n,c,d,i,l,v,x,b,g,j,k,m,q;for(v=u[0],l=u[1],i=u[2],d=u[3],a=f[0],t=f[1],h=f[2],s=f[3],p=[],j=0;j<v;j++){for(k=[],e=o+a*j,g=0;g<l;g++){for(m=[],n=e+t*g,b=0;b<i;b++){for(q=[],c=n+h*b,x=0;x<d;x++)q.push(r[c]),c+=s;m.push(q)}k.push(m)}p.push(k)}return p}export{r as default};
//# sourceMappingURL=mod.js.map
