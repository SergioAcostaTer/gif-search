import { getGifsList } from "./getGifsList";

export async function getPreview(query) {
  try {
    return await getGifsList(query, 1);
  } catch (error) {
    console.log(error);
  }
}
