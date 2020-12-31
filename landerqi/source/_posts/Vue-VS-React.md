title: Vue VS React
date: 2020-12-31 18:01:57
tags: [javascript]
---

之前公司用的都是Vue，最近在新公司使用的是React。基于自己5个月来使用React的一些感受，把React 和 Vue做了一个简单的对比。


**Vue 组件：**

``` javascript
<template>
  <div class="app">

  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">

</style>

```

<!-- more -->

### 数据流不同

- Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
- React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的VDOM的重新渲染

**Vue 使用的是可变数据，而React更强调数据的不可变：**

<img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkeceiqhwj30pm0cl43g.jpg" alt="image-20200816154047781"  />



### React高阶组件（HOC）与 Vue mixins

**Hoc:** 高阶组件（HOC）是 React 中用于**复用组件逻辑**的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

**Vue mixins:**

```javascript
/**
 * 检查登录 mixin模块
 */
import { getLoginState, goToLogin } from '@/common/xxApi'

export default {
  data () {
    return {
      loginState: false, // 登录状态
    }
  },
  async created () {
    this.loginState = await getLoginState()
  },
  mounted () {
    // block
  },
  methods: {
    // 登录检查，通过返回 true，不通过返回 false
    checkLogin () {
      // if (__DEV__) return true

      if (this.loginState) { // 已登录
        return true
      } else { // 未登录
        console.log('[checkLogin] 未登录')
        goToLogin()
        return false
      }
    },
  },
}


// index.vue
import { checkLogin } from '@/common/mixins'

export default {
  components: {
    ...
  },
  mixins: [checkLogin],
  data () {
    return {
     ...
    }
  },
  computed: {
    ...
  },
  mounted () {
    ...
  },
  methods: {
    ...
    },
  },
}
</script>
<style>
  ...
</style>

```



### 组件通信

#### Vue:

1. 父组件通过 props 向子组件传递数据或者回调：

   ```javascript
   父组件： <child value = '传递的数据' />

   子组件: props['value'],接收数据,接受之后使用和data中定义数据使用方式一样

   ```



2. 子组件通过事件向父组件发送消息（$emit）：

   ```javascript
   父组件： <child @receive = 'receive' />

   子组件: this.$emit('receive','传递的数据')
   ```



3. 兄弟组件传值：

   ```javascript
   通过中央通信 let bus = new Vue()

   A：methods :{ 函数{bus.$emit(‘自定义事件名’，数据)} 发送

   B：created （）{bus.$on(‘A发送过来的自定义事件名’，函数)} 进行数据接收

   或者使用：vuex
   ```



4. 通过 V2.2.0 中新增的 provide/inject 来实现父组件向子组件注入数据，可以跨越多个层级。

#### React:

1. 父组件通过 props 可以向子组件传递数据或者回调；
2. 可以通过 context 进行跨层级的通信，和 provide/inject 起到的作用差不多。

**React 本身并不支持自定义事件，需要使用第三方库，如：eventemitter3。**



### Vuex 与 Redux

#### Vuex:

1. 使用 dispatch 和 commit 提交更新；
2. 通过 mapState 或者直接通过 this.$store 来读取数据。

#### Redux:

1. Redux 中，我们每一个组件都需要显示的用 connect 把需要的 props 和 dispatch 连接起来；
2. Redux 中只能进行 dispatch，并不能直接调用 reducer 进行修改。而Vuex可以 dispatch action 也可以 commit updates。



- **Redux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改**
- **Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的（如果看Vuex源码会知道，其实他内部直接创建一个Vue实例用来跟踪数据变化）**



**而这两点的区别，其实也是因为 React 和 Vue的设计理念上的区别。React更偏向于构建稳定大型的应用，非常的科班化。相比之下，Vue更偏向于简单迅速的解决问题，更灵活，不那么严格遵循条条框框。因此也会给人一种大型项目用React，小型项目用 Vue 的感觉。**



### 其他小差异：

1. vue提供很多指令，如 `:class`可以根据不同条件绑定不同的class name，react中使用`classnames`库存来实现此功能；

2. vue在子组件定义中，直接声明接收的props值类型及默认值，react components中是使用`prop-types`库；

   ```javascript
   // vue
   props: {
     type: xxx,
     default: xxx,
   }

   // react
   import PropTypes from "prop-types";
   xxx.propTypes = {
      xxx: PropTypes.array,
   };
   ```

3. 比如发送事件，react也是需要使用第三方库实现。

**从这些小差异，我感觉React其实更接近一个纯粹的UI框架，框架本身不耦合其他无关的东西，开发者用到的时候再自行使用。**

**而Vue则像一个高度定制的框架，很多东西他框架本身就集成进去了，所以开发者使用的时候更方便一点。感觉他更加一个工具，类似IDE ？可能这就是为什么有的人说Vue更容易上手的原因。**

**而且在我使用中，用React开发，对开发者要求更高，很多东西框架并不会帮你处理，需要开发者自行考虑。其实写React能使开发者更关注语言本身。**

就像bind this这个，文档上写了是javascript语言特性，自己手动绑定就好，所以react也不会多此一举帮你绑定修复：

<img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkecxv4ohj30qz08oq4u.jpg" alt="image-20200815103130911"  />

[how function work in Javascript](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

**从这些点可以看出两个框架从设计上来说其实就不太一样，从他们各自github上的star数量上就可以证明了两个框架都非常优秀。**

![image-20200816152151887](https://tva1.sinaimg.cn/large/0081Kckwgy1glkecyj55uj30je09tmyi.jpg)





# Vue使用经验

### 为什么Vue组件中data必须是一个函数

对象为引用类型，当复用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题。



### **vue中v-if和v-show有什么区别？**

v-if和v-show看起来似乎差不多，当条件不成立时，其所对应的标签元素都不可见，但是这两个选项是有区别的:

1、v-if在条件切换时，会对标签进行适当的创建和销毁，而v-show则仅在初始化时加载一次，因此v-if的开销相对来说会比v-show大。

2、v-if是惰性的，只有当条件为真时才会真正渲染标签；如果初始条件不为真，则v-if不会去渲染标签。v-show则无论初始条件是否成立，都会渲染标签，它仅仅做的只是简单的CSS切换。



### **computed和watch的区别**

#### 计算属性computed：

1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
3. computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
5. 如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。

#### 侦听属性watch：

1. 不支持缓存，数据变，直接会触发相应的操作；
2. watch支持异步；
3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4. 当一个属性发生变化时，需要执行对应的操作；一对多；
5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作。



### v-for key的作用

当Vue用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue将不是移动DOM元素来匹配数据项的改变，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。key属性的类型只能为 string或者number类型。

key 的特殊属性主要用在Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes。如果不使用 key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用key，它会基于key的变化重新排列元素顺序，并且会移除 key 不存在的元素。



### **vue如何监听对象或者数组某个属性的变化**

当在项目中直接设置数组的某一项的值，或者直接设置对象的某个属性值，这个时候，你会发现页面并没有更新。这是因为Object.defineProperty()限制，监听不到变化。**vue3使用proxy则不存在此问题**。

解决方式：

- this.$set(你要改变的数组/对象，你要改变的位置/key，你要改成什么value)：

  ```javascript
  this.$set(this.arr, 0, "OBKoro1"); // 改变数组
  this.$set(this.obj, "c", "OBKoro1"); // 改变对象
  ```

- 调用以下几个数组的方法

```
splice()、 push()、pop()、shift()、unshift()、sort()、reverse()
```

vue源码里缓存了array的原型链，然后重写了这几个方法，触发这几个方法的时候会observer数据，意思是使用这些方法不用我们再进行额外的操作，视图自动进行更新。 推荐使用splice方法会比较好自定义,因为splice可以在数组的任何位置进行删除/添加操作



### **vue如何获取dom**

和React相似，先给标签设置一个ref值，再通过this.$refs.domName获取，例如：

```javascript
<div ref="test"></div>

const dom = this.$refs.test
```



# 优化建议

1. ### v-if 和 v-show 区分使用场景

   **v-if** 是 **真正** 的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

   **v-show** 就简单得多， 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 display 属性进行切换。

   所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

2. ### computed 和 watch 区分使用场景

   **computed：** 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；

   **watch：** 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

   **运用场景：**

   - 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
   - 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

3. ### v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

   v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。

4. ### 事件的销毁

   Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。 如果在 js 内使用 addEventListene 等方式是不会自动销毁的，我们需要在组件销毁时手动移除这些事件的监听，以免造成内存泄露，如：

   ```javascript
   created() {
     addEventListener('click', this.click, false)
   },
   beforeDestroy() {
     removeEventListener('click', this.click, false)
   }
   ```

5. ### 服务端渲染 SSR or 预渲染

