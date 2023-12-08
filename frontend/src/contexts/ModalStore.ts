import { create } from "zustand";
import { devtools } from "zustand/middleware";

const ModalState = {
  display: "",
  props: {},
};

export const useModalStore = create(
  devtools(() => ModalState, { name: "Modal" })
);

interface WindowType {
  [key: number]: string;
}
if (typeof window !== "undefined")
  window["ModalState" as unknown as keyof WindowType] = module.exports;

export const showModal = (component: string, props = {}) => {
  useModalStore.setState({ display: component, props });
};

export const closeModal = () => useModalStore.setState({ display: "" });

export const getModalState = () => useModalStore.getState();
