import { ModalBody, ModalProps } from "@chakra-ui/modal";
import { CustomModal } from "../CustomModal";

export const CreateStockModal = ({
  onClose,
  isOpen,
}: Pick<ModalProps, "onClose" | "isOpen">) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} noCentered={true}>
      <ModalBody>aa</ModalBody>
    </CustomModal>
  );
};
