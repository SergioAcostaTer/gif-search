export default async function checkFavourite(token, id) {
    const res = await fetch(`https://backend-gif.herokuapp.com/checkFavourite/${token}/${id}`);
    const data = res.json();
    return data;
  }
  