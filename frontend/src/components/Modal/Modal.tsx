import { closeModal, useModalStore } from "../../contexts/ModalStore";

import * as Modals from "./modals/index";

export const Modal = () => {
  const { display, props } = useModalStore();

  const isOpen = display !== "";

  const modalExists =
    Modals[display as unknown as keyof typeof Modals] !== undefined;

  const SelectedModal = modalExists
    ? Modals[display as unknown as keyof typeof Modals]
    : Modals.GenericModal;

  const handleClose = () => {
    closeModal();
  };

  return (
    <SelectedModal isOpen={isOpen} onClose={handleClose} {...props}>
      <></>
    </SelectedModal>
  );
};
