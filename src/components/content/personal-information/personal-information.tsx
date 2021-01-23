import React from "react";
import { useGlobalState } from "../../../state/state";
import "./personal-information.scss";

export function PersonalInformation() {
  const [state, dispatch] = useGlobalState();

  const fields = Object.keys(state.personalInformationForm);

  return (
    <div>
      <div>Personal Information Content</div>
      <div>
        {fields.map((field, key) => (
          <div key={key}>
            {field}
            <input
              type="text"
              value={(state.personalInformationForm as any)?.[field] || ""}
              onChange={(ev: any) =>
                dispatch({
                  personalInformationForm: {
                    ...state.personalInformationForm,
                    [field]: ev.target.value,
                  },
                })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
