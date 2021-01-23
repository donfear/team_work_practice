import React from "react";
import { IMenuListItem } from "../../../../types/interfaces/menu-list-item.interface";
import "./menu-list-item.scss";

interface IMenuListItemProps extends IMenuListItem {
  selected: boolean;
  onClick: Function;
}
export function MenuListItem(props: IMenuListItemProps) {
    return (
        <div
          onClick={() => props.onClick(props.id)}
          className={`menu-list-item ${
            props.selected ? "menu-list-item--selected" : ""
          }`}
        >
          {props.label}
        </div>
      );
}
