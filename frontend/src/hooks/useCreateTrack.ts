import { useForm } from "react-hook-form";
import { usePost } from "./usePost";

interface ICreateTrack {
  title: string;
  artist: string;
  album?: string;
  genres: string;
  coverImage?: string;
}

export const useCreateTrack = () => {
  const { handlePost } = usePost("/tracks");

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

  const onSubmit = (values: ICreateTrack) => {
    const { title, artist, album, genres, coverImage } = values;

    handlePost({
      title,
      artist,
      album,
      genres: genres.split(","),
      coverImage,
    });
  };

  return {
    control,
    errors,
    isValid,
    isLoading,
    handleSubmit,
    onSubmit,
  };
};
