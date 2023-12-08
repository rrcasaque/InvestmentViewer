import { type ContainerProps, Container } from "@chakra-ui/layout";
import {
  Modal,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
} from "@chakra-ui/modal";
import { motion } from "framer-motion";

const MotionModalContent = motion(ModalContent);

interface ICustomModalProps extends ModalProps {
  children: React.ReactNode;
  modalContainerStyleProps?: ContainerProps;
  modalContentStyleProps?: ModalContentProps;
  modalOverlayStyleProps?: ModalOverlayProps;
  noCentered?: boolean;
  isOpen: boolean;
  maxWidth?: string | object;
  hasBoxShadow?: boolean;
  onClose: () => void;
}

export const CustomModal = ({
  children,
  modalContainerStyleProps,
  modalContentStyleProps,
  modalOverlayStyleProps,
  noCentered = false,
  isOpen = false,
  onClose,
  maxWidth = "60%",
  ...props
}: ICustomModalProps) => (
  <Modal
    blockScrollOnMount
    closeOnEsc
    closeOnOverlayClick
    isCentered={noCentered ? false : true}
    isOpen={isOpen}
    onClose={onClose}
    {...props}
  >
    <ModalOverlay zIndex="modal" {...modalOverlayStyleProps} />
    <MotionModalContent
      alignItems="center"
      justifyContent="center"
      mx="2"
      maxW={maxWidth}
      {...modalContentStyleProps}
    >
      <Container
        px="0"
        w="full"
        maxW="full"
        {...modalContainerStyleProps}
        borderRadius="10px"
        boxShadow={
          props.hasBoxShadow
            ? "21px 21px 0px 1px rgba(49,151,149,0.75)"
            : "none"
        }
      >
        {children}
      </Container>
    </MotionModalContent>
  </Modal>
);
