import { Button, ModalFooter } from "@heroui/react";
import { Input } from "./common/Input";
import { Select } from "./common/Select";

interface IForm {
  onClose: () => void;
}

export const Form = ({ onClose }: IForm) => {
  const genres = [
    "Rock",
    "Pop",
    "Hip Hop",
    "Jazz",
    "Classical",
    "Electronic",
    "R&B",
    "Country",
    "Folk",
    "Reggae",
    "Metal",
    "Blues",
    "Indie",
  ];

  return (
    <form>
      {/* <Input
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

      <Select
        // control={control}
        rules={{ required: true }}
        // error={}
        name="genres"
        label="Genres *"
        options={genres}
        placeholder="Select genres"
      /> */}

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
