import { fireEvent, render, screen } from "@/test/test-utils";
import { vi } from "vitest";
import Image from ".";

describe("Image component", () => {
  test("should render image component correctly given props", async () => {
    const data = { url: "" };
    render(<Image {...data} />);
  });

  test("image should be correctly rendered", async () => {
    const data = { url: "" };
    render(<Image {...data} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("delete image button should be rendered when delete image fn is passed", async () => {
    const data = { url: "", deleteImage: vi.fn() };
    render(<Image {...data} />);

    const btnElement = screen.getByRole("button");

    expect(btnElement).toBeInTheDocument();

    fireEvent.click(btnElement);

    expect(data.deleteImage).toHaveBeenCalled();
  });
});
