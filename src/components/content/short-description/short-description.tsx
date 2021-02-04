import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../../state/state";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import "./short-description.scss";

export function ShortDescription() {
  const [state, dispatch] = useGlobalState();
  const {t} = useTranslation();
  return (
    <ContentWrapper label={t("Short Description")}>
      <textarea
        className="short-description"
        value={state.shortDescriptionForm.description}
        onChange={(ev) => dispatch({
          shortDescriptionForm: {
            description: ev.target.value
          }
        })}
      ></textarea>
    </ContentWrapper>
  );
}
