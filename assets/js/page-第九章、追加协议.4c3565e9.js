(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1026:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),s("ul",[s("li",[t._v("《图解HTTP》")])])]),t._v(" "),s("h2",{attrs:{id:"一、基于http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、基于http协议"}},[t._v("#")]),t._v(" 一、基于HTTP协议")]),t._v(" "),s("p",[t._v("目前基于 HTTP 的 Web 浏览器的使用环境已经遍布全球，因此无法完全抛弃 HTTP。")]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("SPDY")]),t._v(" "),s("p",[t._v("SPDY（读作“SPeeDY”）是"),s("a",{attrs:{href:"https://baike.baidu.com/item/Google",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google"),s("OutboundLink")],1),t._v("开发的基于"),s("a",{attrs:{href:"https://baike.baidu.com/item/TCP/33012",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP"),s("OutboundLink")],1),t._v("的会话层协议，用以最小化网络延迟，提升网络速度，优化用户的网络使用体验。SPDY并不是一种用于替代HTTP的协议，而是对"),s("a",{attrs:{href:"https://baike.baidu.com/item/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP"),s("OutboundLink")],1),t._v("协议的增强。新协议的功能包括数据流的多路复用、请求优先级以及HTTP报头压缩。谷歌表示，引入"),s("a",{attrs:{href:"https://baike.baidu.com/item/SPDY%E5%8D%8F%E8%AE%AE/15652060",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPDY协议"),s("OutboundLink")],1),t._v("后，在实验室测试中页面加载速度比原先快64%")])]),t._v(" "),s("h2",{attrs:{id:"二、spdy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、spdy"}},[t._v("#")]),t._v(" 二、SPDY")]),t._v(" "),s("p",[t._v("SPDY 的开服目标旨在解决 HTTP 的性能瓶颈，缩短 Web 页面的加载时间。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-http-的瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-http-的瓶颈"}},[t._v("#")]),t._v(" 2.1 HTTP 的瓶颈")]),t._v(" "),s("p",[t._v("使用 HTTP 协议探知服务器上是否有内容更新，就必须频繁地从客户端到服务器进行确认。如果服务器上内容没有更新，那么就会产三徒劳的通信。")]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("制约因素")]),t._v(" "),s("ul",[s("li",[t._v("一条连接上只可以发送一个请求")]),t._v(" "),s("li",[t._v("请求只能从客户端开始，客户端不可以接收除响应意外的指令")]),t._v(" "),s("li",[t._v("请求/响应首部未经压缩就发送，首部信息越大延迟越大")]),t._v(" "),s("li",[t._v("每次互相发送相同的、冗长的首部造成很多浪费")]),t._v(" "),s("li",[t._v("可任意选择数据压缩格式")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(543),alt:"image-20220319101940140",loading:"lazy"}})]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"ajax的解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax的解决办法"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Ajax的解决办法")])]),t._v(" "),s("p",[t._v("Ajax 是一种有效利用 JavaScript 和 DOM的操作，以达到局部 Web 页面替换加载的异步通信手段。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(544),alt:"image-20220319102245723",loading:"lazy"}})]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"comet的解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comet的解决办法"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Comet的解决办法")])]),t._v(" "),s("p",[t._v("通过延迟应答，模拟实现服务器端向客户端推送的功能。")]),t._v(" "),s("p",[t._v("通常服务器端接收到请求，在处理完毕后就会立即返回响应，但为了实现推送功能，Comet会先将响应置于挂起状态，当服务器端有内容更新时，再返回该响应。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(545),alt:"image-20220319102538258",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-spdy-的设计和功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-spdy-的设计和功能"}},[t._v("#")]),t._v(" 2.2 SPDY 的设计和功能")]),t._v(" "),s("p",[t._v("SPDY 没有完全改写 HTTP 协议，而是在 TCP/IP 的 "),s("mark",[t._v("应用层与运输层之间通过新加会话层的形式运作，并且使用SSL")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(546),alt:"image-20220319103029003",loading:"lazy"}})]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"多路复用流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用流"}},[t._v("#")]),t._v(" "),s("strong",[t._v("多路复用流")])]),t._v(" "),s("p",[t._v("通过单一的TCP连接，可以无限制处理多个HTTP请求。")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"赋予请求优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋予请求优先级"}},[t._v("#")]),t._v(" "),s("strong",[t._v("赋予请求优先级")])]),t._v(" "),s("p",[t._v("可以给请求逐个分配优先级顺序，是为了在发送多个请求时，解决因带宽低而导致响应变慢")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"压缩http首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩http首部"}},[t._v("#")]),t._v(" "),s("strong",[t._v("压缩HTTP首部")])]),t._v(" "),s("p",[t._v("通过压缩HTTP首部，减少数据包中的字节数。")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"推送功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送功能"}},[t._v("#")]),t._v(" "),s("strong",[t._v("推送功能")])]),t._v(" "),s("p",[t._v("支持服务器主动向客户端推送数据的功能。")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"服务器提示功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器提示功能"}},[t._v("#")]),t._v(" "),s("strong",[t._v("服务器提示功能")])]),t._v(" "),s("p",[t._v("服务器可以主动提示客户端请求所需的资源。由于在客户端发现资源之前就可以获知资源的存在，因此在资源已缓存等情况下，可以避免发送不必要的请求")]),t._v(" "),s("h3",{attrs:{id:"_2-3-spdy-消除web瓶颈了吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-spdy-消除web瓶颈了吗"}},[t._v("#")]),t._v(" 2.3 SPDY 消除Web瓶颈了吗")]),t._v(" "),s("p",[t._v("SPDY 的确是一种可以有效消除 HTTP 瓶颈的技术，但很多 Web 网站存在的问题并非仅仅是由 HTTP 瓶颈所导致")]),t._v(" "),s("h2",{attrs:{id:"三、全双工通信的-websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、全双工通信的-websocket"}},[t._v("#")]),t._v(" 三、全双工通信的 WebSocket")]),t._v(" "),s("p",[t._v("利用 Ajax 和 Comet 技术进行通信可以提升 Web 的浏览速度，但问题在于通信如果使用 HTTP就无法彻底解决瓶颈问题")]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("WebSocket")]),t._v(" "),s("p",[s("strong",[t._v("WebSocket")]),t._v("是一种在单个"),s("a",{attrs:{href:"https://baike.baidu.com/item/TCP",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP"),s("OutboundLink")],1),t._v("连接上进行"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%85%A8%E5%8F%8C%E5%B7%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("全双工"),s("OutboundLink")],1),t._v("通信的协议。")]),t._v(" "),s("p",[t._v("WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-websocket-的设计和功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-websocket-的设计和功能"}},[t._v("#")]),t._v(" 3.1 WebSocket 的设计和功能")]),t._v(" "),s("p",[s("img",{attrs:{src:e(547),alt:"image-20220319104140774",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-websocket-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-websocket-协议"}},[t._v("#")]),t._v(" 3.2 WebSocket 协议")]),t._v(" "),s("p",[t._v("一旦 Web 服务器和客户端之间建立起 WebSocket 协议的通信连接，之后所有的通信都依靠这个协议进行传输。")]),t._v(" "),s("h4",{attrs:{id:"推送功能-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送功能-2"}},[t._v("#")]),t._v(" "),s("strong",[t._v("推送功能")])]),t._v(" "),s("p",[t._v("支持由服务器向客户端发送数据的推送功能")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"减少通信量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少通信量"}},[t._v("#")]),t._v(" "),s("strong",[t._v("减少通信量")])]),t._v(" "),s("p",[t._v("只要建立起 WebSocket 连接，就希望一直保持连接状态。和 HTTP 相比，每次连接的总开销更小，并且首部信息量也很小，减少了通信量")]),t._v(" "),s("h3",{attrs:{id:"_3-3-握手-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-握手-请求"}},[t._v("#")]),t._v(" 3.3 握手-请求")]),t._v(" "),s("p",[t._v("为了实现 WebSocket 通信，在 HTTP 连接建立之后，需要完成一次握手的步骤")]),t._v(" "),s("p",[s("img",{attrs:{src:e(548),alt:"image-20220319104652205",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-握手-响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-握手-响应"}},[t._v("#")]),t._v(" 3.4 握手-响应")]),t._v(" "),s("p",[t._v("成功握手确立 WebSocket 连接之后，通信时不再使用 HTTP 的数据帧，而采用 WebSocket 独立的数据帧")]),t._v(" "),s("p",[s("img",{attrs:{src:e(549),alt:"image-20220319104758214",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports},543:function(t,a,e){t.exports=e.p+"assets/img/image-20220319101940140.6eefcabf.png"},544:function(t,a,e){t.exports=e.p+"assets/img/image-20220319102245723.39eb1ae5.png"},545:function(t,a,e){t.exports=e.p+"assets/img/image-20220319102538258.563875e7.png"},546:function(t,a,e){t.exports=e.p+"assets/img/image-20220319103029003.5c4b1379.png"},547:function(t,a,e){t.exports=e.p+"assets/img/image-20220319104140774.4ba03d9d.png"},548:function(t,a,e){t.exports=e.p+"assets/img/image-20220319104652205.b4eb3f84.png"},549:function(t,a,e){t.exports=e.p+"assets/img/image-20220319104758214.be9c358a.png"}}]);