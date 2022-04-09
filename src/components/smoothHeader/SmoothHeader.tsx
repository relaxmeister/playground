import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./style.scss";

const SmoothHeader: React.FC = () => {
    const [scrollDir, setScrollDir] = useState<"scrolling down" | "scrolling up">("scrolling down");

    const [hide, setHide] = useState<boolean>(false);
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
            //console.log("bool1", scrollY > lastScrollY)
            // console.log("bool2", scrollY >= 44)
            console.log("Y", scrollY);
            if (booli) {
                console.log("scrollY", window.scrollY);
                // setHide(false);
            }
            if (scrollY < 60) setHide(false)
            else setHide(scrollY >= lastScrollY && scrollY >= 60 ? true : false);
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

        // console.log(scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <div className={classNames("smoothHeader flex has-shadow", {
            "is-hidden": hide,
            "direction-up": scrollDir === "scrolling up",
            "direction-down": scrollDir === "scrolling down",
        })}>
            <div className="headerTitle">START</div>
            <Link to="/modaldisplay">Lets goooo</Link>
        </div >
    );
};

export default SmoothHeader;
