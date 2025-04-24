import { Button, Input } from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";

interface IAudioInput {
  initialAudioUrl?: string;
  data: Record<string, any>;
  handleUpdate: (
    values: Record<string, any>,
    headers?: Record<string, any>
  ) => void;
  handleDelete: () => void;
  fetchData: (params: Record<string, any>) => void;
}

export const AudioInput = ({
  initialAudioUrl,
  data,
  handleUpdate,
  handleDelete,
  fetchData,
}: IAudioInput) => {
  const [audioUrl, setAudioUrl] = useState(initialAudioUrl || "");
  const [file, setFile] = useState<File | null>(null);

  console.log(audioUrl, initialAudioUrl);

  useEffect(() => {
    setAudioUrl(initialAudioUrl || "");
  }, [initialAudioUrl]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (
      selectedFile &&
      ["audio/mpeg", "audio/wav"].includes(selectedFile.type)
    ) {
      setFile(selectedFile);
      fetchData({ sort: "title", order: "asc", page: 1 });
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("audio", file);

    await handleUpdate(formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    fetchData({ sort: "title", order: "asc", page: 1 });
    setAudioUrl(data?.audioFile);
  };

  const handleRemove = async () => {
    setAudioUrl("");
    setFile(null);
    await handleDelete();
    fetchData({ sort: "title", order: "asc", page: 1 });
  };

  return (
    <div className="flex flex-col gap-2">
      {audioUrl ? (
        <>
          <audio controls src={audioUrl} />
          <Button onPress={handleRemove}>Remove</Button>
        </>
      ) : (
        <>
          <Input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
          <Button onPress={handleUpload} disabled={!file}>
            Upload
          </Button>
        </>
      )}
    </div>
  );
};
