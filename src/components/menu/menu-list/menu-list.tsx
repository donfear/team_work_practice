import React from "react";
import { IMenuListItem } from "../../../types/interfaces/menu-list-item.interface";
import { EMenuListItemId } from "../../../types/enums/menu-list-item-id.enum";
import { MenuListItem } from "./menu-list-item/menu-list-item";
import "./menu-list.scss";
import { useGlobalState } from "../../../state/state";

const menuListItems: IMenuListItem[] = [
  {
    label: "Personal Information",
    id: EMenuListItemId.PERSONAL_INFORMATION,
  },
  { label: "Short Description", id: EMenuListItemId.SHORT_DESCRIPTION },
  { label: "Skills", id: EMenuListItemId.SKILLS },
  { label: "Work Experience", id: EMenuListItemId.WORK_EXPERIENCE },
  { label: "Education", id: EMenuListItemId.EDUCATION },
  { label: "Language Skills", id: EMenuListItemId.LANGUAGE_SKILLS },
  { label: "Recommendations", id: EMenuListItemId.RECOMMENDATIONS },
];

export function MenuList() {
  const [state, dispatch] = useGlobalState();

  function handlePreviewClick() {
    dispatch({ isPreviewOpen: true });
  }
  function handleSaveClick() {
    localStorage.setItem("state", JSON.stringify(state));
  }

  return (
    <div className="menu-list">
      {menuListItems.map((listItem) => (
        <MenuListItem
          key={listItem.id}
          onClick={(id: EMenuListItemId) => dispatch({ selectedMenuId: id })}
          selected={listItem.id === state.selectedMenuId}
          {...listItem}
        />
      ))}
      <div className="menu-list__separator" />
      <MenuListItem
        label="Preview"
        preview
        selected
        onClick={() => handlePreviewClick()}
        id={null as any}
      />
      <MenuListItem
        label="Save"
        preview
        selected
        onClick={() => handleSaveClick()}
        id={null as any}
      />
    </div>
  );
}
