if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const a=e=>i(e,c),l={module:{uri:c},exports:n,require:a};s[c]=Promise.all(r.map((e=>l[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f9e7dc10c98db5ceed66d971a124ca78"},{url:"assets/index-7594a192.css",revision:null},{url:"assets/index-ce17c881.js",revision:null},{url:"assets/sql-wasm-debug.js",revision:"552b43611a2413481fd5d4cd4ba3d0d1"},{url:"assets/sql-wasm.js",revision:"dc3b00ac3781d7229d3227fd958546d6"},{url:"assets/worker.sql-wasm-debug.js",revision:"d6ed95da10fa9547c66a943559cb03e5"},{url:"assets/worker.sql-wasm.js",revision:"87be2b7d7c125f3e73c7788bdc42a923"},{url:"dark.css",revision:"8c15ca9c4d97eb5f028a7a060d3a729c"},{url:"index.html",revision:"5b2bdaaec487a739c72adde8215a54ec"},{url:"light.css",revision:"69d3fcb5f142a58c5a9a87351c2ac56d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"splash_screens/icon.png",revision:"09cba40f209a577363608d52abde50ee"},{url:"manifest.webmanifest",revision:"a6638f237e95bb435e687157f4c507cb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
