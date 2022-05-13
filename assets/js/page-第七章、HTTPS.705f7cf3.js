(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1035:function(t,s,a){"use strict";a.r(s);var v=a(1),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),v("ul",[v("li",[t._v("《图解HTTP》")])])]),t._v(" "),v("h2",{attrs:{id:"一、http-的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、http-的缺点"}},[t._v("#")]),t._v(" 一、HTTP 的缺点")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("HTTP 的不足")]),t._v(" "),v("ul",[v("li",[t._v("通信使用明文（不加密），内容可能被窃听")]),t._v(" "),v("li",[t._v("不验证通信方的身份，因此有可能遭遇伪装")]),t._v(" "),v("li",[t._v("无法证明报文的完整性，所以有可能遭篡改")])])]),t._v(" "),v("h3",{attrs:{id:"_1-1-通信使用明文可能会被窃听"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-通信使用明文可能会被窃听"}},[t._v("#")]),t._v(" 1.1 通信使用明文可能会被窃听")]),t._v(" "),v("h4",{attrs:{id:"http-本身不具备加密的功能。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-本身不具备加密的功能。"}},[t._v("#")]),t._v(" "),v("strong",[t._v("HTTP 本身不具备加密的功能。")])]),t._v(" "),v("p",[t._v("即使已经加密处理过的通信，也会被窥视到通信内容，这点和未加密的通信是相同的。只是说如果通信经过加密，就有可能让人无法破解报文信息的含义，但加密处理后的报文信息本事还是会被看到的。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(636),alt:"image-20220317233150677",loading:"lazy"}})]),t._v(" "),v("p",[t._v("窃听相同段上的通信并非难事，只需要收集在互联网上流动的数据包（帧）就行了。")]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"通信的加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通信的加密"}},[t._v("#")]),t._v(" "),v("strong",[t._v("通信的加密")])]),t._v(" "),v("p",[t._v("HTTP 协议中没有加密机制，但可以通过和 "),v("mark",[t._v("SSL(Secure Socket Layer，安全套接层)")]),t._v(" 或 "),v("mark",[t._v("TLS(Transport Layer Security，安全层传输协议)")]),t._v(" 的组合使用，加密HTTP的通信内容。")]),t._v(" "),v("p",[t._v("用 SSL 简历安全通信线路之后，就可以在这条线路上进行 HTTP 通信了。与 SSL 组合使用的 HTTP 被称为 HTTPS（HTTP Secure，超文本传输安全协议）或 HTTP over SSL")]),t._v(" "),v("p",[v("img",{attrs:{src:a(637),alt:"image-20220317233828262",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"内容的加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容的加密"}},[t._v("#")]),t._v(" "),v("strong",[t._v("内容的加密")])]),t._v(" "),v("p",[t._v("内容加密即对 HTTP 报文里所含的内容进行加密处理再发送请求。但是这么做的前提是要求客户端和服务器同时具备加密和解密机制。")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("该方式不同于 SSL 或 TLS 将整个通信线路加密处理，所以内容仍然有被篡改的风险。")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(638),alt:"image-20220317234242566",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_1-2-不验证通信方的身份就可能遭遇伪装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-不验证通信方的身份就可能遭遇伪装"}},[t._v("#")]),t._v(" 1.2 不验证通信方的身份就可能遭遇伪装")]),t._v(" "),v("p",[v("strong",[t._v("HTTP协议中的请求和响应不会对通信方进行确认。")]),t._v(' 也就是说存在 "服务器是否就是发送请求中URI真正指定的主机、返回的响应是否真的返回到实际提出请求的客户端" 等类似问题')]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"任何人都可以发起请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#任何人都可以发起请求"}},[t._v("#")]),t._v(" "),v("strong",[t._v("任何人都可以发起请求")])]),t._v(" "),v("p",[t._v("由于不存在确认通信方的处理步骤，任何人都可以发起请求。并且服务器只要接收到请求，不管对方是谁都会返回一个响应。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(639),alt:"image-20220317234949537",loading:"lazy"}})]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("隐患")]),t._v(" "),v("ul",[v("li",[t._v("无法确定请求发送至目标的 Web 服务器是否按真实意图返回响应的那台服务器. 有可能是伪装的服务器")]),t._v(" "),v("li",[t._v("无法确定响应返回到的客户端是否是按真实意图接收响应的那个客户端. 有可能是伪装的客户端")]),t._v(" "),v("li",[t._v("无法确定正在通信的对方是否具备访问权限. 因为某些 Web 服务器上保存着重要的信息, 只想发给特定用户通信的权限")]),t._v(" "),v("li",[t._v("无法判定请求是来自何方、出自谁手")]),t._v(" "),v("li",[t._v("即使是无意义的请求也会照单全收。无法组织海量请求下的 DoS 攻击（Deinal of Service，拒绝服务攻击）")])])]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"查明对手的证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查明对手的证书"}},[t._v("#")]),t._v(" "),v("strong",[t._v("查明对手的证书")])]),t._v(" "),v("p",[t._v("SSL 不仅提供加密处理，而且还使用了一种被称为证书的手段，可用于确定方。")]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("证书")]),t._v(" "),v("p",[t._v("是值得信任的第三方机构颁发，用以证明服务器和客户端是实际存在的。伪造证书从技术角度来说异常困难，所以只要能够确认通信放持有的证书即可判断通信方的真实意图")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(640),alt:"image-20220317235751663",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_1-3-无法证明报文完整性-可能已遭篡改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-无法证明报文完整性-可能已遭篡改"}},[t._v("#")]),t._v(" 1.3 无法证明报文完整性，可能已遭篡改")]),t._v(" "),v("p",[t._v("由于 HTTP 协议无法证明通信的报文完整性，因此即使报文内容在传输过程中遭到篡改，也没办法获悉。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(641),alt:"image-20220317235950364",loading:"lazy"}})]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("中间人攻击")]),t._v(" "),v("p",[t._v("像这样在请求或响应的传输途中，遭攻击者拦截并篡改内容的攻击称为 中间人攻击（Man-in-the-Middle attack，MITM）")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(642),alt:"image-20220318000110804",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"如何防止篡改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防止篡改"}},[t._v("#")]),t._v(" "),v("strong",[t._v("如何防止篡改")])]),t._v(" "),v("p",[t._v("虽然有 MD5 和 SHA-1 等散列值校验的方法，以及用来确认文件的数字签名方法。但是这些依然不能百分百保证结果正确。")]),t._v(" "),v("p",[t._v("为了有效防止这些弊端，有必要使用 HTTPS")]),t._v(" "),v("h2",{attrs:{id:"二、http-加密-认证-完整性保护-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、http-加密-认证-完整性保护-https"}},[t._v("#")]),t._v(" 二、HTTP + 加密 + 认证 + 完整性保护 = HTTPS")]),t._v(" "),v("h3",{attrs:{id:"_2-1-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-https"}},[t._v("#")]),t._v(" 2.1 HTTPS")]),t._v(" "),v("p",[v("strong",[t._v("我们把添加了加密及认证机制的 HTTP 称为 HTTPS（HTTP Secure）")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(643),alt:"image-20220318000544456",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_2-2-身披-ssl-外壳的-http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-身披-ssl-外壳的-http"}},[t._v("#")]),t._v(" 2.2 身披 SSL 外壳的 HTTP")]),t._v(" "),v("p",[t._v("HTTPS 并非是应用层的一种新协议，只是 HTTP 通信接口部分用 SSL和TLS 协议代替而已。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(644),alt:"image-20220318000715322",loading:"lazy"}})]),t._v(" "),v("p",[t._v("SSL 独立于 HTTP，所以其他运行在应用层的 SMTP、Telnet 等协议都可以配合 SSL 协议使用。")]),t._v(" "),v("h3",{attrs:{id:"_2-3-公开密钥加密技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-公开密钥加密技术"}},[t._v("#")]),t._v(" 2.3 公开密钥加密技术")]),t._v(" "),v("p",[v("strong",[t._v("SSL 采用一种叫做 "),v("mark",[t._v("公开密钥加密")]),t._v(" 的加密处理方式")])]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("密钥")]),t._v(" "),v("p",[t._v("密钥是一种参数，它是在明文转换为密文或将密文转换为明文的算法中输入的参数")])]),t._v(" "),v("p",[t._v("近代的加密方法中加密算法是公开的，而密钥确实保密的。通过这种方式得以保持加密方法的安全性。")]),t._v(" "),v("p",[t._v("加密和解密都会用到密钥。没有密钥就无法对密码解密，任何人只要持有密钥就能解密。如果密钥被攻击者获得，那加密就是去了意义。")]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"共享密钥加密的困境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#共享密钥加密的困境"}},[t._v("#")]),t._v(" "),v("strong",[t._v("共享密钥加密的困境")])]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("共享密钥加密")]),t._v(" "),v("p",[t._v("加密和解密同用一个密钥的方法称为共享密钥加密，也被叫做 "),v("strong",[t._v("对称密钥加密")]),t._v("。")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(645),alt:"image-20220318001223029",loading:"lazy"}})]),t._v(" "),v("p",[t._v("以共享密钥方式加密时必须将密钥也发给对方。可要怎样才能安全的转交密钥？")]),t._v(" "),v("p",[v("img",{attrs:{src:a(646),alt:"image-20220318001320583",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"公开密钥加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#公开密钥加密"}},[t._v("#")]),t._v(" "),v("strong",[t._v("公开密钥加密")])]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("公开密钥")]),t._v(" "),v("p",[t._v("公开密钥加密使用一对非对称的密钥。一把叫做私有密钥、另一把叫做公开密钥。")])]),t._v(" "),v("p",[t._v("使用公开密钥的加密方式，发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，在使用自己的私有密钥进行解密。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(647),alt:"image-20220318001755201",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"https-采用混合加密机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-采用混合加密机制"}},[t._v("#")]),t._v(" "),v("strong",[t._v("HTTPS 采用混合加密机制")])]),t._v(" "),v("p",[v("strong",[t._v("HTTPS 采用共享密钥加密和公开密钥加密两者并用的混合加密机制。")])]),t._v(" "),v("p",[t._v("若密钥能够实现安全交换，那么有可能会考虑仅使用公开密钥加密来通信。但是公开密钥加密与共享密钥加密相比，处理速度要稍慢。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(648),alt:"image-20220318002059018",loading:"lazy"}})]),t._v(" "),v("h3",{attrs:{id:"_2-4-证明公开密钥正确性的证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-证明公开密钥正确性的证书"}},[t._v("#")]),t._v(" 2.4 证明公开密钥正确性的证书")]),t._v(" "),v("p",[t._v("公开密钥无法证明本身是货真价实的。可能存在公开密钥传输的过程中，真正的公开密钥以及被攻击者替换掉了。")]),t._v(" "),v("p",[t._v("为了解决上述问题，可以使用由数字证书认证机构和其他相关机关颁发的公开密钥证书。")]),t._v(" "),v("ol",[v("li",[t._v("服务器的运营人员向数字证书认证机构提出公开密钥的申请")]),t._v(" "),v("li",[t._v("数字证书认证机构在判明提出申请的身份之后，对已申请的公开密钥做数字签名。然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起")]),t._v(" "),v("li",[t._v("服务器将这份由数字证书认证机构颁发的公钥证书发送给客户端")]),t._v(" "),v("li",[t._v("客户端对证书上的数字签名进行验证")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("公开密钥必须安全转交")]),t._v(" "),v("p",[t._v("认证机关的公开密钥必须安全地转交给客户端，多数浏览器开发商发布版本时，会事先在内部植入常用认证机关的公开密钥。")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(649),alt:"image-20220318002951764",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"可证明组织真实性的ev-ssl证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可证明组织真实性的ev-ssl证书"}},[t._v("#")]),t._v(" "),v("strong",[t._v("可证明组织真实性的EV SSL证书")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("证书的作用")]),t._v(" "),v("ul",[v("li",[t._v("证明作为通信一方的服务是否规范")]),t._v(" "),v("li",[t._v("确认对方服务器背后运营的企业是否真实存在。")])])]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("用以确认客户端的客户端证书")])]),t._v(" "),v("p",[t._v("客户端证书进行客户端认证，证明服务器正在通信的对方始终是预料之内的客户端。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("证书的获取和发布")]),t._v(" "),v("blockquote",[v("p",[t._v("客户端需要付费购买。安全性极高的认证机构可颁发客户端证书但仅用于特殊用途的业务。")])])]),t._v(" "),v("li",[v("p",[t._v("客户端证书只能证明客户端实际存在，不能证明用户本人的真实有效性")]),t._v(" "),v("blockquote",[v("p",[t._v("只要获得了安装有客户端证书的计算机的使用权限，就意味着同时拥有了客户端证书的使用权限。")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-5-https-的安全通信机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-https-的安全通信机制"}},[t._v("#")]),t._v(" 2.5 HTTPS 的安全通信机制")]),t._v(" "),v("p",[v("img",{attrs:{src:a(650),alt:"image-20220318005646738",loading:"lazy"}})]),t._v(" "),v("p",[t._v("在以上流程中，应用层发送数据时会附加一种叫做 "),v("mark",[t._v("MAC")]),t._v(" 的报文摘要。"),v("strong",[t._v("能够查知报文是否遭到篡改，从而保护报文的完整性")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(651),alt:"image-20220318005815319",loading:"lazy"}})]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"ssl-和-tls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl-和-tls"}},[t._v("#")]),t._v(" "),v("strong",[t._v("SSL 和 TLS")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("HTTPS 的问题")]),t._v(" "),v("ol",[v("li",[t._v("使用 HTTPS 处理速度会变慢\n"),v("ol",[v("li",[t._v("通信慢")]),t._v(" "),v("li",[t._v("大量消耗 CPU及内存等资源，处理速度变慢")])])]),t._v(" "),v("li",[t._v("SSL 必须进行加密处理，消耗更多的硬件资源、导致负载增强")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(652),alt:"image-20220318005850132",loading:"lazy"}})])])])}),[],!1,null,null,null);s.default=_.exports},636:function(t,s,a){t.exports=a.p+"assets/img/image-20220317233150677.c59244fa.png"},637:function(t,s,a){t.exports=a.p+"assets/img/image-20220317233828262.b96703d5.png"},638:function(t,s,a){t.exports=a.p+"assets/img/image-20220317234242566.cc521597.png"},639:function(t,s,a){t.exports=a.p+"assets/img/image-20220317234949537.032293f4.png"},640:function(t,s,a){t.exports=a.p+"assets/img/image-20220317235751663.bbe4c852.png"},641:function(t,s,a){t.exports=a.p+"assets/img/image-20220317235950364.a5f24916.png"},642:function(t,s,a){t.exports=a.p+"assets/img/image-20220318000110804.8e9f684c.png"},643:function(t,s,a){t.exports=a.p+"assets/img/image-20220318000544456.f019b67e.png"},644:function(t,s,a){t.exports=a.p+"assets/img/image-20220318000715322.f2604c14.png"},645:function(t,s,a){t.exports=a.p+"assets/img/image-20220318001223029.bb0ce4dc.png"},646:function(t,s,a){t.exports=a.p+"assets/img/image-20220318001320583.3116e4eb.png"},647:function(t,s,a){t.exports=a.p+"assets/img/image-20220318001755201.b26c7d06.png"},648:function(t,s,a){t.exports=a.p+"assets/img/image-20220318002059018.8c2bcfeb.png"},649:function(t,s,a){t.exports=a.p+"assets/img/image-20220318002951764.a32972ef.png"},650:function(t,s,a){t.exports=a.p+"assets/img/image-20220318005646738.a9425774.png"},651:function(t,s,a){t.exports=a.p+"assets/img/image-20220318005815319.c5b85014.png"},652:function(t,s,a){t.exports=a.p+"assets/img/image-20220318005850132.ceb1e587.png"}}]);