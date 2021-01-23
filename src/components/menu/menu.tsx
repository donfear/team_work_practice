import React from "react";
import { MenuList } from "./menu-list/menu-list";
import './menu.scss';

export function Menu() {
    return (
        <div className="menu">
            <MenuList/>
        </div>
    )
}
