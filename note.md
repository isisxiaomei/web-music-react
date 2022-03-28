# 1. 项目结构搭建


项目结构划分


```js
// 安装脚手架
npm install create-react-app -g

// 脚手架创建项目
create-react-app web-music-react

// normalize.css包全局css
css重置和公共css抽取
```




# 2. 项目配置
> 可以直接暴露eject进行配置(不推荐)；也可以借助`@craco/craco`单独进行webapck配置

配置文档：https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

1. 安装
```js
npm install @craco/craco --save
```


2. 更改项目运行配置

```js
/* package.json */

"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

3. 根目录下创建`craco.config.js`

4. craco.config.js配置

```js
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};

```

5. 使用

```js
import "@/asserts/css/reset.css";
```

6. npm start运行

# 3. 路由相关

```js
npm install react-router-dom@5.2.0 --save

// react-router-config可以将路由统一管理
npm install react-router-config --save
```

# 工具

```js
rmc 快捷键
```