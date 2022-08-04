import{u as T,f as l,e as V,w as D,y as z,g as m,o as _,c as f,l as u,a as e,t as k,b as p,D as g,z as B,d as E}from"./vendor.46b2592b.js";import{b as L,a as C,u as H}from"./BaseFooter.befcf7e7.js";import{_ as b}from"./video-coming-soon.9139af14.js";import{_ as I}from"./index.116a4d80.js";const j={components:{baseHeader:L,baseFooter:C},setup(v){const t=T(),{goto:h}=H(),s=l(!1),n=l("RGurnlgbuQ4");l("RGurnlgbuQ4-container");const d=l(""),r=V(()=>{let o=t.getters["videos/getVideos"];return o?o.videos:null}),c=()=>{let a=document.getElementById(n.value+"-container").parentElement;s.value?(a.classList.add("uxt-drawer__container-bg--hide"),a.classList.remove("uxt-drawer__container-bg--show"),s.value=!1):(a.classList.add("uxt-drawer__container-bg--show"),a.classList.remove("uxt-drawer__container-bg--hide"),s.value=!0)},i=o=>{let a=o.filter(y=>y.uid==n.value);w(a),x(a)},w=o=>{d.value=o[0].desc},x=o=>{let a=document.getElementById(n.value+"-container");a&&(a.innerHTML=o[0].transcript)};return D(r,o=>{i(o)}),z(()=>{t.dispatch("videos/setVideos")}),{goto:h,videoId:n,videosData:r,videoDescription:d,showTranscript:s,toggleTranscriptDrawer:c}}},F={id:"main-content",tabindex:"-1"},M=B('<div class="fsa-section"><div class="fsa-section__bd"><div class="fsa-m-t--l"><div class="fsa-level@m fsa-level--justify-between"><h1 class="fsa-m-t--none">Prototype Kit Installation</h1></div></div></div></div>',1),N={class:"fsa-section"},S={class:"fsa-section__bd"},P={class:"fsa-grid"},R={class:"fsa-grid__1/1 fsa-grid__1/1@m fsa-grid__2/3@l"},G={class:"uxt-video"},K=["src"],Q=e("h3",null,"Video Description",-1),U={class:"fsa-m-t--s fsa-m-b--l"},O={class:"uxt-drawer"},Y={class:"fsa-level fsa-level--justify-between fsa-border--xxs fsa-border:hover--none fsa-shadow:hover--raised"},q=e("span",{class:"fsa-text-size--4 fsa-p--s"},[e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})]),E(" View Transcript ")],-1),A={key:0,type:"button",class:"fsa-btn fsa-btn--plain fsa-p--s",title:"Expand","aria-label":"Expand"},J=e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1),W=[J],X={key:1,type:"button",class:"fsa-btn fsa-btn--plain fsa-p--s",title:"Expand","aria-label":"Expand"},Z=e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})],-1),$=[Z],ee={class:"uxt-drawer__container fsa-m-l--xxs fsa-m-r--xxs"},se={class:"uxt-drawer__container-bg--hide fsa-p--m fsa-border--xxs"},te=["id"],oe={class:"fsa-m-t--l fsa-text-align--center"},ae={class:"fsa-grid__1/1 fsa-grid__1/1@m fsa-grid__1/3@l"},ie={class:"uxt-video-related"},ne=e("span",{class:"uxt-video-related__header"},"Related Videos:",-1),re={class:"fsa-level fsa-level--none@xs fsa-level--inline@s fsa-level--gutter-m@s fsa-level--none@l"},le={class:"uxt-video-related__item"},de=e("img",{class:"uxt-video-related__item-media",src:b,alt:""},null,-1),ce=e("span",{class:"uxt-video-related__item-text"},"UI Components - Buttons",-1),_e=[de,ce],fe={class:"uxt-video-related__item"},ve=e("img",{class:"uxt-video-related__item-media",src:b,alt:""},null,-1),he=e("span",{class:"uxt-video-related__item-text"},"UI Components - Form Field",-1),me=[ve,he];function ue(v,t,h,s,n,d){const r=m("baseHeader"),c=m("baseFooter");return _(),f("div",null,[u(r,{onEmitSearch:v.submitSearch},null,8,["onEmitSearch"]),e("main",F,[M,e("div",N,[e("div",S,[e("div",P,[e("div",R,[e("div",G,[e("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/"+s.videoId+"?rel=0&showinfo=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},`\r
                `,8,K)]),Q,e("div",U,[e("p",null,k(s.videoDescription),1)]),e("div",O,[e("div",{onClick:t[0]||(t[0]=(...i)=>s.toggleTranscriptDrawer&&s.toggleTranscriptDrawer(...i)),class:"uxt-drawer__front"},[e("div",Y,[q,e("span",null,[s.showTranscript?p("",!0):(_(),f("button",A,W)),s.showTranscript?(_(),f("button",X,$)):p("",!0)])])]),e("div",ee,[e("div",se,[e("p",{id:s.videoId+"-container"},null,8,te),e("div",oe,[e("button",{onClick:t[1]||(t[1]=(...i)=>s.toggleTranscriptDrawer&&s.toggleTranscriptDrawer(...i)),class:"fsa-btn fsa-btn--flat"},"Close")])])])])]),e("div",ae,[e("div",ie,[ne,e("div",re,[e("div",le,[e("a",{onClick:t[2]||(t[2]=g(i=>s.goto("/ui-components/buttons"),["prevent"])),class:"uxt-video-related__item-link",href:""},_e)]),e("span",fe,[e("a",{onClick:t[3]||(t[3]=g(i=>s.goto("/ui-components/form-field"),["prevent"])),class:"uxt-video-related__item-link",href:""},me)])])])])])])])]),u(c)])}var xe=I(j,[["render",ue]]);export{xe as default};
