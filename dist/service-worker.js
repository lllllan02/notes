if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const c=e=>s(e,d),o={module:{uri:d},exports:r,require:c};a[d]=Promise.all(f.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.82fe602c.css",revision:"7f6af1101608471d0d95961e19afca11"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/23.7ff24b7d.js",revision:"4ca874d6823f78b386a230066db39edb"},{url:"assets/js/24.aa35cc9f.js",revision:"d215e0748e7d534cff696d0b09f2afd7"},{url:"assets/js/25.b6735fa7.js",revision:"db6d46c1dba4f174af215dde999426c5"},{url:"assets/js/26.6c66849f.js",revision:"06bf17eb3b5a2a0de238e79c6b63d322"},{url:"assets/js/27.bd4d187a.js",revision:"e614b19ba91c06dd5eee7edc386c181d"},{url:"assets/js/28.c91d29dd.js",revision:"6e5f0cc5c8498cb383a2bf2dfa460aed"},{url:"assets/js/app.da12316f.js",revision:"527c9199b911c00ac9069f410482978c"},{url:"assets/js/layout-Blog.4f502c88.js",revision:"38e3e8a8a425317cdafc8e458be5d532"},{url:"assets/js/layout-Layout.28148f81.js",revision:"0cf1b11bbd9697ae452cfc486e426068"},{url:"assets/js/layout-NotFound.9888ca01.js",revision:"ad6349d401c629033e4c39b1dd58be0e"},{url:"assets/js/layout-Slide.ba747d39.js",revision:"d88d972ca2781957aed66818794aa06a"},{url:"assets/js/page-IntroPage.665652aa.js",revision:"2ded888ad7a225d70fce108c2a2ca8d4"},{url:"assets/js/page-Markdown增强.6d179c7b.js",revision:"d67b3a11bf9346213adb8192184320f9"},{url:"assets/js/page-主要功能与配置演示.e3443c1d.js",revision:"9d74e6202bd68d1f1adbe8a84d6a5911"},{url:"assets/js/page-博客主页.230adb90.js",revision:"18ee458763f000effe4ac20b590923a2"},{url:"assets/js/page-密码加密的文章.1ec06f61.js",revision:"ef9817276b04f63f6b8c04a018268f49"},{url:"assets/js/page-幻灯片页.f606c0ad.js",revision:"84ed3c6441f59fc83bce717a9aa874e8"},{url:"assets/js/page-组件禁用.09e022ed.js",revision:"487d2cd55402381af82aaea92f08af1b"},{url:"assets/js/page-自定义布局.63aac984.js",revision:"4658f54be5c4d7773f1b400151f34a64"},{url:"assets/js/page-页面配置.3b4cfd52.js",revision:"16b0fd60425265be5ba13429c86d7df6"},{url:"assets/js/page-项目主页.c6243d2e.js",revision:"00c52637bbc468bdaee88db402fa940f"},{url:"assets/js/vendors~flowchart.36e750e9.js",revision:"25c14cf89e308ddf80fa88d30958da0d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d930b563.js",revision:"4bde13aaca5a04256290aeef078f6bbe"},{url:"assets/js/vendors~layout-Layout.3398e1b5.js",revision:"9637726bd104bd0f3135426f88c7ce14"},{url:"assets/js/vendors~mermaid.f14e0cfe.js",revision:"3cf6737d1479916bd60d45cab66b5e5e"},{url:"assets/js/vendors~photo-swipe.824102af.js",revision:"f9c04478075a11fa0f0e09b54b14bd9b"},{url:"assets/js/vendors~reveal.868d03ce.js",revision:"3b8cbe552c75d8eb53b1775af5903cfd"},{url:"assets/js/vendors~waline.62514179.js",revision:"f7a82b7bac87736255d7a496dc661880"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"8ce4289d9786818c6c8eab2ec389a75c"},{url:"article/index.html",revision:"6b6cf6300524d12eab3c128d0139ad3d"},{url:"category/index.html",revision:"0231fe1c0d359b69ac54d2490e8f9f81"},{url:"category/使用指南/index.html",revision:"b390bff7ae09ae2957a049fb53aef848"},{url:"encrypt/index.html",revision:"f1bf14ebf876abaa9c3db7f54784309c"},{url:"guide/disable/index.html",revision:"5dc2e0747ccd0fc3f4a04450b10fee6e"},{url:"guide/encrypt/index.html",revision:"f0c6ac58323976c2b964f6e5c57aa9be"},{url:"guide/index.html",revision:"9e430f30350867d6d68379d29b583206"},{url:"guide/markdown/index.html",revision:"14e9e13c500757e390c9b3e8f66dad2f"},{url:"guide/page/index.html",revision:"17a3573e92926913d2a7b85a416f0373"},{url:"home/index.html",revision:"288e7b09e67720733702326396cfc565"},{url:"index.html",revision:"fed0e270e94e653dbc936ea8f4e04a0c"},{url:"intro/index.html",revision:"452ff4e01da0607598cc095e4ec707e5"},{url:"layout/index.html",revision:"e2384cfa1fa5c088a10b399829cb8933"},{url:"slide/index.html",revision:"40f5912964f6077b8044b497421d763c"},{url:"slides/index.html",revision:"79df4fea8310820f490b7151565c81c0"},{url:"star/index.html",revision:"f208a776deb19b153b1aebb3274cdb53"},{url:"tag/index.html",revision:"f646ec774d60acde482d00f0611a947b"},{url:"tag/markdown/index.html",revision:"c25f4d228daf735fb52adaf6e5b77fab"},{url:"tag/使用指南/index.html",revision:"f5d0bee8e67ccd82f0f18736c6d02794"},{url:"tag/文章加密/index.html",revision:"f335bbab8816de784b481e890bf68145"},{url:"tag/页面配置/index.html",revision:"376a3c00be478571476d473c09a4eb71"},{url:"timeline/index.html",revision:"b00baa7ecb1782feb64d1ed95ac40a91"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"lllllan.png",revision:"4ea02ccc61d9175b6182eef57a165828"},{url:"logo-lllllan.png",revision:"e3aea26c828644acb6cf4ac895dc7adb"},{url:"logo.png",revision:"aa7f29af2f8682567040efe7dad91da7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
