import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import GuaranteeCompanySlider from "../slider/GuaranteeCompanySlider";
import Select from "../score/Select";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../common/Footer";
import LiveSoccerMobile from "./LiveSoccerMobile";
import { DetailDataSoccer, IframeDataSoccer, LineUpDataSoccer, RankDataSoccer } from "../apis/api";
import { useLocation } from "react-router-dom";
import moment from "moment";
// import io from 'socket.io-client'


const Wrapper = styled.div`
  width: 100%;
  // @media (max-width: 최고화질 Ax) {
  @media (max-width: 720px) {
    display: none;
  }
`;

const AssuranceContainer = styled.div`
  height: fit-content;
  padding: 0 45px 0 43px;
  margin-bottom: 40px;
  margin-top: 44px;
  @media (max-width: 1100px) {
    padding: 0 30px 0 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 720px) {
    padding: 0;
    margin-bottom: calc((40 / 1280) * 100vh);
    height: max-content;
    .title {
      padding: 0 calc((40 / 720) * 100vw);
    }
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div .icon {
    width: 20px;
    height: auto;
    @media (max-width: 최고화질 Ax) {
      width: calc((35 / 720) * 100vw);
    }
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.5px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  @media (max-width: 1100px) {
    font-size: 22px;
  }
  @media (max-width: 최고화질 Ax) {
    font-size: calc((28 / 720) * 100vw);
  }
`;

const MoreDetails = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.38px;
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
  @media (max-width: 1100px) {
    margin-right: 3px;
    font-size: 22px;
  }
  @media (max-width: 최고화질 Ax) {
    margin-right: calc((3 / 720) * 100vw);
    font-size: calc((22 / 720) * 100vw);
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  iframe{
    display:block; 
    width:100%; 
    height: 100%;
  }

  ${(props) =>
    props.fullScreen &&
    css`
      height: calc(100vh - 46px);
    `}
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 171px;
  background-color: #2a2c2b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #161717;
  * {
    font-size: 16px;
  }

  img {
    width: 16px;
    height: 18px;
    margin-right: 10px;
  }

  .top {
    padding: 0 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bottom {
    padding: 0 50px;
    height: 50px;
    display: flex;
    align-items: center;

    > .info {
      width: 620px;
      height: 100%;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        * {
          margin: 0;
        }
      }
    }
    .attack {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .possession {
    font-size: 18px;
  }
`;

const InfoBar = styled.div`
  width: 227px;
  height: 8px;
  border-radius: 2px;
  background-color: #000;
  margin-left: ${(props) => (props.type === "left" ? "10px" : "36px")};
  margin-right: ${(props) => (props.type === "left" ? "36px" : "10px")};
  position: relative;
  > div {
    position: absolute;
    border-radius: 2px;
    width: ${(props) => props.width}%;
    background-color: ${(props) =>
      props.type === "left" ? "#07ac40" : "#ffba5a"};
    z-index: 1;
    height: 100%;
    right: ${(props) => (props.type === "left" ? "0" : "none")};
    left: ${(props) => (props.type === "left" ? "none" : "0")};
  }
`;

const Card = styled.div`
  width: 16px;
  height: 22px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.color === "yellow" ? "#ffba5a" : "#e74c5b"};
  margin-right: 10px;
`;

const VerticalBar = styled.div`
  width: 1px;
  height: 80%;
  object-fit: contain;
  opacity: 0.2;
  background-color: #fff;
  margin: 0 15px;
`;

const TeamContainer = styled.div`
  width: 100%;
  height: 247px;
  background-color: #2a2c2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > span {
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #ccc;
  }
  > .middle {
    width: 805px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .team {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0;

      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.5px;
      text-align: center;
      color: #fff;
      .rank {
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.34px;
        text-align: center;
        color: #fe7300;
      }
    }
    img {
      width: 40px;
    }
    > .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        width: 72px;
        height: 26px;
        border-radius: 6px;
        background-color: #19793a;

        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.32px;
        text-align: center;
        color: #fff;
        margin-bottom: 9px;
      }
      span {
        object-fit: contain;
        opacity: 0.5;
        font-family: "Roboto", sans-serif;

        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const TeamScore = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.8px;
  text-align: center;
  color: ${(props) => (props.active ? "#f5c703" : "#fff")};
`;

const ButtonContainer = styled.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  .text {
    height: 100%;
    line-height: 30px;
  }

  :hover {
    filter: brightness(1.2);
  }
  > :nth-child(1) {
    width: 107px;
    height: 32px;
    border-radius: 6px;
    background-color: #be4853;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hot {
    width: 13px;
    margin-right: 5px;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding: 0 50px;
`;

const ContentsTabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #303231;
  margin-bottom: 39px;
  > div {
    display: flex;
  }
  img {
    width: 35px;
    margin-left: auto;
    cursor: pointer;
  }
`;

const ContentsTab = styled.div`
  width: 130px;
  height: 49px;
  background-color: ${(props) => (props.active ? "#3b3c3b" : "#303231")};
  margin-right: 1px;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  color: ${(props) => (props.active ? "#fff" : "#999999")};
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${(props) => !props.active && "none"};
`;
const ContentNone = styled.div`
  width: 100%;
  height: 401px;
  background-color: #2c2d2d;
  position : relative;
`;

const ContentNoneContainer =styled.div`
  position : absolute;
  hegiht : 300px;
  width : 170px;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%);
`;

const ContentNoneImgBox = styled.div`
  position : absolute;
  width : 100%;
  margin : 0 auto;
  bottom : 0;
  text-align: center;
`;
const ContentNoneTextBox = styled.div`
  position : absolute;
  width : 100%;
  top : 0;
  margin : 0 auto;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.75;
  color: rgba(255, 255, 255, 0.5)
`;

const ContentTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin-bottom: 11px;

  .title {
    font-size: 20px;
    letter-spacing: -0.4px;
    text-align: center;
    color: #2196f5;
    > span {
      font-size: 20px;
      letter-spacing: -0.4px;
      text-align: center;
      color: #fff;
      margin-left: 6px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    position: relative;
    > span {
      margin-right: 14px;

      font-size: 15px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.3px;
      text-align: center;
      color: #fff;
      display: flex;
      align-items: center;
    }
  }
`;

const Table1 = styled.table`
  display : inline-block;
  width: 100%;
  margin: 0;
  object-fit: contain;
  margin-bottom: 20px;
  border-spacing: 1px;
  overflow:hidden;
  height : ${(props) => ( props?.length < 5 ? "auto" :( props?.slect === 5 ? "300px" : (props?.slect === 10 ?  "550px" : (props?.slect === 15 && "800px"))))} ;

  th,
  td {
    height: 50px;
    /* border: 1px solid #202221; */
  }

  th {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #ccc;
  }
  thead {
    .one {
      width: 243px;
    }
    .two {
      width: 141px;
    }
    .three {
      width: 303px;
    }
    .four {
      width: 118px;
    }
    .five {
      width: 303px;
    }
    .six {
      width: 137px;
    }
  }
`;
const Table2 = styled.table`
  display : inline-block;
  width: 100%;
  margin: 0;
  object-fit: contain;
  margin-bottom: 20px;
  border-spacing: 1px;
  overflow:hidden;
  height : ${(props) => ( props?.length < 5 ? "auto" :( props?.slect === 5 ? "300px" : (props?.slect === 10 ?  "550px" : (props?.slect === 15 && "800px"))))} ;
  th,
  td {
    height: 50px;
    /* border: 1px solid #202221; */
  }

  th {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #ccc;
  }
  thead {
    .one {
      width: 243px;
    }
    .two {
      width: 141px;
    }
    .three {
      width: 303px;
    }
    .four {
      width: 118px;
    }
    .five {
      width: 303px;
    }
    .six {
      width: 137px;
    }
  }
`;

const Table3 = styled.table`
  display : inline-block;
  width: 100%;
  margin: 0;
  object-fit: contain;
  margin-bottom: 20px;
  border-spacing: 1px;
  overflow:hidden;
  height : ${(props) => ( props?.length < 5 ? "auto" :( props?.slect === 5 ? "300px" : (props?.slect === 10 ?  "550px" : (props?.slect === 15 && "800px"))))} ;

  th,
  td {
    height : 50px;
    /* border: 1px solid #202221; */
  }

  th {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #ccc;
  }
  thead {
    .one {
      width: 243px;
    }
    .two {
      width: 141px;
    }
    .three {
      width: 303px;
    }
    .four {
      width: 118px;
    }
    .five {
      width: 303px;
    }
    .six {
      width: 137px;
    }
  }
`;
const ResultCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

const Tbody = styled.tbody`
  background-color: #2a2c2b;
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    color: #2196f5;
  }
  &:hover {
    background-color: #424342;
  }
  .score {
    color: ${(props) => (props.type === "lose" ? "#e74c5b" : "")};
    color: ${(props) => (props.type === "draw" ? "#ffa42d" : "")};
    color: ${(props) => (props.type === "win" ? "#07ac40" : "")};
    letter-spacing: 3px;
  }
  ${ResultCircle} {
    background-color: ${(props) => (props.type === "lose" ? "#e74c5b" : "")};
    background-color: ${(props) => (props.type === "draw" ? "#ffa42d" : "")};
    background-color: ${(props) => (props.type === "win" ? "#07ac40" : "")};
  }
`;

// 리그명 따로 빼서 호버시 같이 css 변경 되도록 수정
const League = styled.td`
  background-color: #303231;
  ${Tbody}:hover & {
    background-color: #424342;
  }
` 
const SummaryText = styled.div`
  width: 100%;

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #fff;
  margin-bottom: 40px;
  .win {
    color: #07ac40;
  }
  .draw {
    color: #ffa42d;
  }
  .lose {
    color: #e74c5b;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
`;

const CheckBoxOn = styled.div`
  background-image: url("/images/popup/Check.png");
  background-size: contain;
  width: 16px;
  height: 16px;
  @media (max-width: 최고화질 Ax) {
    width: calc((34 / 720) * 100vw);
    height: calc((34 / 1280) * 100vh);
  }
`;

const CheckBoxOff = styled.div`
  width: 16px;
  height: 16px;
  border: 1.5px solid #000;
  border-radius: 5px;
  background-color: #fff;
  @media (max-width: 최고화질 Ax) {
    width: calc((34 / 720) * 100vw);
    height: calc((34 / 1280) * 100vh);
  }
`;

const CheckText = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  color: #fff;
  margin-left: 7px;
  @media (max-width: 최고화질 Ax) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 46px;
  background-color: rgba(0, 0, 0, 0.9);
  padding-left: 21px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

const OptionTeam = styled.div`
  // width: 275px;
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #ccc;

  > span {
    width : auto;
    display : inline-block;
    height: 100%;
    line-height: 24px;
  }
  > img {
    margin : 0 5px;
    height: 100%;
  }
  > div {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0.8px;
    text-align: center;
    color: #ccc;
  }
`;

const OptionSelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  > * {
    margin-left: 10px;
  }
`;

const RankingTabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const RankingTab = styled.div`
  width: 55px;
  height: 34px;
  border-radius: 6px;
  background-color: ${(props) => props.active && "#19793a"};
  margin-bottom: 20px;
  cursor: pointer;

  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${(props) => (props.active ? "#fff" : "#999999")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RankingTable = styled.table`
  width: 100%;

  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;

  & {
    border-spacing: 0px;
  }

  th {
    background-color: #3b3c3b;
    font-weight: 500;
  }

  td {
    img {
      width: 17px;
    }
    border-top: 1px solid #202221;
  }

  th,
  td {
    height: 50px;
  }

  tr {
    > :nth-child(1) {
      width: 53px;
    }
    > :nth-child(2) {
      width: 35px;
    }
    > :nth-child(3) {
      width: 800px;
      text-align: start;
      padding-left: 35px;
    }
    > :nth-child(5) {
      color: #06ce4b;
    }
    > :nth-child(6) {
      color: #ffa42d;
    }
    > :nth-child(7) {
      color: #e74c5b;
    }
  }
`;

const RankingTbody = styled.tbody`
  background-color: #303231;
  border-spacing: 1px;

  tr {
    background-color: #4e4f4e;
    image {
      background-size: 18px auto;
      background-position: center;
      background-repeat: no-repeat;
    }
    .point {
    }
    > :last-child {
      color: #2196f5;
      background-color: #4e4f4e;
    }
  }
`;

const Banner = styled.div`
  width: 353px;
  height: 85px;
  border-radius: 8px;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 39px;
  left: 21px;
  overflow: hidden;

  .contents {
    display: flex;
    align-items: center;

    padding: 0 9px 0 6px;
    height: 100%;
  }

  .image {
    width: 74px;
    height: 73px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 34px;
    }
    margin-right: 13px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-right: 25px;
    .title {
      font-family: "S-CoreDream-5Medium";
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.45px;
      color: #000;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .company {
      font-family: "Mont-DEMO";
      font-size: 14px;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      color: #999;
    }
  }
`;

const LearnMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 31px;
  border-radius: 4px;
  background-color: #099f3c;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
  color: #fff;
  cursor: pointer;
  :hover {
    filter: brightness(1.2);
  }
  :active {
    transform: scale(0.95);
  }
`;

const CloseButton = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.95);
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 12px;
  }
  cursor: pointer;
  :hover {
    filter: brightness(1.2);
  }
  :active {
    transform: scale(0.95);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  position: absolute;
  bottom: 2px;
`;

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 4px;
  object-fit: contain;
  background-color: #07ac40;
`;

const LineupTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
  margin-bottom: 20px;
  width: 100%;
`;

const LineupImageContainer = styled.div`
  width: 100%;
  height: 611px;
  background-color: #37840c;
  background-image: url("/images/watchinglive/playground.png");
  background-size: cover;
  position: relative;
  margin-bottom: 40px;
`;

const LineupTable = styled.table`
  width: 100%;
  margin-bottom: 100px;
  border-spacing: 1px;
  th,
  td {
    height: 50px;
  }

  th {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.32px;
    text-align: center;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    width: 50%;
    background-color: #303231;
  }
`;

const LineupTableHeadCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 26px;
  img {
    width: 20px;
    margin-right: 12px;
  }
`;

const LineupTableBodyCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  > :nth-child(1) {
    width: 18px;
    margin-right: 10px;

    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.32px;
    text-align: center;
    color: #fff;
  }

  > :nth-child(2) {
    width: 36px;
    height: 36px;
    border-radius: 25px;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    margin-right: 17px;
  }
  .red {
    width: 16px;
    height: 22px;
    border-radius: 3px;
    background-color: #e74c5b;
    margin-left: auto;
    margin-right: 19px;
  }
  .injury {
    width: 25px;
    height: 25px;
    border-radius: 6px;
    border: solid 1px rgb(221, 221, 221, 0.2);
    margin-left: auto;
    margin-right: 19px;
    background-image: url("/images/watchinglive/injury.png");
    background-position: center;
    background-size: cover;
  }
`;

const LineupTableTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  * {
    height: fit-content;
  }

  .title {
    font-size: 15px;
    color: #fff;
  }
`;

const TimeRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 26px;
  border-radius: 6px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
  ${(props) =>
    props.type === "before" &&
    css`
      background-color: #8c8c8c;
    `}
  ${(props) =>
    props.type === "delay" &&
    css`
      background-color: #0c72b9;
    `}
  ${(props) =>
    props.type === "cancel" &&
    css`
      background-color: #a92731;
    `}
  ${(props) =>
    props.type === "live" &&
    css`
      background-color: #19793a;
    `} 
  ${(props) =>
    props.type === "end" &&
    css`
      background-color: #515151;
    `}
`;
const VideoViewContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #000;
  position : relative;
`;

const VideoNone = styled.div`
  flex: auto;
  position : relative;
  width : 100%;
  height : 100%;
  img {
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50% , -50%);
  }
  .videoNoneBottom{
    position : absolute;
    right : 16px;
    bottom : 14px;
    width : auto;  
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    img {
      display : inline-block;
      position : relative;
      top : 8px;
      left : 8px;
      width : 13px;
      height : 13px;
    }
  }
  
  .videoNoneRight{
    position : absolute;
    top : 10px;
    right : 16px;
    background-color: #121312;
    width: 58px;
    height: 26px;
    color: rgba(255, 255, 255, 0.5);

    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: -0.28px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    img {
      display : inline-block;
      position : relative;
      top : 8px;
      left : 8px;
      width : 13px;
      height : 13px;
    }
  }
`;

const VideoView = styled.div`
  flex: auto;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
`;

const VideoViewInfo = styled.div`
  width: 100%;
  height: 36px;
  background-color: #2c2d2d;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VideoViewOption = styled.div`
  display: flex;
  width: 252px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ccc;
  }
  img {
    height: 14px;
    width: 14px;
  }
  div {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.7px;
    text-align: center;
    color: #ccc;
  }
`;

const VideoViewSelectContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  button {
    width: 71px;
    height: 25px;
    border-radius: 5px;
    background-color: #434444;

    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.26px;
    text-align: center;
    color: #ccc;
    border: 1px solid #202221;
  }
  button:active {
    transform: scale(0.95);
  }
`;

// 타임스탬프 값 받아서 뿌려주기
function getTimeStringSeconds(seconds){
  const dateFormat = moment(seconds * 1000).format('l');
  return dateFormat.replace(/\./g ,'/').slice(0 , 10)
  // return dateFormat.slice(0 , 10)
  // return JSON.stringify(dateFormat).replace(/\년,월,일/g , "")
  // var sampleTimestamp = new Date(seconds * 1000); 
  // return JSON.stringify(sampleTimestamp).slice(12, 17)
}

const LiveSoccer = ({
  setMobileMenu,
  mobileMenu,
  fullScreen,
  setFullScreen,
  multiModalToggle,
  setMultiModalToggle,
  footballMatchIdData,
  matchIdData,
  pageBasicData,
  sportsSocket,
  scoreSocket,
  nowTime
}) => {
  const [contentsTab, setContentsTab] = useState(1);
  const [check, setCheck] = useState({
    home: false,
    away: false,
  });
  const [selectOne, setSelectOne] = useState({
    open: false,
    text: 5,
    list: [5, 10, 15],
  });
  const [selectTwo, setSelectTwo] = useState({
    open: false,
    text: 5,
    list: [5, 10, 15],
  });
  const [selectThree, setSelectThree] = useState({
    open: false,
    text: 5,
    list: [5, 10, 15],
  });

  const [relay, setRelay] = useState({
    open: false,
    text: "그래픽중계",
    list: ["그래픽중계", "실시간중계"],
  });

  // 이렇게 나눈이유는 각 영상마다 화질값이 다르기 때문이다. 
  const [quality1, setQuality1] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });
  const [quality2, setQuality2] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });
  const [quality3, setQuality3] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });

  const [quality4, setQuality4] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });

  const [quality5, setQuality5] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });

  const [quality6, setQuality6] = useState({
    open: false,
    text: "화질선택",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });


  const [quality7, setQuality7] = useState({
    open: false,
    text: "테스트",
    list: ["최고화질 B", "최고화질 A", "테스트"],
  });

  const [multiView, setMultiView] = useState({
    open: false,
    text: "멀티뷰",
    list: ["기본(1화면)", "2멀티화면", "4멀티화면"],
  });

  const [rankingTab, setRankingTab] = useState(1);


  // // 여기에 재호출해ㅑㅇ함
  // useEffect(()=>{
  //   DetailDataSoccer(setFootballH2HData , matchIdData)
  // },[])
  const matchIdLocation = useLocation();

  const [footballH2HData, setFootballH2HData] = useState()
  // 랭크 데이터
  const [rankData, setRankData] = useState()
  // 라인업 데이터
  const [lineUpData, setLineUpData] = useState()
  // 경기상세 데이터
  const [iframeData, setIframeData] = useState()

  useEffect(()=>{
    if( matchIdLocation.pathname.split("/")[4] !== ""){
      DetailDataSoccer(setFootballH2HData , matchIdLocation.pathname.split("/")[4])
    }
  },[])
  
  useEffect(()=>{
    if( matchIdLocation.pathname.split("/")[4] !== ""){
      IframeDataSoccer(setIframeData ,  matchIdLocation.pathname.split("/")[4])
    }
  },[])

  useEffect(()=>{
    if( matchIdLocation.pathname.split("/")[4] !== ""  && contentsTab === 2){
      RankDataSoccer(setRankData , matchIdLocation.pathname.split("/")[4])
    }
  },[contentsTab])

  useEffect(()=>{
    if( matchIdLocation.pathname.split("/")[4] !== "" && contentsTab === 3){
      LineUpDataSoccer(setLineUpData ,  matchIdLocation.pathname.split("/")[4])
    }
  },[contentsTab])

  useEffect(()=>{
    if(iframeData && iframeData?.data?.live_status === 1){
      setRelay({ ...relay, text: "실시간 중계" });
      setQuality7({ ...quality7, text: "테스트" });
    }else if(iframeData && iframeData?.data?.live_status === 0 && iframeData?.data?.animation_status === 1){
      setRelay({ ...relay, text: "그래픽 중계" });
      setQuality7({ ...quality7, text: "테스트" });
    }else if(iframeData && iframeData?.data?.live_status === 0 && iframeData?.data?.animation_status === 0){
      setRelay({ ...relay, text: "그래픽 중계" });
      setQuality7({ ...quality7, text: "테스트" });
    }
  },[iframeData])

  // 이미지
  const pageBasicImgUrl = pageBasicData?.data?.homepage_info.img_cdn_domain 
  // 아이프레임
  const pageBasicIframeUrl = pageBasicData?.data?.homepage_info.iframe_domain 

  // stats 값 
  const [ updateStats , setUpdateStats] = useState()
  // 레드카드, 옐로우카드 등
  const [ updateScore , setUpdateScore] = useState()
  

  useEffect(()=>{
    if(scoreSocket !== undefined){
      // setUpdateStats(JSON.parse(updatedOSArray()))
      setUpdateScore(scoreSocket && JSON.parse(scoreSocket))
    }
  },[scoreSocket])
  
  
  const locations = useLocation();

  useEffect(()=>{
    if(sportsSocket !== undefined){
      // setUpdateStats(JSON.parse(updatedOSArray()))
      setUpdateStats(sportsSocket && JSON.parse(sportsSocket))
    }
  },[sportsSocket ])

  // useEffect(()=>{
  //     setUpdateStats("")
  // },[])
  return (
    <>
      <Wrapper>
        <VideoContainer fullScreen={fullScreen}>
          {/* <iframe src={pageBasicIframeUrl + "/player/main/live/?p=rest3&q=live3"}></iframe> */}
          {
            multiView.text === "멀티뷰" || multiView.text === "기본(1화면)" ?
            (iframeData?.data?.live_list[0] ?
              <iframe src={pageBasicIframeUrl + (quality7.text === "테스트" ?  iframeData?.data?.live_list[0]?.iframe_url : 
              (
                quality7.text === "최고화질 A" ?
                iframeData?.data?.live_list[1]?.iframe_url
                :
                (quality7.text === "최고화질 B" &&  iframeData?.data?.live_list[2]?.iframe_url)
              ))}></iframe>  
              :
              <VideoNone>
                 <div className="videoNoneRight">
                    <div>
                      1 화면
                    </div>
                  </div>
                  <img src="/images/common/videoNone.png"></img>
              </VideoNone>
            )
            
            :
            (
              multiView.text === "2멀티화면" ?
                 ( 
                  iframeData?.data?.live_list[0] ?
                 <>
                    <VideoViewContainer>
                    <iframe src={pageBasicIframeUrl + (quality7.text === "테스트" ?  iframeData?.data?.live_list[0]?.iframe_url : 
                      (
                        quality7.text === "최고화질 A" ?
                        iframeData?.data?.live_list[1]?.iframe_url
                        :
                        (quality7.text === "최고화질 B" &&  iframeData?.data?.live_list[2]?.iframe_url)
                      )) }></iframe>
                        <VideoViewInfo>
                          <VideoViewOption>
                            <span>알 메사이미어</span>
                            <img src="/images/live/Team4.png" alt=""></img>
                            <div>vs</div>
                            <img src="/images/live/Team3.png" alt=""></img>
                            <span>하포엘 예루살렘</span>
                          </VideoViewOption>
                          <VideoViewSelectContainer>
                            <Select
                              select={quality7}
                              setSelect={setQuality7}
                              width="96px"
                              type="option"
                              background="#434444"
                              height="25px"
                            ></Select>
                            <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                          </VideoViewSelectContainer>
                        </VideoViewInfo>
                      </VideoViewContainer>
                    
                      <VideoViewContainer>
                        <VideoNone> 
                          <div className="videoNoneRight">
                            <div>
                              2 화면
                            </div>
                          </div>
                          <img src="/images/common/videoNone.png"></img>
                          <div className="videoNoneBottom">
                            <div>
                              <span>
                                경기선택 버튼을 눌러 경기를 선택해주세요
                              </span>
                              <img src="/images/common/videoArrow.png"></img>
                            </div>
                          </div>
                        </VideoNone>
                        {/* <VideoView background="/images/live/Soccer-background.png"></VideoView> */}
                        <VideoViewInfo>
                          <VideoViewOption>
                          </VideoViewOption>
                          <VideoViewSelectContainer>
                              <Select
                                select={quality2}
                                setSelect={setQuality2}
                                width="96px"
                                type="option"
                                background="#434444"
                                height="25px"
                              ></Select>
                            <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                          </VideoViewSelectContainer>
                        </VideoViewInfo>
                      </VideoViewContainer>
                  </>
                  :
                    <>
                      <VideoViewContainer>
                        <VideoNone>
                          <div className="videoNoneRight">
                              <div>
                                1 화면
                              </div>
                            </div>
                          <img src="/images/common/videoNone.png"></img>
                        
                          <div className="videoNoneBottom">
                            <div>
                              <span>
                                경기선택 버튼을 눌러 경기를 선택해주세요
                              </span>
                              <img src="/images/common/videoArrow.png"></img>
                            </div>
                          </div>
                        </VideoNone>
                          <VideoViewInfo>
                            <VideoViewOption>
                              <span>알 메사이미어</span>
                              <img src="/images/live/Team4.png" alt=""></img>
                              <div>vs</div>
                              <img src="/images/live/Team3.png" alt=""></img>
                              <span>하포엘 예루살렘</span>
                            </VideoViewOption>
                            <VideoViewSelectContainer>
                              <Select
                                select={quality7}
                                setSelect={setQuality7}
                                width="96px"
                                type="option"
                                background="#434444"
                                height="25px"
                              ></Select>
                              <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                            </VideoViewSelectContainer>
                          </VideoViewInfo>
                        </VideoViewContainer>
                      
                        <VideoViewContainer>
                          <VideoNone> 
                            <div className="videoNoneRight">
                              <div>
                                2 화면
                              </div>
                            </div>
                            <img src="/images/common/videoNone.png"></img>
                            <div className="videoNoneBottom">
                              <div>
                                <span>
                                  경기선택 버튼을 눌러 경기를 선택해주세요
                                </span>
                                <img src="/images/common/videoArrow.png"></img>
                              </div>
                            </div>
                          </VideoNone>
                          {/* <VideoView background="/images/live/Soccer-background.png"></VideoView> */}
                          <VideoViewInfo>
                            <VideoViewOption>
                            </VideoViewOption>
                            <VideoViewSelectContainer>
                                <Select
                                  select={quality2}
                                  setSelect={setQuality2}
                                  width="96px"
                                  type="option"
                                  background="#434444"
                                  height="25px"
                                ></Select>
                              <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                            </VideoViewSelectContainer>
                          </VideoViewInfo>
                        </VideoViewContainer>
                    </>
                  )
                  :
                  (
                    multiView.text === "4멀티화면" &&  
                        (
                          iframeData?.data?.live_list[0] ?
                            <>
                              <VideoViewContainer>
                                <VideoView >
                                <iframe src={pageBasicIframeUrl + (quality7.text === "테스트" ?  iframeData?.data?.live_list[0]?.iframe_url : 
                                    (
                                      quality7.text === "최고화질 A" ?
                                      iframeData?.data?.live_list[1]?.iframe_url
                                      :
                                      (quality7.text === "최고화질 B" &&  iframeData?.data?.live_list[2]?.iframe_url)
                                    )) }></iframe>
                                </VideoView>
                                <VideoViewInfo>
                                  <VideoViewOption>
                                    <span>알 메사이미어</span>
                                    <img src="/images/live/Team4.png" alt=""></img>
                                    <div>vs</div>
                                    <img src="/images/live/Team3.png" alt=""></img>
                                    <span>하포엘 예루살렘</span>
                                  </VideoViewOption>
                                  <VideoViewSelectContainer>
                                    <Select
                                      select={quality7}
                                      setSelect={setQuality7}
                                      width="96px"
                                      type="option"
                                      background="#434444"
                                      height="25px"
                                    ></Select>
                                    <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                                  </VideoViewSelectContainer>
                                </VideoViewInfo>
                              </VideoViewContainer>
                              
                              <VideoViewContainer>
                                <VideoNone> 
                                  <div className="videoNoneRight">
                                    <div>
                                      2 화면
                                    </div>
                                  </div>
                                  <img src="/images/common/videoNone.png"></img>
                                  <div className="videoNoneBottom">
                                    <div>
                                      <span>
                                        경기선택 버튼을 눌러 경기를 선택해주세요
                                      </span>
                                      <img src="/images/common/videoArrow.png"></img>
                                    </div>
                                  </div>
                                </VideoNone>
                                <VideoViewInfo>
                                  <VideoViewOption>
                                  </VideoViewOption>
                                  <VideoViewSelectContainer>
                                    <Select
                                      select={quality4}
                                      setSelect={setQuality4}
                                      width="96px"
                                      type="option"
                                      background="#434444"
                                      height="25px"
                                    ></Select>
                                    <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                                  </VideoViewSelectContainer>
                                </VideoViewInfo>
                              </VideoViewContainer>

                              <VideoViewContainer>
                                <VideoNone> 
                                  <div className="videoNoneRight">
                                    <div>
                                      3 화면
                                    </div>
                                  </div>
                                  <img src="/images/common/videoNone.png"></img>
                                  <div className="videoNoneBottom">
                                    <div>
                                      <span>
                                        경기선택 버튼을 눌러 경기를 선택해주세요
                                      </span>
                                      <img src="/images/common/videoArrow.png"></img>
                                    </div>
                                  </div>
                                </VideoNone>
                                <VideoViewInfo>
                                  <VideoViewOption>
                                  </VideoViewOption>
                                  <VideoViewSelectContainer>
                                    <Select
                                      select={quality5}
                                      setSelect={setQuality5}
                                      width="96px"
                                      type="option"
                                      background="#434444"
                                      height="25px"
                                    ></Select>
                                    <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                                  </VideoViewSelectContainer>
                                </VideoViewInfo>
                              </VideoViewContainer>

                              <VideoViewContainer>
                                <VideoNone> 
                                  <div className="videoNoneRight">
                                    <div>
                                      4 화면
                                    </div>
                                  </div>
                                  <img src="/images/common/videoNone.png"></img>
                                  <div className="videoNoneBottom">
                                    <div>
                                      <span>
                                        경기선택 버튼을 눌러 경기를 선택해주세요
                                      </span>
                                      <img src="/images/common/videoArrow.png"></img>
                                    </div>
                                  </div>
                                </VideoNone>
                                <VideoViewInfo>
                                <VideoViewOption>
                                </VideoViewOption>
                                <VideoViewSelectContainer>
                                  <Select
                                    select={quality6}
                                    setSelect={setQuality6}
                                    width="96px"
                                    type="option"
                                    background="#434444"
                                    height="25px"
                                  ></Select>
                                  <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                                </VideoViewSelectContainer>
                              </VideoViewInfo>
                            </VideoViewContainer>
                          </>
                        :
                        <>
                          <VideoViewContainer>
                            <VideoView >
                            <VideoNone> 
                            <div className="videoNoneRight">
                              <div>
                                1 화면
                              </div>
                            </div>
                            <img src="/images/common/videoNone.png"></img>
                            <div className="videoNoneBottom">
                              <div>
                                <span>
                                  경기선택 버튼을 눌러 경기를 선택해주세요
                                </span>
                                <img src="/images/common/videoArrow.png"></img>
                              </div>
                            </div>
                          </VideoNone>
                            </VideoView>
                            <VideoViewInfo>
                              <VideoViewOption>
                                <span>알 메사이미어</span>
                                <img src="/images/live/Team4.png" alt=""></img>
                                <div>vs</div>
                                <img src="/images/live/Team3.png" alt=""></img>
                                <span>하포엘 예루살렘</span>
                              </VideoViewOption>
                              <VideoViewSelectContainer>
                                <Select
                                  select={quality7}
                                  setSelect={setQuality7}
                                  width="96px"
                                  type="option"
                                  background="#434444"
                                  height="25px"
                                ></Select>
                                <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                              </VideoViewSelectContainer>
                            </VideoViewInfo>
                          </VideoViewContainer>
                          
                          <VideoViewContainer>
                            <VideoNone> 
                              <div className="videoNoneRight">
                                <div>
                                  2 화면
                                </div>
                              </div>
                              <img src="/images/common/videoNone.png"></img>
                              <div className="videoNoneBottom">
                                <div>
                                  <span>
                                    경기선택 버튼을 눌러 경기를 선택해주세요
                                  </span>
                                  <img src="/images/common/videoArrow.png"></img>
                                </div>
                              </div>
                            </VideoNone>
                            <VideoViewInfo>
                              <VideoViewOption>
                              </VideoViewOption>
                              <VideoViewSelectContainer>
                                <Select
                                  select={quality4}
                                  setSelect={setQuality4}
                                  width="96px"
                                  type="option"
                                  background="#434444"
                                  height="25px"
                                ></Select>
                                <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                              </VideoViewSelectContainer>
                            </VideoViewInfo>
                          </VideoViewContainer>

                          <VideoViewContainer>
                            <VideoNone> 
                              <div className="videoNoneRight">
                                <div>
                                  3 화면
                                </div>
                              </div>
                              <img src="/images/common/videoNone.png"></img>
                              <div className="videoNoneBottom">
                                <div>
                                  <span>
                                    경기선택 버튼을 눌러 경기를 선택해주세요
                                  </span>
                                  <img src="/images/common/videoArrow.png"></img>
                                </div>
                              </div>
                            </VideoNone>
                            <VideoViewInfo>
                              <VideoViewOption>
                              </VideoViewOption>
                              <VideoViewSelectContainer>
                                <Select
                                  select={quality5}
                                  setSelect={setQuality5}
                                  width="96px"
                                  type="option"
                                  background="#434444"
                                  height="25px"
                                ></Select>
                                <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                              </VideoViewSelectContainer>
                            </VideoViewInfo>
                          </VideoViewContainer>

                          <VideoViewContainer>
                            <VideoNone> 
                              <div className="videoNoneRight">
                                <div>
                                  4 화면
                                </div>
                              </div>
                              <img src="/images/common/videoNone.png"></img>
                              <div className="videoNoneBottom">
                                <div>
                                  <span>
                                    경기선택 버튼을 눌러 경기를 선택해주세요
                                  </span>
                                  <img src="/images/common/videoArrow.png"></img>
                                </div>
                              </div>
                            </VideoNone>
                            <VideoViewInfo>
                            <VideoViewOption>
                            </VideoViewOption>
                            <VideoViewSelectContainer>
                              <Select
                                select={quality6}
                                setSelect={setQuality6}
                                width="96px"
                                type="option"
                                background="#434444"
                                height="25px"
                              ></Select>
                              <button onClick={()=>setMultiModalToggle(true)}>경기 선택</button>
                            </VideoViewSelectContainer>
                          </VideoViewInfo>
                        </VideoViewContainer>
                      </>
                      )
                  )
            )
        }
          <Banner>
            <div className="contents">
              <div className="image">
                <img src="/images/common/LogoSingle.png" alt="" />
              </div>
              <div className="text">
                <div className="title">스포시티 광고 노출</div>
                <div className="company">SPOCITY</div>
              </div>
              <div>
                <LearnMore>더알아보기</LearnMore>
              </div>
            </div>
            <CloseButton>
              <AiOutlineClose />
            </CloseButton>
            <ProgressBar>
              <Progress width="67%"></Progress>
            </ProgressBar>
          </Banner>
        </VideoContainer>
        <OptionContainer fullScreen={fullScreen}>
          <OptionTeam>
            <span>{iframeData?.data?.home_team_info.team_name}</span>
            <img src={pageBasicImgUrl + iframeData?.data?.home_team_info.team_logo} alt=""></img>
            <div>vs</div>
            <img src={pageBasicImgUrl + iframeData?.data?.away_team_info.team_logo} alt=""></img>
            <span>{iframeData?.data?.away_team_info.team_name}</span>
          </OptionTeam>
          <OptionSelectContainer>

            {/* 기본 화면일때 그래픽 중계, 화질 선택부분 */}
            {!(
              multiView.text === "2멀티화면" || multiView.text === "4멀티화면"
            ) && (
              <>
                <Select
                  select={relay}
                  setSelect={setRelay}
                  width="133px"
                  type="option"
                  background="#2c2d2d"
                  height="32px"
                  name="relay"
                ></Select>
              
              </>
            )}
              {
                relay.text==="실시간 중계" ?
                  <Select
                    select={quality7}
                    setSelect={setQuality7}
                    width="111px"
                    type="option"
                    background="#2c2d2d"
                    height="32px"
                  ></Select>
                  :
                  ""
              }
            <Select
              select={multiView}
              setSelect={setMultiView}
              width="111px"
              type="option"
              background="#3081c3"
              height="32px"
              name="multi"
            ></Select>
            <ButtonContainer onClick={() => setFullScreen(!fullScreen)}>
              <div>
                <img
                  className="hot"
                  src="/images/watchinglive/hot.png"
                  alt=""
                />
                <div className="text">
                  {fullScreen ? "집중모드종료" : "집중모드"}
                </div>
              </div>
            </ButtonContainer>
          </OptionSelectContainer>

        {/* 풀스크린 아닐시에만 나타나게, 풀스크린일때는 사라지도록 (밑에 데이터 받아오는거)*/}
        </OptionContainer>
          {!fullScreen && (
            <>
              <InfoContainer>
                <div className="top">
                {
                  iframeData?.data?.stats.length > 0 ?
                  (  
                  (iframeData?.data?.match_id !== updateScore?.id) ?
                      <>
                        <div>
                          <img src="/images/watchinglive/icon.png" alt="" />{iframeData?.data?.home_team_info.corners}
                        </div>
                        <div>
                          <Card color="red"></Card>{iframeData?.data?.home_team_info.red_cards}
                        </div>
                        <div>
                          <Card color="yellow"></Card>{iframeData?.data?.home_team_info.yellow_cards}
                        </div>
                      </>
                    :
                      <>
                        <div>
                          <img src="/images/watchinglive/icon.png" alt="" />{updateScore?.result[2][4]}
                        </div>
                        <div>
                          <Card color="red"></Card>{updateScore?.result[2][2]}
                        </div>
                        <div>
                          <Card color="yellow"></Card>{updateScore?.result[2][3]}
                        </div>
                      </>
                    )
                    :  
                    <>
                    <div>
                      <img src="/images/watchinglive/icon.png" alt="" />
                    </div>
                    <div>
                      <Card color="red"></Card>
                    </div>
                    <div>
                      <Card color="yellow"></Card>
                    </div>
                  </>
                  }
                  {/* <div>
                    <img src="/images/watchinglive/icon.png" alt="" />{iframeData?.data?.home_team_info.corners}
                  </div>
                  <div>
                    <Card color="red"></Card>{iframeData?.data?.home_team_info.red_cards}
                  </div>
                  <div>
                    <Card color="yellow"></Card>{iframeData?.data?.home_team_info.yellow_cards}
                  </div> */}
                  <div className="middle">
                  {
                    iframeData?.data?.stats.length > 0 ?
                    (  
                    !(iframeData?.data?.match_id === updateStats?.id) ?
                      iframeData?.data?.stats?.map(data=>{
                      if(data?.type === 25){
                        return (
                            <>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="possession">점유율</div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                            </>
                          )
                        }
                    })
                    :
                    updateStats && updateStats?.result.map(data=>{
                      if(data?.type === 25){
                      return(
                        <>
                            <div>{data.home}</div>
                            <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                              <div></div>
                            </InfoBar>
                            <div className="possession">점유율</div>
                            <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                              <div></div>
                            </InfoBar>
                            <div>{data.away}</div>
                        </>
                      )}
                    }))
                    :
                    <>
                     <div>0</div>
                        <InfoBar type="left" width={0}>
                          <div></div>
                        </InfoBar>
                        <div className="possession">점유율</div>
                        <InfoBar type="right" width={0}>
                          <div></div>
                        </InfoBar>
                      <div>0</div>
                    </>
                  }
                </div>
                {/* {console.log(updateScore)}
                {console.log(updateStats)}
                {console.log(iframeData)} */}

                {
                  iframeData?.data?.stats.length > 0 ?
                  (  
                  (iframeData?.data?.match_id !== updateScore?.id) ?
                      <>
                        <div>
                          <img src="/images/watchinglive/icon.png" alt="" />{iframeData?.data?.away_team_info.corners}
                        </div>
                        <div>
                          <Card color="red"></Card>{iframeData?.data?.away_team_info.red_cards}
                        </div>
                        <div>
                          <Card color="yellow"></Card>{iframeData?.data?.away_team_info.yellow_cards}
                        </div>
                      </>
                      :
                      <>
                        <div>
                          <img src="/images/watchinglive/icon.png" alt="" />{updateScore?.result[3][4]}
                        </div>
                        <div>
                          <Card color="red"></Card>{updateScore?.result[3][2]}
                        </div>
                        <div>
                          <Card color="yellow"></Card>{updateScore?.result[3][3]}
                        </div>
                      </>
                    )
                    :  
                    <>
                    <div>
                      <img src="/images/watchinglive/icon.png" alt="" />
                    </div>
                    <div>
                      <Card color="red"></Card>
                    </div>
                    <div>
                      <Card color="yellow"></Card>
                    </div>
                  </>
                  }
                {/* <div>
                  <img src="/images/watchinglive/icon.png" alt="" />{iframeData?.data?.away_team_info.corners}
                </div>
                <div>
                  <Card color="red"></Card>{iframeData?.data?.away_team_info.red_cards}
                </div>
                <div>
                  <Card color="yellow"></Card>{iframeData?.data?.away_team_info.yellow_cards}
                </div> */}
              </div>
              
              <div className="bottom">
                
              <div className="info">
              {
                iframeData?.data?.stats.length > 0 ?
                (
                  !(iframeData?.data?.match_id === updateStats?.id) ?
                    iframeData?.data?.stats.map(data=>{
                    if(data?.type === 24){
                      return (
                          <>
                              <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  위험공격
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                              </div>
                          </>
                        )
                      }
                  })
                  :
                  updateStats && updateStats?.result.map(data=>{
                    if(data?.type === 24){
                    return(
                        <>
                          <div>
                              <div>{data.home}</div>
                              <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                <div></div>
                              </InfoBar>
                              <div className="attack">
                               위험공격
                              </div>
                              <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                <div></div>
                              </InfoBar>
                              <div>{data.away}</div>
                          </div>
                      </>
                    )}
                  }))
                  :
                  <>
                      <div>
                        <div>0</div>
                        <InfoBar type="left" width={0}>
                          <div></div>
                        </InfoBar>
                        <div className="attack">
                          위험공격
                        </div>
                        <InfoBar type="right" width={0}>
                          <div></div>
                        </InfoBar>
                        <div>0</div>
                    </div>
                  </>
                }


                {
                iframeData?.data?.stats.length > 0 ?
                (
                  !(iframeData?.data?.match_id === updateStats?.id) ?
                    iframeData?.data?.stats.map(data=>{
                    if(data?.type === 23){
                      return (
                          <>
                              <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  공격
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                              </div>
                          </>
                        )
                      }
                  })
                  :
                  updateStats && updateStats?.result.map(data=>{
                    if(data?.type === 23){
                    return(
                        <>
                          <div>
                              <div>{data.home}</div>
                              <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                <div></div>
                              </InfoBar>
                              <div className="attack">
                                공격
                              </div>
                              <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                <div></div>
                              </InfoBar>
                              <div>{data.away}</div>
                          </div>
                      </>
                    )}
                  }))
                  :
                  <>
                    <div>
                        <div>0</div>
                        <InfoBar type="left" width={0}>
                          <div></div>
                        </InfoBar>
                        <div className="attack">
                          공격
                        </div>
                        <InfoBar type="right" width={0}>
                          <div></div>
                        </InfoBar>
                      <div>0</div>
                    </div>
                    <div>
                    </div>
                  </>
                }
                </div>
                <VerticalBar></VerticalBar>
                <div className="info">

                {
                  iframeData?.data?.stats.length > 0 ?
                  (!(iframeData?.data?.match_id === updateStats?.id) ?
                    iframeData?.data?.stats.map(data=>{
                    if(data?.type === 22 ){
                      return (
                          <>
                            <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  슈팅
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                            </div>
                          </>
                        )
                      }
                  })
                  :
                  updateStats && updateStats?.result.map(data=>{
                    if(data?.type === 22 ){
                    return(
                        <>
                          <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  슈팅
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                            </div>
                      </>
                    )}
                  }))
                  :
                  <>
                    <div>
                        <div>0</div>
                        <InfoBar type="left" width={0}>
                          <div></div>
                        </InfoBar>
                        <div className="attack">
                          슈팅
                        </div>
                        <InfoBar type="right" width={0}>
                          <div></div>
                        </InfoBar>
                        <div>0</div>
                    </div>
                  </>
                }

                {
                  iframeData?.data?.stats.length > 0 ?
                  (!(iframeData?.data?.match_id === updateStats?.id) ?
                    iframeData?.data?.stats.map(data=>{
                    if(data?.type === 21 ){
                      return (
                          <>
                            <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  유효슈팅
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                            </div>
                          </>
                        )
                      }
                  })
                  :
                  updateStats && updateStats?.result.map(data=>{
                    if(data?.type === 21){
                    return(
                        <>
                          <div>
                                <div>{data.home}</div>
                                <InfoBar type="left" width={!(data.home === 0 && data.away === 0 ) ? Math.floor((data.home / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div className="attack">
                                  유효슈팅
                                </div>
                                <InfoBar type="right" width={!(data.away === 0 && data.home === 0) ? Math.floor((data.away / (data.away + data.home)) * 100) : 0}>
                                  <div></div>
                                </InfoBar>
                                <div>{data.away}</div>
                            </div>
                      </>
                    )}
                  }))
                  :
                  <>
                    <div>
                      <div>0</div>
                      <InfoBar type="left" width={0}>
                        <div></div>
                      </InfoBar>
                      <div className="attack">
                        유효슈팅
                      </div>
                      <InfoBar type="right" width={0}>
                        <div></div>
                      </InfoBar>
                      <div>0</div>
                  </div>
                </>
                }
                </div>
              </div>
            </InfoContainer>
            <TeamContainer>
              <span>{iframeData?.data?.category_name} {getTimeStringSeconds(iframeData?.data?.match_time)}</span>
              <div className="middle">
                <div className="team">
                  <div>{iframeData?.data.home_team_info.team_name}</div>
                  {
                    iframeData?.data.home_team_info.rankup > 0 &&
                    <span className="rank">({iframeData?.data.home_team_info.rankup})</span>
                  }
                </div>
                <img src={pageBasicImgUrl+iframeData?.data.home_team_info.team_logo} alt=""></img>
                <TeamScore active={
                     iframeData?.data?.match_id !== updateScore?.id ?
                     ( 
                      iframeData?.data.home_team_info.score > iframeData?.data.away_team_info.score ? 
                        true
                         : 
                        false 
                     )
                       :
                     ( 
                      updateScore?.result[2][0] > updateScore?.result[3][0] ? 
                      true
                       : 
                      false 
                     )
                  }>
                  { 
                    (iframeData?.data?.match_id !== updateScore?.id) ?
                    iframeData?.data.home_team_info.score
                    :
                    updateScore?.result[2][0]
                  }
                  
                </TeamScore>
                <div className="middle">
                {
                  (iframeData?.data?.match_id !== updateScore?.id) ?
                  (iframeData?.data.status_id === 0 ?
                    ""
                    :
                    (
                      iframeData?.data.status_id === 1 ?
                      <TimeRectangle type="before">
                        경기전
                      </TimeRectangle>
                      :
                      (
                        iframeData?.data.status_id === 2 ?
                        <TimeRectangle type="live">
                          전반  {iframeData?.data.kickoff_time > 0 ?Math.floor((nowTime - iframeData?.data.kickoff_time) / 60 + 1) : ""}'
                        </TimeRectangle>
                        :
                        (
                          iframeData?.data.status_id === 3 ?
                          <TimeRectangle type="live">
                            하프타임
                          </TimeRectangle>
                          :
                          (
                            iframeData?.data.status_id === 4?
                            <TimeRectangle type="live">
                              후반 {iframeData?.data.kickoff_time > 0 ?Math.floor((nowTime - iframeData?.data.kickoff_time) / 60 + 45 + 1) : ""}'
                            </TimeRectangle>
                            :
                            (
                              iframeData?.data.status_id === 5?
                              <TimeRectangle type="live">
                                연장
                              </TimeRectangle>
                              :
                              (
                                iframeData?.status_id === 6?
                                ""
                                :
                                (
                                  iframeData?.data.status_id === 7?
                                  <TimeRectangle type="live">
                                    승부차기
                                  </TimeRectangle>
                                  :
                                  (
                                    iframeData?.data.status_id === 8?
                                    <TimeRectangle type="end">
                                      경기종료
                                    </TimeRectangle>
                                    :
                                    (
                                      iframeData?.data.status_id === 9?
                                      <TimeRectangle type="delay">
                                        경기연기
                                      </TimeRectangle>
                                      :
                                      (
                                        iframeData?.data.status_id === 10 || iframeData?.data.status_id === 11?
                                        <TimeRectangle type="cancel">
                                          경기중단
                                        </TimeRectangle>
                                        :
                                        (
                                          iframeData?.data.status_id === 12?
                                        <TimeRectangle type="cancel">
                                          경기 취소
                                        </TimeRectangle>
                                          :
                                          (
                                            iframeData?.data.status_id === 13?
                                            <TimeRectangle type="delay">
                                              경기미정
                                            </TimeRectangle>
                                            :
                                            ""
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ))
                    :
                    (updateScore?.result[1] === 0 ?
                      ""
                      :
                      (
                        updateScore?.result[1] === 1 ?
                        <TimeRectangle type="before">
                          경기전
                        </TimeRectangle>
                        :
                        (
                          updateScore?.result[1] === 2 ?
                          <TimeRectangle type="live">
                            전반 {updateScore?.result[4] > 0 ?Math.floor((nowTime - updateScore?.result[4]) / 60 + 1) : ""}'
                          </TimeRectangle>
                          :
                          (
                            updateScore?.result[1] === 3 ?
                            <TimeRectangle type="live">
                              하프타임
                            </TimeRectangle>
                            :
                            (
                              updateScore?.result[1] === 4?
                              <TimeRectangle type="live">
                                후반  {updateScore?.result[4] > 0 ?Math.floor((nowTime - updateScore?.result[4]) /  60 + 45 + 1) : ""}'
                              </TimeRectangle>
                              :
                              (
                                updateScore?.result[1] === 5?
                                <TimeRectangle type="live">
                                  연장
                                </TimeRectangle>
                                :
                                (
                                  updateScore?.result[1] === 6?
                                  ""
                                  :
                                  (
                                    updateScore?.result[1] === 7?
                                    <TimeRectangle type="live">
                                      승부차기
                                    </TimeRectangle>
                                    :
                                    (
                                      updateScore?.result[1] === 8?
                                      <TimeRectangle type="end">
                                        경기종료
                                      </TimeRectangle>
                                      :
                                      (
                                        updateScore?.result[1] === 9?
                                        <TimeRectangle type="delay">
                                          경기연기
                                        </TimeRectangle>
                                        :
                                        (
                                          updateScore?.result[1] === 10 || updateScore?.result[1] === 11?
                                          <TimeRectangle type="cancel">
                                            경기중단
                                          </TimeRectangle>
                                          :
                                          (
                                            updateScore?.result[1] === 12?
                                          <TimeRectangle type="cancel">
                                            경기 취소
                                          </TimeRectangle>
                                            :
                                            (
                                              updateScore?.result[1] === 13?
                                              <TimeRectangle type="delay">
                                                경기미정
                                              </TimeRectangle>
                                              :
                                              ""
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ))                       
                  }
                  
                  <span>(HT 
                    {
                      (iframeData?.data?.match_id !== updateScore?.id) ?
                      iframeData?.data.home_team_info.half_score
                      :
                      updateScore?.result[2][1]
                    } 
                    : 
                    {
                      (iframeData?.data?.match_id !== updateScore?.id) ?
                      iframeData?.data.away_team_info.half_score
                      :
                      updateScore?.result[3][1]
                    })
                  </span>
                </div>
                <TeamScore active={
                     iframeData?.data?.match_id !== updateScore?.id ?
                     ( 
                      iframeData?.data.home_team_info.score < iframeData?.data.away_team_info.score ? 
                        true
                         : 
                        false 
                     )
                       :
                     ( 
                      updateScore?.result[2][0] < updateScore?.result[3][0] ? 
                      true
                       : 
                      false 
                     )
                  }>
                  { (iframeData?.data?.match_id !== updateScore?.id) ?
                    iframeData?.data.away_team_info.score
                    :
                    updateScore?.result[3][0]
                  }
                </TeamScore>

                <img src={pageBasicImgUrl+iframeData?.data.away_team_info.team_logo} alt=""></img>
                <div className="team">
                  <div>{iframeData?.data.away_team_info.team_name}</div>
                  {
                    iframeData?.data.away_team_info.rankup > 0 &&
                    <span className="rank">({iframeData?.data.away_team_info.rankup})</span>
                  }
                </div>
              </div>
            </TeamContainer>
            <AssuranceContainer>
              <TitleContainer className="title">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="icon"
                    src="/images/main/Sidebar4.png"
                    alt=""
                  ></img>
                  <Title style={{ marginLeft: "7px" }}>스포시티 보증업체</Title>
                </div>
                <MoreDetails>더보기</MoreDetails>
              </TitleContainer>
              <GuaranteeCompanySlider />
            </AssuranceContainer>
            <ContentsContainer>
              <ContentsTabContainer>
                <div>
                  <ContentsTab
                    active={contentsTab === 1}
                    onClick={() => setContentsTab(1)}
                  >
                    전력비교
                  </ContentsTab>
                  <ContentsTab
                    active={contentsTab === 2}
                    onClick={() => setContentsTab(2)}
                  >
                    순위비교
                  </ContentsTab>
                  <ContentsTab
                    active={contentsTab === 3}
                    onClick={() => setContentsTab(3)}
                  >
                    라인업
                  </ContentsTab>
                </div>
                <img src="/images/live/Refresh.png" alt="" />
              </ContentsTabContainer>
              <Content active={contentsTab === 1}>
                {
                  footballH2HData?.data?.vs?.data?.length < 1 && footballH2HData?.data?.home?.data?.length < 1 && footballH2HData?.data?.away?.data?.length < 1 &&
                  <ContentNone>
                    <ContentNoneContainer>
                      <ContentNoneImgBox>
                        <img src="/images/live/groping.png" alt="" />
                      </ContentNoneImgBox>
                      <ContentNoneTextBox>
                        데이터가 없습니다
                      </ContentNoneTextBox>
                    </ContentNoneContainer>
                  </ContentNone>
                }
                {footballH2HData?.data?.vs?.data?.length > 0 &&
                  <>
                    <ContentTitleContainer>
                        <span className="title">상대 전적</span>
                        <div>
                          <span>최근 경기내역</span>
                          <Select
                            select={selectOne}
                            setSelect={setSelectOne}
                          ></Select>
                        </div>
                      </ContentTitleContainer>
                      <Table1 length = {footballH2HData?.data?.vs?.data?.length} slect={selectOne?.text}>
                        <thead>
                          <tr>
                            <th className="one">리그명</th>
                            <th className="two">날짜</th>
                            <th className="three">홈팀</th>
                            <th className="four">점수</th>
                            <th className="five">원정팀</th>
                            <th className="six">결과</th>
                          </tr>
                        </thead>
                        {
                          footballH2HData?.data?.vs?.data.map(data=>{
                            return (
                              <>
                                <Tbody>
                                  <tr>
                                    <League>{data?.competition_name}</League>
                                    <td>{getTimeStringSeconds(data?.match_time)}</td>
                                    <td>{data?.home_team_info.team_name}</td>
                                    <td className="score">{data?.home_team_info.score}-{data?.away_team_info.score}</td>
                                    <td>{data?.away_team_info.team_name}</td>
                                    <td className="result">
                                      <ResultCircle>L</ResultCircle>
                                    </td>
                                  </tr>
                                </Tbody>
                              </>
                            )
                          })
                        }
                      </Table1>
                      <SummaryText>
                        최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>,
                        무승부 <span className="draw">0</span> , 패배{" "}
                        <span className="lose">4</span>, 승리 : 20.00%
                      </SummaryText>
                  </>
                }
                {
                  footballH2HData?.data?.home?.data?.length > 0 &&
                  <>
                    <ContentTitleContainer>
                          <span className="title">
                          최근 경기 내역 <span>{footballH2HData?.data?.home?.title}</span>
                        </span>
                        <div>
                          <span>최근</span>
                          <Select
                            select={selectTwo}
                            setSelect={setSelectTwo}
                          ></Select>
                          <CheckBoxContainer>
                            {check.home ? (
                              <CheckBoxOn
                                onClick={() => setCheck({ ...check, home: false })}
                              />
                            ) : (
                              <CheckBoxOff
                                onClick={() => setCheck({ ...check, home: true })}
                              />
                            )}
                            <CheckText>홈경기만</CheckText>
                          </CheckBoxContainer>
                        </div>
                      </ContentTitleContainer>
                      <Table2 length = {footballH2HData?.data?.home?.data?.length} slect={selectTwo?.text}>
                        <thead>
                            <tr>
                              <th className="one">리그명</th>
                              <th className="two">날짜</th>
                              <th className="three">홈팀</th>
                              <th className="four">점수</th>
                              <th className="five">원정팀</th>
                              <th className="six">결과</th>
                            </tr>
                          </thead>
                          {
                            footballH2HData?.data?.home?.data.map(data=>{
                              return (
                                <>
                                  <Tbody>
                                    <tr>
                                      <League>{data?.competition_name}</League>
                                      <td>{getTimeStringSeconds(data?.match_time)}</td>
                                      <td>{data?.home_team_info.team_name}</td>
                                      <td className="score">{data?.home_team_info.score}-{data?.away_team_info.score}</td>
                                      <td>{data?.away_team_info.team_name}</td>
                                      <td className="result">
                                        <ResultCircle>L</ResultCircle>
                                      </td>
                                    </tr>
                                  </Tbody>
                                </>
                              )
                            })
                          }
                      </Table2>
                      <SummaryText>
                        최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>,
                        무승부 <span className="draw">0</span> , 패배{" "}
                        <span className="lose">4</span>, 승리 : 20.00%
                      </SummaryText>
                  </>
              }
              {
                footballH2HData?.data?.away?.data.length > 0 &&
                <>
                  <ContentTitleContainer>
                    <span className="title">
                      최근 경기 내역 <span>{footballH2HData?.data?.away?.title}</span>
                    </span>
                    <div>
                      <span>최근</span>
                      <Select
                        select={selectThree}
                        setSelect={setSelectThree}
                      ></Select>
                      <CheckBoxContainer>
                        {check.away ? (
                          <CheckBoxOn
                            onClick={() => setCheck({ ...check, away: false })}
                          />
                        ) : (
                          <CheckBoxOff
                            onClick={() => setCheck({ ...check, away: true })}
                          />
                        )}
                        <CheckText>원정경기만</CheckText>
                      </CheckBoxContainer>
                    </div>
                  </ContentTitleContainer>
                  <Table3 length = {footballH2HData?.data?.away?.data?.length} slect={selectThree?.text}>
                    <thead>
                      <tr>
                        <th className="one">리그명</th>
                        <th className="two">날짜</th>
                        <th className="three">홈팀</th>
                        <th className="four">점수</th>
                        <th className="five">원정팀</th>
                        <th className="six">결과</th>
                      </tr>
                    </thead>
                    {
                        footballH2HData?.data?.away?.data.map(data=>{
                          return (
                            <>
                              <Tbody>
                                <tr>
                                  <League>{data?.competition_name}</League>
                                  <td>{getTimeStringSeconds(data?.match_time)}</td>
                                  <td>{data?.home_team_info.team_name}</td>
                                  <td className="score">{data?.home_team_info.score}-{data?.away_team_info.score}</td>
                                  <td>{data?.away_team_info.team_name}</td>
                                  <td className="result">
                                    <ResultCircle>L</ResultCircle>
                                  </td>
                                </tr>
                              </Tbody>
                            </>
                          )
                        })
                      }
                  </Table3>
                  <SummaryText>
                    최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>,
                    무승부 <span className="draw">0</span> , 패배{" "}
                    <span className="lose">4</span>, 승리 : 20.00%
                  </SummaryText>
                </>
              }
              
              </Content>
              <Content active={contentsTab === 2}>
              {
                !rankData?.data?.all  ?
                <ContentNone>
                  <ContentNoneContainer>
                    <ContentNoneImgBox>
                      <img src="/images/live/groping.png" alt="" />
                    </ContentNoneImgBox>
                    <ContentNoneTextBox>
                      데이터가 없습니다
                    </ContentNoneTextBox>
                  </ContentNoneContainer>
                </ContentNone>
                :
                <>
                  <RankingTabContainer>
                    <RankingTab
                      active={rankingTab === 1}
                      onClick={() => setRankingTab(1)}
                    >
                      전체
                    </RankingTab>
                    <RankingTab
                      active={rankingTab === 2}
                      onClick={() => setRankingTab(2)}
                    >
                      홈팀
                    </RankingTab>
                    <RankingTab
                      active={rankingTab === 3}
                      onClick={() => setRankingTab(3)}
                    >
                      원정팀
                    </RankingTab>
                  </RankingTabContainer>
                  <RankingTable>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>팀</th>
                        <th></th>
                        <th>경기수</th>
                        <th>승리</th>
                        <th>무승부</th>
                        <th>패배</th>
                        <th>승점</th>
                      </tr>
                    </thead>
                    {
                    rankingTab === 1 ?
                    rankData?.data?.all.map((data)=>{
                      return(
                        <RankingTbody >
                          <tr>
                            <td>{data.rankup}</td>
                            <td className="image">
                              <img src={pageBasicImgUrl + data.team_logo} />
                            </td>
                            <td> {data.team_name}</td>
                            <td> {data.total}</td>
                            <td> {data.won}</td>
                            <td> {data.draw}</td>
                            <td> {data.loss}</td>
                            <td className="point"> {data.goals}</td>
                          </tr>
                        </RankingTbody>
                      )
                    })
                    :
                    (
                      rankingTab === 2 ?
                      rankData?.data?.home.map((data)=>{
                        return(
                          <RankingTbody >
                            <tr>
                              <td>{data.rankup}</td>
                              <td className="image">
                                <img src={pageBasicImgUrl + data.team_logo} />
                              </td>
                              <td> {data.team_name}</td>
                              <td> {data.total}</td>
                              <td> {data.won}</td>
                              <td> {data.draw}</td>
                              <td> {data.loss}</td>
                              <td className="point"> {data.goals}</td>
                            </tr>
                          </RankingTbody>
                        )
                      })
                      :
                      (
                        rankingTab === 3 ?
                        rankData?.data?.away.map((data)=>{
                          return(
                            <RankingTbody >
                              <tr>
                                <td>{data.rankup}</td>
                                <td className="image">
                                  <img src={pageBasicImgUrl + data.team_logo} />
                                </td>
                                <td> {data.team_name}</td>
                                <td> {data.total}</td>
                                <td> {data.won}</td>
                                <td> {data.draw}</td>
                                <td> {data.loss}</td>
                                <td className="point"> {data.goals}</td>
                              </tr>
                            </RankingTbody>
                          )
                        })
                        :
                        ""
                      )
                    )
                    }
                  </RankingTable>
                </>
              }
              </Content>
              <Content active={contentsTab === 3}>
                <LineupTitle>라인업</LineupTitle>
                <LineupImageContainer />
                <LineupTitle>부상 정보</LineupTitle>
                <LineupTable>
                   <thead>
                        <tr>
                          <th>
                            <LineupTableHeadCotainer>
                              <img src={pageBasicImgUrl+lineUpData?.data.info?.home_team.team_logo} alt="" />
                              <div>{lineUpData?.data.info.home_team.team_name}</div>
                            </LineupTableHeadCotainer>
                          </th>
                          <th>
                            <LineupTableHeadCotainer>
                              <img src={pageBasicImgUrl+lineUpData?.data.info?.away_team.team_logo} alt="" />
                              <div>{lineUpData?.data.info.away_team.team_name}</div>
                            </LineupTableHeadCotainer>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {lineUpData?.data.injury.home.map(data => {
                              <td>
                                <LineupTableBodyCotainer imgUrl={pageBasicImgUrl+data.player_logo}>
                                  <div>-</div>
                                  <div></div>
                                  <LineupTableTextContainer>
                                    <span className="title">{data.player_name}</span>
                                    <span>{data.injury_reason}</span>
                                  </LineupTableTextContainer>
                                  <div className="injury">
                                    {data.injury_type}
                                  </div>
                                </LineupTableBodyCotainer>
                              </td>
                            })}
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          {lineUpData?.data?.injury.away.map(data => {
                            return (
                                <td>
                                  <LineupTableBodyCotainer>
                                    <div>-</div>
                                    <div></div>
                                    <LineupTableTextContainer>
                                      <span className="title">{data.player_name}</span>
                                      <span>{data.injury_reason}</span>
                                    </LineupTableTextContainer>
                                    <div className="injury">
                                      {data.injury_type}
                                    </div>
                                  </LineupTableBodyCotainer>
                                </td>
                              )
                            })}
                        </tr>
                      </tbody>
                      {/* <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <LineupTableBodyCotainer>
                              <div>-</div>
                              <div></div>
                              <LineupTableTextContainer>
                                <span className="title">D. Saputra</span>
                                <span>Cruciate ligament injury</span>
                              </LineupTableTextContainer>
                              <div className="injury"></div>
                            </LineupTableBodyCotainer>
                          </td>
                        </tr>
                      </tbody> */}
                </LineupTable>
              </Content>
            </ContentsContainer>
            <Footer setMobileMenu={setMobileMenu} mobileMeunu={mobileMenu} />
          </>
        )}
      </Wrapper>
      <LiveSoccerMobile
        setMobileMenu={setMobileMenu}
        mobileMeunu={mobileMenu}
        iframeData={iframeData}
        pageBasicImgUrl={pageBasicImgUrl}
        footballH2HData={footballH2HData}
        rankData={rankData}
        rankingTab={rankingTab} 
        setRankingTab={setRankingTab} 
        contentsTab={contentsTab}
        setContentsTab={setContentsTab}
        lineUpData={lineUpData}
        updateStats={updateStats}
        updateScore={updateScore}
      />
    </>
  );
};

export default LiveSoccer;
