import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../../state/state";
import { ELanguage } from "../../../types/enums/language.enum";
import "./language-selector.scss";
export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages: ELanguage[] = [ELanguage.EN, ELanguage.RU, ELanguage.EE];

  const [state, dispatch] = useGlobalState();

  const [isLanguagePickerOpen, setLanguagePickerOpen] = useState(false);

  function getLanguageIcon(): string {
    return getLanguageIconFromLanguage(state.selectedLanguage);
  }

  function getLanguageIconFromLanguage(language: ELanguage) {
    switch (language) {
      case ELanguage.EE:
        return "🇪🇪";
      case ELanguage.EN:
        return "🇺🇸";
      case ELanguage.RU:
        return "🇷🇺";
    }
  }

  return (
    <div className="language-selector">
      <div
        className="language-selector__icon"
        onClick={() => setLanguagePickerOpen(!isLanguagePickerOpen)}
      >
        {getLanguageIcon()}
      </div>

      {isLanguagePickerOpen && (
        <div className="language-selector__list">
          {languages.map((lng) => (
            <div
              className={`language-selector__list--item ${
                lng === state.selectedLanguage
                  ? "language-selector__list--item--selected"
                  : ""
              }`}
              key={lng}
              onClick={() => {
                setLanguagePickerOpen(!isLanguagePickerOpen);
                dispatch({ selectedLanguage: lng });
                i18n.changeLanguage(lng);
              }}
            >
              {lng.toUpperCase()} {getLanguageIconFromLanguage(lng)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
