import { Modal } from "@/src/components/common/Modal";
import { EditForm } from "@/src/components/forms/EditForm";
import { EditButton } from "@/src/components/common/IconButtons";

interface IEditModal {
  id: string;
  slug: string;
  fetchData: (params: Record<string, any>) => void;
}

export const EditModal = ({ id, slug, fetchData }: IEditModal) => {
  return (
    <Modal
      title="Edit track"
      OpenButton={({ onPress }) => (
        <EditButton text="Edit track" onPress={onPress} />
      )}
    >
      {({ onClose }) => (
        <EditForm id={id} slug={slug} onClose={onClose} fetchData={fetchData} />
      )}
    </Modal>
  );
};
