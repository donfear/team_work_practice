import React from "react";
import { useGlobalState } from "../../../state/state";
import { AddMore } from "../../ui/add-more/add-more";
import { Input } from "../../ui/input/input";
import { SkillRange } from "../../ui/skill-range/skill-range";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import "./language-skills.scss";

export function LanguageSkills() {
  const [state, dispatch] = useGlobalState();
  function changeField(index: number, field: string, value: string) {
    const form = [...state.languageForm];
    const item = {
      ...form[index],
      [field]: value,
    };
    form[index] = item;
    dispatch({ languageForm: [...form] });
  }

  return (
    <ContentWrapper label="Language Skills">
      <div className="language-skills">
        {state.languageForm.map((l, lindex) => (
          <div className="language-skills__field" key={lindex}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%" }}>
                <Input
                  label="Language"
                  value={l.language}
                  onChange={(ev: any) =>
                    changeField(lindex, "language", ev.target.value)
                  }
                />
              </div>
              <div
                className="content-wrapper__delete language-skills__delete"
                onClick={() => {
                  dispatch({
                    languageForm: [
                      ...state.languageForm.filter((i, idx) => idx !== lindex),
                    ],
                  });
                }}
              >
                ✕
              </div>
            </div>
            <div className="language-skills__ranges">
              <div className="language-skills__range">
                <div className="language-skills__range--label">Listening</div>
                <SkillRange
                  value={l.listening}
                  onChange={(val: any) => changeField(lindex, "listening", val)}
                />
              </div>
              <div className="language-skills__range">
                <div className="language-skills__range--label">Reading</div>
                <SkillRange
                  value={l.reading}
                  onChange={(val: any) => changeField(lindex, "reading", val)}
                />
              </div>
              <div className="language-skills__range">
                <div className="language-skills__range--label">Writing</div>
                <SkillRange
                  value={l.writing}
                  onChange={(val: any) => changeField(lindex, "writing", val)}
                />
              </div>
              <div className="language-skills__range">
                <div className="language-skills__range--label">Speaking</div>
                <SkillRange
                  value={l.speaking}
                  onChange={(val: any) => changeField(lindex, "speaking", val)}
                />
              </div>
            </div>
          </div>
        ))}
        <AddMore
          onClick={() =>
            dispatch({
              languageForm: [
                ...state.languageForm,
                {
                  language: "",
                  writing: 0,
                  reading: 0,
                  listening: 0,
                  speaking: 0,
                },
              ],
            })
          }
        />
      </div>
    </ContentWrapper>
  );
}
