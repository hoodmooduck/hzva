import React from "react";
import ContextComp from "./parentContext.js";
import ContextContent from "./contextConetnt.js";
import Header from "./header/header.jsx";
import MainPresBlock from "./firstBlock/mainPresBlock.jsx";
import WhoIsHaz from "./whoIsHazyaeva/whoIsHaz.jsx";
import AboutHaz from "./aboutHaz/aboutHaz.jsx";
import FrameTamerTalk from "./frameTamerAboutHaz/frameTamerTalk.jsx";
import MatizFlyBlock from "./matizFlyBlock/matizFlyBlock.jsx";
import HazGames from "./hazGames/hazGames.jsx";
import MerchBLock from "./merchBLock/merchBLock.jsx";
import AboutUs from "./aboutUs/aboutUs.jsx";
import Footer from "./footer/footer.jsx";
import Cursor from "./cursor/cursor.jsx";
import ModalWindow from "./aboutUsModal/aboutUsModal";
import UpComponent from "./upComponent/upComponent.jsx";
import Loader from "./loader/loader.jsx";
import { useState, useEffect } from "react";

function Parent() {
  return (
    <>
      <Loader />
      <ModalWindow />
      <UpComponent />
      <Cursor />
      <Header />
      <MainPresBlock />
      <WhoIsHaz />
      <AboutHaz />
      <FrameTamerTalk />
      <MatizFlyBlock />
      <HazGames />
      <MerchBLock />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Parent;
