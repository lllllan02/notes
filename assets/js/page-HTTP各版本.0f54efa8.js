(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1014:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43787334",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/1.0、HTTP/1.1、HTTP/2、HTTPS - 知乎 (zhihu.com)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26559480",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂 HTTP/2 特性 - 知乎 (zhihu.com)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://xiaolincoding.com/network/2_http/http_interview.html#http-1-1%E3%80%81http-2%E3%80%81http-3-%E6%BC%94%E5%8F%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.1 HTTP 常见面试题 | 小林coding (xiaolincoding.com)"),r("OutboundLink")],1)])])]),t._v(" "),r("h2",{attrs:{id:"http-1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),r("ol",[r("li",[t._v("长连接")]),t._v(" "),r("li",[t._v("管道网络传输")]),t._v(" "),r("li",[t._v("范围请求")]),t._v(" "),r("li",[t._v("Host 头")]),t._v(" "),r("li",[t._v("更多缓存策略")]),t._v(" "),r("li",[t._v("更多的状态码")])]),t._v(" "),r("h3",{attrs:{id:"长连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[t._v("#")]),t._v(" 长连接")]),t._v(" "),r("p",[t._v("HTTP1.0 默认使用短连接，每次发送一个 HTTP 请求都会单独进行一次 TCP 连接，使用完马上断开。")]),t._v(" "),r("p",[t._v("为了解决资源浪费的问题，HTTP1.1 默认使用长连接。")]),t._v(" "),r("h3",{attrs:{id:"管道网络传输"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#管道网络传输"}},[t._v("#")]),t._v(" 管道网络传输")]),t._v(" "),r("p",[t._v("HTTP/1.1 采用了长连接的方式，这使得管道（pipeline）网络传输成为了可能。")]),t._v(" "),r("p",[t._v("即可在同一个 TCP 连接里面，客户端可以发起多个请求，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(504),alt:"管道网络传输",loading:"lazy"}})]),t._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[t._v("「队头阻塞」")]),t._v(" "),r("p",[t._v("HTTP1.1 可以连续发送请求，解决了请求的「队头阻塞」。")]),t._v(" "),r("p",[r("mark",[t._v("但是服务器必须按照接收请求的顺序发送对这些管道化请求的响应。")]),t._v(" 因此并没有饥饿绝响应的「队头阻塞」。")])]),t._v(" "),r("h3",{attrs:{id:"范围请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#范围请求"}},[t._v("#")]),t._v(" 范围请求")]),t._v(" "),r("p",[t._v("HTTP/1.1 引入了范围请求（range request）机制，以避免带宽的浪费。")]),t._v(" "),r("p",[t._v("当客户端想请求一个文件的一部分，或者需要继续下载一个已经下载了部分但被终止的文件，HTTP/1.1 可以在请求中加入 "),r("code",[t._v("Range")]),t._v(" 头部，以请求（并只能请求字节型数据）数据的一部分。服务器端可以忽略 "),r("code",[t._v("Range")]),t._v(" 头部，也可以返回若干 "),r("code",[t._v("Range")]),t._v(" 响应。")]),t._v(" "),r("p",[t._v("在范围响应中，"),r("code",[t._v("Content-Range")]),t._v(" 头部标志指示出了该数据块的偏移量和数据块的长度。")]),t._v(" "),r("h3",{attrs:{id:"host-头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#host-头"}},[t._v("#")]),t._v(" Host 头")]),t._v(" "),r("p",[t._v("域名系统（DNS）允许多个主机名绑定到同一个IP地址上，通过 host 头的域名，可以访问到同一台服务器上的不同应用。")]),t._v(" "),r("div",{staticClass:"language-http line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("/home.html")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token header"}},[r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("example1.org")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("h2",{attrs:{id:"http-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),r("p",[t._v("HTTP/2 协议是基于 HTTPS 的，所以 HTTP/2 的安全性也是有保障的。")]),t._v(" "),r("ol",[r("li",[t._v("头部压缩")]),t._v(" "),r("li",[t._v("二进制格式")]),t._v(" "),r("li",[t._v("数据流")]),t._v(" "),r("li",[t._v("多路复用")]),t._v(" "),r("li",[t._v("服务器推送")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(505),alt:"HTT/1 ~ HTTP/2",loading:"lazy"}})]),t._v(" "),r("h3",{attrs:{id:"头部压缩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[t._v("#")]),t._v(" 头部压缩")]),t._v(" "),r("p",[t._v("如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你消除重复的部分。")]),t._v(" "),r("p",[t._v("这就是所谓的 "),r("code",[t._v("HPACK")]),t._v(" 算法：在客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就提高速度了。")]),t._v(" "),r("h3",{attrs:{id:"二进制格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二进制格式"}},[t._v("#")]),t._v(" 二进制格式")]),t._v(" "),r("p",[t._v("HTTP/2 不再像 HTTP/1.1 里的纯文本形式的报文，而是全面采用了 "),r("strong",[t._v("二进制格式")]),t._v("，头信息和数据体都是二进制，并且统称为帧（frame）：「头信息帧（Headers Frame）」和「数据帧（Data Frame）」。")]),t._v(" "),r("p",[t._v("接收方收到报文后，无需再将明文的报文转成二进制，而是直接解析二进制报文，提升了数据传输的效率。")]),t._v(" "),r("h3",{attrs:{id:"数据流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据流"}},[t._v("#")]),t._v(" 数据流")]),t._v(" "),r("p",[t._v("HTTP/2 的数据包不是按顺序发送的，同一个连接里面连续的数据包，可能属于不同的回应。因此，必须要对数据包做标记，指出它属于哪个回应。")]),t._v(" "),r("p",[t._v("在 HTTP/2 中每个请求或相应的所有数据包，称为一个「数据流（"),r("code",[t._v("Stream")]),t._v("）」。每个数据流都标记着一个独一无二的编号（Stream ID）。")]),t._v(" "),r("p",[r("mark",[t._v("在 HTTP/2 连接上，不同 Stream 的帧是可以乱序发送的（因此可以并发不同的 Stream ），因为每个帧的头部会携带 Stream ID 信息，所以接收端可以通过 Stream ID 有序组装成 HTTP 消息，而同一 Stream 内部的帧必须是严格有序的。")])]),t._v(" "),r("p",[t._v("客户端和服务器双方都可以建立 Stream， Stream ID 也是有区别的，客户端建立的 Stream 必须是奇数号，而服务器建立的 Stream 必须是偶数号。")]),t._v(" "),r("p",[t._v("客户端还可以指定数据流的优先级。优先级高的请求，服务器就先响应该请求。")]),t._v(" "),r("h3",{attrs:{id:"多路复用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),r("p",[t._v("HTTP/2 是可以在一个连接中并发多个请求或回应，而不用按照顺序一一对应。")]),t._v(" "),r("p",[t._v("移除了 HTTP/1.1 中的串行请求，不需要排队等待，也就不会再出现「队头阻塞」问题，降低了延迟，大幅度提高了连接的利用率。")]),t._v(" "),r("h3",{attrs:{id:"服务器推送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),r("p",[t._v("HTTP/2 还在一定程度上改善了传统的「请求 - 应答」工作模式，服务不再是被动地响应，也可以主动向客户端发送消息。")]),t._v(" "),r("h2",{attrs:{id:"http-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[t._v("#")]),t._v(" HTTP/3")]),t._v(" "),r("p",[t._v("我直接阿巴阿巴 "),r("a",{attrs:{href:"https://xiaolincoding.com/network/2_http/http3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.7 HTTP/3 强势来袭 | 小林coding (xiaolincoding.com)"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports},504:function(t,a,e){t.exports=e.p+"assets/img/17-管道网络传输.b6c3844f.png"},505:function(t,a,e){t.exports=e.p+"assets/img/25-HTTP2.2ef9c4ca.png"}}]);