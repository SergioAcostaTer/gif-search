import {API} from "./keys"
export default async function checkFavourite(token, id) {
    const res = await fetch(`${API}/checkFavourite/${token}/${id}`);
    const data = res.json();
    return data;
  }