import React, { useRef } from "react";
import classNames from "classnames";

import "./style.scss";

interface ModalContentProps {
  openModal: boolean;
  onRequestClose: () => void;
  shader?: boolean;
  onEscape?: boolean;
  outsideModalClick?: boolean;
}

const ModernModal: React.FC<ModalContentProps> = ({
  openModal,
  onRequestClose,
  shader,
  onEscape,
  outsideModalClick,
  children,
}) => {
  const wrapperRef = useRef(null);

  const closeOnEscape = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.keyCode === 27) {
      onRequestClose();
    }
  };

  const closeOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === wrapperRef.current) {
      onRequestClose();
    }
  };

  return (
    <>
      {openModal ? (
        <div
          className={classNames("modalWrapperModern", {
            modalShader: shader,
          })}
          onKeyDown={
            onEscape
              ? (e: React.KeyboardEvent<HTMLDivElement>) => closeOnEscape(e)
              : undefined
          }
          aria-hidden="true"
          tabIndex={-1}
        >
          <div
            className="modalContentModern"
            aria-hidden="true"
            ref={wrapperRef}
            onClick={
              outsideModalClick
                ? (e: React.MouseEvent<HTMLDivElement>) =>
                    closeOnOutsideClick(e)
                : undefined
            }
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModernModal;
