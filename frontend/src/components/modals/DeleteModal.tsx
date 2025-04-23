import { Button, ModalBody, ModalFooter } from "@heroui/react";
import { Modal } from "@/src/components/common/Modal";
import { DeleteButton } from "@/src/components/common/IconButtons";

interface IDeleteModal {
  trackName: string;
}

export const DeleteModal = ({ trackName }: IDeleteModal) => {
  return (
    <Modal
      title="Delete track"
      OpenButton={({ onPress }) => (
        <DeleteButton text="Delete track" onPress={onPress} />
      )}
    >
      {({ onClose }) => (
        <>
          <ModalBody>
            <p>Are you sure you want to delete track {trackName}?</p>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" onPress={onClose}>
                Delete
              </Button>
            </ModalFooter>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};
