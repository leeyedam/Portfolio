import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  /* height: 446px; */
  padding: 31px 24px 29px;
  object-fit: contain;
  border-radius: 12px;
  background-color: #202221;
  @media (max-width: 720px) {
    overflow: hidden;
    overflow-y: auto;
    width: calc((640 / 720) * 100vw);
    height: calc((1000 / 1280) * 100vh);
    display: flex;
    flex-direction: column;
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
    .email {
      display: flex;
      flex-direction: column;
      & > div {
        width: 100%;
        justify-content: ${(props) => props.hide && "flex-start"};
      }
    }
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
  width: ${(props) => props.width || "450px"};
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
    opacity: ${(props) => (props.select ? "1" : "0.4")};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.93;
    letter-spacing: -0.35px;
    text-align: left;
    color: ${(props) => (props.select ? "#fff" : "rgba(255, 255, 255, 0.4)")};
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

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  .confirm {
    width: 130px;
  }
  @media (max-width: 720px) {
    width: 100%;
    .confirm {
      width: 30%;
    }
  }
`;

const Span = styled.span`
  width: 13px;
  height: 13px;
  margin: 0px 7px 0px 6px;
  object-fit: contain;
  opacity: 0.4;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
  text-align: left;
  color: rgba(255, 255, 255, 0.4);
  @media (max-width: 720px) {
    font-size: calc((28 / 720) * 100vw);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc((28 / 720) * 100vw);
    height: calc((80 / 1280) * 100vh);
    margin-top: 12px;
  }
`;

const RectangleGray = styled.button`
  width: 107px;
  height: 42px;
  margin: 0px 0 0px 11px;
  padding: 10px 14px 14px 14px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #383a39;
  margin-top: 12px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
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
    margin-left: 0;
    height: calc((80 / 1280) * 100vh);
    font-size: calc((28 / 720) * 100vw);
    .confirm {
      width: 10%;
    }
  }
`;

const Rectangle = styled.button`
  width: 450px;
  height: 40px;
  margin: 24px 0 0;
  border-radius: 6px;
  background-color: #19793a;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.38px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc((27 / 1280) * 100vh) 0;
    height: calc((80 / 1280) * 100vh);
    font-size: calc((28 / 720) * 100vw);
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
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

const SelectFullContainer = styled.div`
  width: 154px;
  height: max-content;
  object-fit: contain;
  border-radius: 6px;
  background-color: #191a1a;
  position: absolute;
  top: 12px;
  right: 115px;
  z-index: 10000;
  @media (max-width: 720px) {
    right: 0;
    width: 45%;
  }
`;

const SelectFullTop = styled.div`
  width: 100%;
  height: 33px;
  margin: 1px 0;
  padding: 0px 16px 0px 20px;
  object-fit: contain;
  border-bottom: solid 1px #333;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectContentsWrapper = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5px;
`;

const SelectText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1px;
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;
`;

const SelectContents = styled.div`
  width: 90%;
  height: 26px;
  object-fit: contain;
  border-radius: 5px;
  padding-left: 10px;
  cursor: pointer;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;

  &:hover {
    background-color: #19793a;
  }
`;

const Signup = ({ setSignup, setLogin }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [openSelect, setOpenSelect] = useState({
    open: false,
    text: "gmail.com",
  });
  const [authNum, setAuthNum] = useState(false);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>회원가입</Title>
        <img
          src="/images/common/Close.png"
          alt=""
          onClick={() => setSignup(false)}
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
      <InputContainer hide={openSelect.open}>
        <InputTitle>이메일 주소</InputTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
          className="email"
          hide={openSelect.open}
        >
          <EmailContainer>
            <InputWrapper inputFocus={inputFocus} number={2} width={"154px"}>
              <Input
                placeholder="이메일 입력"
                onFocus={() => setInputFocus(2)}
                onBlur={() => setInputFocus(0)}
              ></Input>
            </InputWrapper>
            <Span>@</Span>
            {openSelect.open ? (
              <>
                <InputWrapper
                  inputFocus={inputFocus}
                  number={10}
                  width={"154px"}
                  style={{ height: "42px", visibility: "hidden" }}
                  onClick={() => setOpenSelect({ ...openSelect, open: true })}
                ></InputWrapper>
                <SelectFullContainer>
                  <SelectFullTop
                    onClick={() =>
                      setOpenSelect({ ...openSelect, open: false })
                    }
                    style={{ borderRadius: "6px 6px 0 0" }}
                  >
                    <SelectText>{openSelect.text}</SelectText>
                    <img
                      src="/images/chat/ArrowDown.png"
                      alt=""
                      style={{
                        width: "10px",
                        height: "5px",
                        cursor: "pointer",
                        transform: `${
                          openSelect.open ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                        // transition: "all 0.2s ease-in-out",
                      }}
                      // onClick={() => setOpenSelect({ ...openSelect, open: true })}
                    ></img>
                  </SelectFullTop>
                  <SelectContentsWrapper>
                    <SelectContents
                      onClick={() =>
                        setOpenSelect({ open: false, text: "gmail.com" })
                      }
                    >
                      gmail.com
                    </SelectContents>
                    <SelectContents
                      onClick={() =>
                        setOpenSelect({ open: false, text: "naver.com" })
                      }
                    >
                      naver.com
                    </SelectContents>
                    <SelectContents
                      onClick={() =>
                        setOpenSelect({ open: false, text: "kakao.com" })
                      }
                    >
                      kakao.com
                    </SelectContents>
                    <SelectContents
                      onClick={() =>
                        setOpenSelect({ open: false, text: "hanmail.com" })
                      }
                    >
                      hanmail.com
                    </SelectContents>
                    <SelectContents
                      onClick={() =>
                        setOpenSelect({ open: false, text: "nate.com" })
                      }
                    >
                      nate.com
                    </SelectContents>
                  </SelectContentsWrapper>
                </SelectFullContainer>
              </>
            ) : (
              <InputWrapper
                inputFocus={inputFocus}
                number={10}
                width={"154px"}
                onClick={() => setOpenSelect({ ...openSelect, open: true })}
              >
                <Input
                  placeholder={openSelect.text}
                  onFocus={() => setInputFocus(3)}
                  onBlur={() => setInputFocus(0)}
                  disabled={1}
                  select={1}
                ></Input>
                <img
                  src="/images/chat/ArrowDown.png"
                  alt=""
                  style={{
                    width: "10px",
                    height: "5px",
                    // transform: `${
                    //   openSelect.open ? "rotate(180deg)" : "rotate(0deg)"
                    // }`,
                    // transition: "transform 0.2s linear",
                    marginRight: "12px",
                  }}
                ></img>
              </InputWrapper>
            )}
          </EmailContainer>
          <RectangleGray>{authNum ? "재전송" : "인증번호발송"}</RectangleGray>
        </div>
      </InputContainer>
      {authNum && (
        <InputContainer hide={openSelect.open}>
          <InputTitle>인증번호</InputTitle>
          <EmailContainer>
            <InputWrapper inputFocus={inputFocus} number={4}>
              <Input
                placeholder="인증번호 입력"
                onFocus={() => setInputFocus(4)}
                onBlur={() => setInputFocus(0)}
              ></Input>
            </InputWrapper>
            <RectangleGray className="confirm">확인</RectangleGray>
          </EmailContainer>
        </InputContainer>
      )}
      <InputContainer>
        <InputTitle>비밀번호</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={5}>
          <Input
            placeholder="비밀번호 입력"
            onFocus={() => setInputFocus(5)}
            onBlur={() => setInputFocus(0)}
            type="password"
          ></Input>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputTitle>비밀번호 재입력</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={6}>
          <Input
            placeholder="비밀번호 재입력"
            onFocus={() => setInputFocus(6)}
            onBlur={() => setInputFocus(0)}
            type="password"
          ></Input>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputTitle>닉네임</InputTitle>
        <InputWrapper inputFocus={inputFocus} number={7}>
          <Input
            placeholder="닉네임 입력"
            onFocus={() => setInputFocus(7)}
            onBlur={() => setInputFocus(0)}
          ></Input>
        </InputWrapper>
      </InputContainer>
      <Rectangle>회원가입</Rectangle>
      <TextContainer>
        <Text>당신은 이미 계정을 가지고 있습니까?&nbsp;</Text>
        <Text
          color="rgba(0, 255, 88, 0.5)"
          onClick={() => {
            setLogin(true);
            setSignup(false);
          }}
          style={{ cursor: "pointer" }}
        >
          여기서 로그인할 수 있습니다.
        </Text>
      </TextContainer>
    </Wrapper>
  );
};

export default Signup;
