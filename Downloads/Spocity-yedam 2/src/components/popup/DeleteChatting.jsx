import React from "react";
import styled, { css } from "styled-components";

const UserReportContainer = styled.div`
  width: 270px;
  height: 195px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #202221;
  position: absolute;
  top: 319px;
  right: 34px;
  z-index: 1000;
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  height: 21px;
  margin: 18px 0 21px;
  /* padding: 0 24px 1px 29px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
`;

const SelectDefault = styled.div`
  width: 220px;
  height: 33px;
  padding: 0px 16px 0px 15px;
  object-fit: contain;
  border-radius: 6px;
  border: solid 1px #333;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 100px; */
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;
`;

const SelectFullContainer = styled.div`
  width: 220px;
  height: 257px;
  object-fit: contain;
  border-radius: 6px;
  border: solid 1px #333;
  background-color: #191a1a;
  position: absolute;
`;

const SelectFullTop = styled.div`
  width: 100%;
  height: 33px;
  margin: 1px 0;
  padding: 0px 16px 0px 16px;
  object-fit: contain;
  border-bottom: solid 1px #333;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectContentsWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5px;
`;

const SelectContents = styled.div`
  width: 200px;
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
const ReportRectangle = styled.button`
  width: 100%;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #19793a;
  margin: 15px 0 15px 0;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 2; */
  letter-spacing: -0.75px;
  text-align: center;
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
`;

function DeleteChatting({ setDeletePopup, makeDeleteMessage }) {
  const makeConfirm = () => {
    setDeletePopup(false);
    makeDeleteMessage();
  };
  return (
    <div>
      <UserReportContainer>
        <TitleContainer>
          <Title>채팅 안보기</Title>
          <img
            src="/images/common/Close.png"
            alt=""
            style={{ width: "13px", height: "12px", cursor: "pointer" }}
            onClick={() => setDeletePopup(false)}
          ></img>
        </TitleContainer>

        <p
          style={{
            color: "#fff",
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "3px",
          }}
        >
          정말로 유저 "홍길동" 채팅을 <br />
          무시하시겠습니까?
        </p>
        <p style={{ color: "#aaa", fontSize: "12px", textAlign: "center" }}>
          (새로고침시 채팅무시가 해제됩니다)
        </p>
        <ReportRectangle onClick={makeConfirm}>확인</ReportRectangle>
      </UserReportContainer>
    </div>
  );
}

export default DeleteChatting;
