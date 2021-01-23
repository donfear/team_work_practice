import React from "react";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import { GlobalStateProvider } from "./state/state";

function App() {
  return (
    <GlobalStateProvider>
      <div className="app">
        <Header />
        <div className="app__content">
          <Menu />
          <Content />
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
