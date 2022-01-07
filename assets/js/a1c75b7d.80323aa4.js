"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9076],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return l}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),g=u(t),l=i,w=g["".concat(c,".").concat(l)]||g[l]||p[l]||s;return t?r.createElement(w,o(o({ref:n},m),{},{components:t})):r.createElement(w,o({ref:n},m))}));function l(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38866:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return w}});var r=t(87462),i=t(63366),s=t(67294),o=t(3905),a=t(44996),c=t(62426),u=function(){return s.createElement(s.Fragment,null,c.Z.map((function(e){return s.createElement("a",{href:e.link,target:"_blank",style:{margin:5}},s.createElement("img",{src:e.src&&(e.src.startsWith("http")?e.src:(0,a.Z)(e.src)),alt:e.name,width:"150",height:"60"}))})))},m=["components"],p={title:"User Registration",sidebar_position:12,description:"User List",author:"xiaoyu",categories:"Apache ShenYu",tags:["UserList"]},g=void 0,l={unversionedId:"user-registration",id:"user-registration",isDocsHomePage:!1,title:"User Registration",description:"User List",source:"@site/community/11-user-registration.mdx",sourceDirName:".",slug:"/user-registration",permalink:"/community/user-registration",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/11-user-registration.mdx",version:"current",lastUpdatedBy:"YuI",lastUpdatedAt:1641524143,formattedLastUpdatedAt:"1/7/2022",sidebarPosition:12,frontMatter:{title:"User Registration",sidebar_position:12,description:"User List",author:"xiaoyu",categories:"Apache ShenYu",tags:["UserList"]},sidebar:"community",previous:{title:"Contributors",permalink:"/community/contributors"},next:{title:"Community",permalink:"/community/community"}},w=[{value:"Known Users",id:"knownusers",children:[]},{value:"Registration",id:"registration",children:[]}],h={toc:w};function f(e){var n=e.components,t=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"knownusers"},"Known Users"),(0,o.kt)("p",null,"Here is a list of companies or organizations that we know have used all or some of Apache ShenYu's components in production.This list is in no particular order:"),(0,o.kt)(u,{mdxType:"Users"}),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Please register and let us know so that we can serve you better."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/issues/68"},"Apache ShenYu registration"))))}f.isMDXComponent=!0},13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},44996:function(e,n,t){t.d(n,{C:function(){return s},Z:function(){return o}});var r=t(52263),i=t(13919);function s(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,s=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var s=void 0===r?{}:r,o=s.forcePrependBaseUrl,a=void 0!==o&&o,c=s.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(a)return n+t;var m=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+m:m}(s,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,s().withBaseUrl)(e,n)}},62426:function(e,n){n.Z=[{name:"\u6b22\u805a\u65f6\u4ee3",src:"/img/users/yy_logo.png",link:"http://www.huanju.cn/"},{name:"\u7c73\u54c8\u6e38",src:"/img/users/mihayo_logo.png",link:"https://www.mihoyo.com/"},{name:"Kenyatta University",src:"/img/users/KenyattaUniversity.png",link:"http://www.ku.ac.ke/"},{name:"\u4e2d\u56fd\u7535\u529b\u79d1\u5b66\u7814\u7a76\u9662",src:"/img/users/guojiadianwang.jpeg",link:"http://www.epri.sgcc.com.cn/"},{name:"\u8292\u679cTV",src:"/img/users/mgtv.jpg",link:"http://www.mgtv.com"},{name:"\u82cf\u5dde\u5b89\u8f6f\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8",src:"/img/users/safesoft.png",link:"http:/www.safesoftcorp.com"},{name:"\u963f\u5e15\u79d1\u84dd",src:"/img/users/songguo.png",link:"https://songguo7.com/"},{name:"\u5409\u7965\u822a\u7a7a",src:"/img/users/jixiang.jpg",link:"http://www.juneyaoair.com/"},{name:"\u95ea\u9001\u79d1\u6280",src:"/img/users/shansong_logo.png",link:"http://www.ishansong.com/"},{name:"\u5e7f\u4e1c\u601d\u57e0\u96c6\u56e2",src:"/img/users/sibu.png",link:"http://www.sibu.cn"},{name:"\u5fae\u8109",src:"/img/users/weimai.png",link:"https://www.myweimai.net"},{name:"\u5317\u4eac\u8f66\u6613\u62cd",src:"/img/users/cheyipai_logo.jpg",link:"http://www.cheyipai.com"},{name:"\u5f69\u8d1d\u58f3",src:"/img/users/caibeike_logo.png",link:"https://www.caibeike.com/"},{name:"\u65b9\u4ed8\u901a",src:"/img/users/fangfutong.png",link:"https://www.f-road.com.cn/"},{name:"\u4e2d\u56fd\u7535\u4fe1",src:"/img/users/china_telecom_logo.png",link:"http://www.chinatelecom.com.cn/"},{name:"\u5f00\u666e\u4e91",src:"/img/users/kaipuyun.png",link:"https://www.kaipuyun.cn/"},{name:"\u9882\u5927\u6559\u80b2",src:"/img/users/songda.png",link:"http://www.whsundata.com"},{name:"\u7af9\u4e91\u79d1\u6280",src:"/img/users/bamboocloud.png",link:"http://www.bamboocloud.com"},{name:"\u76d2\u77e5\u79d1\u6280",src:"/img/users/hezhi.png",link:"https://www.hezhiiot.com/"},{name:"\u4e07\u5a01\u79d1\u6280",src:"/img/users/wanwei_logo.png",link:""},{name:"\u597d\u6177\u5728\u5bb6",src:"/img/users/haokangzaijia.png",link:""},{name:"\u51ef\u6492\u65c5\u6e38",src:"/img/users/caissa.png",link:""},{name:"\u6df1\u5170",src:"/img/users/deepblue.png",link:"https://www.deepblueai.com/"},{name:"\u534e\u590f\u4e8c\u624b\u8f66",src:"/img/users/huaxiaershouche_logo.png",link:"http://www.hx2car.com/"},{name:"\u660e\u7565\u79d1\u6280",src:"/img/users/minglamp.jpeg",link:"https://www.mininglamp.com/"},{name:"\u9cb8\u7075\u79d1\u6280",src:"/img/users/jingling.png",link:"http://www.jinglingtech.com.cn/"},{name:"\u5f00\u601d\u65f6\u4ee3",src:"/img/users/casstime.png",link:"https://www.casstime.com/"},{name:"\u6c38\u94a2\u96c6\u56e2",src:"/img/users/jiangsuyonggang.jpg",link:"http://www.yong-gang.com/"},{name:"\u8fde\u8fde\u652f\u4ed8",src:"/img/users/lianlianpay.png",link:""},{name:"\u5927\u641c\u8f66",src:"/img/users/dasouche.png",link:"https://www.dasouche.com/zh/"},{name:"\u676d\u5dde\u66fc\u5b5a\u79d1\u6280\u6709\u9650\u516c\u53f8",src:"/img/users/manfu.png",link:"https://www.mindflow.com.cn/"},{name:"\u5947\u70b9\u4e91",src:"/img/users/qidianyun.png",link:"https://www.startdt.com/"},{name:"\u5927\u53c2\u6797",src:"/img/users/dasunlin.png",link:"https://www.dslyy.com/"},{name:"\u6d59\u6c5f\u65b0\u8bfe\u5802\u6559\u80b2\u80a1\u4efd\u6709\u9650\u516c\u53f8",src:"/img/users/xinketang.png",link:"https://www.thinktown.com/"},{name:"\u7a3f\u5b9a\u79d1\u6280",src:"/img/users/gaoding.png",link:"https://www.gaoding.com/"},{name:"\u53f8\u673a\u5b9d",src:"/img/users/sijibao.png",link:"https://www.sijibao.com/"},{name:"\u51ef\u4eac\u79d1\u6280",src:"/img/users/keking.jpeg",link:"http://www.keking.com/"},{name:"\u805a\u62cd\u7f51",src:"/img/users/jupai.png",link:"https://www.jupai.net"},{name:"\u4e5d\u5dde\u901a",src:"/img/users/jzt.png",link:"https://www.yyjzt.com"},{name:"\u6d59\u6c5f\u767e\u5e94\u79d1\u6280",src:"/img/users/by_logo.png",link:"https://www.byai.com/"},{name:"ShipOut",src:"/img/users/shiout_logo.png",link:"https://www.ShipOut.com"}]}}]);