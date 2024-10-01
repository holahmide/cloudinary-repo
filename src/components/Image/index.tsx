const Image = ({
  className,
  deleteImage,
  url,
}: {
  className?: string;
  deleteImage?: (url: string) => void;
  url: string;
}) => {
  return (
    <div className="relative overflow-hidden">
      {deleteImage && (
        <button
          onClick={() => deleteImage(url)}
          className="rounded-full right-0 absolute m-2 bg-black p-1 px-2.5 text-sm cursor-pointer hover:border-white border border-transparent"
        >
          X
        </button>
      )}
      <img src={url} className={`w-40 h-40 rounded-md ${className}`} />
    </div>
  );
};

export default Image;
