import React from "react";
import "./header.scss";
import { LanguageSelector } from "./language-selector/language-selector";

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h1>CV Generator</h1>
      </div>
      <div className="header__right">
        <LanguageSelector />
      </div>
    </header>
  );
}
