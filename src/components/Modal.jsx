import { useState } from "react";
import { Box } from "@mui/material";
import ModalChangeButton from "./Button/ModalChangeButton";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const onClickModal = () => {
    setModal(!modal);
  };
  return (
    <Box sx={{ position: "absolute", top: -100, left: -100 }}>
      <ModalChangeButton modal={modal} onClick={onClickModal} />
    </Box>
  );
};

export default Modal;
