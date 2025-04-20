import { Button } from "@heroui/react";
import { Modal } from "./common/Modal";
import { Form } from "./Form";

export const CreateModal = () => {
  return (
    <Modal
      title="Create track"
      OpenButton={({ onPress }) => (
        <Button onPress={onPress}>Create Track</Button>
      )}
    >
      {({ onClose }) => <Form onClose={onClose} />}
    </Modal>
  );
};
