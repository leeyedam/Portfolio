import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 740px;
  padding: 31px 24px 29px;
  object-fit: contain;
  border-radius: 12px;
  background-color: #202221;
  @media (max-width: 720px) {
    width: calc((640 / 720) * 100vw);
    height: calc((1000 / 1280) * 100vh);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    padding: calc((40 / 720) * 100vw);
  }
`;

const TitleContainer = styled.div`
  height: 21px;
  margin: 0 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 13px;
    height: 12px;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    height: calc((28 / 1280) * 100vh);
    img {
      width: calc((28 / 720) * 100vw);
      height: calc((28 / 1280) * 100vh);
    }
  }
`;

const Title = styled.span`
  height: 17px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.45px;
  text-align: left;
  color: #fff;
  @media (max-width: 720px) {
    font-size: calc((30 / 720) * 100vw);
    display: flex;
    align-items: center;
  }
`;

const InputContainer = styled.div`
  width: 450px;
  object-fit: contain;
  margin-bottom: 12px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const InputTitle = styled.span`
  opacity: 0.7;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.38px;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const InputWrapper = styled.div`
  width: 450px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  margin-top: 12px;
  border: ${(props) =>
    Number(props.inputFocus) === Number(props.number)
      ? "solid 1px #099f3c"
      : "none"};
  @media (max-width: 720px) {
    width: 100%;
    height: calc((80 / 1280) * 100vh);
    border: solid 2px #333;
    margin-left: 0;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 80%;
  margin-left: 15px;
  background-color: #191a1a;
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

const Rectangle = styled.button`
  width: 450px;
  height: 50px;
  margin: 25px 2px 15px 0;
  padding: 17px 165px 17px 164px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #19793a;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 10px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
  @media (max-width: 720px) {
    width: 100%;
    padding: calc((27 / 1280) * 100vh) 0;
    height: calc((80 / 1280) * 100vh);
    font-size: calc((28 / 720) * 100vw);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.p`
  opacity: 0.5;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: -0.35px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  @media (max-width: 720px) {
    font-size: calc((28 / 720) * 100vw);
  }
`;

const ChangeUserInfo = ({ setChangeUserInfo, setWithdrawal }) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>회원정보 수정</Title>
        <img
          src="/images/common/Close.png"
          alt=""
          onClick={() => setChangeUserInfo(false)}
        ></img>
      </TitleContainer>
      <InputContainer>
        <InputTitle>아이디(수정불가)</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={1}>
          <Input
            placeholder="SPOCITY"
            onFocus={() => setInputFocus(1)}
            onBlur={() => setInputFocus(0)}
            disabled={1}
          ></Input>
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitle>이메일 주소(수정불가)</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={2}>
          <Input
            placeholder="SPOCITY@gmail.com"
            onFocus={() => setInputFocus(2)}
            onBlur={() => setInputFocus(0)}
            disabled={1}
          ></Input>
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitle>닉네임</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={3}>
          <Input
            placeholder="스포시티"
            onFocus={() => setInputFocus(3)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitle>새 비밀번호</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={4}>
          <Input
            placeholder="새 비밀번호 입력"
            type="password"
            onFocus={() => setInputFocus(4)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitle>새 비밀번호 재입력</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={5}>
          <Input
            placeholder="새 비밀번호 재입력"
            type="password"
            onFocus={() => setInputFocus(5)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitle>현재 비밀번호</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={6}>
          <Input
            placeholder="현재 비밀번호 입력"
            type="password"
            onFocus={() => setInputFocus(6)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>
      <Rectangle>회원정보 수정 완료</Rectangle>
      <Text
        style={{ cursor: "pointer" }}
        onClick={() => {
          setChangeUserInfo(false);
          setWithdrawal(true);
        }}
      >
        회원탈퇴를 하고 싶어요
      </Text>
    </Wrapper>
  );
};

export default ChangeUserInfo;
