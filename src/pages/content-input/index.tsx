import React, { useEffect, useState } from "react";
import "./index.scss";
/*
 * 1. 排版固定（行间距，字体大小，）
 * 2. 回车控制换行，鼠标单击控制若新增则只能新增一行
 * 3.
 * 4.
 */
const Content = () => {
  const [rowList, setRowList] = useState([1]);
  useEffect(() => {
    console.log("我是公共输入窗体，输入完成后变成span-text等文本框");
    setRowList([1, 2, 13, 4, 5, 6, 7, 11123, 24]);
  }, []);

  const blurChangeFn = (e: any) => {
    console.log(e);
  };
  const changeFn = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      {rowList?.map((item, i) => (
        <div
          suppressContentEditableWarning
          contentEditable="true"
          className="contentInput"
          key={i}
          onBlur={blurChangeFn}
          onInput={changeFn}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
