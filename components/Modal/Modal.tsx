import React from "react";
import css from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>
  );
}
