import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum EModals {
  "InvestTestModal",
  "AddStockModal",
  "None",
}

interface IModalState {
  open: boolean;
  display: EModals;
}

const modalState: IModalState = {
  open: false,
  display: EModals.None,
};

export const useModalStore = create(devtools(() => modalState));

export const openModal = (modal: EModals) => {
  useModalStore.setState({ open: true, display: modal });
};

export const closeModal = () =>
  useModalStore.setState({ open: false, display: EModals.None });
