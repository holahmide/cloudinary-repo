import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./components/Form/form-container";
import { CloudinaryImage } from "./types";
import RepoImages from "./components/RepoImages";

function App() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  const updateStorage = (images: CloudinaryImage[]) =>
    localStorage.setItem("images", JSON.stringify(images));

  const addRepoImages = (newImages: CloudinaryImage[]) => {
    setImages((oldImages) => {
      const updatedImages = [...oldImages, ...newImages];
      updateStorage(updatedImages);
      return updatedImages;
    });
  };

  const removeImage = (url: string) => {
    setImages((oldImages) => {
      const updatedImages = oldImages.filter((image) => image.url !== url);
      updateStorage(updatedImages);
      return updatedImages;
    });
  };

  useEffect(() => {
    setImages(JSON.parse(localStorage.getItem("images") || "[]"));
  }, []);

  return (
    <div>
      <FormContainer addRepoImages={addRepoImages} />
      <hr className="my-2 mb-8" />
      <RepoImages images={images} removeImage={removeImage} />
    </div>
  );
}

export default App;
