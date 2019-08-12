title: 如何不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标
date: 2016-05-12 15:03:01
tags: [javascript, 前端]
---

直接new 一个长度为100的数组，再map的话是会返回空数组的，因为map会跳过空位。
下面介绍几种方法。
<!-- more -->
<!-- toc -->

### 直接 map
```
'​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​'.split('').map(function (v, i) { return i; });
```

这个方法的`''`里面有100个[0宽空格](http://www.fileformat.info/info/unicode/char/200b/index.htm)`&#8203`(`<200b>`)，所以他的length是100,这样就很好理解了。

### [Array.fill](https://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwiB26-pgdTMAhUDp5QKHStWA1wQFggaMAA&url=https%3a%2f%2fdeveloper%2emozilla%2eorg%2fen%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fArray%2ffill&usg=AFQjCNEcx58m1cuRii4Fa5P0Pz7xqyIwMw&sig2=qABOVx3Nk6VDqwu-v-vHIg)
```
Array(100).fill('aaa').map(function (v, i) { return i; });
```

### Generator
```
function* angry(i) {
  yield i;
    if (i < 99) { yield* angry(i + 1); }
};
Array.from(angry(0));
```

### 递归
```
(function wallace (i) { return (i < 0) ? [] : wallace(i - 1).concat(i); })(99);
```
### 尾递归
```
(function mistake (i, acc) { return (i < 100) ? mistake(i + 1, acc.concat(i)) : acc; })(0, []);
```
### [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
```
Array.from(
  new Array(100),
  (_, idx) => idx
);
Array.from(
  {length: 100},
  (_, idx) => idx
)
```
###  Y combinator
```
(function (excited) {
   return function (f) {
     return f(f);
   }(function (f) {
      return excited(function (x) { return (f(f))(x); });
   });
})(function (excited) {
  return function(i) {
    return (i < 0) ? [] : excited(i - 1).concat(i);
  }
})(99);
```
