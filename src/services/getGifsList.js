import { GIPHY_KEY } from "./keys";

export async function getGifsList(
  query = "Panda",
  limit = 20,
  offset = 0,
  rating = "g",
  lang = "en"
) {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
