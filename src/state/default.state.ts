import { ELanguage } from "../types/enums/language.enum";
import { EMenuListItemId } from "../types/enums/menu-list-item-id.enum";
import { IPersonalInformationForm } from "../types/interfaces/forms/personal-information-form.interface";
import { IShortDescriptionForm } from "../types/interfaces/forms/short-description-form.interface";

export interface IGlobalState {
    selectedMenuId: EMenuListItemId;
    selectedLanguage: ELanguage;
    shortDescriptionForm: IShortDescriptionForm;
    personalInformationForm: IPersonalInformationForm;
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
  },
};
