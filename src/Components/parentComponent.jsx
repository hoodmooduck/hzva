import React from "react";
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
import { Provider } from "react-redux";
import store from "../Modules/Redux/store.ts";
import Modal from "./Modal/Modal.tsx";

function Parent() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default Parent;
