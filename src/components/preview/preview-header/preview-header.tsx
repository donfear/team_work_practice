import React from "react";
import "./preview-header.scss";

interface IPreviewHeaderProps {
    closeModal: Function;
}
export function PreviewHeader(props: IPreviewHeaderProps) {
  return (
    <div className="preview-header">
      <div className="preview-header--cross" onClick={() => props.closeModal()}>✕</div>
    </div>
  );
}
