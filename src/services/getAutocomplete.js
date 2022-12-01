

import { GIPHY_KEY } from "./keys";

export async function getAutocomplete(
  incompletedQuery,
) {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${GIPHY_KEY}&q=${incompletedQuery}`
    );
    const data = await res.json();
    return data?.data.map(e => e.name);
  } catch (error) {
    console.log(error);
  }
}
