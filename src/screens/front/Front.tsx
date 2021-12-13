import React, { useEffect, useState } from "react";
import FloatingHeader from "../../components/floatingHeader/FloatingHeader";

import "./style.scss";

const Front = () => {
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  /*
  useEffect(() => {
    window.addEventListener('scroll', () => console.log("scrolling"));

    return () => {
      window.removeEventListener('scroll', () => console.log("leaving"));
    }
  })
 */
  const elementScrollData = (value: any) => {
    console.log("elementScrollData ", value);
  };
  return (
    <div className="lol">
      <div className="headerWrapper"><div className="blocker"></div></div>
      
      <FloatingHeader hideHeader={true} />
      <div className="pageFiller"></div>
    </div>
  );
};

export default Front;
