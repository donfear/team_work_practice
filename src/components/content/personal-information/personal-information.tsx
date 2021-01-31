import React from "react";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { Input } from "../../ui/input/input";
import { ContentWrapper } from "../content-wrapper/content-wrapper";
import ImageUploader from "react-images-upload";
import "./personal-information.scss";

export function PersonalInformation() {
  const [state, dispatch] = useGlobalState();

  const fields = Object.keys(state.personalInformationForm);

  const getBase64 = async (file: File) => {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <ContentWrapper label="Personal Information">
      <div>
        <div className="content-wrapper__fields">
          {fields
            .filter((e) => e !== "image")
            .map((field, key) => (
              <Input
                key={key}
                label={camelCaseToTitle(field)}
                type="text"
                value={state.personalInformationForm?.[field] || ""}
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
        <div className="personal-information__image-uploader">
          {state.personalInformationForm.image && (
            <div className="personal-information__image">
              <img src={state.personalInformationForm.image} alt="image" />
              <div
                className="content-wrapper__delete personal-information__image-delete"
                onClick={() => {
                  dispatch({
                    personalInformationForm: {
                      ...state.personalInformationForm,
                      image: ''
                    }
                  });
                }}
              >
                ✕
              </div>
            </div>
          )}
          <ImageUploader
            singleImage
            withIcon={true}
            buttonText="Choose images"
            onChange={async (ev) => {
              const base = await getBase64(ev[0]);

              dispatch({
                personalInformationForm: {
                  ...state.personalInformationForm,
                  image: base,
                },
              });
            }}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
