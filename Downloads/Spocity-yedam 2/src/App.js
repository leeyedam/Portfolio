import { useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Modal from "react-modal";
import Ranking from "./components/popup/Ranking";
import RequestForLevelUp from "./components/popup/RequestForLevelUp";
import SearchUserInfo from "./components/popup/SearchUserInfo";
import Login from "./components/popup/Login";
import ChangePW from "./components/popup/ChangePW";
import Signup from "./components/popup/Signup";
import ChangeUserInfo from "./components/popup/ChangeUserInfo";
import Withdrawal from "./components/popup/Withdrawal";
import SelectGame from "./components/popup/SelectGame";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100000,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

const Toast = styled.div`
  * {
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.35px;
    text-align: left;
    color: #fff;
  }

  span {
    margin-right: 5px;
  }

  img {
    width: 17px;
  }
`;

function App() {
  const [rankingModal, setRankingModal] = useState(false);
  const [requestForLevelUp, setRequestForLevelUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchUserInfo, setSearchUserInfo] = useState(false);
  const [changePW, setChangePW] = useState(false);
  const [signup, setSignup] = useState(false);
  const [changeUserInfo, setChangeUserInfo] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [selectGame, setSelectGame] = useState(1);

  const onToastPopup = useCallback(() => {
    toast.error(
      <Toast>
        <span>스포시티 텍스트 1줄일 경우의 디자인</span>
        <img src="/images/toast/check.png" alt="" />
      </Toast>,
      {
        position: "bottom-left",
        icon: false,
        className: "toast-green",
      }
    );

    toast.error(
      <Toast>
        <span>스포시티 팝업이 노출됩니다 2줄일경우의 디자인입니다</span>
        <img src="/images/toast/error.png" alt="" />
      </Toast>,
      {
        position: "bottom-left",
        icon: false,
        className: "toast-red",
      }
    );
  }, []);

  useEffect(() => {
    onToastPopup();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <MainPage
          setRankingModal={setRankingModal}
          setLogin={setLogin}
          setSignup={setSignup}
        />
      </BrowserRouter>

      {rankingModal && (
        <Modal
          isOpen={rankingModal}
          style={ModalStyle}
          onRequestClose={() => setRankingModal(false)}
        >
          <Ranking
            setRankingModal={setRankingModal}
            setRequestForLevelUp={setRequestForLevelUp}
          ></Ranking>
        </Modal>
      )}

      {requestForLevelUp && (
        <Modal
          isOpen={requestForLevelUp}
          style={ModalStyle}
          onRequestClose={() => setRequestForLevelUp(false)}
        >
          <RequestForLevelUp
            setRequestForLevelUp={setRequestForLevelUp}
          ></RequestForLevelUp>
        </Modal>
      )}

      {login && (
        <Modal
          isOpen={login}
          style={ModalStyle}
          onRequestClose={() => setLogin(false)}
        >
          <Login
            setLogin={setLogin}
            setSearchUserInfo={setSearchUserInfo}
            setSignup={setSignup}
          ></Login>
        </Modal>
      )}

      {searchUserInfo && (
        <Modal
          isOpen={searchUserInfo}
          style={ModalStyle}
          onRequestClose={() => setSearchUserInfo(false)}
        >
          <SearchUserInfo
            setSearchUserInfo={setSearchUserInfo}
          ></SearchUserInfo>
        </Modal>
      )}

      {changePW && (
        <Modal
          isOpen={changePW}
          style={ModalStyle}
          onRequestClose={() => setChangePW(false)}
        >
          <ChangePW setChangePW={setChangePW}></ChangePW>
        </Modal>
      )}

      {signup && (
        <Modal
          isOpen={signup}
          style={ModalStyle}
          onRequestClose={() => setSignup(false)}
        >
          <Signup setSignup={setSignup} setLogin={setLogin}></Signup>
        </Modal>
      )}

      {changeUserInfo && (
        <Modal
          isOpen={changeUserInfo}
          style={ModalStyle}
          onRequestClose={() => setChangeUserInfo(false)}
        >
          <ChangeUserInfo
            setChangeUserInfo={setChangeUserInfo}
            setWithdrawal={setWithdrawal}
          ></ChangeUserInfo>
        </Modal>
      )}

      {withdrawal && (
        <Modal
          isOpen={withdrawal}
          style={ModalStyle}
          onRequestClose={() => setWithdrawal(false)}
        >
          <Withdrawal setWithdrawal={setWithdrawal}></Withdrawal>
        </Modal>
      )}

      {selectGame && (
        <Modal
          isOpen={selectGame}
          style={ModalStyle}
          onRequestClose={() => setSelectGame(false)}
        >
          <SelectGame selectGame={setWithdrawal}></SelectGame>
        </Modal>
      )}
      <ToastContainer className="toast-position" />
    </div>
  );
}

Modal.setAppElement("#root");

export default App;
