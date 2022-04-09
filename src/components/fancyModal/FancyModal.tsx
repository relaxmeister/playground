import React from "react";
import ModernModal from "../modernModal/ModernModal";

import "./style.scss";

interface Hej {
  openModal: boolean;
  onRequestClose: () => void;
}

const FancyModal: React.FC<Hej> = ({ openModal, onRequestClose }) => {
  const CONTAINER_HEIGHT = `calc(325px)`;
  return (
    <ModernModal
      openModal={openModal}
      onRequestClose={onRequestClose}
      shader
      onEscape
    >
      <div className="fancyModalContainer" style={{ height: CONTAINER_HEIGHT }}></div>
    </ModernModal>
  );
};

export default FancyModal;
