import { fireEvent, render, screen } from "@/test/test-utils";
import FormComponent from "./form-component";
import { vi } from "vitest";
import { createFile } from "@/test/helpers";

const createFormProps = () => ({
  loading: false,
  handleSubmit: vi.fn(),
  handleChange: vi.fn(),
});

describe("Form Component", () => {
  test("should render form component correctly given props", async () => {
    const data = createFormProps();
    render(<FormComponent {...data} />);
  });

  test("should call change function when an image is added", async () => {
    const data = createFormProps();
    render(<FormComponent {...data} />);

    const fileInput = screen.getByLabelText("Click here to add image");

    const file = createFile();

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(data.handleChange).toHaveBeenCalled();
  });

  test("should call submit function when the form is submitted", async () => {
    const data = createFormProps();
    render(<FormComponent {...data} />);

    const fileInput = screen.getByLabelText("Click here to add image");
    const file = createFile();

    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.submit(screen.getByRole("form"));

    expect(data.handleSubmit).toHaveBeenCalled();
  });

  test("should show uploading indicator when image is upload", async () => {
    const data = createFormProps();
    render(<FormComponent {...data} loading={true} />);

    expect(screen.getByText("Uploading...")).toBeInTheDocument();
  });
});
