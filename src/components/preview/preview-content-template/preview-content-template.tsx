import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../../state/state";
import { SkillRange } from "../../ui/skill-range/skill-range";
import "./preview-content-template.scss";
export function PreviewContentTemplate() {
  const [state] = useGlobalState();
  const {t} = useTranslation();
  return (
    <div>
      <div className="preview-content__header">
        <div className="preview-content__header--name">
          <span>
            {state.personalInformationForm.firstName}{" "}
            {state.personalInformationForm.lastName}
          </span>
          <div className="preview-content__header--description">{`${state.shortDescriptionForm.description}`}</div>
        </div>
        {!!state.personalInformationForm.image && (
          <div className="preview-content__header--image">
            <img src={state.personalInformationForm.image} alt="personal-asd" />
          </div>
        )}
      </div>
      <div className="preview-content__header--tags">
        <span>{state.personalInformationForm.mobilePhone}</span>
        <span>{state.personalInformationForm.email}</span>
        <span>{state.personalInformationForm.birthDay}</span>
        <span>{state.personalInformationForm.webSite}</span>
        <span>{state.personalInformationForm.address}</span>
      </div>
      {/* Work Experience block */}

      <div className="preview-content__content">
        <div className="row">
          {!!state.workExperienceForm.length && (
            <div className="preview-content__work-experience">
              <div className="preview-content__work-experience--label">
                {t('Work Experience')}
              </div>
              <div className="preview-content__list">
                {state.workExperienceForm.map((wf, key) => (
                  <div className="preview-content__list-item" key={key}>
                    <div className="preview-content__list-item--label">
                      {wf.position}
                    </div>
                    <div>{wf.firmName}</div>
                    <div className="column">
                      <div className="row  btn-color bold">
                        <span>{wf.startDate}</span>
                        <span>{wf.endDate ? " - " + wf.endDate : ""}</span>
                      </div>
                      <div>{wf.experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Education block */}

          <div className="preview-content__work-experience preview-content__education">
            <div className="preview-content__work-experience--label">
              {!!state.educationForm?.length ? t("Education") : ""}
            </div>
            <div className="preview-content__list">
              {state.educationForm?.map((wf, key) => (
                <div className="preview-content__list-item" key={key}>
                  <div className="preview-content__list-item--label">
                    {wf.educationInstitution}
                  </div>
                  <div className="bold">{wf.speciality}</div>
                  <div>{wf.type}</div>
                  <div>
                    {wf.country ? wf.country + ", " : ""} {wf.city}
                  </div>
                  <div className="column">
                    <div className="row  btn-color">
                      <span>{wf.startDate}</span>
                      <span>{wf.endDate ? " - " + wf.endDate : ""}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language block */}

        <div className="preview-content__work-experience">
          <div className="preview-content__work-experience--label">
            {!!state.languageForm?.length ? t("Language Skills") : ""}
          </div>
          <div className="preview-content__list">
            {state.languageForm?.map((wf, key) => (
              <div className="preview-content__list-item" key={key}>
                <div className="preview-content__list-item--label">
                  {wf.language}
                </div>
                <div className="row">
                  <div className="language-skills__range">
                    <div className="language-skills__range--label">
                      {t('Speaking')}
                    </div>
                    <SkillRange value={wf.speaking} />
                  </div>
                  <div className="language-skills__range">
                    <div className="language-skills__range--label">
                      {t('Listening')}
                    </div>
                    <SkillRange value={wf.listening} />
                  </div>
                  <div className="language-skills__range">
                    <div className="language-skills__range--label">{t('Reading')}</div>
                    <SkillRange value={wf.reading} />
                  </div>
                  <div className="language-skills__range">
                    <div className="language-skills__range--label">{t('Writing')}</div>
                    <SkillRange value={wf.writing} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Skills block */}
        <div className="preview-content__work-experience">
          <div className="preview-content__work-experience--label">
            {!!state.skillsForm?.length ? t("Skills") : ""}
          </div>
          <div className="preview-content__skills">
            {state.skillsForm?.map((wf, key) => (
              <div key={key}>
                <div className="preview-content__list-item--label"></div>
                <div className="row">
                  <div className="language-skills__range">
                    <div className="language-skills__range--label">
                      {wf.name}
                    </div>
                    <SkillRange value={wf.value} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recommendations */}
        <div className="preview-content__work-experience">
          <div className="preview-content__work-experience--label">
            {!!state.recommendationsForm?.length ? t("Recommendations") : ""}
          </div>
          <div className="row">
            {state.recommendationsForm?.map((wf, key) => (
              <div className="preview-content__rec-item" key={key}>
                <div className="preview-content__list-item--label bold">
                  {wf.organization}
                </div>
                <div className="btn-color bold">{wf.position}</div>
                <div>{wf.fullName}</div>

                <div>{wf.phoneNumber}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
