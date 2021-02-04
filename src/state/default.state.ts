import { ELanguage } from "../types/enums/language.enum";
import { EMenuListItemId } from "../types/enums/menu-list-item-id.enum";
import { IShortDescriptionForm } from "../types/interfaces/forms/short-description-form.interface";

export interface IGlobalState {
  selectedMenuId: EMenuListItemId;
  selectedLanguage: ELanguage;
  isPreviewOpen: boolean;
  shortDescriptionForm: IShortDescriptionForm;
  personalInformationForm: { [key: string]: any };
  skillsForm: { name: string; value: number }[];
  workExperienceForm: {
    experience: string;
    firmName: string;
    category: string;
    city: string;
    position: string;
    startDate: string;
    endDate: string;
    firmWebSite: string;
  }[];
  educationForm: {
    type: string;
    educationInstitution: string;
    speciality: string;
    country: string;
    city: string;
    startDate: string;
    endDate: string;
    webSite: string;
  }[];
  languageForm: {
    language: string;
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
  }[];
  recommendationsForm: {
    fullName: string;
    organization: string;
    position: string;
    phoneNumber: string;
  }[];
}

export const defaultGlobalState: IGlobalState = {
  selectedMenuId: EMenuListItemId.PERSONAL_INFORMATION,
  selectedLanguage: ELanguage.EN,
  shortDescriptionForm: {
    description: "",
  },
  personalInformationForm: {
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "",
    email: "",
    mobilePhone: "",
    address: "",
    website: "",
    image: ''
  },
  skillsForm: [{ name: "", value: 0 }],
  isPreviewOpen: false,
  workExperienceForm: [
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
  educationForm: [
    {
      type: "",
      educationInstitution: "",
      speciality: "",
      country: "",
      city: "",
      startDate: "",
      endDate: "",
      webSite: "",
    },
  ],
  languageForm: [
    { language: "", listening: 0, writing: 0, reading: 0, speaking: 0 },
  ],
  recommendationsForm: [
    {
      fullName: "",
      organization: "",
      position: "",
      phoneNumber: "",
    },
  ],
};
