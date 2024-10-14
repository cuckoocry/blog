---
title: React 入门
category:
  - 前端
tag:
  - React
---

::: notice
跟着教程一步一步来，以下是精简的重要笔记。

[中文官网](https://zh-hans.react.dev/learn/importing-and-exporting-components)

> 官网也有详尽的使用例子

[学习教程](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

[代码：（GitHub）](https://github.com/cuckoocry/moz-todo-react)

> 第四章开始没有中文翻译

:::

## 开始一个react项目


前提条件：已经安装好`Node.js`

创建项目：

```shell
npx create-react-app moz-todo-react
```
启动项目：

```shell
npm start
```

总结：

在 React 中：

- 组件可以 `import` 它们需要的模块，并且在文件底部将自身 `export`，以让其他组件使用。
- 组件是用 `PascalCase` 也就是帕斯卡命名法命名的。
- 通过把变量放在大括号中，你可以读取 `JSX` 的变量，如`{so}`
- 一些 `JSX` 属性与 `HTML` 属性不相同，这样就不会与 `JavaScript` 的保留字相冲突，比如说，在 `HTML` 中的 `class` 会在 `JSX` 中转译为 `className`。注意这些属性都是驼峰式命名的。
- `Props` 就像属性一样写在组件里，并且传入组件。

App.js

```js
import logo from './logo.svg';
import './App.css';

// App 方法返回一个 JSX 表达式，这个表达式定义了浏览器最终要渲染的 DOM。
// props  参数
function App(props) {

  // 自定义变量
  const subject = props.subject;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello ,{subject}！
        </p>
        
      </header>
    </div>
  );
}

// export default App 语句使得 App 组件能被其他模块使用。
export default App;

```
index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="撄宁"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```


## 开始我们的 React 待办清单

> 任务：是在 React 中创建一个概念验证——一个允许用户添加、编辑和删除他们想做的任务的应用程序，并且在不删除任务的情况下将其标记为完成。



## 组件化我们的`React App`

- 如果它在程序里看起来是个明显的“块”，那它可能是个组件。
- 如果它在程序里经常会被复用，那它可能是个组件。

> 记住，组件要么是明显的 UI 片段，要么是重复使用的 UI 片段，或者两者都是


总结：如何拆解一个组件。

1. 在自定义文件夹下面新建一个js文件。`Todo.js`
```js
import React from "react";

export default function Todo() {
  return (
    // …内容
  );
}

```
2. 使用：在`App.js`文件中将组件引用进来。然后需要用到组件的地方直接放进去。

```js
import Todo from "./components/Todo";


// 使用

<Todo />

```

3. 参数传递
发送方：在组件直接定义参数

> 布尔值需要用`{}`包起来，否则就是字符串

```js
<Todo name="Eat" completed={true} id="todo-0" />
```
用`props`接收参数
```js
export default function Todo(props) {
    console.log(props)
    return (
        // …内容
    );
}
```

4. 完整示例

```js
// 1、index.js 定义一组变量 并传给 App.js

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
];

root.render(
    <React.StrictMode>
        <App tasks={DATA}/>
    </React.StrictMode>
);

// 2、App.js 接收，迭代处理参数，组装组件。（相同组件多个参数，迭代简化）
const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));

// 3、直接在代办任务（用到三个li地方）

{taskList}

```



## React 交互性：事件和状态 (React interactivity: Events and state)

在我们的组件计划制定好之后，现在是时候开始将我们的应用从完全静态的界面更新为一个实际允许我们交互和更改内容的界面了。在这篇文章中，我们将这样做，一路深入探讨事件和状态，最终实现一个我们可以成功添加和删除任务，以及切换任务完成状态的应用。

目标： 学习如何在React中处理事件和状态，并使用这些知识开始使案例研究应用具有交互性。

### 处理事件 (Handling events)

> more：https://zh-hans.react.dev/learn/responding-to-events

以`Form.js`为例：点击`Add`按钮的时候将会触发时间。
```js
function handleSubmit(event) {
    event.preventDefault();
    alert("Hello, world!");
}



function Form(props) {
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

```

### 回调属性

### 持久化并更改数据与状态

## React 交互性：编辑、过滤、条件渲染

## 辅助功能  （键盘聚焦）