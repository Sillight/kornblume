import{d as s}from"./images-4nVa5Ofa.js";import{d as i,e as c,c as l,g as d,w as u,o as f,a as n,z as p,u as g}from"./index-doznGjKV.js";var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function O(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var a=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};a.prototype=t.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(a,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),a}const m=["data-tip"],y={class:"rounded-md overflow-hidden"},_={class:"avatar"},b=["src","alt"],R=i({__name:"ArcanistIcon",props:{arcanist:{type:Object,required:!0}},setup(e){const t=e;return(a,r)=>{const o=c("router-link");return f(),l("div",{class:"tooltip","data-tip":a.$t(t.arcanist.Name)},[d(o,{to:`/arcanist-${e.arcanist.Id}`},{default:u(()=>[n("div",y,[n("div",_,[n("div",{class:p(["w-10 rounded",{"bg-orange-300":t.arcanist.Rarity===6,"bg-yellow-100":t.arcanist.Rarity===5,"bg-purple-400":t.arcanist.Rarity===4,"bg-sky-200":t.arcanist.Rarity===3,"bg-green-200":t.arcanist.Rarity===2}])},[n("img",{src:g(s)(t.arcanist.Id),alt:t.arcanist.Name},null,8,b)],2)])])]),_:1},8,["to"])],8,m)}}});export{R as _,j as a,w as c,O as g};
