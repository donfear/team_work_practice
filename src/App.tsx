import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import { Preview } from "./components/preview/preview";
import i18n from "./i18n";
import { GlobalStateProvider, useGlobalState } from "./state/state";
import './styles/index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state] = useGlobalState();
  const [isLoaded, setLoaded] = useState(false);
  if (state.selectedLanguage) {
    i18n.changeLanguage(state.selectedLanguage).then(() => setLoaded(true));
  }

  return (
    isLoaded ?
    <GlobalStateProvider>
      <div className="app">
        <Header />
        <div className="app__content">
          <Menu />
          <Content />

        </div>
        <ToastContainer/>
        <ReactTooltip/>
        <Preview/>
      </div>
    </GlobalStateProvider>:
    <div></div>
  );
}

export default App;
