import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@chakra-ui/modal";
import { CustomModal } from "../CustomModal";

export const GenericModal = ({ onClose, isOpen }: ModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Error 404</ModalHeader>

      <ModalBody>
        Error at loading data, please try again later or contact the support
      </ModalBody>

      <ModalFooter>404</ModalFooter>
    </CustomModal>
  );
};
