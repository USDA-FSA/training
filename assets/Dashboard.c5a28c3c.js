import{u as j,f as c,e as D,w as T,y as V,g as h,o as _,c as u,l as v,a as s,t as z,b as f,z as m,d as p}from"./vendor.46b2592b.js";import{b as B,a as E,u as L}from"./BaseFooter.befcf7e7.js";import{_ as S}from"./index.116a4d80.js";var H="/training/img/video-titles/ui-components/icons-title.png",w="/training/img/video-titles/ui-components/stepped-controls-title.png",C="/training/img/video-titles/ui-components/form-fields-title.png",F="/training/img/video-titles/ui-components/buttons-title.png",M="/training/img/video-titles/ui-components/date-picker-title.png",I="/training/img/video-titles/ui-components/stepped-tabs-title.png",N="/training/img/video-titles/ui-components/button-group-title.png",P="/training/img/video-titles/guides/508-title.png";const R={components:{baseHeader:B,baseFooter:E},setup(b){const a=j(),{goto:g}=L(),t=c(!1),l=c("RGurnlgbuQ4");c("RGurnlgbuQ4-container");const r=c(""),o=D(()=>{let i=a.getters["videos/getVideos"];return i?i.videos:null}),d=()=>{let e=document.getElementById(l.value+"-container").parentElement;t.value?(e.classList.add("uxt-drawer__container-bg--hide"),e.classList.remove("uxt-drawer__container-bg--show"),t.value=!1):(e.classList.add("uxt-drawer__container-bg--show"),e.classList.remove("uxt-drawer__container-bg--hide"),t.value=!0)},n=i=>{let e=i.filter(y=>y.uid==l.value);x(e),k(e)},x=i=>{r.value=i[0].desc},k=i=>{let e=document.getElementById(l.value+"-container");e&&(e.innerHTML=i[0].transcript)};return T(o,i=>{n(i)}),V(()=>{a.dispatch("videos/setVideos")}),{goto:g,videoId:l,videosData:o,videoDescription:r,showTranscript:t,toggleTranscriptDrawer:d}}},G={id:"main-content",tabindex:"-1"},O=m('<div class="fsa-section"><div class="fsa-section__bd"><div class="fsa-m-t--l"><div class="fsa-level@m fsa-level--justify-between"><h1 class="fsa-m--none">Dashboard</h1></div></div></div></div>',1),A={class:"fsa-section"},Q={class:"fsa-section__bd"},U={class:"ds-l-page"},W=m('<div class="ds-l-page__adjacent"><div id="jump-target"><div class="ds-jump"><ul class="ds-jump__list"><li class="ds-jump__item ds-jump__item--active"><a class="ds-jump__link" href="#main-content">Overview</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#most-recent">Most Recent</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#popular-videos">Popular Videos</a></li></ul></div></div></div>',1),Y={class:"ds-l-page__body"},q={class:"ds-article"},J=s("h2",{class:"sr-only"},"Overview",-1),K=s("p",{class:"fsa-text--lead fsa-m-t--m"},[p("Welcome to your new training resource for the "),s("strong",null,"FPAC Design System"),p(", industry standards, and general User Experience best practices.")],-1),X={class:"uxt-video uxt-video__md"},Z=["src"],$=s("h3",null,"Video Description",-1),ss={class:"fsa-m-t--s fsa-m-b--l"},ts={class:"uxt-drawer"},is={class:"fsa-level fsa-level--justify-between fsa-border--xxs fsa-border:hover--none fsa-shadow:hover--raised"},es=s("span",{class:"fsa-text-size--4 fsa-p--s"},[s("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})]),p(" View Transcript ")],-1),as={key:0,type:"button",class:"fsa-btn fsa-btn--plain fsa-p--s",title:"Expand","aria-label":"Expand"},ls=s("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1),ns=[ls],os={key:1,type:"button",class:"fsa-btn fsa-btn--plain fsa-p--s",title:"Expand","aria-label":"Expand"},cs=s("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})],-1),rs=[cs],ds={class:"uxt-drawer__container fsa-m-l--xxs fsa-m-r--xxs"},_s={class:"uxt-drawer__container-bg--hide fsa-p--m fsa-border--xxs"},us=["id"],ms={class:"fsa-m-t--l fsa-text-align--center"},ps=m('<h2 id="most-recent">Most Recent</h2><div class="ds-subcat-list"><ul class="ds-subcat-list__list"><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/icons"><span class="ds-subcat-list__text">Icons</span><img class="ds-subcat-list__img" src="'+H+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/icons"><span class="ds-subcat-list__text">Stepped Controls</span><img class="ds-subcat-list__img" src="'+w+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/icons"><span class="ds-subcat-list__text">Form Fields</span><img class="ds-subcat-list__img" src="'+C+'" alt></a></li></ul></div><h2 id="popular-videos">Popular Videos</h2><div class="ds-subcat-list"><ul class="ds-subcat-list__list"><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/buttons"><span class="ds-subcat-list__text">Buttons</span><img class="ds-subcat-list__img" src="'+F+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/button-group"><span class="ds-subcat-list__text">Date Picker</span><img class="ds-subcat-list__img" src="'+M+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/checkbox"><span class="ds-subcat-list__text">Stepped Tabs</span><img class="ds-subcat-list__img" src="'+I+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/date-picker"><span class="ds-subcat-list__text">Stepped Control</span><img class="ds-subcat-list__img" src="'+w+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/form-fields"><span class="ds-subcat-list__text">Button Group</span><img class="ds-subcat-list__img" src="'+N+'" alt></a></li><li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds"><a class="ds-subcat-list__link" href="/training/components/radio"><span class="ds-subcat-list__text">508 Accessibility</span><img class="ds-subcat-list__img" src="'+P+'" alt></a></li></ul></div>',4);function bs(b,a,g,t,l,r){const o=h("baseHeader"),d=h("baseFooter");return _(),u("div",null,[v(o,{onEmitSearch:b.submitSearch},null,8,["onEmitSearch"]),s("main",G,[O,s("div",A,[s("div",Q,[s("div",U,[W,s("div",Y,[s("article",q,[J,K,s("div",X,[s("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/"+t.videoId+"?rel=0&showinfo=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},`\r
                  `,8,Z)]),$,s("div",ss,[s("p",null,z(t.videoDescription),1)]),s("div",ts,[s("div",{onClick:a[0]||(a[0]=(...n)=>t.toggleTranscriptDrawer&&t.toggleTranscriptDrawer(...n)),class:"uxt-drawer__front"},[s("div",is,[es,s("span",null,[t.showTranscript?f("",!0):(_(),u("button",as,ns)),t.showTranscript?(_(),u("button",os,rs)):f("",!0)])])]),s("div",ds,[s("div",_s,[s("p",{id:t.videoId+"-container"},null,8,us),s("div",ms,[s("button",{onClick:a[1]||(a[1]=(...n)=>t.toggleTranscriptDrawer&&t.toggleTranscriptDrawer(...n)),class:"fsa-btn fsa-btn--flat"},"Close")])])])]),ps])])])])])]),v(d)])}var fs=S(R,[["render",bs]]);export{fs as default};
