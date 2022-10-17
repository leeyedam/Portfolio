import React, { useState } from "react";
import styled from "styled-components";

import LiveSoccer from "../components/live/LiveSoccer";
import LiveBaseball from "../components/live/LiveBaseball";
import LiveBasketball from "../components/live/LiveBasketball";
import LiveTennis from "../components/live/LiveTennis";
import LiveVolleyball from "../components/live/LiveVolleyball";
import PageNotFond from "../components/test/PageNotFond";
import ServiceInspection from "../components/test/ServiceInspection";
import SystemDelay from "../components/test/SystemDelay";

const LivePage = ({
  pathname,
  setMobileMenu,
  mobileMenu,
  fullScreen,
  setFullScreen,
}) => {
  return pathname === "/live/soccer" || pathname === "/live" ? (
    <LiveSoccer
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></LiveSoccer>
  ) : pathname === "/live/baseball" ? (
    <LiveBaseball
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></LiveBaseball>
  ) : pathname === "/live/basketball" ? (
    <LiveBasketball
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></LiveBasketball>
  ) : pathname === "/live/tennis" ? (
    <LiveTennis
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></LiveTennis>
  ) : pathname === "/live/volleyball" ? (
    <LiveVolleyball
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></LiveVolleyball>
  ): pathname === "/live/pageNotFond" ? (
    <PageNotFond
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></PageNotFond>
  ): pathname === "/live/serviceInspection" ? (
    <ServiceInspection
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></ServiceInspection>
  ): pathname === "/live/systemDelay" ? (
    <SystemDelay
      setMobileMenu={setMobileMenu}
      mobileMeunu={mobileMenu}
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    ></SystemDelay>
  ) : (
    <></>
  );
};

export default LivePage;
