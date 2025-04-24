import { Button } from "@heroui/react";
import { Modal } from "@/src/components/common/Modal";
import { CreateForm } from "@/src/components/forms/CreateForm";

interface ICreateModal {
  fetchData: (params: Record<string, any>) => void;
}

export const CreateModal = ({ fetchData }: ICreateModal) => {
  return (
    <Modal
      title="Create track"
      OpenButton={({ onPress }) => (
        <Button onPress={onPress}>Create Track</Button>
      )}
    >
      {({ onClose }) => <CreateForm onClose={onClose} fetchData={fetchData} />}
    </Modal>
  );
};
