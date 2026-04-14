import React from "react";
import { Modal, BG } from "./styles";

const ModalComponent = ({ children }) => {
  return (
    <Modal>
      {children}
      <BG />
    </Modal>
  );
};

export default ModalComponent;
