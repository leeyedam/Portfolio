import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import moduLeft from "../../public/images/modu_1_left.png";
import moduRight from "../../public/images/modu_1_right.png";

function ModuProjectMain() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#e4e8ea",
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
        <Grid item xs={1}></Grid>
        <Grid item xs={4} sm={8} md={6.2}>
          <Image src={moduLeft} priority={true} />
        </Grid>
        <Grid item xs={0.1} sm={0.1} md={1}></Grid>
        <Grid item xs={2.2} sm={3} md={3}>
          <Image src={moduRight} priority={true} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ModuProjectMain;
