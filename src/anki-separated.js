let paragrapgh = document.getElementById("text")
let words = paragrapgh.innerText.split(" ")
let colors = ["96adfc", "dbe1f1", "a8f29a", "d8d3d6",  "eddd6e", "edd1b0", "d987dc", "e0a6aa", "a5f7e1", "f8fd89", "28EBFF", "FDFB08"]
let spans = []
// paragrapgh.style.backgroundColor = '#' + colors[Math.floor(Math.random() * colors.length)];

for (x = 0; x < words.length;) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let random = randomIntFromInterval(2, 4)
    let wordList = ''
    for(i = 0; i < random; i++) {
        if (words[x+i]) {
            wordList = wordList + ' ' + words[x+i]
        }
        // console.log(words[x+i])
    }
    let span = "<span style='background-color: #"+color+"';'>" + wordList + "</span>";
    x = x + random
    
    spans.push(span)
}

paragrapgh.innerHTML = spans.join(" ");

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
