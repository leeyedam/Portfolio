import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import olrimpickRight from "../../public/images/olrimpick_1_right.png";
import olrimpickLeft from "../../public/images/olrimpick_1_left_1.png";

function OlrimpickProjectMain() {
  return (
    <Box
      id="main"
      sx={{
        flexGrow: 1,
        backgroundColor: "#ebebeb",
        height: "100vh",
        display: "flex",
      }}
    >
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} sm={0.1} md={0.7}></Grid>
        <Grid item xs={3} sm={4} md={3.3}>
          <Image src={olrimpickLeft} />
        </Grid>
        <Grid item xs={2} sm={0.1} md={1}></Grid>
        <Grid item xs={4} sm={8} md={7}>
          <Image src={olrimpickRight} priority />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OlrimpickProjectMain;
