(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1098:function(t,v,s){"use strict";s.r(v);var _=s(1),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("转载声明")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://lotabout.me/2019/QQA-What-is-Sequential-Consistency/",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是顺序一致性(Sequential Consistency) | 三点水 (lotabout.me)"),_("OutboundLink")],1)])])]),t._v(" "),_("h2",{attrs:{id:"什么是顺序一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是顺序一致性"}},[t._v("#")]),t._v(" 什么是顺序一致性")]),t._v(" "),_("p",[t._v("顺序一致性内存模型是一个"),_("strong",[t._v("理想化的理论参考模型")]),t._v("，它为程序员提供了极强的内存可见性保证。")]),t._v(" "),_("div",{staticClass:"custom-block info"},[_("p",{staticClass:"custom-block-title"},[t._v("顺序一致性模型 两大特性")]),t._v(" "),_("ul",[_("li",[_("mark",[t._v("一个线程中")]),t._v(" 的所有操作必须按照程序的顺序（即Java代码的顺序）来执行。")]),t._v(" "),_("li",[t._v("不管程序是否同步，所有线程都只能看到一个单一的操作执行顺序。即在顺序一致性模型中，每个操作必须是"),_("strong",[t._v("原子性的，且立刻对所有线程可见")]),t._v("。")])])]),t._v(" "),_("p",[t._v("如果可以找到一个所有 CPU 执行指令的排序，该排序中 "),_("strong",[t._v("每个 CPU 要执行指令的顺序得以保持")]),t._v(" [1]，且 "),_("strong",[t._v("实际的 CPU 执行结果")]),t._v(" [2] "),_("strong",[t._v("与该指令排序的执行结果一致")]),t._v(" [3]，则称该次执行达到了顺序一致性。栗如：")]),t._v(" "),_("p",[_("img",{attrs:{src:s(892),alt:"img",loading:"lazy"}})]),t._v(" "),_("blockquote",[_("p",[t._v("图中 "),_("code",[t._v("W(X, 1)")]),t._v(" 代表将 1 写入变量 X；"),_("code",[t._v("R(X, 1)")]),t._v(" 代表读取变量 X，值为 1")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("[1] 每个CPU要执行指令的顺序保持不变：")])]),t._v(" "),_("p",[t._v("每个CPU执行一个线程任务。单个线程任务中，指令的顺序不得改变；多个线程之间，指令顺序无相关性。")]),t._v(" "),_("p",[t._v("图中上面四条线指每个CPU执行指令的顺序，最下方一条指令序列是某一种符合顺序一致性的排序。观察可知该排序中没有破坏每条线程中的指令顺序。")]),t._v(" "),_("blockquote",[_("p",[t._v("即C线程中 "),_("code",[t._v("R(X, 1)")]),t._v(" 指令保持出现在 "),_("code",[t._v("R(X, 2)")]),t._v(" 之前")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("[2]实际的CPU执行结果：")])]),t._v(" "),_("ul",[_("li",[t._v("A线程：写操作，令 X = 1；")]),t._v(" "),_("li",[t._v("B线程：写操作，令 X = 2；")]),t._v(" "),_("li",[t._v("C线程：读操作，得到 X = 1；读操作，得到 X = 2")]),t._v(" "),_("li",[t._v("D线程：读操作，得到 X = 1；读操作，得到 X = 2")])]),t._v(" "),_("blockquote",[_("p",[t._v("图中不要纠结个线程之间指令的先后，只管线程内部的顺序即可。")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("[3]与该指令排序的执行结果一致")])]),t._v(" "),_("p",[t._v("最下方的指令序列获得的结果：")]),t._v(" "),_("p",[t._v("A线程写操作，令 X = 1；C线程读操作，得到 X = 1；D线程读操作，得到 X = 1；")]),t._v(" "),_("p",[t._v("B线程写操作，令 X = 2；C线程读操作，得到 X = 2；D线程读操作，得到 X = 2；")]),t._v(" "),_("p",[t._v("与上面实际的CPU执行结果一致")]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("因此我们认为这条指令序列，达到了顺序一致性")])]),t._v(" "),_("h2",{attrs:{id:"更多正反栗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更多正反栗"}},[t._v("#")]),t._v(" 更多正反栗")]),t._v(" "),_("h3",{attrs:{id:"正栗2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正栗2"}},[t._v("#")]),t._v(" 正栗2")]),t._v(" "),_("p",[_("img",{attrs:{src:s(893),alt:"img",loading:"lazy"}})]),t._v(" "),_("p",[t._v("上方四条是实际的CPU执行，最下方是能够找到的符合顺序一致性的指令序列。")]),t._v(" "),_("h3",{attrs:{id:"反栗1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反栗1"}},[t._v("#")]),t._v(" 反栗1")]),t._v(" "),_("p",[_("img",{attrs:{src:s(894),alt:"img",loading:"lazy"}})]),t._v(" "),_("p",[t._v("C线程的指令：两次读操作，先得到X = 1，后续再得到 X = 2")]),t._v(" "),_("p",[t._v("D线程的指令：两次读操作，先得到X = 2，后续再得到 X = 1")]),t._v(" "),_("p",[t._v("但这里对 X 一共只有两次写操作，根据 "),_("mark",[t._v("不破坏线程中的指令顺序的原则")]),t._v(" ，这个栗子中找不到一个指令序列能够满足顺序一致性。")]),t._v(" "),_("h3",{attrs:{id:"反栗2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反栗2"}},[t._v("#")]),t._v(" 反栗2")]),t._v(" "),_("p",[_("img",{attrs:{src:s(895),alt:"img",loading:"lazy"}})]),t._v(" "),_("p",[t._v("A线程的指令：两次写操作，先令 X = 2，后续再令 X = 1")]),t._v(" "),_("p",[t._v("C线程的指令：两次读操作，先得到 X = 1，后续再得到 X = 2")]),t._v(" "),_("p",[t._v("此处没有别的写操作，显然C线程不应该得到这样的结果，我们任务这里依然找不到一个指令序列能够满足顺序一致性")])])}),[],!1,null,null,null);v.default=a.exports},892:function(t,v,s){t.exports=s.p+"assets/img/Sequential-Consistency.5161d219.svg"},893:function(t,v,s){t.exports=s.p+"assets/img/Sequential-Consistency-swap-1.5a23b643.svg"},894:function(t,v,s){t.exports=s.p+"assets/img/Sequential-Consistency-swap-2.88c982fb.svg"},895:function(t,v,s){t.exports=s.p+"assets/img/Sequential-Consistency-swap-3.a5e4e9c4.svg"}}]);