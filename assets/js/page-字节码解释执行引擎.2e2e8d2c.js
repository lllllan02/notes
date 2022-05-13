(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1127:function(a,s,t){"use strict";t.r(s);var n=t(1),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[a._v("转载声明")]),a._v(" "),n("ul",[n("li",[a._v("《深入理解Java虚拟机》")])])]),a._v(" "),n("h2",{attrs:{id:"一、解释执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、解释执行"}},[a._v("#")]),a._v(" 一、解释执行")]),a._v(" "),n("blockquote",[n("p",[a._v("Java语言经常被人们定位为【解释执行】的语言，在Java初生的JDK 1.0时代，这种定义还算是比较准确的，但当主流的虚拟机中都包含了【即时编译器】后，Class文件中的代码到底会被解释执行还是编译执行，就成了只有虚拟机自己才能准确判断的事。")])]),a._v(" "),n("p",[a._v("大部分的程序代码转换成物理机的目标代码或虚拟机能执行的指令集 之前，都需要经过图8-4中的各个步骤")]),a._v(" "),n("p",[n("img",{attrs:{src:t(942),alt:"image-20220326151852398",loading:"lazy"}})]),a._v(" "),n("p",[a._v("在Java语言中，Javac 编译器完成了程序代码经过词法分析、语法分析到抽象语法树，再遍历语法树生成线性的字节码指令流的过程。因为这一部分动作是在Java虚拟机之外进行的，而解释器在虚拟机的内部，所以Java程序的编译就是半独立的实现。")]),a._v(" "),n("h2",{attrs:{id:"二、基于栈的指令集和基于寄存器的指令集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、基于栈的指令集和基于寄存器的指令集"}},[a._v("#")]),a._v(" 二、基于栈的指令集和基于寄存器的指令集")]),a._v(" "),n("p",[a._v("Javac编译器输出的字节码指令流，基本上是一种【基于栈的指令集架构】（Instruction Set Architecture，ISA），字节码指令流里面的指令大部分都是零地址指令，它们依赖操作数栈进行工作。")]),a._v(" "),n("p",[a._v("与之相对的另外一套常用的指令集架构是【基于寄存器的指令集】，最典型的就是x86的二地址指令集，如果说得更通俗一些就是现在我们主流PC机中物理硬件直接支持的指令集架构，这些指令依赖寄 存器进行工作")]),a._v(" "),n("p",[a._v("举个最简单的例子，分别使用这两种指令集去计算【1+1】的结果：")]),a._v(" "),n("CodeGroup",[n("CodeGroupItem",{attrs:{title:"基于栈的指令集"}},[n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("iconst_1\niconst_1\niadd\nistore_0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("两条 "),n("code",[a._v("iconst_1")]),a._v(" 指令连续把两个常量1压入栈后，iadd指令把栈顶的两个值出栈、相加，然后把结果放回栈顶，最后 "),n("code",[a._v("istore_0")]),a._v(" 把栈顶的值放到局部变量表的第0个变量槽中。这种指令流中的指令通常都是不带参数的，使用操作数栈中的数据作为指令的运算输入，指令的运算结果也存储在操作数栈之中。")])]),a._v(" "),n("CodeGroupItem",{attrs:{title:"基于寄存器的指令集"}},[n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("mov eax, "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" eax, "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("mov指令把EAX寄存器的值设为1，然后add指令再把这个值加1，结果就保存在EAX寄存器里面。 这种二地址指令是x86指令集中的主流，每个指令都包含两个单独的输入参数，依赖于寄存器来访问和存储数据。")])])],1),a._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[a._v("两种指令集各自的优缺")]),a._v(" "),n("p",[n("strong",[a._v("基于栈的指令集：")])]),a._v(" "),n("ul",[n("li",[a._v("可以自由地把访问最频繁的数据放到寄存去中获取尽量好的性能")]),a._v(" "),n("li",[a._v("代码相对更加紧凑、编译器实现更加简单")]),a._v(" "),n("li",[a._v("由于指令数量和内存访问的原因，执行速度略慢")])]),a._v(" "),n("hr"),a._v(" "),n("p",[n("strong",[a._v("基于寄存器的指令集：")])]),a._v(" "),n("ul",[n("li",[a._v("不可能避免地要受到硬件的约束")]),a._v(" "),n("li",[a._v("直接依赖寄存及，理论上执行速度更快")])])]),a._v(" "),n("h2",{attrs:{id:"三、基于栈的解释器执行过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、基于栈的解释器执行过程"}},[a._v("#")]),a._v(" 三、基于栈的解释器执行过程")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("calc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("div",{staticClass:"language-javac line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("public int calc();\n\tCode:\n\t\tStack=2, Locals=4, Args_size=1\n        0: bipush 100\n\t\t2: istore_1\n\t\t3: sipush 200\n\t\t6: istore_2\n\t\t7: sipush 300\n\t\t10: istore_3\n\t\t11: iload_1\n\t\t12: iload_2\n\t\t13: iadd\n\t\t14: iload_3\n\t\t15: imul\n\t\t16: ireturn\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("h3",{attrs:{id:"_0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0"}},[a._v("#")]),a._v(" 0")]),a._v(" "),n("p",[a._v("首先，执行偏移地址为0的指令，Bipush指令的作用是将单字节的整型常量值（-128～127）推入操作数栈顶，跟随有一个参数，指明推送的常量值，这里是100")]),a._v(" "),n("p",[n("img",{attrs:{src:t(943),alt:"image-20220326155149877",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[a._v("#")]),a._v(" 1")]),a._v(" "),n("p",[a._v("执行偏移地址为2的指令，"),n("code",[a._v("istore_1")]),a._v(" 指令的作用是将操作数栈顶的整型值出栈并存放到第1个局部变量槽中。后续4条指令（直到偏移为11的指令为止）都是做一样的事情，也就是在对应代码中把变量 a、b、c赋值为100、200、300。这4条指令的图示略过。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(944),alt:"image-20220326155221300",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2"}},[a._v("#")]),a._v(" 2")]),a._v(" "),n("p",[a._v("执行偏移地址为11的指令，iload_1指令的作用是将局部变量表第1个变量槽中的整型值复制到操作数栈顶。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(945),alt:"image-20220326155315623",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3"}},[a._v("#")]),a._v(" 3")]),a._v(" "),n("p",[a._v("执行偏移地址为12的指令，iload_2指令的执行过程与iload_1类似，把第2个变量槽的整型值入栈。 画出这个指令的图示主要是为了显示下一条iadd指令执行前的堆栈状况。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(946),alt:"image-20220326155344243",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4"}},[a._v("#")]),a._v(" 4")]),a._v(" "),n("p",[a._v("执行偏移地址为13的指令，"),n("code",[a._v("iadd")]),a._v(" 指令的作用是将操作数栈中头两个栈顶元素出栈，做整型加法，然后把结果重新入栈。在iadd指令执行完毕后，栈中原有的100和200被出栈，它们的和300被重新入栈。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(947),alt:"image-20220326155414066",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5"}},[a._v("#")]),a._v(" 5")]),a._v(" "),n("p",[a._v("执行偏移地址为14的指令，"),n("code",[a._v("iload_3")]),a._v(" 指令把存放在第3个局部变量槽中的300入栈到操作数栈中。这时操作数栈为两个整数300。下一条指令imul是将操作数栈中头两个栈顶元素出栈，做整型乘法，然后把结果重新入栈，与iadd完全类似")]),a._v(" "),n("p",[n("img",{attrs:{src:t(948),alt:"image-20220326155505863",loading:"lazy"}})]),a._v(" "),n("h3",{attrs:{id:"_6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6"}},[a._v("#")]),a._v(" 6")]),a._v(" "),n("p",[a._v("执行偏移地址为16的指令，ireturn指令是方法返回指令之一，它将结束方法执行并将操作数栈顶的整型值返回给该方法的调用者。到此为止，这段方法执行结束")]),a._v(" "),n("p",[n("img",{attrs:{src:t(949),alt:"image-20220326155630648",loading:"lazy"}})])],1)}),[],!1,null,null,null);s.default=e.exports},942:function(a,s,t){a.exports=t.p+"assets/img/image-20220326151852398.3fa8edbd.png"},943:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155149877.2443d0c2.png"},944:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155221300.51390f46.png"},945:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155315623.4a54ea5a.png"},946:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155344243.308edeed.png"},947:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155414066.0cc057b7.png"},948:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155505863.944f4d41.png"},949:function(a,s,t){a.exports=t.p+"assets/img/image-20220326155630648.f96517eb.png"}}]);