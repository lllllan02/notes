(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1109:function(a,t,v){"use strict";v.r(t);var _=v(1),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[a._v("转载声明")]),a._v(" "),_("ul",[_("li",[a._v("《深入理解Java虚拟机》")])])]),a._v(" "),_("h2",{attrs:{id:"一、对象的创建过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、对象的创建过程"}},[a._v("#")]),a._v(" 一、对象的创建过程")]),a._v(" "),_("ol",[_("li",[_("p",[_("strong",[a._v("类加载检查")])]),a._v(" "),_("blockquote",[_("p",[a._v("首先类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程")])])]),a._v(" "),_("li",[_("p",[_("strong",[a._v("分配内存")])]),a._v(" "),_("blockquote",[_("p",[a._v("为对象分配空间的任务实际上便等同于把一块确定大小的内存块从 Java 堆中划分出来")]),a._v(" "),_("ul",[_("li",[_("mark",[a._v("指针碰撞")]),a._v(" ： 假设 Java 堆中内存是绝对规整的，所有被使用过的内存都被放在一边，空闲的内存被放在另一边，中间放着一个指针作为分界点的指示器，那所分配内存就仅仅是把那个指针向空闲空间方向挪动一段与对象大小相等的距离")]),a._v(" "),_("li",[_("mark",[a._v("空闲列表")]),a._v(" ： 但如果 Java 堆中的内存并不是规整的，已被使用的内存和空闲的内存相互交错在一起，那就没有办法简单地进行指针碰撞了，虚拟机就必须维护一个列表，记录上哪些内存块是可用的，在分配的时候从列表中找到一块足够大的空间划分给对象实例，并更新列表上的记录")])]),a._v(" "),_("p",[a._v("选择哪种分配方式由Java堆是否规整决定，而 Java 堆是否规整又由所采用的垃圾收集器是否带有 "),_("mark",[a._v("空间压缩整理（Compact）")]),a._v(" 的能力决定")])]),a._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[a._v("非线程安全")]),a._v(" "),_("p",[a._v("在并发情况下也并 "),_("mark",[a._v("不是线程安全的")]),a._v(" ，可能出现正在给对象 A 分配内存，指针还没来得及修改，对象 B 又同时使用了原来的指针来分配内存的情况。解决这个问题有两种可选方案：")]),a._v(" "),_("ol",[_("li",[_("p",[a._v("对分配内存空间的动作进行同步处理——实际上虚拟机是采用 "),_("mark",[a._v("CAS配上失败重试")]),a._v(" 的方式保证更新操作的原子性")])]),a._v(" "),_("li",[_("p",[a._v("另外一种是把内存分配的动作按照线程划分在不同的空间之中进行，即每个线程在Java堆中预先分配一小块内存，称为 "),_("mark",[a._v("本地线程分配缓冲")]),a._v(" （Thread Local Allocation Buffer，TLAB），哪个线程要分配内存，就在哪个线程的本地缓冲区中分配，只有本地缓冲区用完 了，分配新的缓存区时才需要同步锁定。")])])])])]),a._v(" "),_("li",[_("p",[_("strong",[a._v("对象字段初始化为零值")])]),a._v(" "),_("blockquote",[_("p",[a._v("将分配到的内存空间（但不包括对象头）都初始化为零值，这步操作保证了对象的实例字段在 Java 代码中可以不赋初始值就直接使用，使程序能访问到这些字段的数据类型所对应的零值。")])])]),a._v(" "),_("li",[_("p",[_("strong",[a._v("设置对象头")])]),a._v(" "),_("blockquote",[_("p",[a._v("设置这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码（实际上对象的哈希码会延后到真正调用 "),_("code",[a._v("Object::hashCode()")]),a._v(" 方法时才计算）、对象的 GC 分代年龄等信息")])])]),a._v(" "),_("li",[_("p",[_("strong",[a._v("执行构造函数")])])])]),a._v(" "),_("h2",{attrs:{id:"二、对象的内存布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、对象的内存布局"}},[a._v("#")]),a._v(" 二、对象的内存布局")]),a._v(" "),_("p",[a._v("对象在堆内存中的存储布局可以划分为三个部分：对象头（Header）、实例数据（Instance Data）和对齐填充（Padding）")]),a._v(" "),_("h3",{attrs:{id:"_2-1-对象头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-对象头"}},[a._v("#")]),a._v(" 2.1 对象头")]),a._v(" "),_("p",[a._v("HotSpot虚拟机对象的对象头部分包括两类信息")]),a._v(" "),_("ol",[_("li",[_("p",[_("strong",[a._v("对象自身的运行数据：")]),a._v(" 如哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时间戳等")]),a._v(" "),_("blockquote",[_("p",[_("img",{attrs:{src:v(904),alt:"image-20220317085203714",loading:"lazy"}})])])]),a._v(" "),_("li",[_("p",[_("strong",[a._v("类型指针：")]),a._v(" 对象指向它的类型元数据的指针，Java虚拟机通过这个指针来确定该对象是哪个类的实例。")]),a._v(" "),_("blockquote",[_("p",[a._v("并不是所有的虚拟机实现都必须在对象数据上保留类型指针，换句话说，查找对象的元数据信息并不一定要经过对象本身")])])])]),a._v(" "),_("h3",{attrs:{id:"_2-2-实例数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实例数据"}},[a._v("#")]),a._v(" 2.2 实例数据")]),a._v(" "),_("p",[a._v("来实例数据部分是对象真正存储的有效信息，即我们在程序代码里面所定义的各种类型的字段内容，无论是从父类继承下来的，还是在子类中定义的字段都必须记录起来")]),a._v(" "),_("p",[_("img",{attrs:{src:v(905),alt:"image-20220317085219807",loading:"lazy"}})]),a._v(" "),_("h3",{attrs:{id:"_2-3-对齐填充"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-对齐填充"}},[a._v("#")]),a._v(" 2.3 对齐填充")]),a._v(" "),_("p",[a._v("这并不是必然存在的，也没有特别的含义，它仅仅起着占位符的作用。")]),a._v(" "),_("p",[a._v("由于 HotSpot 虚拟机的自动内存管理系统要求对象起始地址必须是 8 字节的整数倍，换句话说就是任何对象的大小都必须是 "),_("strong",[a._v("8字节的整数倍")]),a._v("。")]),a._v(" "),_("h2",{attrs:{id:"三、对象的访问定位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、对象的访问定位"}},[a._v("#")]),a._v(" 三、对象的访问定位")]),a._v(" "),_("p",[a._v("对象访问方式也是由虚拟机实现而定的，主流的访问方式主要有使用句柄和直接指针两种：")]),a._v(" "),_("h3",{attrs:{id:"_3-1-句柄访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-句柄访问"}},[a._v("#")]),a._v(" 3.1 句柄访问")]),a._v(" "),_("p",[a._v("Java堆中将可能会划分出一块内存来作为句柄池，reference中存储的就是对象的句柄地址，而句柄中包含了对象实例数据与类型数据各自具体的地址信息")]),a._v(" "),_("p",[_("img",{attrs:{src:v(906),alt:"image-20220317085231743",loading:"lazy"}})]),a._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[a._v("句柄的优势")]),a._v(" "),_("p",[a._v("是 reference 中存储的是稳定句柄地址，在对象被移动（垃圾收集时移动对象是非常普遍的行为）时只会改变句柄中的实例数据指针，而 reference 本身不需要被修改。")])]),a._v(" "),_("h3",{attrs:{id:"_3-2-直接指针访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-直接指针访问"}},[a._v("#")]),a._v(" 3.2 直接指针访问")]),a._v(" "),_("p",[a._v("Java 堆中对象的内存布局就必须考虑如何放置访问类型数据的相关信息，reference 中存储的直接就是对象地址，如果只是访问对象本身的话，就不需要多一次间接访问的开销")]),a._v(" "),_("p",[_("img",{attrs:{src:v(907),alt:"image-20220317085241030",loading:"lazy"}})]),a._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[a._v("指针的优势")]),a._v(" "),_("p",[a._v("是速度更快，它节省了一次指针定位的时间开销，由于对象访问在 Java 中非常频繁，因此这类开销积少成多也是一项极为可观的执行成本。")]),a._v(" "),_("p",[a._v("对于 HotSpot 而言，它主要使用第二种方式进行对象访问。")])])])}),[],!1,null,null,null);t.default=s.exports},904:function(a,t,v){a.exports=v.p+"assets/img/image-20220317085203714.ec7ce3e7.png"},905:function(a,t,v){a.exports=v.p+"assets/img/image-20220317085219807.4aa9c877.png"},906:function(a,t,v){a.exports=v.p+"assets/img/image-20220317085231743.c649b301.png"},907:function(a,t,v){a.exports=v.p+"assets/img/image-20220317085241030.ad6aa765.png"}}]);