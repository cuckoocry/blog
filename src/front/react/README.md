---
title: React - 实践中学习
category:
  - 前端
tag:
  - React
---

::: info 

跟着教程一步一步来，以下是精简的重要笔记。


官网有详尽的教程：[中文官网：https://zh-hans.react.dev/learn/importing-and-exporting-components](https://zh-hans.react.dev/learn/importing-and-exporting-components)

[学习教程：https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

[代码：（GitHub）：https://github.com/cuckoocry/moz-todo-react](https://github.com/cuckoocry/moz-todo-react)

从一个待办清单功能开始学习`react`。

:::

## 1、开始一个react项目


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


## 2、开始我们的 React 待办清单

::: tip
任务：是在 React 中创建一个概念验证——一个允许用户添加、编辑和删除他们想做的任务的应用程序，并且在不删除任务的情况下将其标记为完成。

功能：
- 读取任务清单。
- 使用鼠标或键盘，添加一个任务。
- 使用鼠标或键盘，将任何任务标记为已完成。
- 使用鼠标或键盘，删除任何任务。
- 使用鼠标或键盘，编辑任何任务。
- 查看一个特定的任务子集：所有的任务、仅活动中的任务，或只有已完成的任务。
:::

### App.js

复制以下片段到你的剪贴板，然后粘贴到 App.js 中，使其取代现有的 App() 函数：

```js

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
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
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

```

## 组件化我们的`React App`

::: tip
 上面已经实现一个建议的样式页面
:::

但是会发现很多是可以组件化的，比如表单，待办清单的`li`，切换标签。

### 什么是组件？

- 如果它在程序里看起来是个明显的“块”，那它可能是个组件。
- 如果它在程序里经常会被复用，那它可能是个组件。

> 记住，组件要么是明显的 `UI` 片段，要么是重复使用的 `UI` 片段，或者两者都是




1. 在自定义文件夹`components`下面新建一个js文件`Todo.js`,然后从无序列表中复制第一个` <li>` 并将其粘贴到 `Todo.js`，
代码看起来像这样：

```js

import React from "react";

export default function Todo() {
 return (
         <li className="todo stack-small">
          <div className="c-cb">
           <input id="todo-0" type="checkbox" defaultChecked={true} />
           <label className="todo-label" htmlFor="todo-0">
            Eat
           </label>
          </div>
          <div className="btn-group">
           <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
           </button>
           <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
           </button>
          </div>
         </li>
 );
}


```
2. 使用：在`App.js`文件中将组件引用进来。导入组件之后，你可以调用 `<Todo /> `组件来替换 `App.js` 中的所有 `<li>`。你的 `<ul>` 看起来应该像这样：

```js
<ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
 <Todo />
 <Todo />
 <Todo />
</ul>

```
> 当然，此时是重复的三个清单。所以需要制作不同的 `<Todo /> `。

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
        <div></div>
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