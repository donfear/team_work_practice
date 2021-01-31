import React from "react";
import { useGlobalState } from "../../state/state";
import { EMenuListItemId } from "../../types/enums/menu-list-item-id.enum";
import { MenuList } from "./menu-list/menu-list";
import './menu.scss';

export function Menu() {
    const [state] = useGlobalState();
    return (
        <div className={`menu ${state.selectedMenuId === EMenuListItemId.PERSONAL_INFORMATION ? 'menu__long' : ''}`}>
            <MenuList/>
        </div>
    )
}
