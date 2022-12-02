import { GIPHY_KEY } from "./keys";

export async function getNowTrending() {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/trending/searches?api_key=${GIPHY_KEY}`
    );
    const data = await res.json();
    // const data = {
    //   "data": [
    //       "long",
    //       "december",
    //       "bts",
    //       "date",
    //       "cuddles",
    //       "skull",
    //       "kiss",
    //       "michael scott",
    //       "stars",
    //       "hello kitty",
    //       "music",
    //       "sponge",
    //       "spotify",
    //       "black heart"
    //   ],
    //   "meta": {
    //       "msg": "OK",
    //       "status": 200,
    //       "response_id": "271d693715435b10ede1f8e4d6b57f35df557a14"
    //   }
    // }
    // console.log(data)
      
    return data?.data
  } catch (error) {
    console.log(error);
  }
}
