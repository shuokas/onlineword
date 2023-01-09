import React, { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    console.log(window.location.pathname);
    console.log(111);
  }, []);

  return <div>我是content文件内容</div>;
};

export default Content;
