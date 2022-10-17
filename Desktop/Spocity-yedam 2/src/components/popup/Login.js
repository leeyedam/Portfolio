import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 446px;
  padding: 31px 24px 29px;
  object-fit: contain;
  border-radius: 12px;
  background-color: #202221;
  @media (max-width: 720px) {
    width: calc((640 / 720) * 100vw);
    height: calc((793 / 1280) * 100vh);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: calc((40 / 1280) * 100vh) calc((40 / 720) * 100vw);
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
    height: calc((126 / 1280) * 100vh);
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
    height: calc((79 / 1280) * 100vh);
    border: ${(props) =>
      Number(props.inputFocus) === Number(props.number)
        ? "solid 1px #099f3c"
        : "solid 2px #333"};
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
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    width: 100%;
    font-size: calc((24 / 720) * 100vw);
    &::placeholder {
      font-size: calc((24 / 720) * 100vw);
    }
  }
`;

const CheckBoxContainer = styled.div`
  width: 400px;
  height: 16px;
  display: flex;
  align-items: center;
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

const CheckText = styled.span`
  margin: 1px 0 1px 7px;
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5;
  letter-spacing: -0.3px;
  text-align: left;
  color: #ccc;
  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const Rectangle = styled.button`
  width: 450px;
  height: 50px;
  margin: 25px 2px 15px 0;
  padding: 17px 202px 17px 202px;
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
    padding: 0;
    height: calc((80 / 1280) * 100vh);
    font-size: calc((28 / 720) * 100vw);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 auto;
    }
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
  color: ${(props) => props.color || "rgba(255, 255, 255, 0.5)"};
  &:hover {
    color: ${(props) => props.color && "rgba(0, 255, 88, 0.8)"};
  }
  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const Login = ({ setLogin, setSearchUserInfo, setSignup }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [check, setCheck] = useState({
    id: false,
    autoLogin: false,
  });

  return (
    <Wrapper>
      <TitleContainer>
        <Title>로그인</Title>
        <img
          src="/images/common/Close.png"
          alt=""
          onClick={() => setLogin(false)}
        ></img>
      </TitleContainer>
      <InputContainer>
        <InputTitle>아이디</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={1}>
          <Input
            placeholder="아이디 입력"
            onFocus={() => setInputFocus(1)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputTitle>비밀번호</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={2}>
          <Input
            placeholder="비밀번호 입력"
            onFocus={() => setInputFocus(2)}
            onBlur={() => setInputFocus(0)}
            type="password"
          ></Input>
        </InputWrapper>
      </InputContainer>
      <CheckBoxContainer>
        {check.id ? (
          <CheckBoxOn onClick={() => setCheck({ ...check, id: false })} />
        ) : (
          <CheckBoxOff onClick={() => setCheck({ ...check, id: true })} />
        )}
        <CheckText>아이디저장</CheckText>
        {check.autoLogin ? (
          <CheckBoxOn
            onClick={() => setCheck({ ...check, autoLogin: false })}
            style={{ marginLeft: "21px" }}
          />
        ) : (
          <CheckBoxOff
            onClick={() => setCheck({ ...check, autoLogin: true })}
            style={{ marginLeft: "21px" }}
          />
        )}
        <CheckText>자동로그인</CheckText>
      </CheckBoxContainer>
      <Rectangle>
        <span>로그인</span>
      </Rectangle>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>아직 회원이 아니세요?&nbsp;</Text>
        <Text
          color="rgba(0, 255, 88, 0.5)"
          onClick={() => {
            setSignup(true);
            setLogin(false);
          }}
          style={{ cursor: "pointer" }}
        >
          회원가입
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>아이디/비밀번호를 잊으셨나요?&nbsp;</Text>
        <Text
          color="rgba(0, 255, 88, 0.5)"
          onClick={() => {
            setSearchUserInfo(true);
            setLogin(false);
          }}
          style={{ cursor: "pointer" }}
        >
          아이디/비밀번호찾기
        </Text>
      </div>
    </Wrapper>
  );
};

export default Login;
