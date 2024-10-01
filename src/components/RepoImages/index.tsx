import { CloudinaryImage } from "../../types";
import Image from "../Image";

const RepoImages = ({
  removeImage,
  images,
}: {
  removeImage?: (url: string) => void;
  images: CloudinaryImage[];
}) => {
  return (
    <>
      <p className="text-lg mb-4 font-bold">Image Repository</p>

      {images.length === 0 && <p>You have no images in your repository.</p>}

      <div className="flex justify-center gap-4">
        {images.map(({ url }, index) => (
          <Image
            className="!w-80 !h-80"
            deleteImage={removeImage}
            url={url}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default RepoImages;
