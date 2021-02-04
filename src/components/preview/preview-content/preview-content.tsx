import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactToPrint from "react-to-print";

export function PreviewContent({ children }: any) {
    const {t} = useTranslation();
  const linkToPrint = () => {
    return <div className="preview__print-save-btn">{t('Print / Download')}</div>;
  };
  const componentRef = useRef();
  return (
    <>
      <div style={{position: 'absolute', top: 20}}>
        <ReactToPrint
          trigger={linkToPrint}
          content={() => (componentRef as any).current}
        />
      </div>
      <div ref={componentRef as any}>{children}</div>
    </>
  );
}
