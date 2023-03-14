import React, { useRef } from "react";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import ConfirmModalStyles from "./ConfirmModal.module.css";

interface ConfirmModalInter {
  rowId: string;
  rowDelete: CallableFunction;
  setShow: CallableFunction;
}

const ConfirmModal: React.FC<ConfirmModalInter> = (data) => {
  const { rowId, rowDelete, setShow } = data;

  const modalRef: any = useRef(null);

  const changeShowStatus = () => {
    setShow(false);
  };

  useOutSideClick(modalRef, changeShowStatus);
  
  const deleteRow = () => {
    rowDelete(rowId);
    setShow(false);
  };

  return (
    <div className={ConfirmModalStyles.modal}>
      <div ref={modalRef} className={ConfirmModalStyles.modalContainer}>
        <h2>Do you want to delete row: {rowId}</h2>
        <div className={ConfirmModalStyles.buttonsContainer}>
          <button
            onClick={() => deleteRow()}
            className={ConfirmModalStyles.resolveButton}
          >
            Yes
          </button>
          <button
            onClick={() => setShow(false)}
            className={ConfirmModalStyles.rejectButton}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
