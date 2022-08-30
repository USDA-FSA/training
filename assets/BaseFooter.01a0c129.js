import{_ as m}from"./index.802379bf.js";import{z as I,e as L,o as l,c as i,a as s,t as d,g as k,l as y,j as O,f as P,A as T,w as H,B as x,C as V,F as S,h as A,n as M,D as u,b as N,E as G,v as D,u as X}from"./vendor.ef66c76c.js";function F(){const r=I();return{goto:(n,a="")=>{n.includes("http")?a=="_blank"?window.open(n,a):window.location.href=n:r.push(n)}}}const K={props:{AG_ABBR:String,AG_FULL:String,AG_URL:String,AG_LOGO:String,SUB_AG_ABBR:String,SUB_AG_FULL:String,SUB_AG_URL:String},setup(r){const t=L(()=>"Link to "+r.AG_ABBR+" homepage"),n=L(()=>"Link to "+r.SUB_AG_ABBR+" homepage");return{agTitleValue:t,subAgTitleValue:n}}},j={class:"fsa-tophat"},z={class:"fsa-tophat__bd"},W={class:"fsa-tophat__primary"},q={class:"fsa-tophat__agency"},J=["href","title"],Q=["src"],Y={class:"fsa-tophat__agency-abbr",title:""},Z={class:"fsa-tophat__agency-fullname"},ss={class:"fsa-tophat__secondary"},es={class:"fsa-tophat__subagency"},as=["href","title"];function ts(r,t,n,a,f,h){return l(),i("div",j,[s("div",z,[s("div",W,[s("span",q,[s("a",{href:n.AG_URL,class:"fsa-tophat__link",title:a.agTitleValue},[s("img",{role:"presentation",class:"fsa-tophat__agency-logo",src:n.AG_LOGO,alt:""},null,8,Q),s("abbr",Y,d(n.AG_ABBR),1),s("span",Z,d(n.AG_FULL),1)],8,J)])]),s("div",ss,[s("span",es,[s("a",{href:n.SUB_AG_URL,class:"fsa-tophat__link",title:a.subAgTitleValue},d(n.SUB_AG_FULL),9,as)])])])])}var os=m(K,[["render",ts]]);const ns={props:{APP_ABBR_NAME:String,APP_FULL_NAME:String,PROFILE_NAME:String,LOGOFF_URL:String},setup(r){return{appTitleValue:L(()=>r.APP_ABBR_NAME+" Prototype Kit")}}},ls={class:"fsa-header-app"},is={class:"fsa-header-app__bd"},_s={class:"fsa-header-app__primary"},rs={class:"fsa-header-app__app-name"},cs=["title"],ds={class:"fsa-header-app__app-full"},us={class:"fsa-header-app__secondary"},fs={class:"fsa-header-app__profile"},hs=["href"],bs={class:"fsa-header-app__profile-name"};function vs(r,t,n,a,f,h){const e=k("router-link");return l(),i("div",ls,[s("div",is,[s("div",_s,[y(e,{to:"home",class:"fsa-header-app__home-link"},{default:O(()=>[s("span",rs,[s("abbr",{class:"fsa-header-app__app-abbr",title:a.appTitleValue},d(n.APP_ABBR_NAME),9,cs),s("span",ds,d(n.APP_FULL_NAME),1)])]),_:1})]),s("div",us,[s("span",fs,[s("a",{href:n.LOGOFF_URL,class:"fsa-header-app__profile-link"},[s("span",bs,d(n.PROFILE_NAME),1)],8,hs)])])])])}var ps=m(ns,[["render",vs]]);function gs(){let r=P(!1),t=T({}),n=T({});const a=_=>{r=_},f=(_,p)=>{t=_,n=p;let g=_.getAttribute("aria-controls");_.setAttribute("aria-expanded","true"),document.getElementById(g).setAttribute("aria-hidden","false"),a(!0)},h=(_,p=!1)=>{let g=_.getAttribute("aria-controls");g&&(_.setAttribute("aria-expanded","false"),document.getElementById(g).setAttribute("aria-hidden","true"),a(!1))},e=_=>{_.addEventListener("focus",c)},o=_=>{_.removeEventListener("focus",c)},c=_=>{_.currentTarget},C=_=>{if(r&&t)try{let p=t.contains(_.target),g=n.contains(_.target);!p&&!g&&(E("closeAllMenus"),a(!1))}catch{}},w=_=>{r&&_.keyCode==27&&(E("closeAllMenus"),a(!1))},E=(_,p=null)=>{let g=document.getElementsByClassName("fsa-nav-global__link--has-sub-menu");for(let U=0;U<g.length;U++){let b=g[U];b.cb=E,R(_,b)}},R=(_,p)=>{_=="addFocusListeners"?e(p):_=="removeFocusListeners"?o(p):_=="closeAllMenus"&&h(p,!0)};return{isMenuOpen:r,theItem:t,theMenu:n,openMenu:f,closeMenu:h,loopItems:E,listenForKeys:w,documentClickHandler:C}}const ms={props:{NAV_DATA:Object,EXTRA_CLASSES:String,USE_SEARCH:String,USE_SCOPED_SEARCH:String},setup(r,{emit:t}){const{openMenu:n,closeMenu:a,loopItems:f,listenForKeys:h,documentClickHandler:e}=gs(),{goto:o}=F();let c="/training/".substring(0,"/training/".length-1);const C=P(c),w=P({}),E=L(()=>r.NAV_DATA),R=b=>{let v=b.main,$=b.side?b.side:[];return v.forEach(B=>{B.uid&&(B.uid=D())}),$.forEach(B=>{B.uid&&(B.uid=D())}),{main:v,side:$}};H(E,b=>{w.value=R(b)});function _(b){let v=document.getElementById(b),$=v.nextSibling,B=v.getAttribute("aria-expanded");f("closeAllMenus"),B=="true"?a(v,$):n(v,$)}const p=b=>{let v=document.getElementById("searchPhrase").value;t("emitSearch",{type:"default",phrase:v})},g=b=>{let v=document.getElementById("searchPhrase").value,$=document.getElementById("scopedCategory").selected;t("emitSearch",{type:"scoped",scope:$,phrase:v})},U=(b,v)=>{_(b),o(v)};return x(()=>{window.addEventListener("keydown",h),document.addEventListener("click",e),f("addFocusListeners")}),V(()=>{window.removeEventListener("keydown",h),document.removeEventListener("click",e),f("removeFocusListeners")}),{navData:w,navigateTo:U,goto:o,basePath:C,openMenu:n,closeMenu:a,loopItems:f,listenForKeys:h,toggleMenu:_,doSearch:p,doScopedSearch:g}}},Ss={class:"fsa-nav-global"},As={class:"fsa-nav-global__bd"},ks={class:"fsa-nav-global__list","aria-label":"Primary Navigation",id:"primary-navigation"},ys=["data-control-id"],Cs={key:0},$s=["id","onClick","aria-controls"],Bs=["id"],Es=["id"],Us=["aria-labelledby"],Ls=["id"],ws=["aria-labelledby"],Ps=["href","onClick"],Ns={key:1},Rs=["id","onClick","aria-controls"],Fs=["id"],Ts=["id"],xs={class:"fsa-nav-global__sub-menu-bd"},Ms=["aria-labelledby"],Gs=["href","onClick"],Ds={key:2},Is=["id","onClick","aria-controls"],Os=["id"],Hs=["id"],Vs=["aria-labelledby"],Xs=["id"],Ks=["aria-labelledby"],js=["href","onClick"],zs={key:3},Ws=["id","onClick","aria-controls"],qs=["id"],Js=["id"],Qs={class:"fsa-nav-global__sub-menu-bd"},Ys=["aria-labelledby"],Zs=["href","onClick"],se={key:4},ee=["href","onClick"],ae={class:"fsa-nav-global__text"},te={key:0,class:"fsa-nav-global__aside"},oe={class:"fsa-level"},ne=["href","onClick"],le={class:"fsa-level fsa-level--inline fsa-level--gutter-xs"},ie=["d"],_e={key:1,class:"fsa-nav-global__search"},re={class:"fsa-search fsa-search--small",role:"search"},ce={class:"fsa-search__bd"},de={class:"fsa-search__entry fsa-search__entry--grow"},ue=s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"searchPhrase"},"Search [app-name]",-1),fe={class:"fsa-search__submit"},he=s("span",{class:"fsa-search__text"},"Search",-1),be=[he],ve={key:2,class:"fsa-nav-global__search"},pe={class:"fsa-search fsa-search--small",role:"search"},ge={class:"fsa-search__bd"},me={class:"fsa-search__entry fsa-search__entry--grow"},Se=s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedSearchPhrase"},"Search [app-name]",-1),Ae={class:"fsa-search__entry"},ke=s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedCategory"},"Search Category",-1),ye={class:"fsa-select fsa-select--small fsa-search__select",name:"scopedCategory",id:"scopedCategory"},Ce=["value","selected"],$e={class:"fsa-search__submit"},Be=s("span",{class:"fsa-search__text"},"Search",-1),Ee=[Be];function Ue(r,t,n,a,f,h){return l(),i("nav",null,[s("div",Ss,[s("div",As,[s("ul",ks,[(l(!0),i(S,null,A(a.navData.main,e=>(l(),i("li",{key:e.uid,"data-control-id":e.uid,class:M("fsa-nav-global__list-item "+e.columnClass)},[e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="true"?(l(),i("div",Cs,[s("button",{id:e.uid+"-BTN",onClick:o=>a.toggleMenu(e.uid+"-BTN"),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},d(e.label),9,Bs)],8,$s),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",{class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[(l(!0),i(S,null,A(e.children,o=>(l(),i("div",{key:o.uid,class:"fsa-nav-global__sub-menu-group"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:o.uid},d(o.header),9,Ls),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":o.uid},[(l(!0),i(S,null,A(o.group,c=>(l(),i("li",{key:c.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:a.basePath+c.path,onClick:u(C=>a.navigateTo(e.uid+"-BTN",c.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},d(c.label),9,Ps)]))),128))],8,ws)]))),128))],8,Us)],8,Es)])):e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="false"?(l(),i("div",Ns,[s("button",{id:e.uid+"-BTN",onClick:o=>a.toggleMenu(e.uid+"-BTN"),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},d(e.label),9,Fs)],8,Rs),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",xs,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),i(S,null,A(e.children,o=>(l(),i("li",{key:o.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:a.basePath+o.path,onClick:u(c=>a.navigateTo(e.uid+"-BTN",o.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},d(o.label),9,Gs)]))),128))],8,Ms)])],8,Ts)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="true"?(l(),i("div",Ds,[s("button",{id:e.uid+"-BTN",onClick:o=>a.toggleMenu(e.uid+"-BTN"),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},d(e.label),9,Os)],8,Is),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[(l(!0),i(S,null,A(e.children,o=>(l(),i("div",{key:o.uid,class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:o.uid},d(o.header),9,Xs),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":o.uid},[(l(!0),i(S,null,A(o.group,c=>(l(),i("li",{key:c.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:a.basePath+c.path,onClick:u(C=>a.navigateTo(e.uid+"-BTN",c.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},d(c.label),9,js)]))),128))],8,Ks)],8,Vs))),128))],8,Hs)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="false"?(l(),i("div",zs,[s("button",{id:e.uid+"-BTN",onClick:o=>a.toggleMenu(e.uid+"-BTN"),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},d(e.label),9,qs)],8,Ws),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",Qs,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),i(S,null,A(e.children,o=>(l(),i("li",{key:o.id,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:a.basePath+o.path,onClick:u(c=>a.navigateTo(e.uid+"-BTN",o.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},d(o.label),9,Zs)]))),128))],8,Ys)])],8,Js)])):(l(),i("div",se,[s("a",{href:a.basePath+e.path,onClick:u(o=>a.goto(e.path),["prevent"]),class:"fsa-nav-global__link"},[s("span",ae,d(e.label),1)],8,ee)]))],10,ys))),128))]),a.navData.side?(l(),i("div",te,[s("div",oe,[(l(!0),i(S,null,A(a.navData.side,e=>(l(),i("span",{key:e.uid},[s("a",{href:a.basePath+e.path,onClick:u(o=>a.goto(e.path),["prevent"])},[s("span",le,[e.icon?(l(),i("svg",{key:0,class:M(e.icon.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:e.icon.path},null,8,ie)],2)):N("",!0),s("span",null,d(e.label),1)])],8,ne)]))),128))])])):N("",!0),n.USE_SEARCH=="true"?(l(),i("div",_e,[s("div",re,[s("div",ce,[s("div",de,[ue,s("input",{onKeyup:t[0]||(t[0]=G((...e)=>a.doSearch&&a.doSearch(...e),["enter"])),placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"searchPhrase",type:"search",name:"searchPhrase"},null,32)]),s("div",fe,[s("button",{onClick:t[1]||(t[1]=(...e)=>a.doSearch&&a.doSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},be)])])])])):N("",!0),n.USE_SCOPED_SEARCH=="true"?(l(),i("div",ve,[s("div",pe,[s("div",ge,[s("div",me,[Se,s("input",{onKeyup:t[2]||(t[2]=G((...e)=>a.doScopedSearch&&a.doScopedSearch(...e),["enter"])),placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"scopedSearchPhrase",type:"search",name:"scopedSearchPhrase"},null,32)]),s("div",Ae,[ke,s("select",ye,[(l(!0),i(S,null,A(r.SCOPED_SEARCH_CATEGORIES,e=>(l(),i("option",{key:e.label,value:e.val,selected:e.selected},d(e.label),9,Ce))),128))])]),s("div",$e,[s("button",{onClick:t[3]||(t[3]=(...e)=>a.doScopedSearch&&a.doScopedSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},Ee)])])])])):N("",!0)])])])}var Le=m(ms,[["render",Ue]]);const we={components:{tophat:os,headerApp:ps,globalNav:Le},setup(r,{emit:t}){const n=P("/training/"),a=X(),{goto:f}=F(),h=L(()=>a.getters["navigation/getNavigation"]),e=o=>{t("emitSearch",o),f("/search/"+o.phrase)};return x(()=>{a.dispatch("navigation/setNavigation")}),{baseUrl:n,navigationData:h,submitSearch:e}}};function Pe(r,t,n,a,f,h){const e=k("tophat"),o=k("headerApp"),c=k("globalNav");return l(),i("header",null,[y(e,{AG_ABBR:"USDA",AG_FULL:"United States Department of Agriculture",AG_URL:"//www.usda.gov",AG_LOGO:a.baseUrl+"img/usda-logo--white.svg",SUB_AG_ABBR:"FPAC",SUB_AG_FULL:"Farm Production and Conservation",SUB_AG_URL:"//fsa.usda.gov"},null,8,["AG_LOGO"]),y(o,{APP_ABBR_NAME:"UXT",APP_FULL_NAME:"User Experience Training",PROFILE_NAME:"",LOGOFF_URL:"https://www.eauth.usda.gov/Logout/logoff.asp"}),y(c,{NAV_DATA:a.navigationData,EXTRA_CLASSES:"fsa-nav-global__list-item--multi-column",onEmitSearch:a.submitSearch,USE_SEARCH:"true"},null,8,["NAV_DATA","onEmitSearch"])])}var Pa=m(we,[["render",Pe]]);const Ne={},Re={class:"fsa-topper"},Fe=s("div",{class:"fsa-topper__bd"},[s("a",{class:"fsa-topper__link",href:"#main-content"},"Return to top")],-1),Te=[Fe];function xe(r,t,n,a,f,h){return l(),i("div",Re,Te)}var Me=m(Ne,[["render",xe]]);const Ge={props:{APP_ABBR_NAME:String},setup(r){const{goto:t}=F();return{goto:t}}},De={class:"fsa-footer"},Ie={class:"fsa-footer__bd"},Oe={class:"fsa-grid"},He={class:"fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l"},Ve={class:"fsa-grid"},Xe={class:"fsa-grid__1/1 fsa-grid__1/3@m"},Ke=s("h3",{class:"fsa-footer__cat-header"},"FPAC UX Resources",-1),je={class:"fsa-footer__list"},ze={class:"fsa-footer__list-item"},We={class:"fsa-footer__list-item"},qe={class:"fsa-footer__list-item"},Je={class:"fsa-grid__1/1 fsa-grid__1/3@m"},Qe=s("h3",{class:"fsa-footer__cat-header"},"Government Sites",-1),Ye={class:"fsa-footer__list"},Ze={class:"fsa-footer__list-item"},sa={class:"fsa-footer__list-item"},ea={class:"fsa-footer__list-item"},aa={class:"fsa-grid__1/1 fsa-grid__1/3@m"},ta=s("h3",{class:"fsa-footer__cat-header"},"Industry Resources",-1),oa={class:"fsa-footer__list"},na={class:"fsa-footer__list-item"},la={class:"fsa-footer__list-item"},ia={class:"fsa-footer__list-item"},_a={class:"fsa-footer__list-item"},ra={class:"fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l"},ca={class:"fsa-footer__list fsa-footer__secondary-list"},da=s("li",{class:"fsa-footer__list-item fsa-footer__secondary-list-item"},[s("a",{class:"fsa-btn fsa-footer__btn",href:"mailto:sm.fpac.bc.uxconsultants@usda.gov?subject=UX Training site question",target:"_blank",role:"button"},"Contact Us")],-1),ua={class:"fsa-footer__list-item fsa-footer__secondary-list-item"},fa={class:"fsa-footer__list-item fsa-footer__secondary-list-item"};function ha(r,t,n,a,f,h){return l(),i("div",De,[s("div",Ie,[s("div",Oe,[s("div",He,[s("div",Ve,[s("div",Xe,[Ke,s("ul",je,[s("li",ze,[s("a",{href:"",onClick:t[0]||(t[0]=u(e=>a.goto("https://usda-fsa.github.io/training/","_blank"),["prevent"]))},"FPAC Design System")]),s("li",We,[s("a",{href:"",onClick:t[1]||(t[1]=u(e=>a.goto("https://github.com/USDA-FSA/fsa-design-system","_blank"),["prevent"]))},"Design System Codebase")]),s("li",qe,[s("a",{href:"",onClick:t[2]||(t[2]=u(e=>a.goto("https://www.figma.com/community/file/994660481391659106","_blank"),["prevent"]))},"Figma Design System")])])]),s("div",Je,[Qe,s("ul",Ye,[s("li",Ze,[s("a",{href:"",onClick:t[3]||(t[3]=u(e=>a.goto("https://designsystem.digital.gov/","_blank"),["prevent"]))},"USWDS - Digital.gov")]),s("li",sa,[s("a",{href:"",onClick:t[4]||(t[4]=u(e=>a.goto("https://www.section508.gov/","_blank"),["prevent"]))},"Section 508")]),s("li",ea,[s("a",{href:"",onClick:t[5]||(t[5]=u(e=>a.goto("https://www.usds.gov/","_blank"),["prevent"]))},"U.S. Digital Service")])])]),s("div",aa,[ta,s("ul",oa,[s("li",na,[s("a",{href:"",onClick:t[6]||(t[6]=u(e=>a.goto("https://lawsofux.com/","_blank"),["prevent"]))},"Laws of UX")]),s("li",la,[s("a",{href:"",onClick:t[7]||(t[7]=u(e=>a.goto("https://www.interaction-design.org/literature","_blank"),["prevent"]))},"Interaction Design Foundation")]),s("li",ia,[s("a",{href:"",onClick:t[8]||(t[8]=u(e=>a.goto("https://www.nngroup.com/articles/","_blank"),["prevent"]))},"Nielsen Norma Group")]),s("li",_a,[s("a",{href:"",onClick:t[9]||(t[9]=u(e=>a.goto("https://uxmag.com/topics/government-and-public-services","_blank"),["prevent"]))},"UX Magazine")])])])])]),s("div",ra,[s("ul",ca,[da,s("li",ua,[s("a",{href:"",onClick:t[10]||(t[10]=u(e=>a.goto("https://www.fpacbc.usda.gov/","_blank"),["prevent"]))},"FPAC Business Center")]),s("li",fa,[s("a",{href:"",onClick:t[11]||(t[11]=u(e=>a.goto("https://www.usda.gov","_blank"),["prevent"]))},"USDA Website")])])])])])])}var ba=m(Ge,[["render",ha]]);const va={props:{SCREEN_ID:String}},pa={class:"fsa-screen-id"},ga={class:"fsa-screen-id__bd"},ma={class:"fsa-screen-id__dl"},Sa=s("dt",{class:"fsa-screen-id__dt"},"Screen ID",-1),Aa={class:"fsa-screen-id__dd"};function ka(r,t,n,a,f,h){return l(),i("div",pa,[s("div",ga,[s("dl",ma,[Sa,s("dd",Aa,d(n.SCREEN_ID),1)])])])}var ya=m(va,[["render",ka]]);const Ca={};function $a(r,t,n,a,f,h){return l(),i("div")}var Ba=m(Ca,[["render",$a]]);const Ea={setup(){},components:{footerTopper:Me,footerFooter:ba,footerScreenId:ya,hiddenItems:Ba}};function Ua(r,t,n,a,f,h){const e=k("footerTopper"),o=k("footerFooter"),c=k("footerScreenId"),C=k("hiddenItems");return l(),i("footer",null,[y(e),y(o,{APP_ABBR_NAME:"UXT"}),y(c,{SCREEN_ID:"UXT-1215"}),y(C)])}var Na=m(Ea,[["render",Ua]]);export{Na as a,Pa as b,F as u};