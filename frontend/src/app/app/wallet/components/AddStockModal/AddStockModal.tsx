import { CustomModal } from "@/components/modal/CustomModal";
import { EModals, useModalStore } from "@/contexts/ModalStore";

export const AddStockModal = () => {
  const modalState = useModalStore();
  return (
    <CustomModal
      open={modalState.open && modalState.display === EModals.AddStockModal}
    >
      <div></div>
    </CustomModal>
  );
};
