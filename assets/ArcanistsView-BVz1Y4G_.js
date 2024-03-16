import{d as C,e as N,o as c,c as i,a as s,u as d,g as I,w as S,t as m,l as L,p as M,n as q,_ as D,b as F,q as z,i as u,s as y,j as E,v as k,x as A,y as O,z as Q,F as v,r as x,A as $,B as b,C as T}from"./index-C9AX9sjB.js";import{f as G}from"./arcanists-piteU79-.js";import{g as H,a as J,b as K}from"./images-SGaKXY7U.js";const W=l=>(M("data-v-1f8ce464"),l=l(),q(),l),X={class:"p-2.5 relative overflow-hidden group"},Y={class:"transform transition-transform duration-500 overflow-hidden"},Z=["src","alt"],ee=W(()=>s("div",{class:"overlay absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"},null,-1)),te={key:0,class:"absolute top-0.5 right-1.5 w-auto px-1 text-center text-sm font-bold text-white/90 bg-opacity-50 rounded-md bg-black"},se=["src"],ae=["src"],oe={class:"absolute bottom-0 w-16 sm:w-20 text-center text-white/90 py-2.5 text-shadow font-bold opacity-95"},ne=C({__name:"ArcanistPortrait",props:{arcanist:{type:Object,required:!0},count:{type:Number,required:!0}},setup(l){const o=l;return(h,w)=>{const p=N("i18n-t");return c(),i("div",X,[s("div",Y,[s("img",{class:"w-16 sm:w-20 rounded-b-full scale-[1.025] transform transition-transform duration-300 group-hover:scale-125",src:d(H)(o.arcanist.Id),alt:o.arcanist.Name},null,8,Z),ee,l.count>=0?(c(),i("span",te,[I(p,{keypath:"P{portrait}"},{portrait:S(()=>[s("span",null,m(o.count),1)]),_:1})])):L("",!0),s("img",{class:"absolute top-0 left-0 w-4 opacity-90",src:d(J)(o.arcanist.Afflatus),alt:""},null,8,se),s("img",{class:"absolute bottom-0 w-16 sm:w-20 rounded-md",src:d(K)(o.arcanist.Rarity),alt:""},null,8,ae),s("span",oe,m(h.$t(o.arcanist.Name)),1)])])}}}),re=D(ne,[["__scopeId","data-v-1f8ce464"]]),le={class:"responsive-spacer"},ce={class:"flex pb-4"},ie={class:"text-2xl text-white font-bold"},ue={class:"flex flex-wrap p-4 gap-x-4 justify-between items-center"},de={class:"flex flex-wrap gap-x-10 justify-center"},pe=["placeholder"],fe={class:"form-control"},_e={class:"cursor-pointer label justify-center space-x-5"},me={class:"label-text text-white text-md"},he={class:"flex flex-wrap gap-x-10 justify-center"},ve={class:"flex justify-center space-x-2"},xe=["onClick"],be={class:"flex justify-center space-x-2"},we=["onClick"],ge=["src"],ye={class:"flex flex-wrap items-center justify-center"},Ce=C({__name:"ArcanistsView",setup(l){const{locale:o,t:h}=F(),w=z().arcanists,p=u(w),f=u(""),g=u([]),n=u([]),r=u([]),j=e=>{n.value.includes(e)?n.value=n.value.filter(a=>a!==e):n.value.push(e)},P=e=>{r.value.includes(e)?r.value=r.value.filter(a=>a!==e):r.value.push(e)},B=y(()=>p.value.map(e=>({ArcanistName:e.Name,count:g.value.filter(a=>a.ArcanistName===e.Name).length-1}))),V=y(()=>{let e=p.value;return o.value==="en-US"?e=e.filter(a=>a.Name.toLowerCase().includes(f.value.toLowerCase())):e=e.filter(a=>h(a.Name).includes(f.value)),n.value.length>0&&(e=e.filter(a=>n.value.includes(a.Rarity))),r.value.length>0&&(e=e.filter(a=>r.value.includes(a.Afflatus))),e=G(e),e});return E(()=>{k().data.length>0&&(g.value=[...k().data])}),(e,a)=>{const R=N("router-link");return c(),i("div",le,[s("div",ce,[s("h2",ie,m(e.$t("arcanists")),1)]),s("div",ue,[s("div",de,[A(s("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>f.value=t),type:"text",placeholder:e.$t("search-arcanists"),class:"input input-sm w-full sm:w-auto bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none"},null,8,pe),[[O,f.value]]),s("div",fe,[s("label",_e,[s("span",me,m(e.$t("show-unreleased-arcanists")),1),A(s("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>d($)().settings.showUnreleasedArcanists=t),type:"checkbox",class:"checkbox checkbox-info"},null,512),[[Q,d($)().settings.showUnreleasedArcanists]])])])]),s("div",he,[s("div",ve,[(c(),i(v,null,x([2,3,4,5,6],t=>s("button",{key:t,class:b([{"border-2 border-info":n.value.includes(t),"border-2 border-transparent":!n.value.includes(t)},"p-2 rounded-md"]),onClick:_=>j(t)},[s("i",{class:b(["fa-solid fa-star",{"text-orange-300":t===6,"text-yellow-100":t===5,"text-purple-400":t===4,"text-sky-200":t===3,"text-green-200":t===2}])},null,2)],10,xe)),64))]),s("div",be,[(c(),i(v,null,x(["Beast","Mineral","Plant","Star","Intellect","Spirit"],t=>s("button",{key:t,class:b([{"border-2 border-info":r.value.includes(t),"border-2 border-transparent":!r.value.includes(t)},"p-2 rounded-md"]),onClick:_=>P(t)},[s("img",{class:"w-4",src:`images/arcanists/misc/${t.toLowerCase()}.webp`,alt:""},null,8,ge)],10,we)),64))])])]),s("div",ye,[(c(!0),i(v,null,x(V.value,t=>(c(),T(R,{key:t.Id,to:`/arcanist-${t.Id}`},{default:S(()=>{var _;return[I(re,{arcanist:t,count:((_=B.value.find(U=>U.ArcanistName===t.Name))==null?void 0:_.count)??-1},null,8,["arcanist","count"])]}),_:2},1032,["to"]))),128))])])}}});export{Ce as default};
