export default async function addGif(token, object) {
    const res = await fetch(`https://backend-gif.herokuapp.com/removegif/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ gif: object }),
    });
    const data = res.json();
    return data;
  }
  