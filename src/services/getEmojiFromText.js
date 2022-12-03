const emojiFromText = require("emoji-from-text");
 
export default function getEmojiFromText(text, onlyFirst = false){
    if (onlyFirst === false) {
        return emojiFromText(text, onlyFirst).map(emoji => emoji.match.emoji.char)
    }
    else{
        return emojiFromText(text, onlyFirst).match.emoji.char

    }
    
}

// [1].emoji.char