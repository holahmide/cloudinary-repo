import { render, screen } from "@/test/test-utils";
import PreviewComponent from "./preview-component";
import { createFile } from "@/test/helpers";

describe("Form images preview component", () => {
  test("should render preview component correctly given props", async () => {
    const data = { images: [] };
    render(<PreviewComponent {...data} />);
  });

  test("should render all images passed to component", async () => {
    const data = {
      images: [
        { url: "image1", file: createFile() },
        { url: "image2", file: createFile() },
      ],
    };
    render(<PreviewComponent {...data} />);

    expect(screen.getByLabelText("form-preview-images").childElementCount).toBe(
      data.images.length
    );
  });
});
