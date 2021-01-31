import React from "react";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { AddMore } from "../../ui/add-more/add-more";
import { Input } from "../../ui/input/input";
import { ContentWrapper } from "../content-wrapper/content-wrapper";

export function Education() {
  const [state, dispatch] = useGlobalState();

  function changeField(index: number, field: string, value: string) {
    const form = [...state.educationForm];
    const item = {
      ...form[index],
      [field]: value,
    };
    form[index] = item;
    dispatch({ educationForm: [...form] });
  }

  return (
    <ContentWrapper label="Education">
      <div>
        {state.educationForm.map((f, key) => (
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
                  educationForm: [
                    ...state.educationForm.filter((i, idx) => idx !== key),
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
            educationForm: [
              ...state.educationForm,
              {
                type: '',
                educationInstitution: '',
                speciality: '',
                country: '',
                city: '',
                startDate: '',
                endDate: '',
                webSite: ''
              }
            ],
          });
        }}
      />
    </ContentWrapper>
  );
}
