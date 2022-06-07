(function(){"use strict";var t={205:function(t,e,n){n.d(e,{i:function(){return _}});var i=n(3396),o=n(7139);function a(t,e,n,a,r,s){return(0,i.wg)(),(0,i.iD)("div",{ref:"interactElement",style:(0,o.j5)({transform:s.transformString,transition:s.transitionString,touchAction:"none"})},[(0,i.WI)(t.$slots,"default")],4)}var r=n(9528),s=n.n(r);const l="start",c="move",u="end",d="swipe-left",h="swipe-right",p="swipe-top",f="swipe-bottom",m="swipe";var g={name:"SwipeableCards",props:{transition:{type:String,default:"transform 0.5s cubic-bezier(0.2, 0.8, 0.4, 1.2)",required:!1},maxRotation:{type:Number,default:15,required:!1},outOfSightXOffset:{type:Number,default:500,required:!1},outOfSightYOffset:{type:Number,default:500,required:!1},thresholdX:{type:Number,default:50,required:!1},thresholdY:{type:Number,default:70,required:!1}},data(){return{isDragging:!0,interactPosition:{x:0,y:0,rotation:0}}},computed:{transformString(){const{x:t,y:e,rotation:n}=this.interactPosition;return`translate3D(${t}px, ${e}px, 0) rotate(${n}deg)`},transitionString(){return!this.isDragging&&this.$props.transition}},mounted(){const t=this.$refs.interactElement;s()(t).draggable({onstart:()=>{this.$emit(l),this.isDragging=!0},onmove:t=>{const{maxRotation:e,thresholdX:n}=this.$props,i=this.interactPosition.x+t.dx,o=this.interactPosition.y+t.dy;let a=e*(i/n);a>e?a=e:a<-e&&(a=-e),this.$emit(c,{x:i,y:o,rotation:a}),this.$emit(c,{x:i,y:o,rotation:a}),this.setPosition({x:i,y:o,rotation:a})},onend:()=>{this.$emit(u);const{x:t,y:e}=this.interactPosition,{thresholdX:n,thresholdY:i}=this.$props;this.isDragging=!1,t>n?this.onThresholdReached(h):t<-n?this.onThresholdReached(d):e<-i?this.onThresholdReached(p):e>i?this.onThresholdReached(f):this.setPosition({x:0,y:0,rotation:0})}})},beforeUnmount(){this.unsetInteractElement()},methods:{onThresholdReached(t){const{outOfSightXOffset:e,outOfSightYOffset:n,maxRotation:i}=this.$props;switch(this.unsetInteractElement(),t){case h:this.setPosition({x:e,rotation:i}),this.$emit(h);break;case d:this.setPosition({x:-e,rotation:-i}),this.$emit(d);break;case p:this.setPosition({y:-n}),this.$emit(p);break;case f:this.setPosition({y:n}),this.$emit(f);break}this.$emit(m,t)},setPosition(t){const{x:e=0,y:n=0,rotation:i=0}=t;this.interactPosition={x:e,y:n,rotation:i}},unsetInteractElement(){s()(this.$refs.interactElement).unset()}}},v=n(89);const y=(0,v.Z)(g,[["render",a]]);var _=y},4103:function(t,e,n){var i=n(9242),o=n(3396);const a={class:"app"};function r(t,e,n,i,r,s){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(l)])}var s={name:"App"},l=n(89);const c=(0,l.Z)(s,[["render",r]]);var u=c,d=n(678),h=n(7139);const p=t=>((0,o.dD)("data-v-8e3ffcd6"),t=t(),(0,o.Cn)(),t),f={class:"home"},m={id:"container"},g={class:"glitch"},v={"aria-hidden":"true"},y={"aria-hidden":"true"},_=p((()=>(0,o._)("div",{class:"quote"},[(0,o._)("p",{class:"text quoted"},"Ну как вы там, потомки? Высадились на марс?"),(0,o._)("p",{class:"author"},"Юрий Гагарин")],-1))),b={id:"about"},w={class:"row"},k={class:"column1"},x={class:"about_theme"},P=p((()=>(0,o._)("div",{class:"column",style:{"vertical-align":"middle","justify-content":"center","align-items":"center"}},[(0,o._)("div",{class:"about_text"},[(0,o._)("b",null,"DRAMKA"),(0,o.Uk)(" - это карточная игра симулятора президента. "),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Действия происходят в нынешнее время. Как президент вымышленной страны, вы должны реагировать на события, которые предстанут перед вашим государством. Каждое решение влияет на исход дальнейших событий по-разному. Ваша цель состоит в том, чтобы управлять страной как можно больше лет. Как только ваше царствование закончится, вы продолжаете править; однако, уже как новый президент. В ваших руках судьба мира! "),(0,o._)("br"),(0,o.Uk)(" Желаем удачи! ")])],-1))),S=p((()=>(0,o._)("div",{id:"instructions"},[(0,o._)("div",{class:"row",style:{display:"block"}},[(0,o._)("div",{class:"column",style:{"padding-top":"0"}},[(0,o._)("div",{class:"instructions_text",style:{color:"white"}},[(0,o._)("b",null,"Инструкция"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Все, что от тебя нужно - это свайпать влево или вправо "),(0,o._)("br"),(0,o.Uk)(" Наведи на "),(0,o._)("b",null,"DRAMKA"),(0,o.Uk)(" и начинай играть! ")])])])],-1)));function C(t,e,n,i,a,r){const s=(0,o.up)("NavBar"),l=(0,o.up)("router-link"),c=(0,o.up)("MiniDramkaGame"),u=(0,o.up)("footer-part");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o._)("div",f,[(0,o._)("div",m,[(0,o._)("div",g,[(0,o.Wm)(l,{style:{color:"#fff"},onMouseover:e[0]||(e[0]=t=>a.text="НАЧАТЬ"),onMouseleave:e[1]||(e[1]=t=>a.text="DRAMKA"),to:"/dramkagame"},{default:(0,o.w5)((()=>[(0,o._)("span",v,(0,h.zw)(a.text),1),(0,o._)("span",null,(0,h.zw)(a.text),1),(0,o._)("span",y,(0,h.zw)(a.text),1)])),_:1})]),_]),(0,o._)("div",b,[(0,o._)("div",w,[(0,o._)("div",k,[(0,o._)("div",x,[(0,o.Wm)(c)])]),P])]),S]),(0,o.Wm)(u)],64)}const D=t=>((0,o.dD)("data-v-16979837"),t=t(),(0,o.Cn)(),t),$=D((()=>(0,o._)("a",{class:"link",href:"#container"},[(0,o._)("img",{src:"assets/logo.svg"})],-1))),A={class:"navigation"},N=D((()=>(0,o._)("li",null,[(0,o._)("a",{class:"glitchy","data-glitch":"Об игре",href:"#about"},"Об игре")],-1))),O=D((()=>(0,o._)("li",null,[(0,o._)("a",{class:"glitchy","data-glitch":"Инструкция",href:"#instructions"},"Инструкция")],-1))),M=(0,o.Uk)("Персонажи"),j={class:"player"},T={class:"player"},E={class:"player-controls"},R={class:"play"},W=["title"],I={key:0,class:"fa fa-volume-off",style:{color:"white"}},U={key:1,class:"fa fa-volume-up",style:{color:"white"}},q=["loop","src"],F={class:"nav-icon"},z={class:"dropdown"},Z=D((()=>(0,o._)("li",null,[(0,o._)("a",{class:"glitchy","data-glitch":"Об игре",href:"#about"},"Об игре")],-1))),L=D((()=>(0,o._)("li",null,[(0,o._)("a",{class:"glitchy","data-glitch":"Инструкция",href:"#instructions"},"Инструкция")],-1))),K=(0,o.Uk)("Персонажи"),B={class:"player"},Y={class:"player"},H={class:"player-controls"},X={class:"play"},G=["title"],J={key:0,class:"fa fa-volume-off",style:{color:"white"}},Q={key:1,class:"fa fa-volume-up",style:{color:"white"}},V=["loop","src"];function tt(t,e,n,a,r,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",{class:(0,h.C_)({"scrolled-nav":r.scrollPosition})},[(0,o._)("nav",null,[$,(0,o.wy)((0,o._)("ul",A,[N,O,(0,o._)("li",null,[(0,o.Wm)(l,{class:"glitchy","data-glitch":"Персонажи",to:"/achievements"},{default:(0,o.w5)((()=>[M])),_:1})]),(0,o._)("li",j,[(0,o._)("div",T,[(0,o._)("div",E,[(0,o._)("div",R,[(0,o._)("button",{style:{"background-color":"transparent",border:"none"},onClick:e[0]||(e[0]=(0,i.iM)((t=>r.playing=!r.playing),["prevent"])),title:r.playing?"Pause":"Play",href:"#"},[r.playing?((0,o.wg)(),(0,o.iD)("i",U)):((0,o.wg)(),(0,o.iD)("i",I))],8,W)]),(0,o._)("audio",{loop:r.looping,ref:"audio",src:"assets/music/music.mp3",onTimeupdate:e[1]||(e[1]=(...t)=>s.update&&s.update(...t)),onLoadeddata:e[2]||(e[2]=(...t)=>s.load&&s.load(...t)),onPause:e[3]||(e[3]=t=>r.playing=!1),onPlay:e[4]||(e[4]=t=>r.playing=!0),preload:"auto"},null,40,q)])])])],512),[[i.F8,!r.mobile]]),(0,o._)("div",F,[(0,o.wy)((0,o._)("i",{onClick:e[5]||(e[5]=(...t)=>s.toggleMobileNav&&s.toggleMobileNav(...t)),class:(0,h.C_)(["fa fa-bars",{"icon-active":r.mobileNav}])},null,2),[[i.F8,r.mobile]])]),(0,o.Wm)(i.uT,{name:"mobile-nav"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("ul",z,[Z,L,(0,o._)("li",null,[(0,o.Wm)(l,{class:"glitchy","data-glitch":"Персонажи",to:"/achievements"},{default:(0,o.w5)((()=>[K])),_:1})]),(0,o._)("li",B,[(0,o._)("div",Y,[(0,o._)("div",H,[(0,o._)("div",X,[(0,o._)("button",{style:{"background-color":"transparent",border:"none"},onClick:e[6]||(e[6]=(0,i.iM)((t=>r.playing=!r.playing),["prevent"])),title:r.playing?"Pause":"Play",href:"#"},[r.playing?((0,o.wg)(),(0,o.iD)("i",Q)):((0,o.wg)(),(0,o.iD)("i",J))],8,G)]),(0,o._)("audio",{loop:r.looping,ref:"audio",src:"assets/music/music.mp3",onTimeupdate:e[7]||(e[7]=(...t)=>s.update&&s.update(...t)),onLoadeddata:e[8]||(e[8]=(...t)=>s.load&&s.load(...t)),onPause:e[9]||(e[9]=t=>r.playing=!1),onPlay:e[10]||(e[10]=t=>r.playing=!0),preload:"auto"},null,40,V)])])])],512),[[i.F8,r.mobileNav]])])),_:1})])],2)}n(1703);var et={name:"NavBar",data(){return{scrollPosition:null,audio:new Audio("assets/music/music.mp3"),loaded:!1,looping:!1,playing:!1,mobile:null,mobileNav:null,windowWidth:null}},props:{file:{type:String,default:null}},watch:{playing(t){if(t)return this.$refs.audio.play();this.$refs.audio.pause()}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{load(){if(this.$refs.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.$refs.audio.duration),this.playing=this.autoPlay;throw new Error("Failed to load sound file.")},update(){this.currentSeconds=parseInt(this.$refs.audio.currentTime)},toggleMobileNav(){this.mobileNav=!this.mobileNav},checkScreen(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)}}};const nt=(0,l.Z)(et,[["render",tt],["__scopeId","data-v-16979837"]]);var it=nt,ot=n(7192);n(2262),n(4506);const at={id:"game"},rt={key:0,class:"card_body"},st=["src"],lt={key:1,class:"unknown"};function ct(t,e,n,i,a,r){const s=(0,o.up)("SwipeableCards");return(0,o.wg)(),(0,o.iD)("div",at,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cards,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,onSwipe:r.onSwipe,onMove:r.onMove,style:{position:"absolute",height:"400px",width:"300px",backgroundColor:"antiquewhite",borderRadius:"8px",boxShadow:"1px 1px 1px 1px #de1dde"}},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{},(()=>[a.cards.at(-1)==e?((0,o.wg)(),(0,o.iD)("div",rt,[(0,o._)("h2",null,[(0,o._)("b",null,(0,h.zw)(e.name),1)]),(0,o._)("div",{class:"card_img",style:(0,h.j5)([{height:"250px"},{backgroundImage:"url("+e.bg+")"}])},[(0,o._)("div",{class:"answer left",style:(0,h.j5)({opacity:a.left_opacity})},(0,h.zw)(e.actions.left.answer),5),(0,o._)("div",{class:"answer right",style:(0,h.j5)({opacity:a.right_opacity})},(0,h.zw)(e.actions.right.answer),5),(0,o._)("img",{src:`assets/instructions/${e.icon}`,style:{width:"240px","align-items":"center","margin-top":"30px"}},null,8,st)],4),(0,o._)("p",null,(0,h.zw)(e.text),1)])):((0,o.wg)(),(0,o.iD)("div",lt," ? "))]))])),_:2},1032,["onSwipe","onMove"])))),128))])}var ut=n(205),dt={name:"DramkaGame",components:{SwipeableCards:ut.i},data(){return{cards:[{id:1,name:"Пример",text:"Выберите ответ свайпом влево или вправо",icon:"swipe.png",bg:"assets/characters/3/wink.svg",actions:{right:{answer:"Да"},left:{answer:"Да"}}}],left_opacity:0,right_opacity:0}},methods:{onSwipe(t){this.right_opacity=0,this.left_opacity=0,console.log(t),setTimeout((()=>{this.cards.pop()}),300)},onMove(t){this.right_opacity=0,this.left_opacity=0,t.x>0?this.right_opacity=t.x/100:t.x<0&&(this.left_opacity=-t.x/100)}}};const ht=(0,l.Z)(dt,[["render",ct]]);var pt=ht,ft={components:{FooterPart:ot.Z,NavBar:it,MiniDramkaGame:pt},data(){return{text:"DRAMKA"}},name:"HomePage"};const mt=(0,l.Z)(ft,[["render",C],["__scopeId","data-v-8e3ffcd6"]]);var gt=mt;const vt=[{path:"/",name:"Home",component:gt},{path:"/dramkagame",name:"Game",component:()=>n.e(904).then(n.bind(n,7904))},{path:"/achievements",name:"Achievements",component:()=>n.e(352).then(n.bind(n,352))}],yt=(0,d.p7)({history:(0,d.PO)("/"),routes:vt});var _t=yt,bt=n(65),wt=n(2415),kt=(0,bt.MT)({state:{current_card:null},mutations:{setCurrCard(t,e){t.current_card=e}},actions:{setCurrCard({commit:t},e){t("setCurrCard",e)}},getters:{current_card:t=>t.current_card},modules:{},plugins:[(0,wt.Z)()]});(0,i.ri)(u).use(kt).use(_t).mount("#app")},7192:function(t,e,n){n.d(e,{Z:function(){return d}});var i=n(3396);const o=t=>((0,i.dD)("data-v-725a2354"),t=t(),(0,i.Cn)(),t),a=o((()=>(0,i._)("div",{class:"footer_info"},[(0,i._)("div",{class:"copyright"},[(0,i._)("span",null,[(0,i.Uk)("Copyright © "),(0,i._)("a",{href:"https://github.com/MyrsabekovaA/dramka_game",style:{"text-decoration":"none",color:"white"}},[(0,i._)("b",null,"DRAMKA")]),(0,i.Uk)(" 2022 ")])])],-1))),r=[a];function s(t,e,n,o,a,s){return(0,i.wg)(),(0,i.iD)("footer",null,r)}var l={name:"FooterPart"},c=n(89);const u=(0,c.Z)(l,[["render",s],["__scopeId","data-v-725a2354"]]);var d=u}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,a){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{352:"303505f6",904:"4f1732a4"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{352:"c8f0146b",904:"79f347c8"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="dramka_project:";n.l=function(i,o,a,r){if(t[i])t[i].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=i),t[i]=[o];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){o=r[i],a=o.getAttribute("data-href");if(a===t||a===e)return o}},i=function(i){return new Promise((function(o,a){var r=n.miniCssF(i),s=n.p+r;if(e(r,s))return o();t(i,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={352:1,904:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=i(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=a);var r=n.p+n.u(e),s=new Error,l=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(i);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},i=self["webpackChunkdramka_project"]=self["webpackChunkdramka_project"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4103)}));i=n.O(i)})();
//# sourceMappingURL=app.fd46c8c1.js.map