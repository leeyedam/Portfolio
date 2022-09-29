export const olrimpickPageIntro = [
  {
    img: "/images/olrimpick/olrimpick_login.png",
    title: "회원가입 및 로그인 | ( ID: user / PW: 123123 )",
    subTitle:
      "*둘러보기용 아이디와 비밀번호는 Signup이 아닌 Login으로 들어가주세요!",
    intro:
      " 비제어 컴포넌트를 활용하는 react hook form을 이용하여 값이 바뀔 때 마다 리렌더링되는 제어컴포넌트의 단점을 보완하였습니다.",
  },
  {
    img: "/images/olrimpick/olrimpick_home.png",
    title: "홈화면",
    intro:
      "Stream에서 회원정보를 API로 받아와 본인의 게시물과 팔로우한 친구들의 게시물을 로드합니다. 본인 게시물의 상단 버튼을 누르면 게시물 삭제가 가능하고, 친구 게시물의 상단 버튼을 누르면 언팔로우가 가능합니다.",
  },
  {
    img: "/images/olrimpick/olrimpick_friends.png",
    title: "친구리스트",
    intro:
      "팔로우리스트를 불러와 팔로워리스트에 맵을 돌면서 서로 맞팔이 되어있는 친구만 친구리스트에 그립니다. 맞팔(친구)상태에서는 서로 근황묻기(비행기 버튼)가 가능합니다.",
  },
  {
    img: "/images/olrimpick/olrimpick_alertfeed.png",
    title: "알림피드",
    intro:
      "서로 맞팔을 한 친구가 보낸 근황묻기는 알림피드에 차곡차곡 쌓이게 됩니다. 또한 친구가 팔로우를 하게되면 해당 알림도 알림피드에 추가됩니다. 팔로우 알림버튼을 누르면 나도 팔로워를 맞팔할 수 있는 팔로우 버튼이 뜨게되고 이미 팔로우를 한 상태면 팔로우한 친구라는 얼러트 창이 뜨게됩니다.",
  },
  {
    img: "/images/olrimpick/olrimpick_chatting.png",
    title: "채팅",
    intro:
      "서로 맞팔이 되어있는 친구와 채팅을 주고받을 수 있고 채팅을 남겨놓으면 상대방의 친구 리스트에 읽지 않은 메시지의 개수가 알림으로 뜹니다. Stream의 다양한 기능을 활용하여 입력중 표시, 메시지 리액션, 스레드 기능 등을 추가하였습니다. ",
  },
];
export default olrimpickPageIntro;
