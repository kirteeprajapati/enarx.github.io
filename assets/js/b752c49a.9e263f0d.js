"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[184],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={slug:"2019-08-18-enarx-attested-secured-execution-with-amds-sev",title:"Enarx - Attested, Secured Execution with AMD\u2019s SEV",author:"Nathaniel McCallum, David Kaplan",tags:["Event"]},c=void 0,u={permalink:"/resources/2019-08-18-enarx-attested-secured-execution-with-amds-sev",source:"@site/resources/2019-08-18-enarx-attested-secured-execution-with-amds-sev.md",title:"Enarx - Attested, Secured Execution with AMD\u2019s SEV",description:"Enarx - Attested, Secured Execution with AMD\u2019s SEV - Nathaniel McCallum, Red Hat, Inc. & David Kaplan, Advanced Micro Devices, Inc. AMD SEV (Secure Encrypted Virtualization) is a new CPU security technology available in AMD's EPYC processors and provides new levels of protection for virtualized workloads. AMD SEV can encrypt the memory and register state of VMs individually, isolating them from the hypervisor.  Enarx is an open source project led by Red Hat, leveraging TEEs, and providing attestation and protection for run-time workloads. It is written in Rust and aims to reduce the number of trust relationships required when running executables in the private or public cloud. It currently supports AMD SEV, and this session will: a) Discuss SEV capabilities and roadmap; b) Introduce the Enarx architecture; c) Present some of the components of Enarx; d) Show a demonstration of an early set of Enarx capabilities.",date:"2019-08-18T00:00:00.000Z",formattedDate:"August 18, 2019",tags:[{label:"Event",permalink:"/resources/tags/event"}],truncated:!1,authors:[{name:"Nathaniel McCallum, David Kaplan"}],frontMatter:{slug:"2019-08-18-enarx-attested-secured-execution-with-amds-sev",title:"Enarx - Attested, Secured Execution with AMD\u2019s SEV",author:"Nathaniel McCallum, David Kaplan",tags:["Event"]},prevItem:{title:"Enarx for everyone (a\xa0quest)",permalink:"/resources/2019-08-19-enarx-for-everyone-a-quest"},nextItem:{title:"Trust No One, Run Everywhere\u2013Introducing Enarx",permalink:"/resources/2019-08-15-trust-no-one-run-everywhere-introducing-enarx"}},l={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enarx - Attested, Secured Execution with AMD\u2019s SEV - Nathaniel McCallum, Red Hat, Inc. & David Kaplan, Advanced Micro Devices, Inc. AMD SEV (Secure Encrypted Virtualization) is a new CPU security technology available in AMD's EPYC processors and provides new levels of protection for virtualized workloads. AMD SEV can encrypt the memory and register state of VMs individually, isolating them from the hypervisor.  Enarx is an open source project led by Red Hat, leveraging TEEs, and providing attestation and protection for run-time workloads. It is written in Rust and aims to reduce the number of trust relationships required when running executables in the private or public cloud. It currently supports AMD SEV, and this session will: a) Discuss SEV capabilities and roadmap; b) Introduce the Enarx architecture; c) Present some of the components of Enarx; d) Show a demonstration of an early set of Enarx capabilities."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source"),": Linux Security Summit 2019"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link"),": ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0-ISmJNxGiY"},"https://www.youtube.com/watch?v=0-ISmJNxGiY")))}m.isMDXComponent=!0}}]);