import { Button, ModalFooter } from "@heroui/react";
import { Input } from "@/src/components/common/Input";
import { GenresSelect } from "@/src/components/GenresSelect";
import { ImageInput } from "../common/ImageInput";
import { useEditTrack } from "@/src/hooks/useEditTrack";
import { useTrackBySlug } from "@/src/hooks/useTrackBySlug";
import { useEffect } from "react";

interface IForm {
  id: string;
  slug: string;
  onClose: () => void;
  fetchData: (params: Record<string, any>) => void;
}

export const EditForm = ({ id, slug, onClose, fetchData }: IForm) => {
  const onSuccess = () => {
    if (requestError) return;
    onClose();
    fetchData({ sort: "title", order: "asc", page: 1 });
  };

  const { track, loading, error } = useTrackBySlug(slug);

  const {
    control,
    requestError,
    errors,
    isValid,
    reset,
    handleSubmit,
    onSubmit,
  } = useEditTrack({
    id,
    title: track?.title,
    artist: track?.artist,
    album: track?.album,
    genres: (track?.genres || []).join(","),
    coverImage: track?.coverImage,
    onSuccess,
  });

  useEffect(() => {
    if (track) {
      reset({
        title: track.title,
        artist: track.artist,
        album: track.album,
        genres: (track.genres || []).join(","),
        coverImage: track.coverImage,
      });
    }
  }, [track, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <ImageInput
          control={control}
          name="coverImage"
          label="Cover Image URL"
          rules={{ required: true }}
          // value={}
        />

        <Input
          control={control}
          // error={}
          name="title"
          label="Title *"
          placeholder="Enter title"
          rules={{ required: true }}
          // value={}
        />

        <Input
          control={control}
          // error={}
          name="artist"
          label="Artist *"
          placeholder="Enter artist"
          rules={{ required: true }}
          // value={}
        />

        <Input
          control={control}
          // error={}
          name="album"
          label="Album"
          placeholder="Enter album"
          // value={}
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
