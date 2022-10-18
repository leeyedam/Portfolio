import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../common/Footer";
import GuaranteeCompanySlider from "../slider/GuaranteeCompanySlider";

const Wrapper = styled.div`
  width: 100%;
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
    display: none;
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

const NoticeContainer = styled.div`
  width: 100%;
  padding: 0 50px;
  > .title {
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.5px;
    color: #fff;
    margin-bottom: 30px;
  }
  @media (max-width: 720px) {
    margin-top: calc((40 / 1280) * 100vh);
    padding: 0 calc((40 / 720) * 100vw);

    > .title {
      margin-bottom: calc((24 / 1280) * 100vh);
      font-size: calc((32 / 1280) * 100vh);
    }
  }
`;

const WriteContainer = styled.div``;

const InputTtile = styled.div`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fff;

  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #303231;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border: ${(props) =>
    Number(props.inputFocus) === Number(props.number)
      ? "solid 1px #099f3c"
      : "none"};

  @media (max-width: 720px) {
    height: calc((80 / 1280) * 100vh);
  }
`;

const Input = styled.input`
  width: 80%;
  height: 80%;
  margin-left: 15px;
  background-color: transparent;
  border: none;
  caret-color: #fff;
  color: #fff;

  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    opacity: 0.4;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.93;
    letter-spacing: -0.35px;
    text-align: left;
    color: rgba(255, 255, 255, 0.4);
  }
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100%;
    font-size: calc((24 / 720) * 100vw);
    &::placeholder {
      font-size: calc((24 / 720) * 100vw);
    }
  }
`;

const EditerContainer = styled.div`
  width: 100%;
  height: 454px;
  background-color: #303231;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.1);
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 39px;

  span {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: left;
    color: #ccc;
    margin-left: 6px;

    @media (max-width: 720px) {
      font-size: calc((24 / 720) * 100vw);
    }
  }
`;

const CheckBoxOn = styled.div`
  background-image: url("/images/popup/Check.png");
  background-size: contain;
  width: 16px;
  height: 16px;
  @media (max-width: 720px) {
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
  @media (max-width: 720px) {
    width: calc((34 / 720) * 100vw);
    height: calc((34 / 1280) * 100vh);
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;

  > button {
    width: 100px;
    height: 45px;
    border-radius: 6px;
    border: solid 1px #666;

    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #fff;

    @media (max-width: 720px) {
      width: calc((200 / 720) * 100vw);
      height: calc((80 / 1280) * 100vh);
      font-size: calc((28 / 720) * 100vw);
    }
  }

  .confirm {
    border: none;
    background-color: #19793a;
    margin-right: 10px;
  }
`;

const NoticeWrite = ({ setMobileMenu, mobileMenu }) => {
  let { id } = useParams();
  const [inputFocus, setInputFocus] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <Wrapper>
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
      <NoticeContainer>
        <div className="title">공지사항</div>
        <WriteContainer>
          <InputTtile>카테고리</InputTtile>
          <InputWrapper></InputWrapper>
          <InputTtile>공지명</InputTtile>
          <InputWrapper inputFocus={inputFocus} number={1}>
            <Input
              onFocus={() => setInputFocus(1)}
              onBlur={() => setInputFocus(0)}
            ></Input>
          </InputWrapper>
          <InputTtile>공지내용</InputTtile>
          <EditerContainer>게시판 에디터 영역</EditerContainer>

          <CheckContainer>
            {check ? (
              <CheckBoxOn onClick={() => setCheck(false)} />
            ) : (
              <CheckBoxOff onClick={() => setCheck(true)} />
            )}
            <span>위 게시글을 고정하시겠습니까?</span>
          </CheckContainer>
          <ButtonContainer>
            <button className="confirm">확인</button>
            <button>취소</button>
          </ButtonContainer>
        </WriteContainer>
      </NoticeContainer>

      <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
    </Wrapper>
  );
};

export default NoticeWrite;
