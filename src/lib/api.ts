export class API {
  public static uploadImage = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return "/opengraph-image.png";
  };
}

export default API;
