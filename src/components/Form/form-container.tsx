import { ChangeEvent, FormEvent, useState } from "react";
import FormComponent from "./form-component";
import PreviewComponent from "./preview-component";
import { FormImage } from "./types";
import { uploadImagesToCloudinary } from "../../services/cloudinary";
import { CloudinaryImage } from "../../types";

const FormContainer = ({
  addRepoImages,
}: {
  addRepoImages: (url: CloudinaryImage[]) => void;
}) => {
  const [formImages, setFormImages] = useState<FormImage[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);

  const removeFormImage = (url: string) => {
    setFormImages((oldImages) =>
      oldImages.filter((image) => image.url !== url)
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const urls = await uploadImagesToCloudinary(
        formImages.map((image) => image.file)
      );
      addRepoImages(urls);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    console.log("files:", files);
    setFormImages((oldImages) => [
      ...oldImages,
      ...files.map((file) => ({ url: URL.createObjectURL(file), file })),
    ]);
  };

  return (
    <>
      <FormComponent
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        loading={loading}
      />
      <PreviewComponent deleteImage={removeFormImage} images={formImages} />
    </>
  );
};

export default FormContainer;
