import { Modal } from "@/src/components/common/Modal";
import { UploadButton } from "@/src/components/common/IconButtons";
import { UploadForm } from "@/src/components/forms/UploadForm";

interface IUploadModal {
  id: string;
  slug: string;
  fetchData: (params: Record<string, any>) => void;
}

export const UploadModal = ({ id, slug, fetchData }: IUploadModal) => {
  return (
    <Modal
      title="Edit track"
      OpenButton={({ onPress }) => (
        <UploadButton text="Upload track" onPress={onPress} />
      )}
    >
      {({ onClose }) => (
        <UploadForm
          id={id}
          slug={slug}
          onClose={onClose}
          fetchData={fetchData}
        />
      )}
    </Modal>
  );
};
