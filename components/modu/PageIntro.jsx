import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import moduPageIntro from "../../utils/data/modu-page-intro";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AboutApp from "./AboutApp";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
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
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
          >
            {moduPageIntro.map((arr, i) => {
              return (
                <SwiperSlide key={i}>
                  <Card
                    sx={{
                      borderRadius: "25px",
                      backgroundColor: "#f5f5f5",
                      boxShadow: "none",
                    }}
                  >
                    <CardActionArea>
                      <a
                        href="https://modu-project1.vercel.app/"
                        target="blank"
                      >
                        <CardMedia component="img" image={arr.img} alt="page" />
                      </a>
                    </CardActionArea>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        color="#3e3e3e"
                        marginTop={4}
                        marginBottom={2}
                        marginLeft={1}
                      >
                        {arr.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        marginLeft={1}
                        marginBottom={5}
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
              backgroundColor: "#e9f7fa",
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
