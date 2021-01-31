import React from "react";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { Input } from "../../ui/input/input";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import "./personal-information.scss";

export function PersonalInformation() {
  const [state, dispatch] = useGlobalState();

  const fields = Object.keys(state.personalInformationForm);

  return (
    <ContentWrapper label='Personal Information'>
      <div className="content-wrapper__fields">
        {fields.map((field, key) => (
          <Input
            key={key}
            label={camelCaseToTitle(field)}
            type="text"
            value={(state.personalInformationForm)?.[field] || ""}
            onChange={(ev: any) =>
              dispatch({
                personalInformationForm: {
                  ...state.personalInformationForm,
                  [field]: ev.target.value,
                },
              })
            }
          />
        ))}
      </div>
    </ContentWrapper>
  );
}
