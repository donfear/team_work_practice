import React from "react";
import { useGlobalState } from "../../../state/state";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import "./short-description.scss";

export function ShortDescription() {
  const [state, dispatch] = useGlobalState();

  return (
    <ContentWrapper label="Short Description">
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
