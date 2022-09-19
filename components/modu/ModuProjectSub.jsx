import { Box, Grid } from "@mui/material";
import React from "react";
import PageIntro from "./PageIntro";

function ModuProjectSub() {
  return (
    <Box
      id="modu"
      sx={{
        flexGrow: 1,
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        paddingTop: "50px",
        marginBottom: "30px",
      }}
    >
      <PageIntro />
    </Box>
  );
}

export default ModuProjectSub;
