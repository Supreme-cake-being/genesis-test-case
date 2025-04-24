import { useForm } from "react-hook-form";
import { usePost } from "./usePost";

interface ICreateTrack {
  title: string;
  artist: string;
  album?: string;
  genres: string;
  coverImage?: string;
}

export const useCreateTrack = (onSuccess: () => void) => {
  const { error: requestError, handlePost } = usePost("/tracks");

  const {
    control,
    formState: { errors, isValid, isLoading },
    handleSubmit,
  } = useForm<ICreateTrack>({
    defaultValues: {
      title: "",
      artist: "",
      album: "",
      genres: "",
      coverImage: "",
    },
  });

  const onSubmit = async (values: ICreateTrack) => {
    const { title, artist, album, genres, coverImage } = values;

    await handlePost({
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
    handleSubmit,
    onSubmit,
  };
};
