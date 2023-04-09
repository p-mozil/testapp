(function(){"use strict";var e={503:function(e,t,r){var i=r(963),n=r(252);function s(e,t,r,i,s,o){const a=(0,n.up)("platePalApp");return(0,n.wg)(),(0,n.j4)(a)}var o=r(577),a=r.p+"img/loading_pizza.2a46dc49.gif";const l={class:"app"},p={class:"header"},c={class:"inputs"},d=["value"],u={src:a,class:"loadingAnimation"};function h(e,t,r,s,a,h){const g=(0,n.up)("appRenderList");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",p,(0,o.zw)(a.text),1),(0,n._)("div",c,[(0,n.wy)((0,n._)("input",{onKeyup:t[0]||(t[0]=(0,i.D2)((e=>h.getDishes(e)),["enter"])),type:"text",placeholder:"Chicken, rice",class:"ingredientsField","onUpdate:modelValue":t[1]||(t[1]=e=>a.inputField=e)},null,544),[[i.nr,a.inputField]]),(0,n._)("input",{type:"button",value:a.btnText,onClick:t[2]||(t[2]=e=>h.getDishes(e)),class:"findButton"},null,8,d)]),(0,n.wy)((0,n._)("img",u,null,512),[[i.F8,a.isLoading]]),(0,n.wy)((0,n.Wm)(g,{ref:"child",ingredients:a.inputField,isLoading:a.isLoading,onStepsChanged:t[3]||(t[3]=e=>e?a.btnText="Else":"Yummy!"),onErrorOcured:t[4]||(t[4]=e=>a.btnText="Yummy!"),onIsLoadingState:t[5]||(t[5]=e=>a.isLoading=e)},null,8,["ingredients","isLoading"]),[[i.F8,!a.isLoading]])])}const g={class:"app-render-list"},f={class:"main"},m={class:"result"};function v(e,t,r,s,a,l){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",f,[(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.steps,((e,t)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("p",{class:(0,o.C_)(l.styledList(e,t)),key:t},(0,o.zw)(e),3)),[[i.F8,!a.error.isError]]))),128)),(0,n.wy)((0,n._)("p",{class:"error_message"},(0,o.zw)(a.error.errorMsg),513),[[i.F8,a.error.isError]])])])])}const y="http://p-mozil.click/";async function w(){try{let e=await fetch(y),t=await e.json(),r=t.key;return r}catch(e){console.error("ERRORR =>>>",e)}}var _=w,b={name:"app-renderList",props:{ingredients:String},data(){return{response:null,prompt:"",steps:null,error:{isError:!1,errorMsg:""}}},methods:{styledList(e,t){return"Ingredients:"!=e&&0==t?{dish_name:!0,collored_line:!1,ing_dir:!1}:"Ingredients:"==e?{dish_name:!1,collored_line:!1,ing_dir:!0,ing:!0}:"Directions:"==e||"Instructions:"==e?{dish_name:!1,collored_line:!1,ing_dir:!0,dir:!0}:t%2?"":{dish_name:!1,collored_line:!0,ing_dir:!1}},start(){this.dataRequest(this.prompt)},async dataRequest(e){try{if(this.$emit("isLoadingState",!0),this.ingredients){this.error.isError=!1;const t=await _(),r=await fetch("https://api.openai.com/v1/completions",{body:JSON.stringify({model:"text-davinci-002",prompt:e,temperature:.5,max_tokens:300}),method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer  ${t}`}});this.response=await r.json()}else this.error.isError=!0,this.error.errorMsg="Please provide at least one ingredient.",this.$emit("errorOcured"),this.$emit("isLoadingState",!1)}catch{this.error.isError=!0,this.error.errorMsg="Error fetching dishes. Please try again later.",this.$emit("isLoadingState",!1)}}},watch:{ingredients(){this.prompt=`Dish recipe using only ${this.ingredients}.Replace Fahrenheit temperature with Celsius. Also give ingredients and directions`},response(){this.steps=this.response.choices[0].text.split(/\n/).filter(((e,t,r)=>","!=e.charAt(0)&&""!=e&&r[0].charAt(0).toLowerCase()!==e.charAt(0))),this.$emit("isLoadingState",!1)},steps(){this.$emit("stepsChanged",this.steps)}}},L=r(744);const O=(0,L.Z)(b,[["render",v]]);var x=O,A={name:"plate-pal-app",components:{appRenderList:x},data(){return{inputField:"",text:"ALOHAAAA!!!This is PlatePal app. Here you can browse through a wide variety of recipes from different cuisines and find inspiration for your next meal.",btnText:"Yummy!",isLoading:!1}},methods:{getDishes(e){return this.$refs.child?this.$refs.child.start(e):""}}};const k=(0,L.Z)(A,[["render",h]]);var E=k,F={name:"App",components:{platePalApp:E}};const j=(0,L.Z)(F,[["render",s]]);var D=j;(0,i.ri)(D).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var p=n();void 0!==p&&(t=p)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p=""}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],a=i[1],l=i[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var c=l(r)}for(t&&t(i);p<o.length;p++)s=o[p],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},i=self["webpackChunkplatepalapp"]=self["webpackChunkplatepalapp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(503)}));i=r.O(i)})();
//# sourceMappingURL=app.33291d97.js.map