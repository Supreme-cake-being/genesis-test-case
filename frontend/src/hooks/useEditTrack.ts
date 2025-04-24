import { useForm } from "react-hook-form";
import { usePut } from "./usePut";
import { useEffect } from "react";

interface IEditTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  genres: string;
  coverImage: string;
  onSuccess: () => void;
}

export const useEditTrack = ({
  id,
  title,
  artist,
  album,
  genres,
  coverImage,
  onSuccess,
}: IEditTrack) => {
  const { error: requestError, handlePut } = usePut(`/tracks/${id}`);

  const {
    control,
    formState: { errors, isValid, isLoading },
    reset,
    setValue,
    handleSubmit,
  } = useForm<IEditTrack>({
    defaultValues: {
      title,
      artist,
      album,
      genres,
      coverImage,
    },
  });

  const onSubmit = async (values: IEditTrack) => {
    const { title, artist, album, genres, coverImage } = values;

    await handlePut({
      title,
      artist,
      album,
      genres: genres.split(","),
      coverImage,
    });
    onSuccess();
  };

  return {
    control,
    requestError,
    errors,
    isValid,
    isLoading,
    reset,
    handleSubmit,
    onSubmit,
  };
};
