(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1136:function(e,s,t){"use strict";t.r(s);var a=t(1),v=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("转载声明")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://funnylog.gitee.io/mysql45/01%E8%AE%B2%E5%9F%BA%E7%A1%80%E6%9E%B6%E6%9E%84%EF%BC%9A%E4%B8%80%E6%9D%A1SQL%E6%9F%A5%E8%AF%A2%E8%AF%AD%E5%8F%A5%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E7%9A%84.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("01讲基础架构：一条SQL查询语句是如何执行的"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("大体来说，MySQL可以分为Server层和存储引擎层两部分")]),e._v(" "),a("p",[e._v("Server层包括"),a("u",[e._v("连接器、查询缓存、分析器、优化器、执行器等")]),e._v("，涵盖MySQL的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。")]),e._v(" "),a("p",[e._v("而存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持InnoDB、MyISAM、Memory等多个存储引擎。现在最常用的存储引擎是InnoDB，它从MySQL 5.5.5版本开始成为了默认存储引擎")]),e._v(" "),a("p",[a("img",{attrs:{src:t(951),alt:"img",loading:"lazy"}})]),e._v(" "),a("h2",{attrs:{id:"连接器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[e._v("#")]),e._v(" 连接器")]),e._v(" "),a("p",[a("mark",[e._v("连接器负责跟客户端建立连接、获取权限、维持和管理连接。")])]),e._v(" "),a("p",[e._v("第一步，你会先连接到这个数据库上，这时候接待你的就是连接器。连接命令一般是这么写的")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql -h$ip -P$port -u$user -p\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("一个用户成功建立连接后，即使你用管理员账号对这个用户的权限做了修改，也不会影响已经存在连接的权限。修改完成后，只有再新建的连接才会使用新的权限设置。")]),e._v(" "),a("p",[e._v("连接完成后，如果你没有后续的动作，这个连接就处于空闲状态。")]),e._v(" "),a("p",[e._v("客户端如果太长时间没动静，连接器就会自动将它断开。这个时间是由参数 "),a("code",[e._v("wait_timeout")]),e._v(" 控制的，默认值是8小时。")]),e._v(" "),a("h2",{attrs:{id:"查询缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[e._v("#")]),e._v(" 查询缓存")]),e._v(" "),a("p",[e._v("连接建立完成后，你就可以执行 select 语句了。执行逻辑就会来到第二步：查询缓存。")]),e._v(" "),a("p",[e._v("MySQL 拿到一个查询请求后，会先到查询缓存看看，之前是不是执行过这条语句。之前执行过的语句及其结果可能会以 "),a("code",[e._v("key-value")]),e._v(" 对的形式，被直接缓存在内存中。key 是查询的语句，value 是查询的结果。如果你的查询能够直接在这个缓存中找到 key，那么这个 value 就会被直接返回给客户端。")]),e._v(" "),a("p",[e._v("如果语句不在查询缓存中，就会继续后面的执行阶段。执行完成后，执行结果会被存入查询缓存中。你可以看到，如果查询命中缓存，MySQL不需要执行后面的复杂操作，就可以直接返回结果，这个效率会很高。")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("不建议缓存")]),e._v(" "),a("p",[e._v("查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空。因此很可能你费劲地把结果存起来，还没使用呢，就被一个更新全清空了。对于更新压力大的数据库来说，查询缓存的命中率会非常低。除非你的业务就是有一张静态表，很长时间才会更新一次。比如，一个系统配置表，那这张表上的查询才适合使用查询缓存。")]),e._v(" "),a("p",[e._v("你可以将参数 "),a("code",[e._v("query_cache_type")]),e._v(" 设置成 "),a("code",[e._v("DEMAND")]),e._v(" 来关闭查询缓存。而对于你确定要使用查询缓存的语句，可以用 SQL_CACHE 显式指定，像下面这个语句一样：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select SQL_CACHE * from T where ID=10；\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("需要注意的是，MySQL 8.0版本直接将查询缓存的整块功能删掉了，也就是说8.0开始彻底没有这个功能了")])]),e._v(" "),a("h2",{attrs:{id:"分析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析器"}},[e._v("#")]),e._v(" 分析器")]),e._v(" "),a("p",[e._v("如果没有命中查询缓存，就要开始真正执行语句了。"),a("strong",[e._v("首先，MySQL需要知道你要做什么，因此需要对SQL语句做解析。")])]),e._v(" "),a("ul",[a("li",[a("mark",[e._v("分析器先会做【词法分析】")]),e._v(" 。MySQL需要识别出 SQL 语句里面的字符串分别是什么，代表什么。")]),e._v(" "),a("li",[a("mark",[e._v("然后做【语法分析】")]),e._v(" 。根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。")])]),e._v(" "),a("p",[e._v("如果你的语句不对，就会收到 "),a("code",[e._v("You have an error in your SQL syntax")]),e._v(" 的错误提醒，比如下面这个语句 select 少打了开头的字母【s】。")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> elect * from t where ID=1;\n\nERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'elect * from t where ID=1' at line 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("一般语法错误会提示第一个出现错误的位置，所以你要关注的是紧接【use near】的内容。")]),e._v(" "),a("h2",{attrs:{id:"优化器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[e._v("#")]),e._v(" 优化器")]),e._v(" "),a("p",[e._v("经过了分析器，MySQL就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。")]),e._v(" "),a("p",[a("strong",[e._v("优化器是在表里面有多个索引的时候，决定使用哪个索引；或者在一个语句有多表关联（join）的时候，决定各个表的连接顺序。")]),e._v(" 比如你执行下面这样的语句，这个语句是执行两个表的join：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from t1 join t2 using(ID) where t1.c=10 and t2.d=20;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("既可以先从表 t1 里面取出 c = 10 的记录的ID值，再根据 ID 值关联到 t2，再判断 t2 里面 d 的值是否等于20。")]),e._v(" "),a("li",[e._v("也可以先从表 t2 里面取出 d = 20 的记录的ID值，再根据 ID 值关联到 t1，再判断 t1 里面 c 的值是否等于10。")])]),e._v(" "),a("p",[e._v("这两种执行方法的逻辑结果是一样的，但是执行的效率会有不同，而优化器的作用就是决定选择使用哪一个方案。")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("怎么优化的？")])]),e._v(" "),a("h2",{attrs:{id:"执行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[e._v("#")]),e._v(" 执行器")]),e._v(" "),a("p",[a("strong",[e._v("要先判断一下你对这个表T有没有执行查询的权限")]),e._v("，如果没有，就会返回没有权限的错误，如下所示（在工程实现上，如果命中查询缓存，会在查询缓存放回结果的时候，做权限验证。查询也会在优化器之前调用precheck验证权限）。")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from T where ID=10;\n\nERROR 1142 (42000): SELECT command denied to user 'b'@'localhost' for table 'T'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的引擎定义，去使用这个引擎提供的接口。")]),e._v(" "),a("p",[e._v("比如我们这个例子中的表T中，ID 字段没有索引，那么执行器的执行流程是这样的：")]),e._v(" "),a("ol",[a("li",[e._v("调用 InnoDB 引擎接口取这个表的第一行，判断 ID 值是不是 10，如果不是则跳过，如果是则将这行存在结果集中；")]),e._v(" "),a("li",[e._v("调用引擎接口取【下一行】，重复相同的判断逻辑，直到取到这个表的最后一行。")]),e._v(" "),a("li",[e._v("执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。")])]),e._v(" "),a("p",[e._v("至此，这个语句就执行完成了。")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("对于有索引的表，执行的逻辑也差不多。第一次调用的是【取满足条件的第一行】这个接口，之后循环取【满足条件的下一行】这个接口，这些接口都是引擎中已经定义好的。")]),e._v(" "),a("p",[e._v("你会在数据库的慢查询日志中看到一个 "),a("code",[e._v("rows_examined")]),e._v(" 的字段，表示这个语句执行过程中扫描了多少行。这个值就是在执行器每次调用引擎获取数据行的时候累加的。")]),e._v(" "),a("p",[e._v("在有些场景下，执行器调用一次，在引擎内部则扫描了多行，因此"),a("strong",[e._v("引擎扫描行数跟rows_examined并不是完全相同的。")])])])}),[],!1,null,null,null);s.default=v.exports},951:function(e,s,t){e.exports=t.p+"assets/img/0d2070e8f84c4801adbfa03bda1f98d9.7b0fb5ec.png"}}]);