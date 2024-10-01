import Image from "../Image";
import { FormImage } from "./types";

const PreviewComponent = ({
  images,
  deleteImage,
}: {
  images: FormImage[];
  deleteImage?: (url: string) => void;
}) => {
  return (
    <div
      className="flex justify-center gap-4 rounded-md overflow-hidden"
      aria-label="form-preview-images"
    >
      {images.map(({ url }, index) => (
        <Image url={url} key={index} deleteImage={deleteImage} />
      ))}
    </div>
  );
};

export default PreviewComponent;
