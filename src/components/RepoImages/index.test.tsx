import { render, screen } from "@/test/test-utils";
import RepoImages from ".";

describe("RepoImages component", () => {
  test("should render repo images component correctly given props", async () => {
    const data = { images: [{ url: "image", publicId: "image" }] };
    render(<RepoImages {...data} />);
  });

  test("all images are rendered properly", async () => {
    const data = { images: [{ url: "image", publicId: "image" }] };
    render(<RepoImages {...data} />);

    expect(screen.getAllByRole("img")).toHaveLength(data.images.length);
  });
});
