import React from "react";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { AddMore } from "../../ui/add-more/add-more";
import { Input } from "../../ui/input/input";
import { ContentWrapper } from "../content-wrapper/content-wrapper";

export function Recommendations() {
  const [state, dispatch] = useGlobalState();
  function changeField(index: number, field: string, value: string) {
    const form = [...state.recommendationsForm];
    const item = {
      ...form[index],
      [field]: value,
    };
    form[index] = item;
    dispatch({ recommendationsForm: [...form] });
  }
  
  return <ContentWrapper label="Recommendations">
    <div>
        {state.recommendationsForm.map((f, key) => (
          <div key={key+'kek'} className="content-wrapper__fields-block">
            <div className="content-wrapper__fields">
              {Object.keys(f).map((field, index) => (
                <Input
                  key={index+'keks'}
                  label={camelCaseToTitle(field)}
                  type="text"
                  value={(f as any)[field] || ""}
                  onChange={(ev: any) =>
                    changeField(key, field, ev.target.value)
                  }
                />
              ))}
            </div>
            <div
              className="content-wrapper__delete"
              onClick={() => {
                dispatch({
                  recommendationsForm: [
                    ...state.recommendationsForm.filter((i, idx) => idx !== key),
                  ],
                });
              }}
            >
              ✕
            </div>
          </div>
        ))}
      </div>
      <AddMore
        onClick={() => {
          dispatch({
            recommendationsForm: [
              ...state.recommendationsForm,
              {
                referee: "",
                fullName: "",
                organization: "",
                position: "",
                phoneNumber: "",
              },
            ],
          });
        }}
      />
  </ContentWrapper>;
}
