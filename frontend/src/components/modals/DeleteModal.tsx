import { Button, ModalBody, ModalFooter } from "@heroui/react";
import { Modal } from "@/src/components/common/Modal";
import { DeleteButton } from "@/src/components/common/IconButtons";
import { useDelete } from "@/src/hooks/useDelete";

interface IDeleteModal {
  id: string;
  trackName: string;
  fetchData: (params: Record<string, any>) => void;
}

export const DeleteModal = ({ id, trackName, fetchData }: IDeleteModal) => {
  const { loading, handleDelete } = useDelete(`tracks/${id}`);

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
              <Button
                color="danger"
                onPress={async () => {
                  onClose();
                  await handleDelete();
                  fetchData({ sort: "title", order: "asc", page: 1 });
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};
