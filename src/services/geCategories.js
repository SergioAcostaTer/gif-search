
import { GIPHY_KEY } from "./keys";

export async function getCategories() {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/categories?api_key=${GIPHY_KEY}`
    );
    const data = await res.json();
    return data?.data
  } catch (error) {
    console.log(error);
  }
}
