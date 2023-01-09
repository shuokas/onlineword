import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // 严格模式会打印两次
  /*
  1.这是 React18 才新增的特性。
  2.仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
    生产环境("production")模式下和原来一样，仅执行一次。
  3.之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。
    为了帮助开发者提前发现重复挂载造成的 Bug 的代码。 
    同时，也是为了以后 React的新功能做铺垫。 
    未来会给 React 增加一个特性，允许 React 在保留状态的同时，能够做到仅仅对UI部分的添加和删除。
    让开发者能够提前习惯和适应，做到组件的卸载和重新挂载之后， 重复执行 useEffect的时候不会影响应用正常运行。
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
