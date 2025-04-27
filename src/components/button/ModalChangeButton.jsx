import { Button } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import { TvOff } from "@mui/icons-material";
import { useState } from "react";

const ModalChangeButton = ({ modal, onClick }) => {
  const buttonStyle = {
    position: "absolute",
    right: 40,
    bottom: 40,
    color: "white",
    fontSize: 32,
  };
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "relative",
        borderRadius: 50,
        width: 200,
        height: 200,
        background: "rgba(255,255,255,0.5)",
      }}
    >
      {modal ? <TvOff sx={buttonStyle} /> : <TvIcon sx={buttonStyle} />}
    </Button>
  );
};

export default ModalChangeButton;
