const emojiFromText = require("emoji-from-text");
 
export default function getEmojiFromText(text){
    
    return emojiFromText(text).map(emoji => emoji.match.emoji.char)
}

// [1].emoji.char