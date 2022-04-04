"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1322],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={},s="WebAssembly with Zig",c={unversionedId:"WebAssembly/Zig",id:"WebAssembly/Zig",title:"WebAssembly with Zig",description:"Zig Webassembly",source:"@site/docs/WebAssembly/Zig.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/Zig",permalink:"/docs/WebAssembly/Zig",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/Zig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with Grain",permalink:"/docs/WebAssembly/Grain"},next:{title:"WebAssembly with JavaScript",permalink:"/docs/WebAssembly/JavaScript"}},u={},m=[{value:"Environment setup",id:"environment-setup",level:2},{value:"Zig",id:"zig",level:3},{value:"Wasmtime",id:"wasmtime",level:3},{value:"Zig Code",id:"zig-code",level:2},{value:"Compiling Go code",id:"compiling-go-code",level:2}],p={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webassembly-with-zig"},"WebAssembly with Zig"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zig Webassembly",src:n(29449).Z,width:"1400",height:"599"})),(0,a.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"To compile this demo, you must install the following:"),(0,a.kt)("h3",{id:"zig"},"Zig"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://ziglang.org/download/"},"ziglang.org")," and follow the instructions."),(0,a.kt)("h3",{id:"wasmtime"},"Wasmtime"),(0,a.kt)("p",null,"You will find wasmtime at ",(0,a.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime.dev")),(0,a.kt)("h2",{id:"zig-code"},"Zig Code"),(0,a.kt)("p",null,"we would create a simple Zig program that calculates caculates the fibonacci sequence of an integer input."),(0,a.kt)("p",null,'create a folder with a name of your choice, i would be using "Zig-to-WASI" as the name of my folder.'),(0,a.kt)("p",null,"create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"main.zig"),", add following code into your main.zig file and save the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zig"},'const std = @import("std");\n\nfn fibonacci(index: u32) u32 {\n    if (index < 2) return index;\n    return fibonacci(index - 1) + fibonacci(index - 2);\n}\n\npub fn main() !void {\n    const stdout = std.io.getStdOut().writer();\n    var x: u32 = 7;\n    \n    try stdout.print("fibonacci of {d} ", .{x});\n    try stdout.print("is: {d} \\n ", .{fibonacci(x)}  );\n}\n')),(0,a.kt)("h2",{id:"compiling-go-code"},"Compiling Go code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Compile using ",(0,a.kt)("inlineCode",{parentName:"li"},"zig")," ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zig run main.zig\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zig Screenshot1",src:n(51192).Z,width:"781",height:"59"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"compile to WASM using the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zig build-exe main.zig -target wasm32-wasi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"The wasm file created in same folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"file main.wasm\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"wasm runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmtime main.wasm\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zig Screenshot2",src:n(46792).Z,width:"769",height:"42"})))}d.isMDXComponent=!0},51192:function(e,t,n){t.Z=n.p+"assets/images/zigRunScreenshot-425627f9a55b8385807fa60bcee632d8.png"},29449:function(e,t,n){t.Z=n.p+"assets/images/zigWasi-39800d4cc7a324deee5bddb9c624b88e.png"},46792:function(e,t,n){t.Z=n.p+"assets/images/zigWasmScreenshot-3a29a4806dc783eb2d124af2fdbc6a19.png"}}]);