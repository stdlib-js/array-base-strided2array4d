// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function s(s,e,t,o){var f,p,u,a,h,n,d,i,l,m,v,j,b,c,g,x,y,k,q,w;for(f=r(s),b=e[0],j=e[1],v=e[2],m=e[3],n=t[0],h=t[1],a=t[2],u=t[3],p=[],y=0;y<b;y++){for(k=[],d=o+n*y,x=0;x<j;x++){for(q=[],i=d+h*x,g=0;g<v;g++){for(w=[],l=i+a*g,c=0;c<m;c++)w.push(f(s,l)),l+=u;q.push(w)}k.push(q)}p.push(k)}return p}export{s as default};
//# sourceMappingURL=index.mjs.map
