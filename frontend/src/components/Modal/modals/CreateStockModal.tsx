import { ModalBody, ModalProps } from "@chakra-ui/modal";
import { CustomModal } from "../CustomModal";
import { ModalCloseButton, ModalHeader } from "@chakra-ui/react";

interface CreateStockModalProps extends ModalProps {
  categories?: any;
}

export const CreateStockModal = ({
  isOpen,
  onClose,
  categories,
}: CreateStockModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} noCentered={true}>
      <ModalHeader
        w="full"
        fontWeight="bold"
        fontSize="20px"
        display="flex"
        justifyContent="space-between"
      >
        Criação
        <ModalCloseButton color="gray.700" />
      </ModalHeader>
      <ModalBody>{categories.CDB}</ModalBody>
    </CustomModal>
  );
};
