import { Button, ModalFooter } from "@heroui/react";
import { Input } from "@/src/components/common/Input";
import { GenresSelect } from "@/src/components/GenresSelect";
import { useCreateTrack } from "@/src/hooks/useCreateTrack";
import { ImageInput } from "../common/ImageInput";

interface IForm {
  onClose: () => void;
  fetchData: (params: Record<string, any>) => void;
}

export const CreateForm = ({ onClose, fetchData }: IForm) => {
  const onSuccess = () => {
    if (requestError) return;
    onClose();
    fetchData({ sort: "title", order: "asc", page: 1 });
  };

  const { control, requestError, errors, isValid, handleSubmit, onSubmit } =
    useCreateTrack(onSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <ImageInput
          control={control}
          name="coverImage"
          label="Cover Image URL"
          rules={{ required: true }}
        />

        <Input
          control={control}
          rules={{ required: true }}
          // error={}
          name="title"
          label="Title *"
          placeholder="Enter title"
        />

        <Input
          control={control}
          rules={{ required: true }}
          // error={}
          name="artist"
          label="Artist *"
          placeholder="Enter artist"
        />

        <Input
          control={control}
          // error={}
          name="album"
          label="Album"
          placeholder="Enter album"
        />

        <GenresSelect control={control} />
      </div>

      {requestError && <p>{requestError.error}</p>}

      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};

// onSubmit = { handleSubmit };
