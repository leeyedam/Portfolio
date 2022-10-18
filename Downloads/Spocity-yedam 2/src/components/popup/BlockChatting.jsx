import React from "react";
import styled, { css } from "styled-components";

const UserReportContainer = styled.div`
  width: 260px;
  height: 158px;
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
  margin-top: 10px;

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

function BlockChatting({ setReportPopup, openSelect, setOpenSelect }) {
  return (
    <div>
      <UserReportContainer>
        <TitleContainer>
          <Title>유저 '스페이스' 신고하기</Title>
          <img
            src="/images/common/Close.png"
            alt=""
            style={{ width: "13px", height: "12px", cursor: "pointer" }}
            onClick={() => setReportPopup(false)}
          ></img>
        </TitleContainer>
        {openSelect.open ? (
          <SelectFullContainer>
            <SelectFullTop
              onClick={() => setOpenSelect({ ...openSelect, open: false })}
              style={{ borderRadius: "6px 6px 0 0" }}
            >
              <SelectText>{openSelect.text}</SelectText>
              <img
                src="/images/chat/ArrowDown.png"
                alt=""
                style={{ width: "10px", height: "5px", cursor: "pointer" }}
                // onClick={() => setRankingModal(false)}
              ></img>
            </SelectFullTop>
            <SelectContentsWrapper>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "욕설" })}
              >
                욕설
              </SelectContents>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "거짓중계" })}
              >
                거짓중계
              </SelectContents>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "비매너" })}
              >
                비매너
              </SelectContents>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "도배" })}
              >
                도배
              </SelectContents>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "불법광고" })}
              >
                불법광고
              </SelectContents>
              <SelectContents
                onClick={() => setOpenSelect({ open: false, text: "관심끌기" })}
              >
                관심끌기
              </SelectContents>
              <SelectContents
                onClick={() =>
                  setOpenSelect({ open: false, text: "타회원비하" })
                }
              >
                타회원비하
              </SelectContents>
            </SelectContentsWrapper>
          </SelectFullContainer>
        ) : (
          <SelectDefault
            onClick={() => setOpenSelect({ ...openSelect, open: true })}
          >
            <SelectText>{openSelect.text}</SelectText>
            <img
              src="/images/chat/ArrowDown.png"
              alt=""
              style={{ width: "10px", height: "5px", cursor: "pointer" }}
              // onClick={() => setRankingModal(false)}
            ></img>
          </SelectDefault>
        )}
        <ReportRectangle>채팅신고하기</ReportRectangle>
      </UserReportContainer>
    </div>
  );
}

export default BlockChatting;
