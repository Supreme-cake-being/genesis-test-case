import { usePost } from "@/src/hooks/usePost";
import { Button, ModalFooter } from "@heroui/react";
import { AudioInput } from "@/src/components/common/AudioInput";
import { useTrackBySlug } from "@/src/hooks/useTrackBySlug";
import { useDelete } from "@/src/hooks/useDelete";

interface IUploadForm {
  id: string;
  slug: string;
  onClose: () => void;
  fetchData: (params: Record<string, any>) => void;
}

export const UploadForm = ({ id, slug, onClose, fetchData }: IUploadForm) => {
  const { track, loading, error } = useTrackBySlug(slug);

  const { data, handlePost: handleUpdate } = usePost(`/tracks/${id}/upload`);
  const { handleDelete } = useDelete(`tracks/${id}/file`);

  return (
    <>
      <AudioInput
        initialAudioUrl={track?.audioFile}
        data={data}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        fetchData={fetchData}
      />

      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
      </ModalFooter>
    </>
  );
};
