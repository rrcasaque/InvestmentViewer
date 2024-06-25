import { Dialog, DialogContent } from "@/components/ui/dialog";
import { closeModal } from "@/contexts/ModalStore";
import { CloseIcon } from "@/assets/icons/CloseIcon";

interface CustomModalProps {
  children: React.ReactNode;
  maxW?: string;
  open: boolean;
}

export const CustomModal = ({ children, maxW, open }: CustomModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className={maxW ? maxW : "max-w-screen-md"}>
        <div className="flex items-end justify-end">
          <div className="w-6 h-6 cursor-pointer" onClick={closeModal}>
            <CloseIcon width="24" />
          </div>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};
