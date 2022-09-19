export const moduPageIntro = [
  {
    img: "/images/modu/modu_home.png",
    title: "홈화면",
    intro:
      "axios 이용하여 서울의 현재 날씨 및 시간별 날씨 등을 불러와 기본으로 설정하였고, 추가된 날씨를 로컬스토리지에 저장하여 메인화면에서 불러와 사용하였습니다.",
  },
  {
    img: "/images/modu/modu_search.png",
    title: "날씨 추가 화면",
    intro:
      "countries-list 라이브러리에서 나라별 수도를 불러오고 선택된 나라를 state로 받아서 api로 관련 나라의 날씨정보를 받아옵니다. 이미 추가된 나라의 날씨를 수정하여 다시 저장할 수도 있습니다.",
  },
  {
    img: "/images/modu/modu_add.png",
    title: "날씨조회 및 추가하기",
    intro:
      "날씨를 조회하고 추가하기 버튼을 누르면 로컬스토리지에 저장하게 되고, 저장된 나라는 홈화면에 추가됩니다. 각각의 선택된 나라의 날씨 정보들은 Zustand를 활용하여 관리하고 있습니다.",
  },
];
export default moduPageIntro;
