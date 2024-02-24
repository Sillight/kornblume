import{d as p,i as h,s as K,c as o,a as t,t as d,l as $,v as T,x as F,F as S,r as E,g as r,m as G,o as l,z as R,_ as v,p as w,n as k,q as M,u as y,O as J,P as Q,f as X,A as g}from"./index-_vArLrjf.js";import{h as Y,i as Z}from"./images-CurxmBLU.js";import{_ as tt}from"./ArcanistIconDisplay.vue_vue_type_script_setup_true_lang-TqPP2M0V.js";import{_ as st}from"./ArcanistCalculate.vue_vue_type_script_setup_true_name_ArcanistCalculate_lang-4rmjZCzF.js";import"./MaterialIcon.vue_vue_type_script_setup_true_lang-jDzQUNJQ.js";const z="/Kornblume/images/items/common/insight1.webp",H="/Kornblume/images/items/common/insight2.webp",W="/Kornblume/images/items/common/insight3.webp",et={class:"px-2"},at={class:"text-white text-2xl font-bold"},ct={class:"px-8 lg:px-16 py-2"},nt={class:"w-full text-white flex justify-between text-xs 3xl:text-base"},lt=G('<span class="pl-1"><i class="fa-solid fa-o"></i></span><span class="w-7 pl-3"><i class="fa-solid fa-o"></i></span><span><img class="w-5" src="'+z+'"></span><span><img class="w-5" src="'+H+'"></span>',4),it={key:0},rt=t("img",{class:"w-5",src:W},null,-1),ot=[rt],dt=["max"],ut={class:"w-full text-white flex justify-between text-xs 3xl:text-base"},_t=t("span",null," Lv. 1 ",-1),pt=t("span",null,"Lv. 30",-1),ft=t("span",null,"Lv. 40",-1),ht=t("span",null,"Lv. 50",-1),mt={key:0},xt={class:"pt-2.5"},vt={class:"table table-xs"},bt={class:"text-white text-center"},gt=t("td",{class:"text-white"}," 69 ",-1),$t=p({__name:"Stats",props:{arcanist:{type:Object,required:!0}},setup(a){const s=a,c=h(["Attack","Health","Reality DEF","Mental DEF","Technique","Crit. Rate","Crit. DMG"]),e=h(s.arcanist.Rarity>=5?4:3),i=h([{insight:0,level:1},{insight:0,level:30},{insight:1,level:40},{insight:2,level:50},{insight:3,level:60}]),n=h([{insight:0,level:1},{insight:0,level:30},{insight:1,level:40},{insight:2,level:50}]),u=K(()=>({Id:s.arcanist.Id,isVisible:!0,currentInsight:0,currentLevel:1,goalInsight:(s.arcanist.Rarity>=5?i:n).value[e.value].insight,goalLevel:(s.arcanist.Rarity>=5?i:n).value[e.value].level,currentResonance:0,goalResonance:0}));return(N,x)=>(l(),o("div",et,[t("h2",at,d(N.$t("Stats")),1),t("div",ct,[t("div",nt,[lt,s.arcanist.Rarity>=5?(l(),o("span",it,ot)):$("",!0)]),T(t("input",{id:"level",type:"range",min:"0",max:s.arcanist.Rarity>=5?4:3,class:"range-slider",step:"1","onUpdate:modelValue":x[0]||(x[0]=m=>e.value=m)},null,8,dt),[[F,e.value]]),t("div",ut,[_t,pt,ft,ht,s.arcanist.Rarity>=5?(l(),o("span",mt,"Lv. 60")):$("",!0)])]),t("div",xt,[t("table",vt,[(l(!0),o(S,null,E(c.value,(m,b)=>(l(),o("tr",{key:b},[t("td",bt,d(m),1),gt]))),128))])]),r(st,{arcanist:u.value},null,8,["arcanist"])]))}}),yt={class:"skill-text"},wt=p({__name:"Text",props:{effect:{type:String,required:!0}},setup(a){const s=a,c=()=>s.effect.split(/(\[.*?\]|[\d]+%|\+[\d]+%|-[\d]+%|\d+\/\d+\/\d+%?)/).filter(i=>i);return(e,i)=>(l(),o("div",yt,[(l(!0),o(S,null,E(c(),(n,u)=>(l(),o("span",{class:R(["",{"text-blue-400/90":n.startsWith("["),"text-orange-300":/^(\+|-)\d+|%|\d+\/\d+\/\d+%?/.test(n)}]),key:u},d(n),3))),128))]))}}),_=v(wt,[["__scopeId","data-v-e710cb09"]]),f=a=>(w("data-v-5a74b6de"),a=a(),k(),a),kt={class:"px-2"},It={class:"text-white text-2xl font-bold"},Rt={class:"p-2"},St={class:"text-white"},Et=f(()=>t("td",null,[t("img",{class:"p-2",src:z})],-1)),jt=f(()=>t("td",null,[t("img",{class:"p-2",src:H})],-1)),Nt=f(()=>t("td",null,[t("img",{class:"p-2",src:W})],-1)),Pt={class:"p-2"},qt=f(()=>t("p",{class:"text-white"}," Portrait ",-1)),At=f(()=>t("td",{class:"insight"},"Lv. 1",-1)),Lt=f(()=>t("td",{class:"insight"},"Lv. 2",-1)),Ut=f(()=>t("td",{class:"insight"},"Lv. 3",-1)),Bt=f(()=>t("td",{class:"insight"},"Lv. 4",-1)),Ot=f(()=>t("td",{class:"insight"},"Lv. 5",-1)),Dt=p({__name:"Upgrades",props:{arcanist:{type:Object,required:!0}},setup(a){const s=a;return(c,e)=>(l(),o("div",kt,[t("h2",It,d(c.$t("Upgrades")),1),t("div",Rt,[t("p",St,d(s.arcanist.InsightEffects.Name),1),t("table",null,[t("tr",null,[Et,t("td",null,[r(_,{effect:s.arcanist.InsightEffects.Effect1},null,8,["effect"])])]),t("tr",null,[jt,t("td",null,[r(_,{effect:s.arcanist.InsightEffects.Effect2},null,8,["effect"])])]),t("tr",null,[Nt,t("td",null,[r(_,{effect:s.arcanist.InsightEffects.Effect3},null,8,["effect"])])])])]),t("div",Pt,[qt,t("table",null,[t("tr",null,[At,t("td",null,[r(_,{effect:s.arcanist.PortraitEffects.Effect1},null,8,["effect"])])]),t("tr",null,[Lt,t("td",null,[r(_,{effect:s.arcanist.PortraitEffects.Effect2},null,8,["effect"])])]),t("tr",null,[Ut,t("td",null,[r(_,{effect:s.arcanist.PortraitEffects.Effect3},null,8,["effect"])])]),t("tr",null,[Bt,t("td",null,[r(_,{effect:s.arcanist.PortraitEffects.Effect4},null,8,["effect"])])]),t("tr",null,[Ot,t("td",null,[r(_,{effect:s.arcanist.PortraitEffects.Effect5},null,8,["effect"])])])])])]))}}),Vt=v(Dt,[["__scopeId","data-v-5a74b6de"]]),Ct="/Kornblume/images/arcanists/misc/bg-skill.webp",Kt="/Kornblume/images/arcanists/misc/card-attribute.webp",Tt="/Kornblume/images/arcanists/misc/card-attack.webp",j=a=>(w("data-v-bdda3ce1"),a=a(),k(),a),Ft={class:"flex"},Mt={class:"relative w-1/5 flex items-end"},zt=j(()=>t("img",{class:"w-full",src:Ct,alt:""},null,-1)),Ht=["src"],Wt=j(()=>t("img",{class:"attribute",src:Kt,alt:""},null,-1)),Gt=j(()=>t("img",{class:"attribute",src:Tt,alt:""},null,-1)),Jt={class:"w-4/5 flex flex-col pl-4 justify-center"},Qt={class:"text-blue-400/90 font-bold"},Xt=p({__name:"Skill",props:{arcanist:{type:Object,required:!0},id:{type:Number,required:!0},star:{type:Number,required:!0}},setup(a){const s=a,c=(e,i)=>`images/arcanists/skill/${e}/${i}.webp`;return(e,i)=>(l(),o("div",Ft,[t("div",Mt,[zt,t("img",{class:"skill",src:c(s.arcanist.Id,a.id),alt:""},null,8,Ht),Wt,Gt]),t("div",Jt,[t("p",Qt,d(s.arcanist.Skills[3*(s.id-1)+s.star-1].Name),1),r(_,{effect:s.arcanist.Skills[3*(s.id-1)+s.star-1].Effect},null,8,["effect"])])]))}}),D=v(Xt,[["__scopeId","data-v-bdda3ce1"]]),Yt="/Kornblume/images/arcanists/misc/bg-ult.webp",Zt=a=>(w("data-v-e669fa7d"),a=a(),k(),a),ts={class:"flex"},ss={class:"relative w-1/5 flex items-end"},es=Zt(()=>t("img",{class:"w-full",src:Yt,alt:""},null,-1)),as=["src"],cs={class:"w-4/5 flex flex-col pl-4 justify-center"},ns={class:"text-blue-400/90 font-bold"},ls=p({__name:"Ultimate",props:{arcanist:{type:Object,required:!0},number:{type:Number,required:!0}},setup(a){const s=a,c=(e,i)=>`images/arcanists/skill/${e}/${i}.webp`;return(e,i)=>(l(),o("div",ts,[t("div",ss,[es,t("img",{class:"ult",src:c(s.arcanist.Id,3),alt:""},null,8,as)]),t("div",cs,[t("p",ns,d(s.arcanist.Ultimate.Name),1),r(_,{effect:s.arcanist.Ultimate.Effect},null,8,["effect"])])]))}}),is=v(ls,[["__scopeId","data-v-e669fa7d"]]),rs={class:"px-2"},os={class:"text-white text-2xl font-bold"},ds={class:"px-8 lg:px-16 py-2"},us=t("div",{class:"w-full text-white flex justify-between text-xs 3xl:text-base"},[t("span",null,"✦✧✧"),t("span",null,"✦✦✧"),t("span",null,"✦✦✦")],-1),_s={class:"flex flex-col gap-y-5 p-2"},ps=p({__name:"Skills",props:{arcanist:{type:Object,required:!0}},setup(a){const s=a,c=h("1"),e=K(()=>Number(c.value));return(i,n)=>(l(),o("div",rs,[t("h2",os,d(i.$t("Skills")),1),t("div",ds,[us,T(t("input",{id:"level",type:"range",min:"1",max:"3",class:"range-slider",step:"1","onUpdate:modelValue":n[0]||(n[0]=u=>c.value=u)},null,512),[[F,c.value]])]),t("div",_s,[r(D,{arcanist:s.arcanist,id:1,star:e.value},null,8,["arcanist","star"]),r(D,{arcanist:s.arcanist,id:2,star:e.value},null,8,["arcanist","star"]),r(is,{arcanist:s.arcanist,number:3},null,8,["arcanist"])])]))}}),fs=["data-tip"],hs=["src"],V=p({__name:"Psychube",props:{psychube:{type:Object,required:!0}},setup(a){const s=a,c=e=>`images/psychubes/icons/${e}.webp`;return(e,i)=>{var n;return l(),o("div",{class:"tooltip","data-tip":a.psychube.Name},[t("img",{class:"w-40",src:c(((n=s.psychube)==null?void 0:n.Id)??1),alt:""},null,8,hs)],8,fs)}}}),ms=["src"],xs={class:"text-white text-center p-1"},C=p({__name:"Resonance",props:{arcanist:{type:Object,required:!0},number:{type:Number,required:!0}},setup(a){const s=a,c=e=>`images/arcanists/resonance/${s.arcanist.Id}/${e}.webp`;return(e,i)=>(l(),o("div",null,[t("img",{class:"w-40",src:c(s.number),alt:""},null,8,ms),t("p",xs,d(s.arcanist["Resonance"+s.number]),1)]))}}),vs={class:"px-2"},bs=t("h2",{class:"text-white text-2xl font-bold"},"Builds",-1),gs=t("p",{class:"text-white p-2"},"Recommended Psychubes",-1),$s={class:"grid grid-cols-2"},ys={class:"flex justify-center items-center"},ws={class:"flex justify-center items-center"},ks=t("p",{class:"text-white p-2"},"Recommended Resonance 10 builds",-1),Is={class:"grid grid-cols-2 gap-x-8 p-4"},Rs={class:"flex justify-center items-center"},Ss={class:"flex justify-center items-center"},Es=p({__name:"Builds",props:{arcanist:{type:Object,required:!0}},setup(a){const s=M().psychubes,c=a,e=s.find(n=>n.Name===c.arcanist.Psychube1),i=s.find(n=>n.Name===c.arcanist.Psychube2);return(n,u)=>(l(),o("div",vs,[bs,gs,t("div",$s,[t("div",ys,[r(V,{psychube:y(e)??{}},null,8,["psychube"])]),t("div",ws,[r(V,{psychube:y(i)??{}},null,8,["psychube"])])]),ks,t("div",Is,[t("div",Rs,[r(C,{arcanist:a.arcanist??{},number:1},null,8,["arcanist"])]),t("div",Ss,[r(C,{arcanist:a.arcanist??{},number:2},null,8,["arcanist"])])])]))}}),js=a=>(w("data-v-9eb2ec3a"),a=a(),k(),a),Ns={class:"sm:pt-4 sm:px-8 md:px-16 flex flex-wrap justify-center"},Ps={class:"w-full lg:w-[calc(45%)] relative p-4"},qs=["src"],As={class:"flex flex-col lg:w-1/2 gap-y-4 max-w-xl 2xl:max-w-2xl p-4"},Ls={class:"p-4 rounded shadow custom-border w-full"},Us={class:"flex flex-wrap items-center space-x-2"},Bs={class:"text-white text-xl lg:text-3xl font-bold"},Os=js(()=>t("i",{class:"fa-solid fa-star"},null,-1)),Ds=["src"],Vs={class:"flex flex-wrap gap-x-2 gap-y-2 pt-2"},Cs=["onClick","disabled"],Ks={class:"p-4 rounded shadow custom-border w-full"},Ts=p({__name:"ArcanistDisplay",setup(a){const s=J(),c=M().arcanists,e=h(c[0]),i=["Stats","Upgrades","Skills"],n=h(i[0]);return Q(()=>{e.value=c.find(u=>u.Id===Number(s.params.id))||c[0]}),(u,N)=>{var x,m,b,P,q,A,L,U,B;return l(),o("div",Ns,[t("div",Ps,[t("img",{class:"w-full lg:h-[80vh] object-cover object-center text-2xl text-white font-bold",src:y(Y)(((x=e.value)==null?void 0:x.Id.toString())??""),alt:"Work in progress"},null,8,qs)]),t("div",As,[t("div",Ls,[t("div",Us,[r(tt,{arcanist:e.value},null,8,["arcanist"]),t("h2",Bs,d((m=e.value)==null?void 0:m.Name),1),t("p",{class:R(["pt-1",{"text-orange-300":((b=e.value)==null?void 0:b.Rarity)===6,"text-yellow-100":((P=e.value)==null?void 0:P.Rarity)===5,"text-purple-400":((q=e.value)==null?void 0:q.Rarity)===4,"text-sky-200":((A=e.value)==null?void 0:A.Rarity)===3,"text-green-200":((L=e.value)==null?void 0:L.Rarity)===2}])},[X(d((U=e.value)==null?void 0:U.Rarity)+" ",1),Os],2),t("img",{class:"inline-block w-10",src:y(Z)(((B=e.value)==null?void 0:B.Afflatus)??""),alt:""},null,8,Ds)]),t("div",Vs,[(l(),o(S,null,E(i,(I,O)=>t("button",{key:O,onClick:Fs=>n.value=I,class:R(["hover:bg-info rounded-md text-white py-1 px-3",n.value===I?"border-button":""]),disabled:O!==0},d(u.$t(I)),11,Cs)),64))])]),t("div",Ks,[n.value==="Stats"?(l(),g($t,{key:0,arcanist:e.value??{}},null,8,["arcanist"])):$("",!0),n.value==="Upgrades"?(l(),g(Vt,{key:1,arcanist:e.value??{}},null,8,["arcanist"])):n.value==="Skills"?(l(),g(ps,{key:2,arcanist:e.value??{}},null,8,["arcanist"])):n.value==="Builds"?(l(),g(Es,{key:3,arcanist:e.value??{}},null,8,["arcanist"])):$("",!0)])])])}}}),Js=v(Ts,[["__scopeId","data-v-9eb2ec3a"]]);export{Js as default};
