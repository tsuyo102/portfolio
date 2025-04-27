import { useState } from "react";
import { Box } from "@mui/material";
export const IconImage = ({ size, src, alt }) => {
  return (
    <Box
      component="img"
      src={`${src}`}
      alt={alt || ""}
      sx={{
        width: size || 20,
        height: size || 20,
        objectFit: "cover",
      }}
    />
  );
};
export const BackGroundImage = ({ src, alt }) => {
  return (
    <Box
      component="img"
      src={`${src}`}
      alt={alt || ""}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
};
