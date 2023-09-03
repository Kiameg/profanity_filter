// Selects HTML elements
const pText = document.querySelector("p").innerText.split(" ");
const pElement = document.querySelector("p");
const button = document.querySelector("button");
// defines array that contains objects with pairs of bad words and good word replacements
const curseWord = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
//eventlistener on button, that executes goodWords function
button.addEventListener("click", goodWords);

//forEarch starts a loop through each word in pText array
// within the loop is another loop 'for'
//loop iterates through curseWord array to see which objects contain bad and good words
//checks if any bad words is found, executes it and replaces it with a good word
function goodWords() {
  pText.forEach((word) => {
    for (let i = 0; i < curseWord.length; i++) {
      if (word.includes(curseWord[i].bad)) {
        pText.splice(pText.indexOf(word), 1, curseWord[i].good);
      }
    }
  });
  pElement.textContent = pText.join(" ");
}
