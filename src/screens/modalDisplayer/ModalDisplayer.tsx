import React, { useState } from "react";
import FancyModal from "../../components/fancyModal/FancyModal";

const ModalDisplayer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      ModalDisplayer
      <button onClick={() => setShowModal(!showModal)}>ToggleModal</button>
      <FancyModal
        openModal={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      />
    </div>
  );
};

export default ModalDisplayer;
