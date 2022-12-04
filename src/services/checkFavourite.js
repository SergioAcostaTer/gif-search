export default async function checkFavourite(token, id) {
    const res = await fetch(`http://localhost:4000/checkFavourite/${token}/${id}`);
    const data = res.json();
    return data;
  }
  