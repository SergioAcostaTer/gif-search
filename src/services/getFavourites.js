export default async function getFavourites(token) {
  const res = await fetch(`http://localhost:4000/getFavourites/${token}`);
  const data = res.json();
  return data;
}
