// Getting all the main text nodes
let textNodes = document.querySelectorAll("p, span, li, h1, h2 ,h3, h4 ,h5")

for (node of textNodes) {
   // Separating all the words by spaces
   let wordsArray = node.innerText.split(" ");

   // Applying highlight for each word and getting a single string with "reduce" function
   let hightlightedText = wordsArray.reduce((prev, word) => {
      // Getting a quarter of the word based on the count of character
      let highlightedLettersCount = Math.ceil(word.length / 4);
      // Creating a regexp to select only those characters
      let lettersRegex = new RegExp(`^[a-zA-Z]{${highlightedLettersCount}}`);

      // Transform the text with 
      return `${prev}<span>${word.replace(lettersRegex, "<b>$&</b>")}</span> `
   }, "");

   // Replacing old text with the highlighted one
   node.innerHTML = hightlightedText;
}