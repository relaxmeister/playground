import React, { useEffect, useState } from "react";
import SmoothCollapse from "react-smooth-collapse";
import FloatingHeader from "../../components/floatingHeader/FloatingHeader";
import SmoothHeader from "../../components/smoothHeader/SmoothHeader";
import ToggleCard from "../../components/toggleCard/toggleCard";

import "./style.scss";

const Front = () => {
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [showText2, setShowText2] = useState<boolean>(false);
  const [showText3, setShowText3] = useState<boolean>(false);
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
      <div className="headerWrapper">
        <div className="blocker"></div>
      </div>
      <SmoothHeader />
      <button onClick={() => setShowText(!showText)}>Toggle1</button>
      <button onClick={() => setShowText2(!showText2)}>Toggle2</button>
      <button onClick={() => setShowText3(!showText3)}>Toggle3</button>
      <section className="sectionBox">
        <div className="smoothBoxesContainer flex horizontal wrap widthDefault">
          <div className="boxie">
            <SmoothCollapse expanded={showText} className="m-b-20">
              <div className="contents">
                <div>You did it!</div>
                <div>
                  The contents of the collapsed region is persisted.
                  SmoothCollapse works with contents of varying heights. Try
                  typing text in the following text area, resizing the text
                  area, and toggling hiding and showing this region.
                </div>
                <textarea defaultValue="Lorem ipsum dolor sit amet..." />
              </div>
            </SmoothCollapse>
          </div>
          <div className="boxie">
            <SmoothCollapse
              expanded={showText2}
              heightTransition=".5s ease"
              className="m-b-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              atque rerum eligendi obcaecati expedita laboriosam cum repellat,
              dignissimos reprehenderit tempora modi nam, laborum adipisci
              perferendis harum totam dolore et. Iure? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquam atque rerum eligendi
              obcaecati expedita laboriosam cum repellat, dignissimos
              reprehenderit tempora modi nam, laborum adipisci perferendis harum
              totam dolore et. Iure? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam atque rerum eligendi obcaecati expedita
              laboriosam cum repellat, dignissimos reprehenderit tempora modi
              nam, laborum adipisci perferendis harum totam dolore et. Iure?
            </SmoothCollapse>
          </div>
          <div className="boxie">
            <SmoothCollapse expanded={showText3} className="m-b-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              atque rerum eligendi obcaecati expedita laboriosam cum repellat,
              dignissimos reprehenderit tempora modi nam, laborum adipisci
              perferendis harum totam dolore et. Iure?
            </SmoothCollapse>
          </div>
        </div>
      </section>
      ANNNAN CONTENT
      <div className="pageFiller"></div>
    </div>
  );
};

export default Front;
