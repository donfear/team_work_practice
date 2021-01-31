import React from "react";
import "./skill-range.scss";

export function SkillRange(props: {
  value: number;
  total?: number;
  onChange: Function;
}) {
  const total = props.total ?? 5;
  return (
    <div className="skill-range">
      {Array(total)
        .fill(null)
        .map((i, index) => (
          <div
            key={index}
            onClick={() => props.onChange(index)}
            className={`skill-range__item ${
              props.value >= index
                ? "skill-range__item--selected"
                : ""
            }`}
          ></div>
        ))}
    </div>
  );
}
