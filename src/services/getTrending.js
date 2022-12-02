import { GIPHY_KEY } from "./keys";

export async function getTrending(
  limit = 25,
  offset = 0,
  rating = "g",
  lang = "en"
) {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}
