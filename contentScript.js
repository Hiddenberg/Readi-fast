// Getting all the main text nodes
let textNodes = document.querySelectorAll("p, span, li, pre, h1, h2 ,h3, h4 ,h5")

for (node of textNodes) {
   // Separating all the words by spaces
   let wordsArray = node.innerText.split(" ");

   // Applying highlight for each word and getting a single string with "reduce" function
   let hightlightedText = wordsArray.reduce((prev, word) => {
      // Getting a third part of the word based on the count of character
      let highlightedLettersCount = Math.ceil(word.length / 3);
      // Creating a regexp to select only those characters
      let lettersRegex = new RegExp(`^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{${highlightedLettersCount}}`);

      // Transform the text with 
      return `${prev}<span>${word.replace(lettersRegex, "<b>$&</b>")}</span> `
   }, "");

   node.style.fontFamily = "sans-serif";
   node.style.letterSpacing = "0.1ch";

   // Replacing old text with the highlighted one
   node.innerHTML = hightlightedText;
}