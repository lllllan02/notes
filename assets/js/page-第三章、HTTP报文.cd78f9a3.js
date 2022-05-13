(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1028:function(t,a,s){"use strict";s.r(a);var r=s(1),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),r("ul",[r("li",[t._v("《图解HTTP》")])])]),t._v(" "),r("h2",{attrs:{id:"一、http-报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、http-报文"}},[t._v("#")]),t._v(" 一、HTTP 报文")]),t._v(" "),r("p",[t._v("用于HTTP协议交互的信息称为HTTP报文，大致可以分为"),r("strong",[t._v("报文首部和报文主体")]),t._v("两部分。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(552),alt:"image-20220301083127607",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"二、报文结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、报文结构"}},[t._v("#")]),t._v(" 二、报文结构")]),t._v(" "),r("p",[r("img",{attrs:{src:s(553),alt:"image-20220301083301985",loading:"lazy"}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("请求行")]),t._v("：包含用于请求的方法，请求URI和HTTP版本")]),t._v(" "),r("li",[r("strong",[t._v("状态行")]),t._v("：包含表明响应结果的状态码，原因短语和HTTP版本")]),t._v(" "),r("li",[r("strong",[t._v("首部字段")]),t._v("：包含表示请求和响应的各种条件和属性的各类首部（通用、请求、响应、实体）")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(554),alt:"image-20220301083322587",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"三、编码提升传输速率"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、编码提升传输速率"}},[t._v("#")]),t._v(" 三、编码提升传输速率")]),t._v(" "),r("h3",{attrs:{id:"_3-1-报文主体和实体主体的差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-报文主体和实体主体的差异"}},[t._v("#")]),t._v(" 3.1 报文主体和实体主体的差异")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("报文")]),t._v("：HTTP通信中的基本单位，由8位组字节流组成，通过HTTP通信传输")]),t._v(" "),r("li",[r("strong",[t._v("实体")]),t._v("：作为请求或响应的有效载荷数据被传输，其内容由实体首部和实体主体组成")])]),t._v(" "),r("p",[t._v("HTTP报文的主体用于传输请求或响应的实体主体。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-压缩传输的内容编码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-压缩传输的内容编码"}},[t._v("#")]),t._v(" 3.2 压缩传输的内容编码")]),t._v(" "),r("p",[r("mark",[t._v("内容编码")]),t._v(" 指明应用在实体内容上的编码格式，并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码")]),t._v(" "),r("p",[r("img",{attrs:{src:s(555),alt:"image-20220301084356564",loading:"lazy"}})]),t._v(" "),r("p",[t._v("常用的内容编码：")]),t._v(" "),r("ul",[r("li",[t._v("gzip（GNU zip）")]),t._v(" "),r("li",[t._v("compress（NUIX 系统的压缩标准）")]),t._v(" "),r("li",[t._v("deflate（zlib）")]),t._v(" "),r("li",[t._v("identity（不进行编码）")])]),t._v(" "),r("h3",{attrs:{id:"_3-3-分割发送的分块传输编码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-分割发送的分块传输编码"}},[t._v("#")]),t._v(" 3.3 分割发送的分块传输编码")]),t._v(" "),r("p",[t._v("在传输大容量数据时，通过把数据分割成多块，能够让页面逐步显示页面。这种把实体主体分块的功能称为 "),r("mark",[t._v("分块传输编码")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(556),alt:"image-20220301084748093",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"四、发送多种数据的多部分对象集合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、发送多种数据的多部分对象集合"}},[t._v("#")]),t._v(" 四、发送多种数据的多部分对象集合")]),t._v(" "),r("p",[r("mark",[t._v("多部分对象集合")]),t._v(" 用来容纳多份不同类型的数据。")]),t._v(" "),r("h2",{attrs:{id:"五、获取部分内容的范围请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、获取部分内容的范围请求"}},[t._v("#")]),t._v(" 五、获取部分内容的范围请求")]),t._v(" "),r("p",[t._v("在下载资源的过程中如果遇到网络中断的情况，那就必须重新开始。为了解决这种问题，需要一种恢复的机制（从之前下载中断处恢复下载）。")]),t._v(" "),r("p",[t._v("要实现该功能需要指定下载的实体范围，即 "),r("mark",[t._v("范围请求")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(557),alt:"image-20220301090212047",loading:"lazy"}})]),t._v(" "),r("p",[t._v("针对范围请求，响应会范围状态码为 "),r("code",[t._v("206 Partial Content")]),t._v(" 的响应报文。如果服务器无法响应范围请求，则会返回状态码 "),r("code",[t._v("200 OK")]),t._v(" 和完整的内容实体。")]),t._v(" "),r("h2",{attrs:{id:"六、内容协商后返回最合适的内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、内容协商后返回最合适的内容"}},[t._v("#")]),t._v(" 六、内容协商后返回最合适的内容")]),t._v(" "),r("p",[r("mark",[t._v("内容协商")]),t._v("：当浏览器的默认语言是中文或者英文时，访问相同URI的Web页面会显示对应的语言。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(558),alt:"image-20220301090657994",loading:"lazy"}})]),t._v(" "),r("p",[t._v("内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供客户端最为合适的内容。内容协商会以"),r("strong",[t._v("响应资源的语言、字符集、编码方式")]),t._v("等作为判断的基准。")]),t._v(" "),r("h3",{attrs:{id:"_6-1-服务器驱动协商-server-driven-negotitaion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-服务器驱动协商-server-driven-negotitaion"}},[t._v("#")]),t._v(" 6.1 服务器驱动协商 Server-driven Negotitaion")]),t._v(" "),r("p",[t._v("由服务器进行内容协商。以请求的首部字段为参考，在服务器端自动处理。")]),t._v(" "),r("h3",{attrs:{id:"_6-2-客户端驱动协商-agent-driven-negotiation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-客户端驱动协商-agent-driven-negotiation"}},[t._v("#")]),t._v(" 6.2 客户端驱动协商 Agent-driven Negotiation")]),t._v(" "),r("p",[t._v("由客户端进行内容协商的方式。用户从浏览器显示的可选项列表中手动选择。")]),t._v(" "),r("h3",{attrs:{id:"_6-3-透明协商-transparent-negotiation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-透明协商-transparent-negotiation"}},[t._v("#")]),t._v(" 6.3 透明协商 Transparent Negotiation")]),t._v(" "),r("p",[t._v("是服务器驱动和客户端驱动的结合体，由服务器和客户端各自进行内容协商的一种方法。")])])}),[],!1,null,null,null);a.default=_.exports},552:function(t,a,s){t.exports=s.p+"assets/img/image-20220301083127607.899d802d.png"},553:function(t,a,s){t.exports=s.p+"assets/img/image-20220301083301985.b5ac9202.png"},554:function(t,a,s){t.exports=s.p+"assets/img/image-20220301083322587.d0bfdb24.png"},555:function(t,a,s){t.exports=s.p+"assets/img/image-20220301084356564.798a8a74.png"},556:function(t,a,s){t.exports=s.p+"assets/img/image-20220301084748093.c453a701.png"},557:function(t,a,s){t.exports=s.p+"assets/img/image-20220301090212047.7aef95c8.png"},558:function(t,a,s){t.exports=s.p+"assets/img/image-20220301090657994.8f7de383.png"}}]);