import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log(window.location.pathname);
    console.log(222);
  }, []);
  return <div>我是content文 header</div>;
};

export default Header;
