# 课程简介

## Set 和 Map

### Set

> Set 是什么
>
> **Set 实例的方法和属性**
>
> **Set 构造函数的参数**
>
> Set 的注意事项
>
> Set 的应用

### Map

> Map 是什么
>
> **Map 实例的方法和属性**
>
> **Map 构造函数的参数**
>
> Map 的注意事项
>
> **Map 的应用**

# set

> 什么是 Set 集合
>
> 理解 Set

## 1.Set 初识

- 什么是 Set
- 理解 Set

### 1.什么是 Set（集合）

> Set 是一系列无序、没有重复值的数据集合

```js
[1, 2]; //数组是一系列有序的数据集合
```

#### 2.理解 Set

```js
//创建数组的两种方式
console.log([1, 2, 1]);
console.log(new Array(1, 2, 1));
```

**创建 Set**

> Set 中不能有重复的成员

```js
//实例化set对象
const s = new Set();
s.add(1);
s.add(2);
s.add(2);
console.log(s);
```

> Set 没有下标去标示每一个值，所以 Set 是无序的，也不能像数组那样通过下标去访问 Set 的成员

## 2.Set 实例的方法和属性

- 方法
- 属性

### 1.方法

> add 添加成员

```js
const s = new Set();
s.add(1).add(2).add(2);
// console.log(s);
```

> has 是否有指定成员

```js
console.log(s.has(1)); //true
// console.log(s.has(3));  false
```

> delete 删除指定成员

```js
s.delete(1);

// 使用 delete 删除不存在的成员，什么都不会发生，也不会报错
s.delete(3);
console.log(s);
```

> clear 全部删除

```js
s.clear();
console.log(s);
```

> forEach
>
> 按照成员添加进集合的顺序遍历

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- for...of：可以直接遍历每个成员

```js
s.forEach(function (item, index, set) {
  // Set 中 item = index
  console.log(item, index, set === s);
  console.log(this);
}, document); //第二个参数指定this指向

console.log(s.keys());
console.log(s.values());
console.log(s.entries());

for (let item of s) {
  console.log(item);
}

for (let item of s.values()) {
  console.log(item);
}

for (let item of s.entries()) {
  console.log(item[0], item[1]);
}
```

### 2.属性

> size 长度

```js
console.log(s.size);
```

## 3.Set 构造函数的参数

> 数组、 字符串、arguments、NodeList、Set 等

### 1.数组

```js
//最常用
const s = new Set([1, 2, 1]);
console.log(s);
```

### 2.字符串、arguments、NodeList、Set 等

**字符串**

```js
console.log(new Set("hi"));
```

**arguments**

```js
function fn() {
  console.log(new Set(arguments));
}
fn(1, 2, 1);
```

**NodeList**

```js
<p>1</p>
<p>2</p>
<p>3</p>

console.log(new Set(document.querySelectorAll('p')));
```

**Set**

```js
const s = new Set([1, 2, 1]);
console.log(new Set(s) === s); //false 引用不同
console.log(s);
```

## 4.Set 的注意事项

- 判断重复的方式
- 什么时候使用 Set

### 1.判断重复的方式

> Set 对重复值的判断基本遵循严格相等（===）
>
> 但是对于 NaN 的判断与 === 不同，Set 中 NaN 等于 NaN 所以会去重

```js
const s = new Set([1, 2, 1]);
//const s = new Set([NaN, 2, NaN]);
console.log(s);

console.log(1 === 1); //true
console.log(NaN === NaN); //false
```

**如果是引用数据类型**

```js
const s = new Set();
s.add({}).add({});
console.log({} === {});
console.log(s);
```

### 2.什么时候可以使用 Set

> ① 数组或字符串去重时
>
> ② 不需要通过下标访问，只需要遍历时
>
> ③ 为了使用 Set 提供的方法和属性时（add delete clear has forEach size 等）

## 5.set 的应用

### 1.数组去重

```js
let arr = [1, 2, 3, 4, 2, 3];
let s = new Set(arr);
console.log(s);
```

**如何把 set 转换为数组**

```js
//使用 s.forEach丢到一个新的数组

//set和数组类似 也可以展开set
console.log(...s);
console.log([...s]); //使用展开运算符直接在[]中展开
console.log(Array.from(s));

//如何使用set直接去重
console.log([...new Set(arr)]);
console.log(Array.from(new Set(arr)));
```

**合并去重**

```js
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];
let s = new Set([...arr1, ...arr2]);
console.log(s);
console.log([...s]);
console.log(Array.from(s));
```

### 2.字符串去重

```js
"abbacbd";
const s = new Set("abbacbd");
console.log([...s].join("")); //把set展开变成数组 使用join方法

//简写成  console.log([...new Set('abbacbd')].join(''));
console.log(s);
```

### 3.存放 DOM 元素

```js
<p>1</p>
<p>2</p>
<p>3</p>

console.log(document.querySelectorAll('p'));

const s = new Set(document.querySelectorAll('p'))
console.log(s);
s.forEach(function (elem) {
    // console.log(elem);
    elem.style.color = 'red';
    elem.style.backgroundColor = 'yellow';
});
```

# WeakSet

> WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
>
> WeakSet 的成员只能是对象，而不能是其他类型的值。
>
> WeakSet 的对**象都是弱引用**
>
> 即 WeakSet 中对对象的引用不会被考虑进垃圾回收机制，即只要没有其他的对象引用该对象，则该对象就会被回收，而不管它在不在 WeakSet
>
> （由于这个特性，所以 WeakSet 适合临时存放一组对象和跟对象绑定的信息）

```js
const ws = new WeakSet();
ws.add(1);
// TypeError: Invalid value used in weak set
ws.add(Symbol());
// TypeError: invalid value used in weak set
```

```js
let ws = new WeakSet();

const obj1 = {
  name: "yunmu",
};
const obj2 = {
  age: 5,
};

//WeakSet 有三个方法：add, delete, has
ws.add(obj1);
ws.add(obj2);
ws.delete(obj1);
console.log(ws);
console.log(ws.has(obj2));
```

> WeakSet 没有 size 属性，没有办法遍历它的成员。
>
> WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

# map

## 1.map 初识

- 认识 Map
- Map 和对象的区别

### 1.认识 Map(映射)

> Map 和对象都是键值对的集合

```js
//普通对象 键->值，key->value
const person = {
  name: "yunmu",
  age: 18,
};
```

**创建 Map 对象**

```js
const m = new Map();
m.set("name", "yunmu");
m.set("age", 18);
console.log(m);
```

### 2.Map 和对象的区别

**键的类型**

> 对象一般用字符串或者 Symbols 当作键

```js
const obj = {
  name: "yunmu",
  true: "true",
  [{}]: "object",
};
console.log(obj);
console.log({}.toString()); //即使你想传引用类型 也会帮你转换为字符串
```

> 基本数据类型：数字、字符串、布尔值、undefined、null
>
> 引用数据类型：对象（[]、{}、函数、Set、Map 等）
>
> 以上都可以作为 Map 的键

```js
const m = new Map();
m.set("name", "yunmu");
m.set(true, "true");
m.set({}, "object");
m.set(new Set([1, 2]), "set");
m.set(undefined, "undefined");
console.log(m);
```

**键的顺序**

> Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。

**键值对的统计**

> 你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。

**键值对的遍历**

> Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。

**性能**

> Map 在涉及频繁增删键值对的场景下会有些性能优势。

## 2.Map 实例的属性和方法

- 方法
- 属性

### 1.方法

> set 添加成员

```js
const m = new Map();

//使用 set 添加的新成员，键如果已经存在，后添加的键值对覆盖已有的
m.set("age", 18).set(true, "true").set("age", 20);
console.log(m);
```

> get 获取指定成员

```js
console.log(m.get("true")); // get 获取不存在的成员，返回 undefined
console.log(m.get(true));
```

> has 是否有指定成员

```js
console.log(m.has("age"));
console.log(m.has("true"));
```

> delete 删除指定成员

```js
m.delete("age");

// 使用 delete 删除不存在的成员，什么都不会发生，也不会报错
m.delete("name");
console.log(m);
```

> clear 全部删除

```js
m.clear();
console.log(m);
```

> forEach

```js
m.forEach(function (value, key, map) {
  console.log(value, key, map === m);
  console.log(this);
}, document);
```

- keys() 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值
- values() 方法返回一个新的 Iterator 对象。它包含按顺序插入 Map 对象中每个元素的 value 值
- entries() 方法返回一个新的包含 [key, value] 对的 Iterator ? 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同
- for...of 可以直接遍历每个成员

```js
for (let [key, value] of map) {
  console.log(key, value);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```

### 2.属性

> size
>
> ​ 普通对象没有类似的属性

```js
console.log(m.size);
```

## 3.Map 构造函数的参数

### 1.数组

```js
console.log(new Map(["name", "假城", "age", 18])); //错误

//只能传二维数组，而且必须体现出键和值
console.log(
  new Map([
    ["name", "假城"],
    ["age", 18],
  ])
);
```

### 2.Set、Map 等

**Set**

> Set 中也必须体现出键和值

```js
const s = new Set([
  ["name", "假城"],
  ["age", 18],
]);
console.log(new Map(s));
console.log(s);
```

**Map**

> 复制了一个新的 Map

```js
const m1 = new Map([
  ["name", "假城"],
  ["age", 18],
]);
console.log(m1);

const m2 = new Map(m1);
console.log(m2, m2 === m1);
```

## 4.Map 的注意事项

- 判断键名是否相同的方式
- 什么时候使用 Map

### 1.判断键名是否相同的方式

> 基本遵循严格相等（===）
>
> 例外就是 NaN，Map 中 NaN 也是等于 NaN

```js
console.log(NaN === NaN); //false

const m = new Map();
m.set(NaN, 1).set(NaN, 2);
console.log(m);
```

### 2.什么时候使用 Map

> 如果只是需要 key -> value 的结构，或者需要字符串以外的值做键，使用 Map 更合适

```js
//丰富方法和属性
forEach;
size;

//只有模拟现实世界的实体时，才使用对象
const person = {};
```

## 5.Map 的应用

> 让三个 p 标签的文字颜色改变

```html
</head>
<body>
    <p>1</p>
    <p>2</p>
    <p>3</p>

    <script>
        let [p1, p2, p3] = document.querySelectorAll("p");

        console.log(p1, p2, p3);

        //  const m = new Map();
        //  m.set(p1, "red");
        //  m.set(p2, "green");
        //  m.set(p3, "orange");

        const m = new Map([
            [p1, "red"],
            [p2, "green"],
            [p3, "orange"],
        ]);

        console.log(m);

        m.forEach(function (color, elem) {
            console.log(value, item);

            elem.style.color = color;
        });
    </script>
```

**让效果更复杂**

```js
const m = new Map([
  [
    p1,
    {
      color: "red",
      backgroundColor: "yellow",
      fontSize: "40px",
    },
  ],
  [
    p2,
    {
      color: "green",
      backgroundColor: "pink",
      fontSize: "40px",
    },
  ],
  [
    p3,
    {
      color: "blue",
      backgroundColor: "orange",
      fontSize: "40px",
    },
  ],
]);

m.forEach((propObj, elem) => {
  for (let k in propObj) {
    elem.style[k] = propObj[k];
  }
});
```

# WeekMap

> WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。

```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {
  foo: 1,
};
wm1.set(key, 2);
wm1.get(key); // 2

// WeakMap 也可以接受一个二维数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([
  [k1, "foo"],
  [k2, "bar"],
]);
wm2.get(k2); // "bar"

//weak不支持size属性 不支持遍历  clear
//所以 WeakMap只有四个方法可用：get()、set()、has()、delete()。
```

**WeakMap 与 Map 的区别有两点。**

> - WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
> - WeakMap 的键名所指向的对象，不计入垃圾回收机制

```js
const map = new WeakMap();
map.set(1, 2);
// TypeError: 1 is not an object!
map.set(Symbol(), 2);
// TypeError: Invalid value used as weak map key
map.set(null, 2);
// TypeError: Invalid value used as weak map key

let wm = new WeakMap(),
  element = document.querySelector(".element");
wm.set(element, "data");

let value = wm.get(elemet);
```

**应用场景**

**想要给网页的 dom 元素上添加数据时可用 WeakMap**：

> 用 WeakMap 好处是当该 DOM 元素被清除，对应的 WeakMap 记录就会自动被移除

```js
const wm = new WeakMap();
const ele = document.getElementById("example");
wm.set(el, "some information");
wm.get(el);
```

# Symbol

## 1.Symbol 初识

### 1 为什么用 Symbol

> ES6 引入了一种新的原始数据类型 `Symbol` ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
>
> Symbol 值通过 Symbol 函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

### 2. Symbol 是什么

> 定义:Symbol 实际上是 ES6 引入的一种原始数据类型

### 3. Symbol 的使用

```js
let s = Symbol();
console.log(s); // Symbol()
typeof s; // "symbol"
```

> 变量 s 就是一个独一无二的值。typeof 的结果说明 s 是 Symbol 数据类型。
>
> 既然是独一无二的，那么两个 Symbol()就一定是不相等的：

```js
let s1 = Symbol();
let s2 = Symbol();
console.log(s1);
console.log(s2);
console.log(s1 === s2); // false
```

### 4 Symbol 函数前不能用 new

> Symbol 函数不是一个构造函数，前面不能用 new 操作符。所以 Symbol 类型的值也不是一个对象，不能添加任何属性，它只是一个类似于字符型的数据类型。
>
> 如果强行在 Symbol 函数前加上 new 操作符，会报错，如下：

```js
let sym = new Symbol();
// Uncaught TypeError: Symbol is not a constructor(…)
```

## 2.Symbol 函数的参数

### 1 字符串作为参数

> Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
let s1 = Symbol("s1");
let s2 = Symbol("s2");
console.log(s1); // Symbol(s1)
console.log(s2); // Symbol(s2)
s1 === s2; //  false

let s3 = Symbol("s2");
s2 === s3; //  false

console.log(s1.description); //当前的描述

//给Symbol函数加了参数之后，控制台输出的时候可以区分到底是哪一个值；

//Symbol函数的参数只是对当前Symbol值的描述，因此相同参数的Symbol函数返回值是不相等的；
```

### 2 对象作为参数

> 如果 Symbol 函数的参数是一个对象，就会调用该对象的 toString 方法，将其转化为一个字符串，然后
>
> 才生成一个 Symbol 值。所以，Symbol 函数的参数只能是字符串。

```js
let sym = Symbol({});
console.log(sym); // Symbol([object Object])
```

## 3.Symbol 方法

#### Symbol.for()

> `Symbol.for()` 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for("foo");
console.log(s1);
let s2 = Symbol.for("foo");
console.log(s1 == s2); //true
//注意
//Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
//它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
//Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果	不存在才会新建一个值。
```

#### Symbol.keyFor()

> Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的 key。

```js
const s1 = Symbol("foo");
console.log(Symbol.keyFor(s1)); // undefined

const s2 = Symbol.for("foo");
console.log(Symbol.keyFor(s2)); // foo
```

## 4.Symbol 的应用

> Symbol 就是为对象的属性名而生
>
> 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

```js
const person = {
  黛玉: {
    marry: false,
    hobby: "无病呻吟",
  },

  宝玉: {
    marry: true,
    hobby: "吟诗作赋",
  },

  宝玉: {
    marry: false,
    hobby: "纨绔子弟",
  },

  //只会保留最后一个宝玉
};
console.log(person);
```

**如果使用 Symbol，同名的学生信息就不会被覆盖：**

```js
const p1 = Symbol("宝玉");
const p2 = Symbol("宝玉");

const person = {
  黛玉: {
    marry: false,
    hobby: "无病呻吟",
  },

  [p1]: {
    marry: true,
    hobby: "吟诗作赋",
  },

  [p2]: {
    marry: false,
    hobby: "纨绔子弟",
  },
};

console.log(person);
console.log(person[p1]);
console.log(person[p2]);
```

### 消除魔术字符串

> 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

```js
function getArea(shape) {
  let area = 0;
  switch (shape) {
    case "Triangle":
      area = 1;
      break;
    case "Circle":
      area = 2;
      break;
  }
  return area;
}
console.log(getArea("Triangle"));
```

上面代码中，字符串 Triangle 和 Circle 就是魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。

使用 Symbol 就可以很好的解决这个问题：

```js
const shapeType = {
  triangle: Symbol(),
  circle: Symbol(),
};

function getArea(shape) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = 1;
      break;
    case shapeType.circle:
      area = 2;
      break;
  }
  return area;
}
console.log(getArea(shapeType.triangle));
```

## 5.Symbol 使用注意事项

### 1.Symbol 值作为属性名的遍历

> 如果 symbol 作为了 key,那么用 for..in..循环,是循环不出来 symbol 的 key 的
>
> 使用 for...in 和 for...of 都无法遍历到 Symbol 值的属性，Symbol 值作为对象的属性名，也无法通过 Object.keys()、Object.getOwnPropertyNames()来获取了。
>
> 但是，不同担心,我们可以使用 Object.getOwnPropertySymbols()方法获取一个对象上的 Symbol 属性名。

```js
const p1 = Symbol("宝玉");
const p2 = Symbol("宝玉");

const person = {
  黛玉: {
    marry: false,
    hobby: "无病呻吟",
  },

  [p1]: {
    marry: true,
    hobby: "吟诗作赋",
  },

  [p2]: {
    marry: false,
    hobby: "纨绔子弟",
  },
};

console.log(person);

//只能遍历普通属性
for (let key in person) {
  console.log(key);
}

//只能遍历普通属性
for (let key of Object.keys(person)) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(grade)); //  [Symbol(李四), Symbol(张三)]

//只能遍历Symbol属性名
for (let key of Object.getOwnPropertySymbols(person)) {
  console.log(key);
}

//既能取到普通属性又有Symbol属性
for (let key of Reflect.ownKeys(person)) {
  console.log(key);
}
```

### 2.Symbol 值不可以进行运算

> 既然 Symbol 是一种数据类型，那我们一定想知道 Symbol 值是否能进行运算。告诉你，Symbol 值是不
>
> 能进行运算的,不仅不能和 Symbol 值进行运算，也不能和其他类型的值进行运算，否则会报错。
>
> Symbol 值可以显式转化为字符串和布尔值，但是不能转为数值。

```js
let s1 = Symbol("symbol1");
let s2 = Symbol("symbol2");
s1 + s2; // TypeError: Cannot convert a Symbol value to a number

// 转字符串
String(s1); // "Symbol(symbol1)"

// 转布尔值
Boolean(s1); // true

// 转数字
Number(s1); // TypeError: Cannot convert a Symbol value to a number
```

# 课程总结

## Set/Map 是什么

> Set 是一系列无序、没有重复值的数据集合
>
> Map 的本质是键值对的集合

## Set/Map 实例的方法与属性

### Set

> add()
>
> has()
>
> delete() /clear()
>
> forEach()
>
> size 属性

### Map

> set() / get()
>
> has()
>
> delete()
>
> clear()
>
> forEach()
>
> size 属性

## Set/Map 构造函数的参数

> Set:数组、字符串、arguments、NodeList、Set 等
>
> Map:数组（二维数组)、Set、Map 等

## Set/Map 对相同值/键的判断

> 基本可用严格相等（ ===)判断
>
> 例外:对于 NaN 的判断与===不同， Set/Map 中 NaN 等于 NaN

## 什么时候使用 Set

> 数组或字符串去重时
>
> 不需要通过下标访问，只需要遍历时
>
> 为了使用 Set 提供的方法和属性时

## 什么时候使用 Map

> 只需要 key - > value 的结构时
>
> 需要字符串以外的值做键时
>
> 为了使用 Map 提供的方法和属性时

## Symbol

> 一种原始数据类型,表示独一无二的值
>
> Symbol 就是为对象的属性名而生
>
> 主要使用字符串作为参数，表示对 Symbol 实例的描述以便区分
>
> Symbol 主要用于对象的属性名 保证同名属性不会被覆盖 以及 消除魔术字符串
>
> Symbol 属性的遍历有点特殊 需要注意
