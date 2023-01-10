import React, { useEffect } from "react";
import ContentInput from "../content-input";
import "../../common/css/init.scss";

/*
 * 1. 一个公共输入窗体
 * 2. 输入完成后成为具有许多属性的固定体
 * 3. 再次点击时触发编辑状态，使用公共输组件
 * 4. TODO：选择文本后菜单栏的封装
 */
const Content = () => {
  useEffect(() => {
    console.log(window.location.pathname);
    console.log(111);
  }, []);

  return (
    <div>
      <ContentInput />
    </div>
  );
};

export default Content;
