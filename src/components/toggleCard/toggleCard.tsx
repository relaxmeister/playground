import React from "react";
import classNames from "classnames";

import "./style.scss";

type Props = {
  lol: boolean;
};

const ToggleCard: React.FC<Props> = ({ lol }) => {
  return (
    <div
      className={classNames({
        toggleCardHidden: !lol,
        toggleCard: lol,
      })}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque
        rerum eligendi obcaecati expedita laboriosam cum repellat, dignissimos
        reprehenderit tempora modi nam, laborum adipisci perferendis harum totam
        dolore et. Iure? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aliquam atque rerum eligendi obcaecati expedita laboriosam cum
        repellat, dignissimos reprehenderit tempora modi nam, laborum adipisci
        perferendis harum totam dolore et. Iure? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aliquam atque rerum eligendi obcaecati
        expedita laboriosam cum repellat, dignissimos reprehenderit tempora modi
        nam, laborum adipisci perferendis harum totam dolore et. Iure?
      </p>
    </div>
  );
};

export default ToggleCard;
