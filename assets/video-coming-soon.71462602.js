import{_ as m}from"./index.ff3803ad.js";import{A as x,e as E,o as l,c as _,a as s,t as u,g as k,l as y,j as D,f as w,B as R,w as G,y as F,C as T,F as A,h as S,n as M,D as g,b as B,v as P,u as I}from"./vendor.46b2592b.js";function N(){const r=x();return{goto:(o,t="")=>{o.includes("http")?t=="_blank"?window.open(o,t):window.location.href=o:r.push(o)}}}const O={props:{AG_ABBR:String,AG_FULL:String,AG_URL:String,AG_LOGO:String,SUB_AG_ABBR:String,SUB_AG_FULL:String,SUB_AG_URL:String},setup(r){const a=E(()=>"Link to "+r.AG_ABBR+" homepage"),o=E(()=>"Link to "+r.SUB_AG_ABBR+" homepage");return{agTitleValue:a,subAgTitleValue:o}}},H={class:"fsa-tophat"},V={class:"fsa-tophat__bd"},X={class:"fsa-tophat__primary"},j={class:"fsa-tophat__agency"},K=["href","title"],z=["src"],W={class:"fsa-tophat__agency-abbr",title:""},q={class:"fsa-tophat__agency-fullname"},J={class:"fsa-tophat__secondary"},Q={class:"fsa-tophat__subagency"},Y=["href","title"];function Z(r,a,o,t,p,h){return l(),_("div",H,[s("div",V,[s("div",X,[s("span",j,[s("a",{href:o.AG_URL,class:"fsa-tophat__link",title:t.agTitleValue},[s("img",{role:"presentation",class:"fsa-tophat__agency-logo",src:o.AG_LOGO,alt:""},null,8,z),s("abbr",W,u(o.AG_ABBR),1),s("span",q,u(o.AG_FULL),1)],8,K)])]),s("div",J,[s("span",Q,[s("a",{href:o.SUB_AG_URL,class:"fsa-tophat__link",title:t.subAgTitleValue},u(o.SUB_AG_FULL),9,Y)])])])])}var ss=m(O,[["render",Z]]);const es={props:{APP_ABBR_NAME:String,APP_FULL_NAME:String,PROFILE_NAME:String,LOGOFF_URL:String},setup(r){return{appTitleValue:E(()=>r.APP_ABBR_NAME+" Prototype Kit")}}},as={class:"fsa-header-app"},ts={class:"fsa-header-app__bd"},os={class:"fsa-header-app__primary"},ns={class:"fsa-header-app__app-name"},ls=["title"],_s={class:"fsa-header-app__app-full"},is={class:"fsa-header-app__secondary"},rs={class:"fsa-header-app__profile"},cs=["href"],ds={class:"fsa-header-app__profile-name"};function us(r,a,o,t,p,h){const e=k("router-link");return l(),_("div",as,[s("div",ts,[s("div",os,[y(e,{to:"home",class:"fsa-header-app__home-link"},{default:D(()=>[s("span",ns,[s("abbr",{class:"fsa-header-app__app-abbr",title:t.appTitleValue},u(o.APP_ABBR_NAME),9,ls),s("span",_s,u(o.APP_FULL_NAME),1)])]),_:1})]),s("div",is,[s("span",rs,[s("a",{href:o.LOGOFF_URL,class:"fsa-header-app__profile-link"},[s("span",ds,u(o.PROFILE_NAME),1)],8,cs)])])])])}var fs=m(es,[["render",us]]);function hs(){let r=w(!1),a=R({}),o=R({});const t=i=>{r=i},p=(i,c)=>{console.log("openMenu"),a=i,o=c;let d=i.getAttribute("aria-controls");i.setAttribute("aria-expanded","true"),document.getElementById(d).setAttribute("aria-hidden","false"),t(!0)},h=(i,c=!1)=>{let d=i.getAttribute("aria-controls");d&&(i.setAttribute("aria-expanded","false"),document.getElementById(d).setAttribute("aria-hidden","true"),t(!1))},e=i=>{i.addEventListener("focus",f)},n=i=>{i.removeEventListener("focus",f)},f=i=>{i.currentTarget},C=i=>{if(r&&a)try{let c=a.contains(i.target),d=o.contains(i.target);!c&&!d&&($("closeAllMenus"),t(!1))}catch{}},U=i=>{r&&i.keyCode==27&&($("closeAllMenus"),t(!1))},$=(i,c=null)=>{let d=document.getElementsByClassName("fsa-nav-global__link--has-sub-menu");for(let v=0;v<d.length;v++){let b=d[v];b.cb=$,L(i,b)}},L=(i,c)=>{i=="addFocusListeners"?e(c):i=="removeFocusListeners"?n(c):i=="closeAllMenus"&&h(c,!0)};return{isMenuOpen:r,theItem:a,theMenu:o,openMenu:p,closeMenu:h,loopItems:$,listenForKeys:U,documentClickHandler:C}}const gs={props:{NAV_DATA:Object,EXTRA_CLASSES:String,USE_SEARCH:String,USE_SCOPED_SEARCH:String},setup(r,{emit:a}){const{openMenu:o,closeMenu:t,loopItems:p,listenForKeys:h,documentClickHandler:e}=hs(),{goto:n}=N(),f=w({}),C=E(()=>r.NAV_DATA),U=c=>{let d=c.main,v=c.side?c.side:[];return d.forEach(b=>{b.uid&&(b.uid=P())}),v.forEach(b=>{b.uid&&(b.uid=P())}),{main:d,side:v}};G(C,c=>{f.value=U(c)});function $(c){let d=c.currentTarget,v=c.currentTarget.nextSibling,b=d.getAttribute("aria-expanded");p("closeAllMenus"),b=="true"?t(d,v):o(d,v)}const L=c=>{let d=document.getElementById("searchPhrase").value;console.log("p",d),a("emitSearch",{type:"default",phrase:d})},i=c=>{let d=document.getElementById("searchPhrase").value,v=document.getElementById("scopedCategory").selected;a("emitSearch",{type:"scoped",scope:v,phrase:d})};return F(()=>{window.addEventListener("keydown",h),document.addEventListener("click",e),p("addFocusListeners")}),T(()=>{window.removeEventListener("keydown",h),document.removeEventListener("click",e),p("removeFocusListeners")}),{navData:f,goto:n,openMenu:o,closeMenu:t,loopItems:p,listenForKeys:h,toggleMenu:$,doSearch:L,doScopedSearch:i}}},ps={class:"fsa-nav-global"},vs={class:"fsa-nav-global__bd"},bs={class:"fsa-nav-global__list","aria-label":"Primary Navigation",id:"primary-navigation"},ms=["data-control-id"],As={key:0},Ss=["id","aria-controls"],ks=["id"],ys=["id"],Cs=["aria-labelledby"],$s=["id"],Es=["aria-labelledby"],Bs=["onClick"],Us={key:1},Ls=["id","aria-controls"],ws=["id"],Rs=["id"],Fs={class:"fsa-nav-global__sub-menu-bd"},Ms=["aria-labelledby"],Ps=["onClick"],Ns={key:2},xs=["id","aria-controls"],Ds=["id"],Gs=["id"],Ts=["aria-labelledby"],Is=["id"],Os=["aria-labelledby"],Hs=["onClick"],Vs={key:3},Xs=["id","aria-controls"],js=["id"],Ks=["id"],zs={class:"fsa-nav-global__sub-menu-bd"},Ws=["aria-labelledby"],qs=["onClick"],Js={key:4},Qs=["onClick"],Ys={class:"fsa-nav-global__text"},Zs={key:0,class:"fsa-nav-global__aside"},se={class:"fsa-level"},ee=["onClick"],ae={class:"fsa-level fsa-level--inline fsa-level--gutter-xs"},te=["d"],oe={key:1,class:"fsa-nav-global__search"},ne={class:"fsa-search fsa-search--small",role:"search"},le={class:"fsa-search__bd"},_e=s("div",{class:"fsa-search__entry fsa-search__entry--grow"},[s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"searchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"searchPhrase",type:"search",name:"searchPhrase"})],-1),ie={class:"fsa-search__submit"},re=s("span",{class:"fsa-search__text"},"Search",-1),ce=[re],de={key:2,class:"fsa-nav-global__search"},ue={class:"fsa-search fsa-search--small",role:"search"},fe={class:"fsa-search__bd"},he=s("div",{class:"fsa-search__entry fsa-search__entry--grow"},[s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedSearchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"scopedSearchPhrase",type:"search",name:"scopedSearchPhrase"})],-1),ge={class:"fsa-search__entry"},pe=s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedCategory"},"Search Category",-1),ve={class:"fsa-select fsa-select--small fsa-search__select",name:"scopedCategory",id:"scopedCategory"},be=["value","selected"],me={class:"fsa-search__submit"},Ae=s("span",{class:"fsa-search__text"},"Search",-1),Se=[Ae];function ke(r,a,o,t,p,h){return l(),_("nav",null,[s("div",ps,[s("div",vs,[s("ul",bs,[(l(!0),_(A,null,S(t.navData.main,e=>(l(),_("li",{key:e.uid,"data-control-id":e.uid,class:M("fsa-nav-global__list-item "+e.columnClass)},[e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="true"?(l(),_("div",As,[s("button",{id:e.uid+"-BTN",onClick:a[0]||(a[0]=(...n)=>t.toggleMenu&&t.toggleMenu(...n)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},u(e.label),9,ks)],8,Ss),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",{class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[(l(!0),_(A,null,S(e.children,n=>(l(),_("div",{key:n.id,class:"fsa-nav-global__sub-menu-group"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:n.uid},u(n.header),9,$s),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":n.uid},[(l(!0),_(A,null,S(n.group,f=>(l(),_("li",{key:f.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:g(C=>t.goto(f.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},u(f.label),9,Bs)]))),128))],8,Es)]))),128))],8,Cs)],8,ys)])):e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="false"?(l(),_("div",Us,[s("button",{id:e.uid+"-BTN",onClick:a[1]||(a[1]=(...n)=>t.toggleMenu&&t.toggleMenu(...n)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},u(e.label),9,ws)],8,Ls),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",Fs,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),_(A,null,S(e.children,n=>(l(),_("li",{key:n.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:g(f=>t.goto(n.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},u(n.label),9,Ps)]))),128))],8,Ms)])],8,Rs)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="true"?(l(),_("div",Ns,[s("button",{id:e.uid+"-BTN",onClick:a[2]||(a[2]=(...n)=>t.toggleMenu&&t.toggleMenu(...n)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},u(e.label),9,Ds)],8,xs),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[(l(!0),_(A,null,S(e.children,n=>(l(),_("div",{key:n.uid,class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:n.uid},u(n.header),9,Is),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":n.uid},[(l(!0),_(A,null,S(n.group,f=>(l(),_("li",{key:f.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:g(C=>t.goto(f.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},u(f.label),9,Hs)]))),128))],8,Os)],8,Ts))),128))],8,Gs)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="false"?(l(),_("div",Vs,[s("button",{id:e.uid+"-BTN",onClick:a[3]||(a[3]=(...n)=>t.toggleMenu&&t.toggleMenu(...n)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},u(e.label),9,js)],8,Xs),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",zs,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),_(A,null,S(e.children,n=>(l(),_("li",{key:n.id,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:g(f=>t.goto(n.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},u(n.label),9,qs)]))),128))],8,Ws)])],8,Ks)])):(l(),_("div",Js,[s("a",{href:"#",onClick:g(n=>t.goto(e.path),["prevent"]),class:"fsa-nav-global__link"},[s("span",Ys,u(e.label),1)],8,Qs)]))],10,ms))),128))]),t.navData.side?(l(),_("div",Zs,[s("div",se,[(l(!0),_(A,null,S(t.navData.side,e=>(l(),_("span",{key:e.uid},[s("a",{href:"#",onClick:g(n=>t.goto(e.path),["prevent"])},[s("span",ae,[e.icon?(l(),_("svg",{key:0,class:M(e.icon.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:e.icon.path},null,8,te)],2)):B("",!0),s("span",null,u(e.label),1)])],8,ee)]))),128))])])):B("",!0),o.USE_SEARCH=="true"?(l(),_("div",oe,[s("div",ne,[s("div",le,[_e,s("div",ie,[s("button",{onClick:a[4]||(a[4]=(...e)=>t.doSearch&&t.doSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},ce)])])])])):B("",!0),o.USE_SCOPED_SEARCH=="true"?(l(),_("div",de,[s("div",ue,[s("div",fe,[he,s("div",ge,[pe,s("select",ve,[(l(!0),_(A,null,S(r.SCOPED_SEARCH_CATEGORIES,e=>(l(),_("option",{key:e.label,value:e.val,selected:e.selected},u(e.label),9,be))),128))])]),s("div",me,[s("button",{onClick:a[5]||(a[5]=(...e)=>t.doScopedSearch&&t.doScopedSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},Se)])])])])):B("",!0)])])])}var ye=m(gs,[["render",ke]]);const Ce={components:{tophat:ss,headerApp:fs,globalNav:ye},setup(r,{emit:a}){const o=I(),t=E(()=>o.getters["navigation/getNavigation"]),p=h=>{a("emitSearch",h),console.log("NAV SEARCH BASEHEADER",h)};return F(()=>{o.dispatch("navigation/setNavigation")}),{navigationData:t,submitSearch:p}}};function $e(r,a,o,t,p,h){const e=k("tophat"),n=k("headerApp"),f=k("globalNav");return l(),_("header",null,[y(e,{AG_ABBR:"USDA",AG_FULL:"United States Department of Agriculture",AG_URL:"//www.usda.gov",AG_LOGO:"./img/usda-logo--white.svg",SUB_AG_ABBR:"FPAC",SUB_AG_FULL:"Farm Production and Conservation",SUB_AG_URL:"//fsa.usda.gov"}),y(n,{APP_ABBR_NAME:"UXT",APP_FULL_NAME:"User Experience Training",PROFILE_NAME:"",LOGOFF_URL:"https://www.eauth.usda.gov/Logout/logoff.asp"}),y(f,{NAV_DATA:t.navigationData,EXTRA_CLASSES:"fsa-nav-global__list-item--multi-column",onEmitSearch:t.submitSearch,USE_SEARCH:"true"},null,8,["NAV_DATA","onEmitSearch"])])}var $a=m(Ce,[["render",$e]]);const Ee={},Be={class:"fsa-topper"},Ue=s("div",{class:"fsa-topper__bd"},[s("a",{class:"fsa-topper__link",href:"#main-content"},"Return to top")],-1),Le=[Ue];function we(r,a,o,t,p,h){return l(),_("div",Be,Le)}var Re=m(Ee,[["render",we]]);const Fe={props:{APP_ABBR_NAME:String},setup(r){const{goto:a}=N();return{goto:a}}},Me={class:"fsa-footer"},Pe={class:"fsa-footer__bd"},Ne={class:"fsa-grid"},xe={class:"fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l"},De={class:"fsa-grid"},Ge={class:"fsa-grid__1/1 fsa-grid__1/3@m"},Te=s("h3",{class:"fsa-footer__cat-header"},"FPAC UX Resources",-1),Ie={class:"fsa-footer__list"},Oe={class:"fsa-footer__list-item"},He={class:"fsa-footer__list-item"},Ve={class:"fsa-footer__list-item"},Xe={class:"fsa-grid__1/1 fsa-grid__1/3@m"},je=s("h3",{class:"fsa-footer__cat-header"},"Government Sites",-1),Ke={class:"fsa-footer__list"},ze={class:"fsa-footer__list-item"},We={class:"fsa-footer__list-item"},qe={class:"fsa-footer__list-item"},Je={class:"fsa-grid__1/1 fsa-grid__1/3@m"},Qe=s("h3",{class:"fsa-footer__cat-header"},"Industry Resources",-1),Ye={class:"fsa-footer__list"},Ze={class:"fsa-footer__list-item"},sa={class:"fsa-footer__list-item"},ea={class:"fsa-footer__list-item"},aa={class:"fsa-footer__list-item"},ta={class:"fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l"},oa={class:"fsa-footer__list fsa-footer__secondary-list"},na=s("li",{class:"fsa-footer__list-item fsa-footer__secondary-list-item"},[s("a",{class:"fsa-btn fsa-footer__btn",href:"mailto:sm.fpac.bc.uxconsultants@usda.gov?subject=UX Training site question",target:"_blank",role:"button"},"Contact Us")],-1),la={class:"fsa-footer__list-item fsa-footer__secondary-list-item"},_a={class:"fsa-footer__list-item fsa-footer__secondary-list-item"};function ia(r,a,o,t,p,h){return l(),_("div",Me,[s("div",Pe,[s("div",Ne,[s("div",xe,[s("div",De,[s("div",Ge,[Te,s("ul",Ie,[s("li",Oe,[s("a",{href:"",onClick:a[0]||(a[0]=g(e=>t.goto("https://usda-fsa.github.io/training/","_blank"),["prevent"]))},"FPAC Design System")]),s("li",He,[s("a",{href:"",onClick:a[1]||(a[1]=g(e=>t.goto("https://github.com/USDA-FSA/fsa-design-system","_blank"),["prevent"]))},"Design System Codebase")]),s("li",Ve,[s("a",{href:"",onClick:a[2]||(a[2]=g(e=>t.goto("https://www.figma.com/community/file/994660481391659106","_blank"),["prevent"]))},"Figma Design System")])])]),s("div",Xe,[je,s("ul",Ke,[s("li",ze,[s("a",{href:"",onClick:a[3]||(a[3]=g(e=>t.goto("https://designsystem.digital.gov/","_blank"),["prevent"]))},"USWDS - Digital.gov")]),s("li",We,[s("a",{href:"",onClick:a[4]||(a[4]=g(e=>t.goto("https://www.section508.gov/","_blank"),["prevent"]))},"Section 508")]),s("li",qe,[s("a",{href:"",onClick:a[5]||(a[5]=g(e=>t.goto("https://www.usds.gov/","_blank"),["prevent"]))},"U.S. Digital Service")])])]),s("div",Je,[Qe,s("ul",Ye,[s("li",Ze,[s("a",{href:"",onClick:a[6]||(a[6]=g(e=>t.goto("https://lawsofux.com/","_blank"),["prevent"]))},"Laws of UX")]),s("li",sa,[s("a",{href:"",onClick:a[7]||(a[7]=g(e=>t.goto("https://www.interaction-design.org/literature","_blank"),["prevent"]))},"Interaction Design Foundation")]),s("li",ea,[s("a",{href:"",onClick:a[8]||(a[8]=g(e=>t.goto("https://www.nngroup.com/articles/","_blank"),["prevent"]))},"Nielsen Norma Group")]),s("li",aa,[s("a",{href:"",onClick:a[9]||(a[9]=g(e=>t.goto("https://uxmag.com/topics/government-and-public-services","_blank"),["prevent"]))},"UX Magazine")])])])])]),s("div",ta,[s("ul",oa,[na,s("li",la,[s("a",{href:"",onClick:a[10]||(a[10]=g(e=>t.goto("https://www.fpacbc.usda.gov/","_blank"),["prevent"]))},"FPAC Business Center")]),s("li",_a,[s("a",{href:"",onClick:a[11]||(a[11]=g(e=>t.goto("https://www.usda.gov","_blank"),["prevent"]))},"USDA Website")])])])])])])}var ra=m(Fe,[["render",ia]]);const ca={props:{SCREEN_ID:String}},da={class:"fsa-screen-id"},ua={class:"fsa-screen-id__bd"},fa={class:"fsa-screen-id__dl"},ha=s("dt",{class:"fsa-screen-id__dt"},"Screen ID",-1),ga={class:"fsa-screen-id__dd"};function pa(r,a,o,t,p,h){return l(),_("div",da,[s("div",ua,[s("dl",fa,[ha,s("dd",ga,u(o.SCREEN_ID),1)])])])}var va=m(ca,[["render",pa]]);const ba={};function ma(r,a,o,t,p,h){return l(),_("div")}var Aa=m(ba,[["render",ma]]);const Sa={setup(){},components:{footerTopper:Re,footerFooter:ra,footerScreenId:va,hiddenItems:Aa}};function ka(r,a,o,t,p,h){const e=k("footerTopper"),n=k("footerFooter"),f=k("footerScreenId"),C=k("hiddenItems");return l(),_("footer",null,[y(e),y(n,{APP_ABBR_NAME:"UXT"}),y(f,{SCREEN_ID:"UXT-1215"}),y(C)])}var Ea=m(Sa,[["render",ka]]),Ba="/training/img/video-titles/video-coming-soon.png";export{Ba as _,Ea as a,$a as b,N as u};