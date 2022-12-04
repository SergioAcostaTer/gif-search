export default async function addGif(token, object) {
    const res = await fetch(`http://localhost:4000/removegif/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ gif: object }),
    });
    const data = res.json();
    return data;
  }
  