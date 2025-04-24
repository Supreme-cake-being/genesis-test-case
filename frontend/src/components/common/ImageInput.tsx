import { Controller, Control, RegisterOptions } from "react-hook-form";
import { Input as InputComponent } from "@heroui/input";
import { Image } from "@heroui/react";
import FallBackImage from "@/public/fallback.webp";

interface IImageInput {
  control: Control<any>;
  name: string;
  label?: string;
  rules?: RegisterOptions;
}

export const ImageInput = ({
  control,
  name,
  label = "Cover Image URL",
  rules,
}: IImageInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        pattern: {
          value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp))$/i,
          message: "Enter a valid image URL (e.g., jpg, png)",
        },
        ...rules,
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="flex flex-col gap-2">
          <Image
            src={value || FallBackImage.src}
            alt="Cover Preview"
            width={100}
            height={100}
          />

          <InputComponent
            label={label}
            labelPlacement="inside"
            value={value}
            onValueChange={onChange}
            errorMessage={error?.message}
          />
        </div>
      )}
    />
  );
};
