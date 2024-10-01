export const createFile = () =>
  new File(["image content"], "image.png", {
    type: "image/png",
  });
