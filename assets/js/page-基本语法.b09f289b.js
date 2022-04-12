(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{541:function(v,_,t){"use strict";t.r(_);var a=t(1),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[v._v("#")]),v._v(" 基本语法")]),v._v(" "),t("h3",{attrs:{id:"字符型常量和字符串常量的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符型常量和字符串常量的区别"}},[v._v("#")]),v._v(" 字符型常量和字符串常量的区别?")]),v._v(" "),t("ol",[t("li",[t("p",[t("strong",[v._v("形式")]),v._v(" : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("含义")]),v._v(" : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("占内存大小")]),v._v(" ： 字符常量只占 2 个字节; 字符串常量占若干个字节。")]),v._v(" "),t("p",[v._v("("),t("strong",[v._v("注意： "),t("code",[v._v("char")]),v._v(" 在 Java 中占两个字节")]),v._v(")")])])]),v._v(" "),t("h4",{attrs:{id:"静态方法为什么不能调用非静态成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态方法为什么不能调用非静态成员"}},[v._v("#")]),v._v(" 静态方法为什么不能调用非静态成员?")]),v._v(" "),t("ol",[t("li",[v._v("静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，需要通过类的实例对象去访问。")]),v._v(" "),t("li",[v._v("在类的非静态成员不存在的时候静态成员就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。")])]),v._v(" "),t("h4",{attrs:{id:"重载和重写的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写的区别"}},[v._v("#")]),v._v(" 重载和重写的区别")]),v._v(" "),t("p",[t("strong",[v._v("重载")])]),v._v(" "),t("p",[v._v("发生在同一个类中（或者父类和子类之间），方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。")]),v._v(" "),t("p",[t("strong",[v._v("重写")])]),v._v(" "),t("p",[v._v("重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。")]),v._v(" "),t("ol",[t("li",[v._v("方法名、参数列表必须相同，子类方法返回值类型应比父类方法返回值类型更小或相等，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类。")]),v._v(" "),t("li",[v._v("如果父类方法访问修饰符为 "),t("code",[v._v("private/final/static")]),v._v(" 则子类就不能重写该方法，但是被 "),t("code",[v._v("static")]),v._v(" 修饰的方法能够被再次声明。")]),v._v(" "),t("li",[v._v("构造方法无法被重写")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("区别点")]),v._v(" "),t("th",[v._v("重载方法")]),v._v(" "),t("th",[v._v("重写方法")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("发生范围")]),v._v(" "),t("td",[v._v("同一个类")]),v._v(" "),t("td",[v._v("子类")])]),v._v(" "),t("tr",[t("td",[v._v("参数列表")]),v._v(" "),t("td",[v._v("必须修改")]),v._v(" "),t("td",[v._v("一定不能修改")])]),v._v(" "),t("tr",[t("td",[v._v("返回类型")]),v._v(" "),t("td",[v._v("可修改")]),v._v(" "),t("td",[v._v("子类方法返回值类型应比父类方法返回值类型更小或相等")])]),v._v(" "),t("tr",[t("td",[v._v("异常")]),v._v(" "),t("td",[v._v("可修改")]),v._v(" "),t("td",[v._v("子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；")])]),v._v(" "),t("tr",[t("td",[v._v("访问修饰符")]),v._v(" "),t("td",[v._v("可修改")]),v._v(" "),t("td",[v._v("一定不能做更严格的限制（可以降低限制）")])]),v._v(" "),t("tr",[t("td",[v._v("发生阶段")]),v._v(" "),t("td",[v._v("编译期")]),v._v(" "),t("td",[v._v("运行期")])])])]),v._v(" "),t("h3",{attrs:{id:"什么是可变长参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是可变长参数"}},[v._v("#")]),v._v(" 什么是可变长参数？")]),v._v(" "),t("p",[v._v("方法就可以接受 0 个或者多个参数。另外，可变参数只能作为函数的最后一个参数，但其前面可以有也可以没有任何其他参数。Java 的可变参数编译后实际会被转换成一个数组")])])}),[],!1,null,null,null);_.default=r.exports}}]);