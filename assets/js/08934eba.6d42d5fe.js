"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6969],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={},c="TEEs",l={unversionedId:"Technical/TEE",id:"Technical/TEE",title:"TEEs",description:'A TEE is Trusted Execution Environment.  We (Enarx) define a TEE as "a hardware-based technique for securing sensitive data and algorithms in such a way that even the kernel, root user or hypervisor can\'t see what\'s going on."  Examples are AMD\'s SEV, Intel\'s SGX and IBM\'s PEF.  When you need to secure a workload using TEE technology on a host machine, you create a TEE instance.  Intel\'s SGX calls this an "enclave", AMD\'s SEV calls this a "secure VM".  We call it a "Keep".',source:"@site/docs/Technical/TEE.md",sourceDirName:"Technical",slug:"/Technical/TEE",permalink:"/docs/Technical/TEE",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Technical/TEE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trust Architecture",permalink:"/docs/Technical/Trust-Architecture"},next:{title:"Components",permalink:"/docs/Technical/Components"}},u={},h=[{value:"What&#39;s the difference between a TPM and a TEE instance?",id:"whats-the-difference-between-a-tpm-and-a-tee-instance",level:2},{value:"What&#39;s the difference between an HSM and a TEE instance?",id:"whats-the-difference-between-an-hsm-and-a-tee-instance",level:2},{value:"Further reading",id:"further-reading",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tees"},"TEEs"),(0,i.kt)("p",null,'A TEE is Trusted Execution Environment.  We (Enarx) define a TEE as "a hardware-based technique for securing sensitive data and algorithms in such a way that even the kernel, root user or hypervisor can\'t see what\'s going on."  Examples are AMD\'s SEV, Intel\'s SGX and IBM\'s PEF.  When you need to secure a workload using TEE technology on a host machine, you create a TEE instance.  Intel\'s SGX calls this an "enclave", AMD\'s SEV calls this a "secure VM".  We call it a "Keep".'),(0,i.kt)("p",null,'In order to use a TEE instance - or a Keep - you need to ensure that it\'s genuine.  This happens via a process called "attestation".  Attestation is a key part of the Enarx project.'),(0,i.kt)("h2",{id:"whats-the-difference-between-a-tpm-and-a-tee-instance"},"What's the difference between a TPM and a TEE instance?"),(0,i.kt)("p",null,'You could implement many of the capabilities of a TPM within a TEE, but it doesn\'t make sense to create a "full" TPM implementation within a TEE on two levels:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One of the key points of a TPM is that it's linked to the hardware, meaning that the boot sequence can be tied into PCRs (Platform Configuration Registers). TEEs aren't necessarily suitable as Hardware-Based Roots of Trust."),(0,i.kt)("li",{parentName:"ul"},"Enarx provides a general processing environment.  The capabilities of a TPM are carefully scoped, and to meet the requirements of the TCG (Trusted Computing Group, the standards body for TPMs), you need to implement these very carefully.")),(0,i.kt)("p",null,"Neither of these points is to suggest that you shouldn't consider using a Enarx Keep for some of the tasks which, until now, have been best suited to a TPM, including key management and cryptographic operations: these are, in fact, definitely great uses for Enarx Keeps. But a TEE instance offers a much greater set of capabilities, and should generally be much, much faster than a TPM."),(0,i.kt)("h2",{id:"whats-the-difference-between-an-hsm-and-a-tee-instance"},"What's the difference between an HSM and a TEE instance?"),(0,i.kt)("p",null,"HSM's (Hardware Security Modules) generally provide higher levels of protection than TEEs, but are separate modules, accessed via PCI bus, network, etc. TEEs are integral to the CPU packages on a motherboard.  Both HSMs and TEE instances can be used as general-function processing units (depending on the model), and both can be programmed for particular uses (e.g. PKCS#11 modules). The cost of HSMs is high (typically thousands of dollars), whereas TEEs are integral to a chipset. The work to program an HSM for a specific task (beyond a modular use) is typically very difficult and highly skilled."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"Hardware"},"Hardware with TEE support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"Vulnerabilities-Attacks"},"Vulnerabilities in and attacks on TEEs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://next.redhat.com/2019/12/02/current-trusted-execution-environment-landscape/"},"Current Trusted Execution Environment Landscape"),", long-form article published in February 2020 by members of the Enarx team.")))}p.isMDXComponent=!0}}]);