import styled , {css}from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "moment/locale/ko";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 721px) {
    display: none;
  }
`;

const TopBarContainer = styled.div`
  padding: 0 calc((40 / 720) * 100vw);
  display: flex;
  align-items: center;
  /* height: calc((100 / 1280) * 100vh); */
  flex-direction: column;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    align-items: center;
    height: calc((100 / 1280) * 100vh);
    justify-content: space-between;
    width: 100%;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc((380 / 720) * 100vw);
`;

const Tab = styled.div`
  width: calc((123 / 720) * 100vw);
  height: calc((60 / 1280) * 100vh);
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#3b3c3b" : "#303231")};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((22 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  color: ${(props) => props.color};
  position: relative;
`;

const IconContents = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: max-content;
  > * {
    margin-left: calc((5 / 720) * 100vw);
  }

  & > img {
    width: calc((60 / 1280) * 100vh);
    /* margin-left: calc((4 / 720) * 100vw); */
  }
`;

const IconRectangle = styled.div`
  width: calc((60 / 1280) * 100vh);
  height: calc((60 / 1280) * 100vh);
  object-fit: contain;
  border-radius: 6px;
  background-color: #383a39;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: calc((29 / 720) * 100vw);
  }
`;

const TabCount = styled.div`
  width: calc((34 / 720) * 100vw);
  height: calc((28 / 1280) * 100vh);
  position: absolute;
  top: calc((10 / 1280) * -100vh);
  right: 0;
  background-color: #585a58;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: calc((22 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  color: #07ac40;
`;

const SearchContainer = styled.div`
  width: calc((640 / 720) * 100vw);
  height: calc((62 / 1280) * 100vh);
  border-radius: 6px;
  box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px #07ac40;
  background-color: #3b3c3b;
  position: absolute;
  bottom: calc((80 / 1280) * -100vh);
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &::after {
    // Our small triangle to fill the space
    content: "";
    border-color: transparent transparent #3b3c3b;
    border-style: solid;
    border-width: calc((11 / 720) * 100vw);
    width: 0;
    height: 0;
    position: absolute;
    top: calc((18 / 1280) * -100vh);
    right: calc((80 / 720) * 100vw);
  }

  &::before {
    content: "";
    border-color: transparent transparent #07ac40;
    border-style: solid;
    border-width: calc((12 / 720) * 100vw);
    width: 0;
    height: 0;
    position: absolute;
    top: calc((21 / 1280) * -100vh);
    right: calc((79 / 720) * 100vw);
  }

  img {
    width: calc((28 / 720) * 100vw);
  }
`;

const SearchInput = styled.input`
  width: 90%;
  height: calc((62 / 1280) * 100vh);
  background-color: transparent;
  border: none;
  color: #fff;

  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((22 / 720) * 100vw);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;

  &::placeholder {
    color: #999999;
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  z-index: 1;
  right: calc((60 / 720) * 100vw);
  top: calc((70 / 1280) * 100vh);
  .react-calendar {
    width: calc((515 / 720) * 100vw);
    border-radius: 12px;
    border: solid 1px #202221;
    background-color: #3b3c3b;
  }
  .react-calendar__month-view__days {
    height: calc((350 / 1280) * 100vh);
  }
  .react-calendar__tile--active {
    border-radius: 6px;
    background: #07ac40;
  }
  .react-calendar__tile {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: calc((22.5 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #aaaaaa;
  }
  .react-calendar__month-view__weekdays {
    font-family: "Noto Sans KR", sans-serif;
    font-size: calc((22.5 / 720) * 100vw);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.28px;
    color: #fff;
    padding-bottom: calc((34 / 1280) * 100vh);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .react-calendar__navigation {
    margin: calc((34 / 1280) * 100vh);
    align-items: center;
    * {
      font-family: "Roboto", sans-serif;
      font-size: calc((24 / 720) * 100vw);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.32px;
      text-align: center;
      color: #fff;
    }
    * {
      color: #fff;
    }
  }
  .react-calendar__navigation__arrow {
    font-size: calc((40 / 720) * 100vw);
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__tile--now {
    background-color: transparent;
    color: #00d349;
    &:focus,
    &:hover {
      color: #fff;
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #07ac40;
    border-radius: 6px;
  }
  .react-calendar__navigation button:disabled {
    background-color: transparent;
  }
  .react-calendar__navigation button:enabled:hover {
    background-color: transparent;
  }

  &::after {
    content: "";
    border-color: transparent transparent #3b3c3b;
    border-style: solid;
    border-width: calc((11 / 720) * 100vw);
    width: 0;
    height: 0;
    position: absolute;
    top: calc((17 / 1280) * -100vh);
    right: calc(50% - 11px);
  }
`;

const TimeButton = styled.div`
  width: 100%;
  height: calc((60 / 1280) * 100vh);
  object-fit: contain;
  border-radius: 6px;
  background-color: #383a39;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-bottom: calc((20 / 1280) * 100vh);

  & > img {
    height: calc((24 / 1280) * 100vh);
  }
  .date {
    width: calc((500 / 720) * 100vw);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-size: calc((24 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #fff;
    img {
      width: calc((25 / 720) * 100vw);
      margin-right: 8px;
    }
  }
`;

const LeagueContainer = styled.div`
  width: 100%;
  height: calc((65 / 1280) * 100vh);
  margin-top: 1px;
  background-color: #303231;
  display: flex;
  align-items: center;
  padding: 0 calc((25 / 720) * 100vw);
  margin-bottom: 1px;
  img:first-child {
    width: calc((26 / 720) * 100vw);
    margin-right: calc((12 / 720) * 100vw);
  }
  .star {
    width: calc((26 / 720) * 100vw);
  }
  .arrow {
    width: calc((18 / 720) * 100vw);
    margin-left: auto;
    transform: ${(props) => (!props.open ? "rotate(0deg)" : "rotate(180deg)")};
  }
  & > div {
    font-family: "Noto Sans KR", sans-serif;
    font-size: calc((24 / 720) * 100vw);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.3px;
    color: #ccc;
    margin-right: calc((17 / 720) * 100vw);
    span {
      color: #fff;
    }
  }
`;

const SoccerContainer = styled.div`
  width: 100%;
  height: calc((140 / 1280) * 100vh);
  object-fit: contain;
  background-color: #3b3c3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc((22 / 720) * 100vw);
  padding-right: calc((43 / 720) * 100vw);
  margin-bottom: 1px;
  position: relative;
  .basketballTeamContainer{
    width : 50%;
    height : auto;
    div {
      display : inline-block;
    }
  }
  .basketballTeamContainer:nth-child(1){
    width : 50%;
    display : inline-block;
    float : left;
  }
  .basketballTeamContainer:nth-child(2){
    width : 50%;
    margin-left : 120px;
    float : right;
    color:red;
  }
`;

const BasketballTeamContainer = styled.div`
`

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 70%;
  img {
    height: calc((50 / 1280) * 100vh);
    margin-left : 5px;
  }
`;

const TeamName = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((22 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #fff;
`;

const RankText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((18 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  color: #ff7200;
  margin-right: calc((7 / 720) * 100vw);
`;

const TeamNameContainer = styled.div`
  display: flex;
  align-items: center;
  width : 70px;
  text-overflow: ellipsis; 
  overflow:hidden;
  color : white;
  text-align : center;
  margin-left : 10px;
  float : right;
  span{
    color : white;
    white-space : normal;
    white-space:nowrap;
  } 
`;

const ScoreContainer = styled.div`
  width: calc((45 / 720) * 100vw);
  height: calc((45 / 720) * 100vw);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: calc((36 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  border-radius: 6px;
  color: ${(props) => (props.color ? "#fc0" : "#fff")};
  background-color: ${(props) => (props.background ? "#ffcc00" : "")};
  position : relative;
  bottom : 5px;
`;

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: calc((130 / 720) * 100vw);
  span {
    font-family: "Roboto", sans-serif;
    font-size: calc((22 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #fff;
  }
`;

const GameTime = styled.div`
  width: calc((83 / 720) * 100vw);
  height: calc((30 / 1280) * 100vh);
  border-radius: 6px;
  background-color: #206c3a;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((20 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #fff;
`;

const GameIconCantainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    height: calc((25 / 1280) * 100vh);
    margin-right: calc((14 / 720) * 100vw);
  }
  img:last-of-type {
    margin: 0;
  }
`;

const Star = styled.div`
  position: absolute;
  right: calc((25 / 720) * 100vw);
  top: calc((27 / 1280) * 100vh);
  img {
    width: calc((26 / 720) * 100vw);
  }
`;

const BaseballNum = styled.div`
  width: calc((58 / 720) * 100vw);
  height: calc((27 / 1280) * 100vh);
  border-radius: 6px;
  background-color: ${(props) => props.background && "#515151"};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: calc((20 / 720) * 100vw);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  color: #fff;
`;

const BasketballGameTime = styled.div`
  width: calc((110 / 720) * 100vw);
  height: calc((30 / 1280) * 100vh);
  border-radius: 6px;
  ${(props) =>
    props.type === "whiteGray" &&
    css`
      background-color: #8c8c8c;
    `}
  ${(props) =>
    props.type === "gren" &&
    css`
      background-color: #19793a;
    `}
  ${(props) =>
    props.type === "gray" &&
    css`
      background-color: #515151;
    `}
  ${(props) =>
    props.type === "red" &&
    css`
      background-color: #a92731;
    `} 
  ${(props) =>
    props.type === "blue" &&
    css`
      background-color: #0c72b9;
    `}
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .quarter {
    font-family: "Noto Sans KR", sans-serif;
    font-size: calc((20 / 720) * 100vw);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .time {
    font-family: "Roboto", sans-serif;
    font-size: calc((22 / 720) * 100vw);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #ff8400;
    display: flex;
    align-items: center;
  }
`;

const TimeBackground =  styled.div`
    ${(props) =>
      props.type === "whiteGray" &&
      css`
        background-color: #8c8c8c;
      `}
    ${(props) =>
      props.type === "gren" &&
      css`
        background-color: #19793a;
      `}
    ${(props) =>
      props.type === "gray" &&
      css`
        background-color: #515151;
      `}
    ${(props) =>
      props.type === "red" &&
      css`
        background-color: #a92731;
      `} 
    ${(props) =>
      props.type === "blue" &&
      css`
        background-color: #0c72b9;
      `}
`;


// 타임스탬프 값 받아서 뿌려주기
function getTimeStringSeconds(seconds){
  // const dateFormat = moment(seconds * 1000).format('LT');
  // return JSON.stringify(sampleTimestamp).replace(/\"/g , "")
  var sampleTimestamp = new Date(seconds * 1000); 
  return JSON.stringify(sampleTimestamp).slice(12, 17)
}

const LiveScorebasketballMobile = ({ sportsType , liveCount , basketballData , openSelect , setOpenSelect , order , pageBasicImgUrl , tab, setTab , basketballScore}) => {
  // const [tab, setTab] = useState(1);
  const [openSearch, setOpenSearch] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [tmpList, setTmpList] = useState([
    {
      open: true,
      bookmark: false,
      game: [
        {
          LeftScore: 4,
          LeftScoreStyle: "color",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
        {
          LeftScore: 2,
          LeftScoreStyle: "none",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
        {
          LeftScore: 1,
          LeftScoreStyle: "none",
          RightScore: 3,
          RightScoreStyle: "background",
          bookmark: false,
        },
        {
          LeftScore: 3,
          LeftScoreStyle: "color",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
      ],
    },
    {
      open: true,
      bookmark: false,
      game: [
        {
          LeftScore: 4,
          LeftScoreStyle: "color",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
        {
          LeftScore: 2,
          LeftScoreStyle: "none",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
        {
          LeftScore: 1,
          LeftScoreStyle: "none",
          RightScore: 3,
          RightScoreStyle: "background",
          bookmark: false,
        },
        {
          LeftScore: 3,
          LeftScoreStyle: "color",
          RightScore: 2,
          RightScoreStyle: "none",
          bookmark: false,
        },
      ],
    },
  ]);

  const changeOpen = (index) => {
    let tmpData = tmpList;
    tmpData[index] = { ...tmpData[index], open: !tmpData[index].open };
    setTmpList([...tmpData]);
  };

  const changeBookmark = (index) => {
    let tmpData = tmpList;
    tmpData[index] = { ...tmpData[index], bookmark: !tmpData[index].bookmark };
    setTmpList([...tmpData]);
  };

  const changeGameBookmark = (listIdx, gameIdx) => {
    let tmpData = tmpList;
    tmpData[listIdx].game[gameIdx] = {
      ...tmpData[listIdx].game[gameIdx],
      bookmark: !tmpData[listIdx].game[gameIdx].bookmark,
    };
    setTmpList([...tmpData]);
  };

  const isBookmark = (data) => {
    if (data.bookmark) {
      return true;
    }
    const findBookmark = (e) => {
      if (e.bookmark === true) {
        return true;
      } else {
        return false;
      }
    };
    const result = data?.game.some(findBookmark);
    return result;
  };

  const plusDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const minusDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopBarContainer>
        <div>
          <TabContainer>
            <Tab
              onClick={() => setTab(1)}
              active={tab === 1}
              color={tab === 1 ? "#07ac40" : "#999999"}
            >
              라이브
              <TabCount>{liveCount}</TabCount>
            </Tab>

            <Tab
              onClick={() => setTab(2)}
              color={tab === 2 ? "#fff" : "#999999"}
            >
              종료
            </Tab>
            <Tab
              onClick={() => setTab(3)}
              color={tab === 3 ? "#fff" : "#999999"}
            >
              예정
            </Tab>
          </TabContainer>
          <IconContents>
            <IconRectangle onClick={() => setTab(4)}>
              {tab === 4 ? (
                <img src="/images/live/Star-on.png" alt="" />
              ) : (
                <img src="/images/live/Star-off.png" alt="" />
              )}
            </IconRectangle>
            <IconRectangle onClick={() => setOpenSearch(!openSearch)}>
              <img src="/images/live/Search.png" alt="" />
            </IconRectangle>
            <img src="/images/live/Refresh.png" alt="" />
            {openSearch && (
              <SearchContainer>
                <SearchInput placeholder="리그명 또는 팀 이름을 검색하세요" />
                <img src="/images/live/Search.png" alt="" />
              </SearchContainer>
            )}
          </IconContents>
        </div>
        {(tab === 2 || tab === 3) && (
          <TimeButton>
            <img src="/images/live/Arrow-left.png" alt="" onClick={minusDate} />
            <div
              className="date"
              onClick={() => setCalendar(!calendar)}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/live/Calendar.png" alt="" />
              <span>{moment(date).format("MM/DD dd")}</span>
            </div>
            <img src="/images/live/Arrow-right.png" alt="" onClick={plusDate} />
            {calendar && (
              <CalendarContainer>
                <Calendar
                  onChange={(e) => {
                    setDate(e);
                    setCalendar(false);
                  }}
                  value={date}
                  formatDay={(locale, date) =>
                    date.toLocaleString("en", { day: "numeric" })
                  }
                  minDetail="month"
                  maxDetail="month"
                  navigationLabel={null}
                />
              </CalendarContainer>
            )}
          </TimeButton>
        )}
      </TopBarContainer>
    {basketballData?.data?.map((data, index) => {
      return (
        <>
          <div 
            onClick={() =>{
                navigate(`/live/watch/basketball/${data?.match_id && data?.match_id}`)
                // setFootballMatchIdData(data?.match_id)
              }}>
            <LeagueContainer>
              <img src={pageBasicImgUrl+data?.country_logo} alt=""></img>
                <div>
                  {data.category_name} : <span>{data.competition_name}</span> 리그
                </div>
                <img
                  className="star"
                  src="/images/live/Star-on.png"
                  alt=""
                  // onClick={() => changeBookmark(index)}
                ></img>
                  {/* {item.bookmark ? (
                  <img
                      className="star"
                      src="/images/live/Star-on.png"
                      alt=""
                      onClick={() => changeBookmark(index)}
                  ></img>
                  ) : (
                  <img
                      className="star"
                      src="/images/live/Star-off.png"
                      alt=""
                      onClick={() => changeBookmark(index)}
                  ></img>
                  )} */}
                  <img
                  className="arrow"
                  src="/images/chat/ArrowDown.png"
                  alt=""
                  //   onClick={() => changeOpen(index)}
                  ></img>
            </LeagueContainer>

            {/* 본문 */}
            <SoccerContainer>
              <BasketballTeamContainer className="basketballTeamContainer">
                <TeamContainer>
                    <img
                        className="arrow"
                        src={pageBasicImgUrl+data.home_team_info.team_logo}
                        alt=""
                    ></img>
                    <TeamNameContainer>
                        <TeamName>{data.home_team_info.team_name}</TeamName>
                    </TeamNameContainer>
                </TeamContainer>
                <ScoreContainer color={true}
                // color={element.LeftScoreStyle === "color"}
                // background={element.LeftScoreStyle === "background"}
                >
                  {
                    basketballScore?.id !== data?.match_id &&
                    data.home_team_info.score_1 + data.home_team_info.score_2 + data.home_team_info.score_3 + data.home_team_info.score_4 + data.home_team_info.score_overtime
                  }
                  {
                    basketballScore?.id === data?.match_id &&
                    basketballScore?.result[3][0] +basketballScore?.result[3][1] +basketballScore?.result[3][2] +basketballScore?.result[3][3] +basketballScore?.result[3][4] 
                  }
                </ScoreContainer> 
              </BasketballTeamContainer>

              <GameInfoContainer>
              {
                basketballScore?.id !== data?.match_id &&
                <>
                    <BasketballGameTime  type={  
                      data.status_id === 1 ?
                        "whiteGray" 
                        :
                        (
                          (data.status_id === 2 ||data.status_id === 3 ||data.status_id === 4 ||data.status_id === 5 ||data.status_id === 6 ||data.status_id === 7 ||data.status_id === 8 ||data.status_id === 9 ) 
                          ? 
                          "gren"
                          :
                          (
                            data.status_id === 10 ?
                            "gray" 
                            :
                            (
                              (data.status_id === 11 ||data.status_id === 12 ||data.status_id === 14 ) ?
                              "red"
                              :
                              (
                                (data.status_id === 13 || data.status_id === 14 ) ?
                                "blue" :
                                "red"
                              )
                            )
                          )
                        )
                      }>
                      <span className="quarter">
                          {
                            (data.status_id === 3 ||data.status_id === 4 ||data.status_id === 5 ||data.status_id === 6 ||data.status_id === 7 || data.status_id === 8 ) 
                            ?
                          ( !(data.home_team_info.score_1 > 0 || data.away_team_info.score_1 > 0) ? 
                            "0Q"
                            :
                            (
                              !(data.home_team_info.score_2 > 0 || data.away_team_info.score_2 > 0) ? 
                              "1Q"
                              :
                              (
                                !(data.home_team_info.score_3 > 0 || data.away_team_info.score_3 > 0) ? 
                                "2Q"
                                :
                                (
                                  !(data.home_team_info.score_4 > 0 || data.away_team_info.score_4 > 0) ? 
                                  "3Q"
                                  :
                                  (
                                    !(data.home_team_info.score_overtime > 0 || data.away_team_info.score_overtime > 0) && 
                                    "4Q"
                                  )
                                )
                              )
                            ))
                            :
                            (
                              data.status_id === 0 ?
                              "비공개"
                              :
                              (
                                data.status_id === 1 ?
                                "경기전"
                                :
                                (
                                  data.status_id === 9 ?
                                  "연장전"
                                  :
                                  (
                                    data.status_id === 10 ?
                                    "경기종료"
                                    :
                                    (
                                      data.status_id === 11 ?
                                      "경기중단"
                                      :
                                      (
                                        data.status_id === 12 ?
                                        "경기취소"
                                        :
                                        (
                                          data.status_id === 13 ?
                                          "경기지연"
                                          :
                                          (
                                            data.status_id === 14 ?
                                            "경기중단"
                                            :
                                            (
                                              data.status_id === 15 &&
                                              "경기미정"
                                            )
                                          )
                                        ) 
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          }
                          </span>
                        <span className="time">{(getTimeStringSeconds(data.remaining_time))}</span>
                      </BasketballGameTime>
                      </>
                    }
                {
                  basketballScore?.id === data?.match_id &&
                  <>
                    <BasketballGameTime  type={  
                       basketballScore && basketballScore?.result[1] === 1  ?
                       "whiteGray" 
                       :
                       (
                         (basketballScore &&
                         (basketballScore?.result[1] === 2 || basketballScore?.result[1] === 3 || basketballScore?.result[1] === 4 || basketballScore?.result[1] === 5 ||basketballScore?.result[1] === 6 ||basketballScore?.result[1] === 7 ||basketballScore?.result[1] === 8 ||basketballScore?.result[1] === 9 ) )
                         ? 
                         "gren"
                         :
                         (
                           basketballScore?.result[1] === 10 ?
                           "gray" 
                           :
                           (
                             (basketballScore?.result[1] === 11 ||basketballScore?.result[1] === 12 ||basketballScore?.result[1] === 14 ) ?
                             "red"
                             :
                             (
                               (basketballScore?.result[1] === 13 || basketballScore?.result[1] === 14 ) ?
                               "blue" :
                               "red"
                             )
                           )
                         )
                       )
                      }>
                      <span className="quarter">
                      { (basketballScore &&
                          (basketballScore?.result[1] === 3 ||basketballScore?.result[1] === 4 ||basketballScore?.result[1] === 5 ||basketballScore?.result[1] === 6 ||basketballScore?.result[1] === 7 || basketballScore?.result[1] === 8 )) 
                          ?
                        ( !(basketballScore?.result[3][0] > 0 || basketballScore?.result[4][0] > 0) ? 
                          "0Q"
                          :
                          (
                            !(basketballScore?.result[3][1] > 0 || basketballScore?.result[4][1] > 0) ? 
                            "1Q"
                            :
                            (
                              !(basketballScore?.result[3][2] > 0 || basketballScore?.result[4][2] > 0) ? 
                              "2Q"
                              :
                              (
                                !(basketballScore?.result[3][3] > 0 || basketballScore?.result[4][3] > 0) ? 
                                "3Q"
                                :
                                (
                                  !(basketballScore?.result[3][4] > 0 || basketballScore?.result[4][4] > 0) && 
                                  "4Q"
                                )
                              )
                            )
                          ))
                          :
                          (
                            basketballScore?.result[1] === 0 ?
                            "비공개"
                            :
                            (
                              basketballScore?.result[1] === 1 ?
                              "경기전"
                              :
                              (
                                basketballScore?.result[1] === 9 ?
                                "연장전"
                                :
                                (
                                  basketballScore?.result[1] === 10 ?
                                  "경기종료"
                                  :
                                  (
                                    basketballScore?.result[1] === 11 ?
                                    "경기중단"
                                    :
                                    (
                                      basketballScore?.result[1] === 12 ?
                                      "경기취소"
                                      :
                                      (
                                        basketballScore?.result[1] === 13 ?
                                        "경기지연"
                                        :
                                        (
                                          basketballScore?.result[1]=== 14 ?
                                          "경기중단"
                                          :
                                          (
                                            basketballScore?.result[1]=== 15 &&
                                            "경기미정"
                                          )
                                        )
                                      ) 
                                    )
                                  )
                                )
                              )
                            )
                          )
                        }
                          </span>
                        <span className="time">{(getTimeStringSeconds(basketballScore?.result[2]))}</span>
                      </BasketballGameTime>
                      </>
                    }
                <span>{(getTimeStringSeconds(data.match_time))}</span>
                <GameIconCantainer>
                  {
                    (data.live_status === 1 || data.live_status === 2) && 
                    <img src="/images/main/Youtube.png" alt="" />
                  }
                  {
                    (data.animation_status === 1 || data.animation_status === 2) && 
                    <img src="/images/main/Ground-orange.png" alt="" />
                  }
                </GameIconCantainer>
              </GameInfoContainer>
              <BasketballTeamContainer className="basketballTeamContainer">
                <ScoreContainer>
                  {
                    basketballScore?.id !== data?.match_id &&
                    data.away_team_info.score_1 + data.away_team_info.score_2 + data.away_team_info.score_3 + data.away_team_info.score_4 + data.away_team_info.score_overtime
                  }
                  {
                    basketballScore?.id === data?.match_id &&
                    basketballScore?.result[4][0] +basketballScore?.result[4][1] +basketballScore?.result[4][2] +basketballScore?.result[4][3] +basketballScore?.result[4][4] 
                  }
                  </ScoreContainer>
                <TeamContainer>
                    <img
                        className="arrow"
                        src={pageBasicImgUrl+data.away_team_info.team_logo}
                        alt=""
                    ></img>
                    <TeamNameContainer>
                        <TeamName>{data.away_team_info.team_name}</TeamName>
                    </TeamNameContainer>
                </TeamContainer>
              </BasketballTeamContainer>
            </SoccerContainer>  
          </div>
        </>
      )})}   
    </Wrapper>
  );
};

export default LiveScorebasketballMobile;
