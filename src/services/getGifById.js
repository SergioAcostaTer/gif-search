import { GIPHY_KEY } from "./keys"

export default async function getGifById(id){
    const data = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_KEY}`)
    const res = await data.json()
    return res
}