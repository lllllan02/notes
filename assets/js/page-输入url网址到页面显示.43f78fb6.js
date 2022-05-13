(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1025:function(t,a,_){"use strict";_.r(a);var r=_(1),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端经典面试题: 从输入URL到页面加载发生了什么？ - SegmentFault 思否"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000017184701",target:"_blank",rel:"noopener noreferrer"}},[t._v("从URL输入到页面展现到底发生什么？ - SegmentFault 思否"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qinian8/article/details/99081105",target:"_blank",rel:"noopener noreferrer"}},[t._v("从输入URL到页面展示的详细过程（从输入url到页面展示到底发生了什么）"),r("OutboundLink")],1)])])]),t._v(" "),r("h2",{attrs:{id:"从输入-url-到页面显示发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面显示发生了什么"}},[t._v("#")]),t._v(" 从输入 url 到页面显示发生了什么")]),t._v(" "),r("p",[t._v("总体来说分为以下几个过程:")]),t._v(" "),r("ol",[r("li",[t._v("DNS解析")]),t._v(" "),r("li",[t._v("TCP连接")]),t._v(" "),r("li",[t._v("发送HTTP请求")]),t._v(" "),r("li",[t._v("服务器处理请求并返回HTTP报文")]),t._v(" "),r("li",[t._v("浏览器解析渲染页面")]),t._v(" "),r("li",[t._v("断开连接")])]),t._v(" "),r("h2",{attrs:{id:"一、应用层进行dns-解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、应用层进行dns-解析"}},[t._v("#")]),t._v(" 一、应用层进行DNS 解析")]),t._v(" "),r("p",[r("strong",[t._v("DNS解析的过程就是寻找哪台机器上有你需要资源的过程。")])]),t._v(" "),r("h3",{attrs:{id:"_1-1-dns-解析过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-dns-解析过程"}},[t._v("#")]),t._v(" 1.1 DNS 解析过程")]),t._v(" "),r("p",[r("strong",[t._v("DNS解析是一个递归查询的过程。")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(541),alt:"preview",loading:"lazy"}})]),t._v(" "),r("p",[t._v("浏览器通过向DNS服务器发送域名，DNS服务器查询到与域名相对应的IP地址，然后返回给浏览器，浏览器再将IP地址和请求参数搭载在协议上，一并发送给对应的服务器。")]),t._v(" "),r("h3",{attrs:{id:"_1-2-dns-缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-dns-缓存"}},[t._v("#")]),t._v(" 1.2 DNS 缓存")]),t._v(" "),r("p",[t._v("DNS 服务器有一个缓存功能，可以记住之前查询过的域名")]),t._v(" "),r("ul",[r("li",[t._v("如果要查询的域名和相关信息已经在缓存中，那么就可以直接返回响应。")]),t._v(" "),r("li",[t._v("当查询的域名不存在时，【不存在】这一响应结果也会被缓存")]),t._v(" "),r("li",[t._v("缓存信息设置有一个有效期，当信息超过有效期后，数据会从缓存中删除")]),t._v(" "),r("li",[t._v("DNS服务器返回响应时，会告知这一响应结果是来自缓存还是来自负责管理该域名的DNS服务器")])]),t._v(" "),r("h3",{attrs:{id:"_1-3-dns-负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-dns-负载均衡"}},[t._v("#")]),t._v(" 1.3 DNS 负载均衡")]),t._v(" "),r("p",[t._v("真实的互联网世界背后存在成千上百台服务器，大型的网站甚至更多。但是在用户的眼中，它需要的只是处理他的请求，哪台机器处理请求并不重要。DNS可以返回一个合适的机器的IP给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是DNS负载均衡，又叫做DNS重定向。大家耳熟能详的CDN(Content Delivery Network)就是利用DNS的重定向技术，DNS服务器会返回一个跟用户最接近的点的IP地址给用户，CDN节点的服务器负责响应用户的请求，提供所需的内容。")]),t._v(" "),r("h2",{attrs:{id:"二、传输层建立tcp连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、传输层建立tcp连接"}},[t._v("#")]),t._v(" 二、传输层建立TCP连接")]),t._v(" "),r("p",[t._v("简单地看，可以把TCP连接理解成三次握手：")]),t._v(" "),r("ol",[r("li",[t._v("客户端向服务器端发送一个建立连接的请求 "),r("code",[t._v("SYN = 1, seq = x")])]),t._v(" "),r("li",[t._v("服务器端同意客户端的请求，并且同样发送一个建立连接的请求 "),r("code",[t._v("ACK = 1, ack = x + 1, SYN = 1, seq = y")])]),t._v(" "),r("li",[t._v("客户端同意服务器端的请求 "),r("code",[t._v("ACK = 1, ack = y + 1")])])]),t._v(" "),r("p",[r("img",{attrs:{src:_(542),alt:"img",loading:"lazy"}})]),t._v(" "),r("blockquote",[r("p",[t._v("为什么握手要三次？握手期间可能发生的异常？-> "),r("a",{attrs:{href:"http://blog.lllllan.cn/cs-basic/network/interview-questions/#%E4%BA%8C%E3%80%81tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络-常见面试题 | lllllan"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"三、发送-http-请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、发送-http-请求"}},[t._v("#")]),t._v(" 三、发送 HTTP 请求")]),t._v(" "),r("h3",{attrs:{id:"_3-1-应用层生成http请求报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-应用层生成http请求报文"}},[t._v("#")]),t._v(" 3.1 应用层生成HTTP请求报文")]),t._v(" "),r("p",[t._v("主要提供两个终端设备上的应用程序之间信息交换的服务，它定义了信息交换的格式，消息会交给下一层传输层来传输。应用层针对目标 Web 服务器生成 HTTP 请求报文，向服务器申请需要的资源。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-传输层对报文进行封装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-传输层对报文进行封装"}},[t._v("#")]),t._v(" 3.2 传输层对报文进行封装")]),t._v(" "),r("p",[t._v("负责向两台终端设备进程之间的通信提供通用的数据传输服务。TCP 模块在报文前面加上 TCP 头部，指定目标服务器的 IP 地址委托给 IP 模块发送")]),t._v(" "),r("h3",{attrs:{id:"_3-3-网络层使用ip协议来选择路线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-网络层使用ip协议来选择路线"}},[t._v("#")]),t._v(" 3.3 网络层使用IP协议来选择路线")]),t._v(" "),r("p",[t._v("IP 模块接收到 TCP 模块委托过来的包，在其前面加上 IP 头部和 MAC 头部，其中 IP 头部中包含发送方和接收方的 IP 地址。")]),t._v(" "),r("p",[t._v("然后交给硬件发送出去，在数据传输的过程中，IP 协议负责选择传送的路线，称为路由功能")]),t._v(" "),r("h3",{attrs:{id:"_3-4-数据链路层实现网络相邻节点可靠的数据通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-数据链路层实现网络相邻节点可靠的数据通信"}},[t._v("#")]),t._v(" 3.4 数据链路层实现网络相邻节点可靠的数据通信")]),t._v(" "),r("p",[t._v("为了保证数据的可靠传输，把数据包封装成帧，并按顺序传输各帧。")]),t._v(" "),r("p",[t._v("由于物理线路的不可靠，发出的数据帧有可能在线路上出错或丢失，于是每个数据分块计算出CRC（循环冗余校验），并把 CRC 添加到帧中，这样接收方就可以通过重新计算CRC并比对来判断数据的正确性。")]),t._v(" "),r("h3",{attrs:{id:"_3-5-物理层传输数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-物理层传输数据"}},[t._v("#")]),t._v(" 3.5 物理层传输数据")]),t._v(" "),r("p",[t._v("数据链路层的帧转换成二进制形式的比特流，从网卡发送出局，再把比特流转换成电子、光学信号在网络中传输。")]),t._v(" "),r("h2",{attrs:{id:"四、服务器处理并返回-http-报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、服务器处理并返回-http-报文"}},[t._v("#")]),t._v(" 四、服务器处理并返回 HTTP 报文")]),t._v(" "),r("p",[t._v("服务器接收到数据之后，")]),t._v(" "),r("p",[t._v("光电信号 → 比特流 → 帧 → 网络包 → 解除MAC头部 → 解除IP头部 → 接触TCP头部 → 获得请求报文的数据。")]),t._v(" "),r("p",[t._v("服务器内部对请求做出处理，生成响应报文，以相同的方式发送给客户端。")]),t._v(" "),r("h2",{attrs:{id:"五、浏览器解析渲染页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、浏览器解析渲染页面"}},[t._v("#")]),t._v(" 五、浏览器解析渲染页面")]),t._v(" "),r("p",[t._v("（前端内容，不管了）")]),t._v(" "),r("h2",{attrs:{id:"六、传输层断开tcp连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、传输层断开tcp连接"}},[t._v("#")]),t._v(" 六、传输层断开TCP连接")]),t._v(" "),r("ul",[r("li",[t._v("客户端-发送一个 FIN，用来关闭客户端到服务器的数据传送")]),t._v(" "),r("li",[t._v("服务器-收到这个 FIN，它发回一 个 ACK，确认序号为收到的序号加 1 。和 SYN 一样，一个 FIN 将占用一个序号")]),t._v(" "),r("li",[t._v("服务器-关闭与客户端的连接，发送一个 FIN 给客户端")]),t._v(" "),r("li",[t._v("客户端-发回 ACK 报文确认，并将确认序号设置为收到序号加 1")])]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"http://blog.lllllan.cn/cs-basic/network/interview-questions/#%E4%B8%89%E3%80%81tcp%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络-常见面试题 | lllllan"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports},541:function(t,a,_){t.exports=_.p+"assets/img/view.cbe7da8c.png"},542:function(t,a,_){t.exports=_.p+"assets/img/0c9f470819684156cfdc27c682db4def.cf54da4f.cf54da4f.png"}}]);