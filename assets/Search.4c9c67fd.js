import{f as c,u as C,k as N,e as I,w as A,B,g as b,o as r,c as n,l as g,a,t as h,b as j,F as L,h as D,y as R,d as _,D as T}from"./vendor.ef66c76c.js";import{b as E,a as H,u as U}from"./BaseFooter.86faa212.js";import{p as W}from"./PopularVideos.b89a8eca.js";import{_ as M}from"./index.d1d3b83a.js";const O={components:{baseHeader:E,baseFooter:H,popularVideos:W},setup(w){const x=c("/training/"),f=C(),t=N(),{goto:k}=U(),p=I(()=>{let e=f.getters["videos/getVideos"];return e||null}),d=c(null),v=c([]),u=c(null),l=c(null),m=c(0),F=e=>{if(e===void 0)return;l.value=e;let s=d.value.filter(i=>{let o=!1;return o=o?!0:S(e,i),o=o?!0:V(e,i),o});s.length>0?(u.value=s,m.value=s.length):(u.value=null,m.value=0)},S=(e,s)=>s.searchTerms.findIndex(o=>o.toLowerCase()==e.toLowerCase())>-1,V=(e,s)=>P(s.desc).toLowerCase().includes(e.toLowerCase()),P=e=>{let s=e.replaceAll(",","");return s=s.replaceAll(".",""),s=s.replaceAll("'",""),s=s.replaceAll('"',""),v.value.forEach(i=>{s=s.replaceAll(" "+i+" "," ")}),s},y=e=>{let s=d.value.findIndex(o=>o.uid==e);return d.value[s].routePath};return A([p,()=>t.params.id],([e,s],[i,o])=>{d.value=e.videos,v.value=e.excludedWords,p.value&&F(s)}),B(()=>{f.dispatch("videos/setVideos")}),{baseUrl:x,goto:k,videoResults:u,getPathFromId:y,searchPhrase:l,totalResults:m}}},Y={id:"main-content",tabindex:"-1"},q=R('<div class="fsa-section"><div class="fsa-section__bd"><div class="fsa-m-t--l"><div class="fsa-level@m fsa-level--justify-between"><h1 class="fsa-m--none">Search Results</h1></div></div></div></div>',1),z={class:"fsa-section"},G={class:"fsa-section__bd"},J={class:"ds-l-page"},K=R('<div class="ds-l-page__adjacent"><div id="jump-target"><div class="ds-jump"><ul class="ds-jump__list"><li class="ds-jump__item ds-jump__item--active"><a class="ds-jump__link" href="#main-content">Overview</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#most-recent">Search Results</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#popular-videos">Popular Videos</a></li></ul></div></div></div>',1),Q={class:"ds-l-page__body"},X={class:"ds-article"},Z={key:0,class:"fsa-text--lead fsa-m-b--xl"},$=_(" No videos were found related to "),ss=_(". "),es={key:1,class:"fsa-text--lead fsa-m-b--xl"},ts=_(" Your search for "),as=_(" returned "),os=_(" videos. "),ls={key:2,class:"fsa-m-b--xl"},is={class:"ds-subcat-list"},ds={class:"ds-subcat-list__list"},cs=["onClick","href"],rs={class:"ds-subcat-list__text"},ns=["src","alt"];function us(w,x,f,t,k,p){const d=b("baseHeader"),v=b("popular-videos"),u=b("baseFooter");return r(),n("div",null,[g(d),a("main",Y,[q,a("div",z,[a("div",G,[a("div",J,[K,a("div",Q,[a("article",X,[t.videoResults?j("",!0):(r(),n("div",Z,[$,a("strong",null,"'"+h(t.searchPhrase)+"'",1),ss])),t.videoResults?(r(),n("div",es,[ts,a("strong",null,"'"+h(t.searchPhrase)+"'",1),as,a("strong",null,h(t.totalResults),1),os])):j("",!0),t.videoResults?(r(),n("div",ls,[a("div",is,[a("ul",ds,[(r(!0),n(L,null,D(t.videoResults,l=>(r(),n("li",{key:l.uid,class:"ds-subcat-list__list-item ds-subcat-list__list-item--thirds"},[a("a",{onClick:T(m=>t.goto(t.getPathFromId(l.uid)),["prevent"]),class:"ds-subcat-list__link",href:t.baseUrl+t.getPathFromId(l.uid)},[a("span",rs,h(l.title),1),a("img",{src:t.baseUrl+l.videoTitleImage,alt:l.title,class:"ds-subcat-list__img"},null,8,ns)],8,cs)]))),128))])])])):j("",!0),g(v)])])])])])]),g(u)])}var fs=M(O,[["render",us]]);export{fs as default};
