import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import olrimpickPageIntro from "../../utils/data/olrimpick-page-intro";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AboutApp from "./AboutApp";

const theme = createTheme();
theme.card = {
  height: "200px",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
};

theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};

theme.typography.body1 = {
  fontSize: ".9rem",
  marginBottom: "3px",
  fontWeight: "500",
  "@media (min-width:600px)": {
    fontSize: ".9rem",
    fontWeight: "500",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    marginBottom: "2.5px",
    fontWeight: "500",
  },
};

function PageIntro() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3} sm={6} md={6}>
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={50}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
          >
            {olrimpickPageIntro.map((arr, i) => {
              return (
                <SwiperSlide key={i}>
                  <Card
                    sx={{
                      borderRadius: "25px",
                      backgroundColor: "#f5f5f5",
                      boxShadow: "none",
                    }}
                  >
                    <a href="https://olrimpick.netlify.app/" target="blank">
                      <CardMedia component="img" image={arr.img} alt="page" />
                    </a>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        color="#3e3e3e"
                        marginTop={4}
                        marginBottom={3}
                        marginLeft={1}
                      >
                        {arr.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        color="#1976d2"
                        marginLeft={1}
                      >
                        {arr.subTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        marginLeft={1}
                        marginBottom={6}
                      >
                        {arr.intro}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
        <Grid item xs={3} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: "25px",
              backgroundColor: "#f1e9fa",
              boxShadow: "none",
            }}
          >
            <AboutApp />
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default PageIntro;
