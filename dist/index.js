"use strict";var w=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var j=w(function(D,b){
var z=require('@stdlib/array-base-resolve-getter/dist');function A(a,r,v,k){var S,e,c,p,s,q,g,h,o,l,m,y,G,x,t,i,u,f,d,n;for(S=z(a),G=r[0],y=r[1],m=r[2],l=r[3],q=v[0],s=v[1],p=v[2],c=v[3],e=[],u=0;u<G;u++){for(f=[],g=k+q*u,i=0;i<y;i++){for(d=[],h=g+s*i,t=0;t<m;t++){for(n=[],o=h+p*t,x=0;x<l;x++)n.push(S(a,o)),o+=c;d.push(n)}f.push(d)}e.push(f)}return e}b.exports=A
});var B=j();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
