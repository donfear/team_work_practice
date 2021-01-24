import React from "react";
import { useWindowSize } from "../../../../hooks/window-size.hook";
import { IMenuListItem } from "../../../../types/interfaces/menu-list-item.interface";
import "./menu-list-item.scss";

interface IMenuListItemProps extends IMenuListItem {
  selected: boolean;
  onClick: Function;
  preview?: boolean
}
export function MenuListItem(props: IMenuListItemProps) {
  const size = useWindowSize();

  const getLabel = () => {
    if (size.width < 992) {
      const splitted = props.label.split(" ");
      return splitted?.[0]?.[0] + (splitted?.[1]?.[0] || "");
    }
    return props.label;
  };

  return (
    <div
      {...size.width < 992 && {'data-tip': props.label}}
      onClick={() => props.onClick(props.id)}
      className={`menu-list-item ${
        props.selected ? "menu-list-item--selected" : ""
      }
      ${
          props.preview ? 'menu-list-item--preview' : ''
      }
      `}
    >
      {getLabel()}
    </div>
  );
}
