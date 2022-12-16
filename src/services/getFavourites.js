import {API} from "./keys"

export default async function getFavourites(token) {
  const res = await fetch(`${API}/getFavourites/${token}`);
  const data = res.json();
  return data;
}
