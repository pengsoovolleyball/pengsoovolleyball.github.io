if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-3ac5d194"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"511.bundle.js",revision:"c298169ffe74cfd8339655d46a2163dd"},{url:"511.bundle.js.LICENSE.txt",revision:"51ce75aaaadd0bf01ca2cdb6c3ad5e6c"},{url:"index.html",revision:"bde1674a10303f8a4c51509e3ca1de57"},{url:"ko/index.html",revision:"2922dff363ebb9cfc640a002c710bf12"},{url:"ko/manifest.json",revision:"b06bd3216f6a3e4ca7f7347cd96a07d9"},{url:"main.bundle.js",revision:"7a6b7d013c08c3e40012b6d286831ba7"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"f255a545318a541d021a9714898fa19b"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"c09634511b9d383fb4f7e282d3e9b7c8"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"4a119e51e8942e8a4d7e95168edad0b6"},{url:"resources/assets/images/controls_ko.png",revision:"3977b41d4ef8d3eee3df57576a410f40"},{url:"resources/assets/images/screenshot.png",revision:"ef6f3edc7ffbc7770383aa164f0311ad"},{url:"resources/assets/images/sprite_sheet.json",revision:"f40b75bc35bbb2cb43a59d3355c22272"},{url:"resources/assets/images/sprite_sheet.png",revision:"6e0eec98a0d2b01070380f454e82a6e3"},{url:"resources/assets/images/sprite_sheet_pengsoo_left.json",revision:"1ae845aac2390d44a3f813cbf014c37b"},{url:"resources/assets/images/sprite_sheet_pengsoo_left.png",revision:"73bd94f2667735f5070981fa3b0e518e"},{url:"resources/assets/images/sprite_sheet_pengsoo_right.json",revision:"9bd78af9e2c0378939ff61ea3b506725"},{url:"resources/assets/images/sprite_sheet_pengsoo_right.png",revision:"e37ef18d858fda5cb620231c7efadad9"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"050bcd80f7372933b3662ec829e08220"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"78c92565436c53188c469ecb86972ed2"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"e353b71b5390548b407663dfc200e740"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"0f3fb1b16cebf3bf61ccc18fc5a5c733"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"a72b386603c2a511a367f5828812ec3a"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"ec349f2fd988e811c70b52912b6dcac3"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"dc10fe67a742df45083c04a6ed45eb2f"},{url:"resources/assets/sounds/bgm.mp3",revision:"2c450e13f0ca0809aad63d68c8997463"},{url:"resources/style.css",revision:"1bc6e4f64f70ef321fd4b10c73cbc0b0"},{url:"runtime.bundle.js",revision:"b377d7972927d91f72e1a52d0cb2717e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
