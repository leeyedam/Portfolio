import React, { useState } from "react";
import styled from "styled-components";
import GuaranteeCompanySlider from "../slider/GuaranteeCompanySlider";
import Select from "../score/Select";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../common/Footer";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 721px) {
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
    @media (max-width: 720px) {
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
  @media (max-width: 720px) {
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
  @media (max-width: 720px) {
    margin-right: calc((3 / 720) * 100vw);
    font-size: calc((22 / 720) * 100vw);
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: calc((405 / 1280) * 100vh);
  background-color: #37840c;
  position: relative;
`;

const InfoContainer = styled.div`
  width: 100%;
  background-color: #2a2c2b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #161717;

  img {
    width: 16px;
    height: 18px;
    margin-right: 10px;
    @media (max-width: 720px) {
      width: calc((26 / 720) * 100vw);
      height: calc((30 / 720) * 100vw);
      margin-right: calc((12 / 720) * 100vw);
    }
  }

  .top {
    padding: 0 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: calc((48 / 720) * 100vw);
    * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 720px) {
      padding: 0 calc((40 / 720) * 100vw);
      margin-bottom: calc((36 / 1280) * 100vh);

      section {
        width: calc((220 / 720) * 100vw);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Roboto", sans-serif;
        font-size: calc((22 / 720) * 100vw);
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.44px;
        color: #fff;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: calc((50 / 1280) * 100vh);

    > .info {
      width: 100%;

      > div {
        font-size: calc((24 / 720) * 100vw);
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: calc((34 / 1280) * 100vh);

        * {
          margin: 0;
        }
      }
      .last {
        margin-bottom: 0;
      }
    }
    .title {
      width: calc((81 / 720) * 100vw);
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
  width: calc((200 / 720) * 100vw);
  height: calc((10 / 1280) * 100vh);
  border-radius: 2px;
  background-color: #000;
  margin-left: ${(props) => (props.type === "left" ? "10px" : "36px")};
  margin-right: ${(props) => (props.type === "left" ? "36px" : "10px")};
  position: relative;

  > div {
    position: absolute;
    border-radius: 2px;
    width: ${(props) => props.width};
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
  @media (max-width: 720px) {
    width: calc((22 / 720) * 100vw);
    height: calc((30 / 1280) * 100vh);
    margin-right: calc((9 / 720) * 100vw);
  }
`;

const TeamContainer = styled.div`
  width: 100%;
  height: calc((370 / 1280) * 100vh);
  background-color: #2a2c2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: calc((50 / 1280) * 100vh);
  padding-bottom: calc((36 / 1280) * 100vh);
  > span {
    font-size: calc((24 / 720) * 100vw);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #ccc;
  }
  > .middle {
    width: 100%;
    padding: 0 calc((41 / 720) * 100vw);
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .team {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      height: calc((150 / 1280) * 100vh);

      font-size: calc((30 / 720) * 100vw);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.5px;
      text-align: center;
      color: #fff;
      .rank {
        font-size: calc((20 / 720) * 100vw);
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.34px;
        text-align: center;
        color: #fe7300;
      }
    }
    img {
      width: calc((50 / 720) * 100vw);
    }
    > .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        width: calc((85 / 720) * 100vw);
        height: calc((31 / 1280) * 100vh);
        border-radius: 6px;
        background-color: #19793a;
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Roboto", sans-serif;
        font-size: calc((20 / 720) * 100vw);
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

        font-size: calc((22 / 720) * 100vw);
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
  font-size: calc((46 / 720) * 100vw);
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
  padding: 0 calc((40 / 720) * 100vw);
`;

const ContentsTabContainer = styled.div`
  width: 100%;
  height: calc((72 / 1280) * 100vh);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #303231;
  margin-bottom: calc((37 / 1280) * 100vh);
  > div {
    display: flex;
  }
  img {
    width: calc((51 / 720) * 100vw);
    margin-left: auto;
    cursor: pointer;
  }
`;

const ContentsTab = styled.div`
  width: calc((159 / 720) * 100vw);
  height: calc((72 / 1280) * 100vh);
  background-color: ${(props) => (props.active ? "#3b3c3b" : "#303231")};
  margin-right: 1px;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc((24 / 720) * 100vw);
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

const ContentTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;

  .title {
    display: flex;
    flex-direction: column;

    font-size: calc((28 / 720) * 100vw);
    letter-spacing: -0.4px;
    color: #2196f5;
    > span {
      font-size: calc((28 / 720) * 100vw);
      letter-spacing: -0.4px;
      color: #fff;
    }
  }

  > div {
    display: flex;
    align-items: center;
    position: relative;
    > span {
      margin-right: calc((20 / 720) * 100vw);

      font-size: calc((24 / 720) * 100vw);
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

const Table = styled.table`
  width: 100%;
  margin: 0;
  object-fit: contain;
  margin-bottom: 20px;
  border-spacing: 1px;

  th,
  td {
    height: calc((70 / 1280) * 100vh);
    /* border: 1px solid #202221; */
  }

  th {
    font-size: calc((18 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    font-family: "Roboto", sans-serif;
    font-size: calc((18 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #ccc;
    white-space: nowrap;
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
  width: calc((34 / 720) * 100vw);
  height: calc((34 / 720) * 100vw);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: calc((22.5 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

const Tbody = styled.tbody`
  background-color: #2a2c2b;
  .league {
    background-color: #303231;
  }
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    color: #2196f5;
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

const SummaryText = styled.div`
  width: 100%;

  font-size: calc((20 / 720) * 100vw);
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
  @media (max-width: 720px) {
    width: calc((34 / 720) * 100vw);
    height: calc((34 / 720) * 100vw);
  }
`;

const CheckBoxOff = styled.div`
  width: 16px;
  height: 16px;
  border: 1.5px solid #000;
  border-radius: 5px;
  background-color: #fff;
  @media (max-width: 720px) {
    width: calc((34 / 720) * 100vw);
    height: calc((34 / 720) * 100vw);
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
  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  height: calc((80 / 1280) * 100vh);
  background-color: rgba(0, 0, 0, 0.9);
  padding-right: calc((20 / 720) * 100vw);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionTeam = styled.div`
  width: 275px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #ccc;

  > span {
    height: 100%;
    line-height: 24px;
  }
  > img {
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
  width: calc((90 / 720) * 100vw);
  height: calc((60 / 1280) * 100vh);
  border-radius: 6px;
  background-color: ${(props) => props.active && "#19793a"};
  margin-bottom: calc((30 / 1280) * 100vh);
  cursor: pointer;

  font-size: calc((24 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: calc((60 / 1280) * 100vh);
  letter-spacing: -0.3px;
  text-align: center;
  color: ${(props) => (props.active ? "#fff" : "#999999")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RankingTable = styled.table`
  width: 100%;

  font-size: calc((18 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;

  .number {
    font-size: calc((20 / 720) * 100vw);
  }

  & {
    border-spacing: 0px;
  }

  th {
    background-color: #3b3c3b;
    font-weight: 500;
  }

  td {
    img {
      width: calc((22 / 720) * 100vw);
    }
    border-top: 1px solid #202221;
  }

  th,
  td {
    height: calc((70 / 1280) * 100vh);
  }

  tr {
    > :nth-child(1) {
      width: calc((50 / 720) * 100vw);
    }
    > :nth-child(2) {
      width: calc((50 / 720) * 100vw);
    }
    > :nth-child(3) {
      width: calc((250 / 720) * 100vw);
      text-align: start;
      padding-left: calc((20 / 720) * 100vw);
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
    background-color: ${(props) => props.item.active && "#4e4f4e"};
    .image {
      background-image: ${(props) => "url(" + props.item?.logo + ")"};
      background-size: 18px auto;
      background-position: center;
      background-repeat: no-repeat;
    }
    .point {
      border-left: ${(props) => props.item.active && "1px solid #202221"};
    }
    > :last-child {
      color: #2196f5;
      background-color: #4e4f4e;
    }
  }
`;

const Banner = styled.div`
  width: calc((423 / 720) * 100vw);
  height: calc((102 / 1280) * 100vh);
  border-radius: 8px;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 10px;
  left: 10px;
  overflow: hidden;

  .contents {
    display: flex;
    align-items: center;

    padding: 0 9px 0 6px;
    height: 100%;
  }

  .image {
    width: calc((89 / 720) * 100vw);
    height: calc((88 / 1280) * 100vh);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: calc((40 / 720) * 100vw);
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
      font-size: calc((21.5 / 720) * 100vw);
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
      font-size: calc((18 / 720) * 100vw);
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
  width: calc((106 / 720) * 100vw);
  height: calc((38 / 1280) * 100vh);
  border-radius: 4px;
  background-color: #099f3c;

  font-size: calc((18 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
  color: #fff;
  margin-top: calc((5 / 1280) * 100vh);
`;

const CloseButton = styled.div`
  width: calc((30 / 720) * 100vw);
  height: calc((30 / 1280) * 100vh);
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.95);
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: calc((19 / 720) * 100vw);
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
  font-size: calc((28 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
  margin-bottom: calc((33 / 1280) * 100vh);
  width: 100%;
`;

const LineupImageContainer = styled.div`
  width: 100%;
  height: calc((1250 / 1280) * 100vh);
  background-color: #37840c;
  background-image: url("/images/watchinglive/playground-vertical.png");
  background-size: cover;
  position: relative;
  margin-bottom: calc((40 / 1280) * 100vh);
`;

const LineupTable = styled.table`
  width: 100%;
  margin-bottom: calc((78 / 1280) * 100vh);
  border-spacing: 1px;

  th,
  td {
    height: calc((70 / 1280) * 100vh);
  }

  th {
    font-size: calc((22 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.32px;
    text-align: center;
    color: #fff;
    background-color: #3b3c3b;
  }

  td {
    background-color: #303231;
  }
`;

const LineupTableHeadCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: calc((29 / 720) * 100vw);
  img {
    width: calc((24 / 720) * 100vw);
    margin-right: calc((14 / 720) * 100vw);
  }
`;

const LineupTableBodyCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: calc((28 / 720) * 100vw);
  > :nth-child(1) {
    width: calc((25 / 720) * 100vw);
    margin-right: calc((11 / 720) * 100vw);

    font-size: calc((24 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.32px;
    text-align: center;
    color: #fff;
  }

  > :nth-child(2) {
    width: calc((44 / 720) * 100vw);
    height: calc((44 / 720) * 100vw);
    border-radius: 25px;
    background-image: url("/images/watchinglive/player.png");
    background-size: cover;
    background-position: center;
    margin-right: 17px;
  }
  .red {
    width: calc((22 / 720) * 100vw);
    height: calc((30 / 720) * 100vw);
    border-radius: 3px;
    background-color: #e74c5b;
    margin-left: auto;
    margin-right: calc((29 / 720) * 100vw);
  }
  .injury {
    width: calc((38 / 720) * 100vw);
    height: calc((38 / 720) * 100vw);
    border-radius: 6px;
    border: solid 1px rgb(221, 221, 221, 0.2);
    margin-left: auto;
    margin-right: calc((29 / 720) * 100vw);
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
  font-size: calc((20 / 720) * 100vw);
  color: rgba(255, 255, 255, 0.5);

  * {
    height: fit-content;
  }

  .title {
    color: #fff;
  }
`;

const LiveSoccerMobile = ({ setMobileMenu, mobileMenu }) => {
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

  const [quality, setQuality] = useState({
    open: false,
    text: "화질선택",
    list: ["1080p", "720p", "360p"],
  });

  const [multiView, setMultiView] = useState({
    open: false,
    text: "멀티뷰",
    list: ["기본(1화면)", "2멀티화면", "4멀티화면"],
  });

  const [rankingTab, setRankingTab] = useState(1);

  const tmpRankingList = [
    {
      logo: "/images/live/Team3.png",
      name: "시바스 과달라하라 우먼",
      totalGame: 0,
      win: 0,
      draw: 0,
      lose: 0,
      point: 6,
    },
    {
      logo: "/images/live/Team4.png",
      name: "즈남야 노긴스크",
      totalGame: 5,
      win: 5,
      draw: 5,
      lose: 5,
      point: 6,
    },
    {
      logo: "/images/live/Team3.png",
      name: "사라토프",
      totalGame: 3,
      win: 3,
      draw: 3,
      lose: 3,
      point: 3,
    },
    {
      logo: "/images/live/Team4.png",
      name: "시바스 과달라하라 우먼",
      totalGame: 3,
      win: 3,
      draw: 3,
      lose: 3,
      point: 3,
      active: true,
    },
    {
      logo: "/images/live/Team3.png",
      name: "즈남야 노긴스크",
      totalGame: 3,
      win: 3,
      draw: 3,
      lose: 3,
      point: 3,
    },
    {
      logo: "/images/live/Team4.png",
      name: "시바스 과달라하라 우먼",
      totalGame: 3,
      win: 3,
      draw: 3,
      lose: 3,
      point: 3,
    },
    {
      logo: "/images/live/Team3.png",
      name: "사라토프",
      totalGame: 3,
      win: 3,
      draw: 3,
      lose: 3,
      point: 3,
    },
    {
      logo: "/images/live/Team4.png",
      name: "즈남야 노긴스크",
      totalGame: 1,
      win: 1,
      draw: 1,
      lose: 1,
      point: 1,
    },
    {
      logo: "/images/live/Team3.png",
      name: "시바스 과달라하라 우먼",
      totalGame: 1,
      win: 1,
      draw: 1,
      lose: 1,
      point: 1,
      active: true,
    },
    {
      logo: "/images/live/Team4.png",
      name: "사라토프",
      totalGame: 1,
      win: 1,
      draw: 1,
      lose: 1,
      point: 1,
    },
    {
      logo: "/images/live/Team3.png",
      name: "시바스 과달라하라 우먼",
      totalGame: 1,
      win: 1,
      draw: 1,
      lose: 1,
      point: 1,
    },
    {
      logo: "/images/live/Team4.png",
      name: "즈남야 노긴스크",
      totalGame: 0,
      win: 0,
      draw: 0,
      lose: 0,
      point: 0,
    },
  ];

  return (
    <Wrapper>
      <VideoContainer>
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
      <OptionContainer>
        <OptionSelectContainer>
          <Select
            select={relay}
            setSelect={setRelay}
            type="option"
            background="#2c2d2d"
            height="32px"
            name="relay"
          ></Select>
          <Select
            select={quality}
            setSelect={setQuality}
            type="option"
            background="#2c2d2d"
            height="32px"
          ></Select>
        </OptionSelectContainer>
      </OptionContainer>
      <InfoContainer>
        <div className="top">
          <section>
            <div>
              <img src="/images/watchinglive/icon.png" alt="" />3
            </div>
            <div>
              <Card color="red"></Card>0
            </div>
            <div>
              <Card color="yellow"></Card>0
            </div>
          </section>
          <section>
            <div>
              <Card color="red"></Card>0
            </div>
            <div>
              <Card color="yellow"></Card>0
            </div>
            <div>
              <img src="/images/watchinglive/icon.png" alt="" />3
            </div>
          </section>
        </div>
        <div className="bottom">
          <div className="info">
            <div>
              <div>48</div>
              <InfoBar type="left" width="49%">
                <div></div>
              </InfoBar>
              <div className="title">점유율</div>
              <InfoBar type="right" width="49%">
                <div></div>
              </InfoBar>
              <div>48</div>
            </div>
            <div>
              <div>48</div>
              <InfoBar type="left" width="49%">
                <div></div>
              </InfoBar>
              <div className="title">공격</div>
              <InfoBar type="right" width="49%">
                <div></div>
              </InfoBar>
              <div>48</div>
            </div>
          </div>
          <div className="info">
            <div>
              <div>48</div>
              <InfoBar type="left" width="49%">
                <div></div>
              </InfoBar>
              <div className="title">슛온골</div>
              <InfoBar type="right" width="49%">
                <div></div>
              </InfoBar>
              <div>48</div>
            </div>
            <div>
              <div>48</div>
              <InfoBar type="left" width="49%">
                <div></div>
              </InfoBar>
              <div className="title">위험공격</div>
              <InfoBar type="right" width="49%">
                <div></div>
              </InfoBar>
              <div>48</div>
            </div>
            <div className="last">
              <div>48</div>
              <InfoBar type="left" width="49%">
                <div></div>
              </InfoBar>
              <div className="title">슛오프골</div>
              <InfoBar type="right" width="49%">
                <div></div>
              </InfoBar>
              <div>48</div>
            </div>
          </div>
        </div>
      </InfoContainer>
      <TeamContainer>
        <span>인터내셔널 클럽 프렌들리 2022/07/26 19:00:00</span>
        <div className="middle">
          <div className="team">
            <img src="/images/live/Team4.png" alt=""></img>
            <div>알 메사이미어</div>
            <span className="rank">(3위)</span>
          </div>

          <TeamScore active={true}>3</TeamScore>
          <div className="middle">
            <div>후반 56‘</div>
            <span>(HT 3:1)</span>
          </div>
          <TeamScore>1</TeamScore>

          <div className="team">
            <img src="/images/live/Team3.png" alt=""></img>
            <div>하포엘 예루살렘</div>
            <span className="rank">(2위)</span>
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
            <img className="icon" src="/images/main/Sidebar4.png" alt=""></img>
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
          <ContentTitleContainer>
            <span className="title">상대 전적</span>
            <div>
              <span>최근</span>
              <Select select={selectOne} setSelect={setSelectOne}></Select>
            </div>
          </ContentTitleContainer>
          <Table>
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
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>가르활 FC</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
          </Table>
          <SummaryText>
            최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>, 무승부{" "}
            <span className="draw">0</span> , 패배{" "}
            <span className="lose">4</span>, 승리 : 20.00%
          </SummaryText>

          <ContentTitleContainer>
            <span className="title">
              최근 경기 내역 <span>Uttarakhand FC</span>
            </span>
            <div>
              <span>최근</span>
              <Select select={selectTwo} setSelect={setSelectTwo}></Select>
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
          <Table>
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
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td className="active">델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="win">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="draw">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>클럽 네카사 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>Uttarakhand FC</td>
                <td className="score">0-3</td>
                <td className="active">마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
          </Table>
          <SummaryText>
            최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>, 무승부{" "}
            <span className="draw">0</span> , 패배{" "}
            <span className="lose">4</span>, 승리 : 20.00%
          </SummaryText>

          <ContentTitleContainer>
            <span className="title">
              최근 경기 내역 <span>Uttarakhand FC</span>
            </span>
            <div>
              <span>최근</span>
              <Select select={selectThree} setSelect={setSelectThree}></Select>
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
          <Table>
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
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td className="active">델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="win">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="draw">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>클럽 네카사 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>Uttarakhand FC</td>
                <td className="score">0-3</td>
                <td className="active">마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
            <Tbody type="lose">
              <tr>
                <td className="league">IND DSD</td>
                <td>2022/07/22</td>
                <td>델리 FC</td>
                <td className="score">0-3</td>
                <td>마자틀란 우먼</td>
                <td className="result">
                  <ResultCircle>L</ResultCircle>
                </td>
              </tr>
            </Tbody>
          </Table>
          <SummaryText>
            최근 5 , 마자틀란 우먼 승리 <span className="win">1</span>, 무승부{" "}
            <span className="draw">0</span> , 패배{" "}
            <span className="lose">4</span>, 승리 : 20.00%
          </SummaryText>
        </Content>
        <Content active={contentsTab === 2}>
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
                <th className="number">#</th>
                <th>팀</th>
                <th></th>
                <th>경기수</th>
                <th>승리</th>
                <th>무승부</th>
                <th>패배</th>
                <th>승점</th>
              </tr>
            </thead>
            {tmpRankingList.map((item, idx) => (
              <RankingTbody item={item}>
                <tr>
                  <td className="number">{idx + 1}</td>
                  <td className="image"></td>
                  <td>{item.name}</td>
                  <td> {item.totalGame}</td>
                  <td> {item.win}</td>
                  <td> {item.draw}</td>
                  <td> {item.lose}</td>
                  <td className="point"> {item.point}</td>
                </tr>
              </RankingTbody>
            ))}
          </RankingTable>
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
                    <img src="/images/live/Team4.png" alt="" />
                    <div>페르시타</div>
                  </LineupTableHeadCotainer>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <LineupTableBodyCotainer>
                    <div>-</div>
                    <div></div>
                    <LineupTableTextContainer>
                      <span className="title">D. Saputra</span>
                      <span>Cruciate ligament injury</span>
                    </LineupTableTextContainer>
                    <div className="red"></div>
                  </LineupTableBodyCotainer>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>
                  <LineupTableHeadCotainer>
                    <img src="/images/live/Team3.png" alt="" />
                    <div>페르시크 케디리</div>
                  </LineupTableHeadCotainer>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
            </tbody>
            <tbody>
              <tr>
                <td>
                  <LineupTableBodyCotainer>
                    <div>78</div>
                    <div></div>
                    <LineupTableTextContainer>
                      <span className="title">D. Saputra</span>
                      <span>Cruciate ligament injury</span>
                    </LineupTableTextContainer>
                    <div className="injury"></div>
                  </LineupTableBodyCotainer>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
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
            </tbody>
          </LineupTable>
        </Content>
      </ContentsContainer>
      <Footer setMobileMenu={setMobileMenu} mobileMeunu={mobileMenu} />
    </Wrapper>
  );
};

export default LiveSoccerMobile;
