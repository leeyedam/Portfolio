import {
  Box,
  Card,
  CardContent,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import bg from "../public/images/bg3.JPG";

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

theme.typography.body2 = {
  fontSize: ".8rem",
  "@media (min-width:600px)": {
    fontSize: ".8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

const Title = ({ children }) => {
  return (
    <Typography
      variant="h5"
      component="div"
      color="#1d48cc"
      marginTop={4}
      marginBottom={2}
      marginLeft={2}
    >
      {children}
    </Typography>
  );
};

const SubTitle = ({ children }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      marginLeft={2}
      marginRight={2}
      marginBottom={5}
    >
      {children}
    </Typography>
  );
};

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="about"
        sx={{
          flexGrow: 1,
          // backgroundColor: "#ebebeb",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "25px",
                backgroundColor: "#e9f7fa",
                minHeight: 300,
                maxHeight: 600,
                boxShadow: "none",
                backgroundImage: bg,
              }}
            >
              <Image src={bg} objectFit="cover" alt="bg" />
            </Card>
          </Grid>
          <Grid item xs={3} sm={6} md={6}>
            <Title>어떤 개발자인가</Title>
            <SubTitle>
              모던함을 추구하는 개발자입니다. 시각적인 부분과 코드의 짜임새
              모두가 간결한 것을 추구하고 화려해 보이지는 않지만 모두가 사용할
              때 편리함을 느끼고 어려움과 군더더기 없는 ui/ux를 제공하는 걸
              선호합니다.
            </SubTitle>
            <Title>앞으로 어떤 개발자가 되고싶은가</Title>
            <SubTitle>
              견고하고 깔끔한 코드를 짤 수 있는 개발자가 되고 싶습니다. 아직은
              최적화를 완벽하게 구현하지는 못하지만 반복되는 코드나 비효율적인
              코드를 최적화할 수 있도록 공부하는 개발자가 되고 싶습니다.
            </SubTitle>
            <Title>앞으로의 한걸음</Title>
            <SubTitle>
              강의를 들으며 공부했던 nextJS와 typescript를 사용하여 올림픽
              웹사이트를 마이그레이션 진행하는걸 계획하고 있습니다.
            </SubTitle>
            <Title>Skills</Title>
            <SubTitle>
              Javascript / Html / Css(Scss) / React / Typescript / NextJs /
              Redux / MUI / Styled-components / Git / Vercel / Heroku / Netlify
            </SubTitle>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AboutMe;
