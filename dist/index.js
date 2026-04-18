"use strict";var x=function(v,n){return function(){return n||v((n={exports:{}}).exports,n),n.exports}};var h=x(function(z,q){
var j=require('@stdlib/math-base-special-floor/dist');function u(v,n,k,m,w,r,f,e){var a,d,l,i,t,p,b,s,c;if(v===0)return r[e]=v,r[e+f]=0,0;d=n,a=0,l=v,i=0,c=0;do for(c<d?a=k[w+c*m]:a+=2,c+=1;t=j(l/a),p=l-a*t,p===0;){if(i+=1,l=t,r[e+(i+1)*f]=a,a===2&&i!==1){for(s=2;s<=i;s++)b=i-s+2,r[e+(b+1)*f]=r[e+b*f];r[e+2*f]=2}if(l===1)break}while(l!==1);return r[e]=v,r[e+f]=i,i}q.exports=u
});var g=h();module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
