import { Button, ModalFooter } from "@heroui/react";
import { Input } from "@/src/components/common/Input";
import { GenresSelect } from "@/src/components/GenresSelect";

interface IForm {
  onClose: () => void;
}

export const CreateForm = ({ onClose }: IForm) => {
  return (
    <form>
      <Input
        // control={control}
        rules={{ required: true }}
        // error={}
        name="title"
        label="Title *"
        placeholder="Enter title"
      />

      <Input
        // control={control}
        rules={{ required: true }}
        // error={}
        name="artist"
        label="Artist *"
        placeholder="Enter artist"
      />

      <Input
        // control={control}
        // error={}
        name="album"
        label="Album"
        placeholder="Enter album"
      />

      {/* <GenresSelect /> */}

      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};

// onSubmit = { handleSubmit };
