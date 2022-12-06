export default async function getFavourites(token) {
  const res = await fetch(`https://backend-gif.herokuapp.com/getFavourites/${token}`);
  const data = res.json();
  return data;
}
