import { Modal } from "./common/Modal";
import { Form } from "./Form";
import { EditButton } from "./common/IconButtons";

export const EditModal = () => {
  return (
    <Modal
      title="Edit track"
      OpenButton={({ onPress }) => (
        <EditButton text="Edit track" onPress={onPress} />
      )}
    >
      {({ onClose }) => <Form onClose={onClose} />}
    </Modal>
  );
};
