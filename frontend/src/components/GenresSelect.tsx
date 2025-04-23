import { Control, FieldError, RegisterOptions } from "react-hook-form";
import { useGenres } from "../hooks/useGenres";
import { Select } from "./common/Select";

interface IGenresSelect {
  control: Control;
  rules?: RegisterOptions;
  error: FieldError;
}

export const GenresSelect = ({ control, rules, error }: IGenresSelect) => {
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
