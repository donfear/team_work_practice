import React from "react";
import Modal from "react-modal";
import { useGlobalState } from "../../state/state";
import { PreviewContent } from "./preview-content/preview-content";
import { PreviewHeader } from "./preview-header/preview-header";
import "./preview.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export function Preview() {
  const [state, dispatch] = useGlobalState();

  function afterOpenModal() {}

  function closeModal() {
    dispatch({ isPreviewOpen: false });
  }

  return state.isPreviewOpen ? (
    <div>
      <Modal
        isOpen={state.isPreviewOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className="preview">
          <PreviewHeader closeModal={closeModal} />
          <PreviewContent />
        </div>
      </Modal>
    </div>
  ) : null;
}
