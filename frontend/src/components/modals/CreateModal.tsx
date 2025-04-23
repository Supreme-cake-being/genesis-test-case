import { Button } from "@heroui/react";
import { Modal } from "@/src/components/common/Modal";
import { CreateForm } from "@/src/components/forms/CreateForm";

export const CreateModal = () => {
  return (
    <Modal
      title="Create track"
      OpenButton={({ onPress }) => (
        <Button onPress={onPress}>Create Track</Button>
      )}
    >
      {({ onClose }) => <CreateForm onClose={onClose} />}
    </Modal>
  );
};
