import React from "react";
import { useGlobalState } from "../../../state/state";
import { AddMore } from "../../ui/add-more/add-more";
import { Input } from "../../ui/input/input";
import { SkillRange } from "../../ui/skill-range/skill-range";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import "./skills.scss";

export function Skills() {
  const [state, dispatch] = useGlobalState();
  function changeName(index: number, value: string) {
    let items = [...state.skillsForm];
    let item = {
      ...items[index],
      name: value,
    };
    items[index] = item;
    dispatch({
      skillsForm: [...items],
    });
  }
  function changeRange(index: number, value: number) {
    let items = [...state.skillsForm];
    let item = {
      ...items[index],
      value,
    };
    items[index] = item;
    dispatch({
      skillsForm: [...items],
    });
  }

  return (
    <ContentWrapper label="Skills">
      {state.skillsForm.map((f, id) => (
        <div className="skills__row" key={id}>
          <Input
            type="text"
            value={f.name}
            onChange={(ev) => {
              changeName(id, ev.target.value);
            }}
          />
          <div>
            <SkillRange
              total={5}
              value={f.value}
              onChange={(v: any) => changeRange(id, v)}
            />
          </div>
          <div className="skills__delete" onClick={() => {
            dispatch({
              skillsForm: [
                ...state.skillsForm.filter((i, idx) => idx !== id)
              ]
            })
          }}>
            ✕
          </div>
        </div>
      ))}

      <AddMore onClick={() => dispatch({
        skillsForm: [
          ...state.skillsForm,
          {name: '', value: 0}
        ]
      })}/>
    </ContentWrapper>
  );
}
