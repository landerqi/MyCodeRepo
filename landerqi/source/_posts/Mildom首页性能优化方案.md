title: Mildom首页性能优化方案
date: 2021-05-31 14:42:26
tags: [前端, javascript]
---

<!-- toc -->

### 预渲染

无需使用web 服务器实时动态编译 HTML，不需要服务器支持。在构建时 (build time) 简单地生成针对特定路由的静态HTML 文件。这个提高效果应该会比较明显。

1. 利用`prerender-spa-plugin`，生成模板。`style components`需要升级到5.x以上版本，这样才支持css提取。注意需要配置：`renderAfterDocumentEvent: 'render-event'，renderAfterTime: 5000`，在index.js入口处监听dom loaded，然后延迟5s触法自定义事件‘render-event’，否则无法请求到数据；

2. 生成模板的时间需要：

    ```
   injectProperty: '__PRERENDER_INJECTED',
   // Optional - Any values you'd like your app to have access to via window.injectProperty.
   inject: {
        prerender: true,
        isDarkMode: process.env.THEME === 'dark',
​    }
    ```
   注入全局变量，然后通过npm run 命令传参生成 日间、夜间 两个模板；

3. 生成完模板之后，拷贝到 client/pages/prerender目录下保存（index.white.html、index.dark.html）；

<!-- more -->

4. 在jenkens上运行npm run prod命令之后，会在static目录上生成index.tmpl.html文件，这个文件里面的css, js都已经被webpack注入进去，我们需要做的是把client/pages/prerender目录下保存的样式和Dom，提取出来，注入到index.tmpl.html文件，同时在static目录下生成index.white.html、index.dark.html两个文件。

5. 把用户设置的主题保存在cookie中，访问页面的时候go server根据cookie中主题的值，选择返回 日间、夜间 模板。

**注意：**

1. 首页用到的组件一定要写骨架，因为首页数据是动态的，渲染出的数据只能是当时的数据片段，这样显然不行，所以我们需要在预渲染的时候注入全局变量，当判断到是预渲染时，则渲染骨架；

2. 自定义事件一定要延迟触发，否则无法生成内容，这里很多资料都没提到，有点坑:
    ```
    window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(() => {

     document.dispatchEvent(new Event('render-event'));

    }, 5000);

   });
   ```

3. 要避免闪烁，当判断root element下有子节点的时候需要用 hydrate方法替代render方法；

4. 首页需要特定的 RouteLoaderIndex，避免闪烁；

5. go server需要判断只有匹配到首页才返回日间、夜间模板，其他则返回之前的正常模板。



### 图片资源优化

1. 使用合适的图片大小，目前首页图片都是1，200kb的，而且有的用户头像甚至达到了700kb；
2. 使用JPEG 2000、JPEG XR 和 WebP 等新图片格式，压缩率更好；
3. Banner图片压缩，是否流程化，是否在cms上传源头就加上大小限制；
4. 延长图片等静态资源缓存时间：wia.mildom.com下的图片是1天，www.mildom.com下的图片、js、css是15天，vpic.mildom.com下的图片等是30天，up.mildom.com下的是90天。
5. 使用JPEG 2000、JPEG XR 和 WebP 等新图片格式，压缩率更好；（咨询，不一定做）



### 代码优化

分析工具：[Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.mildom.com%2F&tab=desktop)。

chunk_main.js体积很大，目前看这个js有788kb，这个js加载完之前，一直白屏。

1. 不使用服务器端直出，可考虑使用 `React.lazy()`<sup> [1]</sup>拆分 JavaScript  代码。或者使用第三方库（如 [loadable-components](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/)）拆分代码；

2. 首屏外资源延迟加载；

3. 首屏展示没有用到的组件懒加载；

4. 减少主线程工作：优化第三方js(cdn，公共组件抽离)、使用Web workers<sup>[2]</sup>；

5. 优化Largest Contentful Paint ([LCP，最大内容渲染时间](https://web.dev/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=unknown))<sup>[3]</sup>;

6. 避免出现长时间运行的主线程任务，可利用“火焰图“分析<sup>[4]</sup>;

7. 优化Cumulative Layout Shift (CLS)<sup>[5]</sup>。



### PWA(渐进式web应用)

PWA应用是指那些使用指定技术和标准模式来开发的web应用，这将同时赋予它们web应用和原生应用的特性。

引入[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)来进行缓存, 以此来节省带宽和时间。



### 参考：

[1] [Code splitting with React.lazy and Suspense](https://web.dev/code-splitting-suspense/?utm_source=lighthouse&utm_medium=unknown)

[2] [Use web workers to run JavaScript off the browser's main thread](https://web.dev/off-main-thread/)

[3] [How to improve largest contentful paint on your site](https://web.dev/lcp/#how-to-improve-largest-contentful-paint-on-your-site)

[4] [Are long JavaScript tasks delaying your Time to Interactive?](https://web.dev/long-tasks-devtools/?utm_source=lighthouse&utm_medium=unknown)

[5] [How to improve CLS](https://web.dev/cls/#how-to-improve-cls)