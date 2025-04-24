import { Control, FieldError } from "react-hook-form";
import { useGenres } from "../hooks/useGenres";
import { Select } from "./common/Select";

interface IGenresSelect {
  control: Control<any>;
  error?: FieldError;
}

export const GenresSelect = ({ control, error }: IGenresSelect) => {
  const { genres, loading, error: genresError } = useGenres();

  return (
    <Select
      control={control}
      rules={{ required: true }}
      //   error={}
      name="genres"
      label="Genres *"
      options={genres}
      placeholder="Select genres"
    />
  );
};
