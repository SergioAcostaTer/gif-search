// import { oAuth } from "./keys";

// export async function getTrendsTwitter() {
//   try {
//     const res = await fetch(
//       "https://api.twitter.com/1.1/statuses/update.json?status=Hello%20world",
//       {
//         headers: {
//           Authorization: `OAuth oauth_consumer_key=${oAuth}, oauth_nonce="OAUTH_NONCE", oauth_signature="OAUTH_SIGNATURE", oauth_signature_method="HMAC-SHA1", oauth_timestamp="OAUTH_TIMESTAMP", oauth_token=${oAuth}, oauth_version="1.0"`,
//         },
//         method: "POST",
//       }
//     );
//     const data = res.json()
//     return data;
//     // const res = await googleTrends.dailyTrends({ geo: "US" }, cbFunc)
//     // const data = await res.json();
//     // return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
