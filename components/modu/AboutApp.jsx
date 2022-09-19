import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Title = ({ children }) => {
  return (
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      color="#707070"
      marginLeft={4}
    >
      {children}
    </Typography>
  );
};

function AboutApp() {
  return (
    <Box paddingTop={8}>
      <Title>About app</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        각 나라의 수도의 현재 날씨와 시간별 날씨, 습도, 바람 등 한꺼번에 모아서
        볼 수 있는 <br />
        웹사이트입니다.
      </Typography>
      <Title>Skills</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        React / Zustand / Axios / MUI
      </Typography>
      <Title>Impression</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        그동안 강의를 들으며 많은 클론코딩 및 문서로 공부를 하다가 첫번째
        프로젝트를
        <br /> 진행하게 되었는데 API를 사용하여 정보를 불러오고 불러온 데이터를
        가공하는
        <br />
        실질적인 경험을 할 수 있었고, 상태관리 라이브러리는 Zustand 와 Redux
        중에서 고민하다가 좀 더 가벼운 프로젝트에 Zustand가 활용해 보기 좋을 것
        같아서 사용하였는데 좀 더 코드정리 및 최적화를 고려해 보는 것도 좋을 것
        같다고 생각했습니다.
      </Typography>
      <Title>Github</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        <a href="https://github.com/leeyedam/Modu_project1" target="blank">
          GITHUB 소스 보러가기
        </a>
      </Typography>
    </Box>
  );
}

export default AboutApp;
