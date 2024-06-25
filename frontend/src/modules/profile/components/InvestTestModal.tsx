import { CustomModal } from "@/components/modal/CustomModal";
import { EModals, useModalStore } from "@/contexts/ModalStore";
import { useState } from "react";
import { Quests } from "./Quests";
import { Toaster } from "@/components/ui/toaster";

export const InvestTestModal = () => {
  const modalState = useModalStore();

  return (
    <CustomModal
      open={modalState.open && modalState.display === EModals.InvestTestModal}
    >
      <Quests />
      <Toaster />
    </CustomModal>
  );
};
