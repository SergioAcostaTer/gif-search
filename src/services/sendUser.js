export default async function sendUser(name, email, picture, verified) {
  const link = encodeURIComponent(picture);
  const res = await fetch(
    `http://localhost:4000/handleLogin/${name}/${email}/${link}/${verified}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  const data = res.json();
  return data;
}

