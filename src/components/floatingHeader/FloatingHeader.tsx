import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./style.scss";

// NEDSCROLL => HÖJ

// UPPSCROLL => SÄNK

// AFTONBLADET / ARla

type Props = {
  hideHeader: boolean;
};

const FloatingHeader: React.FC<Props> = ({ hideHeader }) => {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  const [hide, setHide] = useState<boolean>();
  var booli = window.scrollY === 0;
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    //  console.log("scrollY", window.scrollY);
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      // console.log("xxxx", scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      // console.log("bool1", scrollY > lastScrollY)
      // console.log("bool2", scrollY >= 44)
      if (booli) {
        console.log("scrollY", window.scrollY);
        // setHide(false);
      }
      if (scrollY < 44) setHide(true)
      else setHide(scrollY >= lastScrollY && scrollY >= 44 ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    console.log("hide", hide);
  }, [hide]);

  return (
    <div className="headerWrapper">
      <div className="BLOCKER">

      </div>
      <div
        className={classNames("foo", {
          headerContainer: !hide,
          headerContainerHide: hide,
        })}
      >
        <div className="headerContentContainer">
          <div className="headerTitle">START</div>
          <Link to="/modaldisplay">Lets goooo</Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingHeader;
