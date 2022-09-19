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
    <Box marginTop={8}>
      <Title>About app</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        코로나로 인해 자주 못 만나고, 바쁜 일상 때문에 안부 묻기가 혹시
        어려우셨나요? <br />
        서로 시간을 내서 대화를 하기 어렵다면 당신의 근황을 궁금해합니다라는
        <br />
        마음을 담아 근황 묻기를 이용해 보세요! 상대방의 근황 알림 창에 차곡차곡
        쌓여서
        <br /> 상대방이 시간이 될 때 확인하고 글이나 사진을 업로드하는
        사이트입니다.
      </Typography>
      <Title>Skills</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        React / Redux / Redux-thunk / Stream / Styled-components
        <br /> / MUI / Universal-cookie
      </Typography>
      <Title>Optimization</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        반복되는 코드를 hook으로 만들어서 코드 재사용을 하였고,
        <br /> 여러곳에서 사용되는 팔로워리스트와 팔로우리스트를 리덕스를
        활용하여
        <br />
        전역적으로 상태관리를 하였습니다.
      </Typography>
      <Title>Github</Title>
      <Divider />
      <Typography variant="body2" color="text.secondary" margin={4}>
        <a href="https://github.com/leeyedam/Olrimpick_client" target="blank">
          GITHUB 소스 보러가기
        </a>
      </Typography>
    </Box>
  );
}

export default AboutApp;
