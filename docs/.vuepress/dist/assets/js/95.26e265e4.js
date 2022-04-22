(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{508:function(s,t,e){"use strict";e.r(t);var a=e(62),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"_1-下列关于readystate状态值-描述正确的选项是-选择两项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下列关于readystate状态值-描述正确的选项是-选择两项"}},[s._v("#")]),s._v(" 1.下列关于readyState状态值，描述正确的选项是？（选择两项）")]),s._v(" "),e("p",[s._v("**A.**状态值为0：此时尚未创建xhr对象，也没有调用open方法")]),s._v(" "),e("p",[s._v("**B.**状态值为1：此时open方法已被调用，但是尚未调用send方法")]),s._v(" "),e("p",[s._v("**C.**状态值为2：send方法已被调用，但是尚未接收到响应数据")]),s._v(" "),e("p",[s._v("**D.**状态值为3：已经接收完响应数据了")]),s._v(" "),e("p",[e("strong",[s._v("本题主要考查readyState状态值表示的含义。")])]),s._v(" "),e("p",[s._v("readyState状态值一共有5个值，分别代表的含义如下：")]),s._v(" "),e("p",[s._v("0：未初始化，已经创建了xhr对象，但是尚未调用open方法。")]),s._v(" "),e("p",[s._v("1：启动，open方法已被调用，但是尚未调用send方法。")]),s._v(" "),e("p",[s._v("2：发送，send方法已被调用，但是尚未接收到响应数据。")]),s._v(" "),e("p",[s._v("3：接收，已经接收到部分响应数据，还未接受完。")]),s._v(" "),e("p",[s._v("4：完成，已经接收到全部响应数据。")]),s._v(" "),e("p",[s._v("readyState值为0时，已经创建了xhr对象，A选项错误。")]),s._v(" "),e("p",[s._v("根据前面对readyState状态值的解析可以BC选项正确。")]),s._v(" "),e("p",[s._v("readyState值为3时，只接受到了部分响应数据，C选项错误。")]),s._v(" "),e("p",[e("strong",[s._v("所以本题答案为BC.")])]),s._v(" "),e("h3",{attrs:{id:"_2-当readystate等于4之后-可以获取到响应数据的选项是-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-当readystate等于4之后-可以获取到响应数据的选项是-选择一项"}},[s._v("#")]),s._v(" 2.当readyState等于4之后，可以获取到响应数据的选项是？（选择一项）")]),s._v(" "),e("p",[s._v("**A.**状态值为0：此时尚未创建xhr对象，也没有调用open方法")]),s._v(" "),e("p",[s._v("**B.**状态值为1：此时open方法已被调用，但是尚未调用send方法")]),s._v(" "),e("p",[s._v("**C.**状态值为2：send方法已被调用，但是尚未接收到响应数据")]),s._v(" "),e("p",[s._v("**D.**状态值为3：已经接收完响应数据了")]),s._v(" "),e("p",[s._v("参考解析：")]),s._v(" "),e("p",[e("strong",[s._v("本题考查正常获取响应数据的条件。")])]),s._v(" "),e("p",[s._v("当满足xhr.status>= 200 && xhr.status < 300或者满足xhr.status=== 304时，可以正常获取响应数据。")]),s._v(" "),e("p",[s._v("A选项：xhr.status > 300条件是错误的。")]),s._v(" "),e("p",[s._v("C选项：xhr.status <200 条件是错误的")]),s._v(" "),e("p",[s._v("D选项： xhr.status<=200 并且xhr.status>300条件是错误的。")]),s._v(" "),e("p",[e("strong",[s._v("本题正确的选项是B")])]),s._v(" "),e("h3",{attrs:{id:"_3-观察下图-代码中有几处错误-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-观察下图-代码中有几处错误-选择一项"}},[s._v("#")]),s._v(" 3.观察下图，代码中有几处错误？（选择一项）")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/12/15/qS941rClAHDLg5t.png",alt:"image-20201215191209703"}})]),s._v(" "),e("p",[s._v("**A.**1处")]),s._v(" "),e("p",[s._v("**B.**2处")]),s._v(" "),e("p",[s._v("**C.**3处")]),s._v(" "),e("p",[s._v("**D.**4处")]),s._v(" "),e("p",[e("strong",[s._v("本题考查Ajax的使用步骤。")])]),s._v(" "),e("p",[s._v("Ajax请求可以分为四个步骤，第一步创建xhr 对象；第二步监听事件，处理响应；第三步准备发送请求；第四步发送请求。")]),s._v(" "),e("p",[s._v("第一处错误：创建xhr 对象时单词写错，正确的写法为XMLHttpRequest")]),s._v(" "),e("p",[s._v("第二处错误：绑定readystatechange事件时，没有加on，正确的写法为onreadystatechange")]),s._v(" "),e("p",[s._v("第三处错误：获得字符串形式的响应数据，responseText的t小写了，正确的写法是responseText")]),s._v(" "),e("p",[s._v("第四处错误：先使用了send方法，后使用open方法，正确的步骤是先使用open方法，后使用send方法。")]),s._v(" "),e("p",[e("strong",[s._v("一共有四处错误，本题正确的选项是D")])]),s._v(" "),e("h3",{attrs:{id:"_4-下列json数据-格式书写正确的选项是-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-下列json数据-格式书写正确的选项是-选择一项"}},[s._v("#")]),s._v(" 4.下列json数据，格式书写正确的选项是？（选择一项）")]),s._v(" "),e("p",[e("strong",[s._v("A.")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"username"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用户名")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"age"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//年龄")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("B.")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("' username '")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'age'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("C.")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"username"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"age"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"undefined"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("D.")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("username")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("本题主要考查JSON格式。")])]),s._v(" "),e("p",[s._v("JSON格式必须满足以下几个条件：")]),s._v(" "),e("p",[s._v("1、JSON中的字符串必须使用双引号。")]),s._v(" "),e("p",[s._v("2、JSON中没有undefined值，使用时要用引号包裹起来。")]),s._v(" "),e("p",[s._v("3、JSON中不能添加注释。")]),s._v(" "),e("p",[s._v("代码中添加了注释，不符合条件，A选项错误。")]),s._v(" "),e("p",[s._v("代码中字符串使用单引号包裹，不符合条件，B选项错误。")]),s._v(" "),e("p",[s._v("JSON中没有undefined值，但是代码中使用双引号包裹了undefined，属于字符串，C选项正确。")]),s._v(" "),e("p",[s._v("代码中没有使用双引号包裹属性名，属于对象格式的写法，而不是JSON格式，D选项错误。")]),s._v(" "),e("p",[e("strong",[s._v("所以本题答案为C.")])]),s._v(" "),e("h3",{attrs:{id:"_5-下列选项中-描述错误的是-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-下列选项中-描述错误的是-选择一项"}},[s._v("#")]),s._v(" 5.下列选项中，描述错误的是？（选择一项）")]),s._v(" "),e("p",[s._v("**A.**JSON.stringify()的作用是将 JavaScript 对象转换为JSON字符串")]),s._v(" "),e("p",[s._v("**B.**JSON.stringify()方法让localStorage/sessionStorage可以存储对象")]),s._v(" "),e("p",[s._v("**C.**JSON.parse()作用是将字符串转为一个对象")]),s._v(" "),e("p",[s._v("**D.**JSON.stringify()方法可以判断两个数组或对象中的值是否相等")]),s._v(" "),e("p",[s._v("参考解析：")]),s._v(" "),e("p",[e("strong",[s._v("本题主要考查JSON的常用方法。")])]),s._v(" "),e("p",[s._v("JSON中常用的方法是stringify和parse。")]),s._v(" "),e("p",[s._v("JSON.stringify()的作用是将 JavaScript 对象转换为JSON字符串，A选项正确。")]),s._v(" "),e("p",[s._v("JSON.stringify()方法让localStorage/sessionStorage可以存储对象，B选项正确。")]),s._v(" "),e("p",[s._v("JSON.parse()作用是将JSON字符串转为一个对象，字符串必须符合JSON格式，即键值都必须使用双引号包裹，而不是说任意一个字符串就可以使用JSON.parse方法转成字符串。C选项错误。")]),s._v(" "),e("p",[s._v("两个对象（或数组），值相同，由于地址不同，直接比较是不相等的，而使用JSON.stringify方法将对象（或数组）转成字符串之后，就可以只比较值了，D选项正确。示例：")]),s._v(" "),e("h3",{attrs:{id:"_6-下列描述正确的选项是-选择两项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-下列描述正确的选项是-选择两项"}},[s._v("#")]),s._v(" 6.下列描述正确的选项是？（选择两项）")]),s._v(" "),e("p",[s._v("**A.**responseType属性值为空时，不可以使用reponse属性接收")]),s._v(" "),e("p",[s._v("**B.**responseType属性值为json时，不可以使用reponseText属性接收")]),s._v(" "),e("p",[s._v("**C.**responseType属性值为text时，只能使用reponseText属性接收")]),s._v(" "),e("p",[s._v("**D.**没有设置reponseType属性时，可以使用reponseText或reponse属性接收")]),s._v(" "),e("p",[e("strong",[s._v("本题主要考查reponseText和reponse属性")]),s._v("。")]),s._v(" "),e("p",[s._v("满足以下三个条件中的任意一个，才可以使用reponseText接收响应的数据。")]),s._v(" "),e("p",[s._v("（1）没有设置reponseType。")]),s._v(" "),e("p",[s._v("（2）reponseType = “”")]),s._v(" "),e("p",[s._v("（3）reponseType = “text”")]),s._v(" "),e("p",[s._v("不管reponseType设置任意值，都可以使用reponse接收响应的数据。")]),s._v(" "),e("p",[s._v("responseType属性值为空时，可以使用reponse属性接收， A选项错误。")]),s._v(" "),e("p",[s._v("responseType属性值为json时，不满足条件，所以不可以使用reponseText属性接收。B选项正确。")]),s._v(" "),e("p",[s._v("responseType属性值为text时，reponseText和reponse属性都可以接收，C选项错误。")]),s._v(" "),e("p",[s._v("没有设置reponseType属性时，可以使用reponseText或reponse属性接收，D选项正确。")]),s._v(" "),e("p",[e("strong",[s._v("所以本题答案为BD.")])]),s._v(" "),e("h3",{attrs:{id:"_7-地址为http-www-baidu-com的页面-向下列哪个地址发送请求时-不属于跨域的是-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-地址为http-www-baidu-com的页面-向下列哪个地址发送请求时-不属于跨域的是-选择一项"}},[s._v("#")]),s._v(" 7.地址为http://www.baidu.com的页面， 向下列哪个地址发送请求时，不属于跨域的是？（选择一项）")]),s._v(" "),e("p",[s._v("**A.**http://www.baidu.com:8080")]),s._v(" "),e("p",[s._v("**B.**http://www.m.baidu.com")]),s._v(" "),e("p",[s._v("**C.**https://www.baidu.com/less")]),s._v(" "),e("p",[s._v("**D.**http://www.baidu.com/course/list")]),s._v(" "),e("p",[e("strong",[s._v("本题主要考查“域”的概念。")])]),s._v(" "),e("p",[s._v("http（协议）😕/class.imooc.com（域名）:443(端口号)/course（路径），当协议、域名和端口号，任何一个不一样，就是不同域， 与路径无关。")]),s._v(" "),e("p",[s._v("http://www.imooc.com和http://www.imooc.com:8080端口号不同，A选项错误。")]),s._v(" "),e("p",[s._v("www.imooc.com和www.m.imooc.com 域名不同，B选项错误。")]),s._v(" "),e("p",[s._v("http和https协议不同，C选项错误。")]),s._v(" "),e("p",[s._v("只要协议、域名和端口号相同，就属于同一个域，不受路径影响，D选项正确。")]),s._v(" "),e("p",[e("strong",[s._v("所以本题答案为D.")])]),s._v(" "),e("h3",{attrs:{id:"_8-如果想要发送json格式的数据-setrequestheader-和send-方法该如何设置-选择一项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-如果想要发送json格式的数据-setrequestheader-和send-方法该如何设置-选择一项"}},[s._v("#")]),s._v(" 8.如果想要发送json格式的数据，setRequestHeader()和send()方法该如何设置？（选择一项）")]),s._v(" "),e("p",[e("strong",[s._v("A.")]),e("img",{attrs:{src:"https://i.loli.net/2020/12/15/eGfWdJp3scTOPHi.png",alt:"image-20201215192352467"}})]),s._v(" "),e("p",[e("strong",[s._v("B.")]),e("img",{attrs:{src:"https://i.loli.net/2020/12/15/GIav9T8yj4mhkPJ.png",alt:"image-20201215192401262"}})]),s._v(" "),e("p",[e("strong",[s._v("C.")]),e("img",{attrs:{src:"https://i.loli.net/2020/12/15/2ZVqQ4ONreTkYwa.png",alt:"image-20201215192412482"}})]),s._v(" "),e("p",[e("strong",[s._v("D.")]),e("img",{attrs:{src:"https://i.loli.net/2020/12/15/t3s9Cb4QOKYzE8B.png",alt:"image-20201215192424503"}})]),s._v(" "),e("p",[e("strong",[s._v("本题考查使用setRequestHeader()和send()方法，来发送json格式的数据")])]),s._v(" "),e("p",[s._v("setRequestHeader()方法中，Content-Type设置为application/x-www-form-urlencoded，表示要发送名值对格式的数据，send()方法中，写成username=alex&age=18格式。BC不符合题意。")]),s._v(" "),e("p",[s._v("Content-Type设置为application/json，表示要发送json格式的数据")]),s._v(" "),e("p",[s._v("send()方法中，数据需要使用JSON.stringify()方法转换一下。")]),s._v(" "),e("p",[e("strong",[s._v("本题正确的选项是D")])])])}),[],!1,null,null,null);t.default=r.exports}}]);