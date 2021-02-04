import React from "react";
import { useTranslation } from "react-i18next";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { AddMore } from "../../ui/add-more/add-more";
import { Input } from "../../ui/input/input";
import { ContentWrapper } from "../content-wrapper/content-wrapper";

export function WorkExperience() {
  const [state, dispatch] = useGlobalState();
  const {t} = useTranslation();
  function changeField(index: number, field: string, value: string) {
    const form = [...state.workExperienceForm];
    const item = {
      ...form[index],
      [field]: value,
    };
    form[index] = item;
    dispatch({ workExperienceForm: [...form] });
  }

  return (
    <ContentWrapper label={t("Work Experience")}>
      <div>
        {state.workExperienceForm.map((f, key) => (
          <div key={key+'kek'} className="content-wrapper__fields-block">
            <div className="content-wrapper__fields">
              {Object.keys(f).map((field, index) => (
                <Input
                  key={index+'keks'}
                  label={(camelCaseToTitle(t(field)))}
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
                  workExperienceForm: [
                    ...state.workExperienceForm.filter((i, idx) => idx !== key),
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
            workExperienceForm: [
              ...state.workExperienceForm,
              {
                experience: "",
                firmName: "",
                category: "",
                city: "",
                position: "",
                startDate: "",
                endDate: "",
                firmWebSite: "",
              },
            ],
          });
        }}
      />
    </ContentWrapper>
  );
}
