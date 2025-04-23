import { Modal } from "@/src/components/common/Modal";
import { EditForm } from "@/src/components/forms/EditForm";
import { EditButton } from "@/src/components/common/IconButtons";

interface IEditModal {
  slug: string;
}

export const EditModal = ({ slug }: IEditModal) => {
  return (
    <Modal
      title="Edit track"
      OpenButton={({ onPress }) => (
        <EditButton text="Edit track" onPress={onPress} />
      )}
    >
      {({ onClose }) => <EditForm onClose={onClose} />}
    </Modal>
  );
};
