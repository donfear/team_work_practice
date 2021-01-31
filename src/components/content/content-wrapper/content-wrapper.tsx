import React from "react";
import { camelCaseToTitle } from "../../../helpers/camel-case-to-title";
import { useGlobalState } from "../../../state/state";
import { Input } from "../../ui/input/input";
import "./content-wrapper.scss";

interface IContentWrapperProps {
  label: string;
  children: any;
}
export function ContentWrapper(props: IContentWrapperProps) {
  return (
    <div className="content-wrapper">
      <h1 className="content-wrapper__label">{props.label}</h1>
      {props.children}
    </div>
  );
}
