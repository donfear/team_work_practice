import React from "react";
import { useGlobalState } from "../../state/state";
import { EMenuListItemId } from "../../types/enums/menu-list-item-id.enum";
import { Education } from "./education/education";
import { LanguageSkills } from "./language-skills/language-skills";
import { PersonalInformation } from "./personal-information/personal-information";
import { Recommendations } from "./recommendations/recommendations";
import { ShortDescription } from "./short-description/short-description";
import { Skills } from "./skills/skills";
import { WorkExperience } from "./work-experience/work-experience";
import './content.scss';

export function Content() {
  const [state] = useGlobalState();
  function renderContent() {
    switch (state.selectedMenuId) {
      case EMenuListItemId.PERSONAL_INFORMATION:
        return <PersonalInformation />;
      case EMenuListItemId.EDUCATION:
        return <Education />;
      case EMenuListItemId.LANGUAGE_SKILLS:
        return <LanguageSkills />;
      case EMenuListItemId.RECOMMENDATIONS:
        return <Recommendations />;
      case EMenuListItemId.SHORT_DESCRIPTION:
        return <ShortDescription />;
      case EMenuListItemId.WORK_EXPERIENCE:
        return <WorkExperience />;
      case EMenuListItemId.SKILLS:
        return <Skills/>;
    }
  }
  return <div className="content">{renderContent()}</div>;
}
