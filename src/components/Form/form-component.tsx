import { FormEvent } from "react";

type FormComponentProps = {
  loading: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormComponent = ({
  handleSubmit,
  handleChange,
  loading,
}: FormComponentProps) => {
  return (
    <form onSubmit={handleSubmit} aria-label="image-form">
      <input
        accept="image/*"
        hidden
        id="image-upload"
        type="file"
        onChange={handleChange}
      />
      <label
        htmlFor="image-upload"
        className="border px-4 py-2 w-fit rounded-md mb-4 inline-block cursor-pointer hover:border-blue-400 transition-all hover:text-blue-400"
      >
        Click here to add image
      </label>
      <br />

      <button
        type="submit"
        disabled={loading}
        className="p-2 bg-blue-600 rounded-md px-4 my-2"
      >
        {loading ? "Uploading..." : "Upload all images"}
      </button>
    </form>
  );
};

export default FormComponent;
