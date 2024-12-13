import React, { useEffect, useLayoutEffect } from "react";
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
import UpComponent from "./upComponent/upComponent.jsx";
import Loader from "./loader/loader.jsx";
import Modal from "./Modal/Modal.tsx";
import { componentNameMap, useModalContext } from "../Hooks/useModalContext.ts";

function Parent() {
  const { openModal } = useModalContext();

  useEffect(() => {
    openModal(componentNameMap.Notification, false, false);
  }, []);

  return (
    <>
      <Loader />
      <Modal />
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
