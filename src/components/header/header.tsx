import React from "react";
import './header.scss';

export function Header() {
    return (
        <header className="header">
          <div className="header__left">
            <h1>CV Generator</h1>
          </div>
          <div className="header__right"></div>
        </header>
      );
}