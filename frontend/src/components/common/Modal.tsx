import { ReactNode } from "react";
import {
  Modal as ModalComponent,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

interface IModal {
  title: string;
  OpenButton: (props: { onPress: () => void }) => ReactNode;
  children: (props: { onClose: () => void }) => ReactNode;
}

export const Modal = ({ title, OpenButton, children }: IModal) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {OpenButton({ onPress: onOpen })}
      <ModalComponent
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children({ onClose })}</ModalBody>
            </>
          )}
        </ModalContent>
      </ModalComponent>
    </>
  );
};
