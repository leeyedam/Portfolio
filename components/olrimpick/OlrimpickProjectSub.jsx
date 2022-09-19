import { Box, Grid } from "@mui/material";
import React from "react";
import PageIntro from "./PageIntro";

function OlrimpickProjectSub() {
  return (
    <Box
      id="olrimpick"
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

export default OlrimpickProjectSub;
