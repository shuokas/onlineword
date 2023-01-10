import React, { useEffect, useState } from "react";
import "./index.scss";
/*
 * 1. 排版固定（行间距，字体大小，）
 * 2. 回车控制换行，鼠标单击控制若新增则只能新增一行
 * 3.
 * 4.
 */
const Content = () => {
  const [rowList, setRowList] = useState(["init"]);
  useEffect(() => {
    console.log("我是公共输入窗体，输入完成后变成span-text等文本框");
    setRowList(["aaa", "bbb"]);
  }, []);

  const blurChangeFn = (e: any) => {
    console.log("blur", e.target.innerText);
  };
  const changeFn = (e: any) => {
    console.log("input", e.target.innerText);
  };
  const onKeyDownFn = (e: any) => {
    if (e.keyCode === 13) {
      console.log("onKeyDownFn", e.keyCode);
      console.log("rowList", ...rowList);

      setRowList([...rowList, ""]);
    }
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
          onKeyDown={onKeyDownFn}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
