//Generate a new quote
async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const quote = await response.json();
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");

    quoteText.textContent = `"${quote.content}"`;
    quoteAuthor.textContent = `By: ${quote.author}`;
  } catch (error) {
    console.log("Failed to fetch quote", error);
  }
}

//Copy Quote into the Clipboard
async function copyQuote(){
  try{
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    await navigator.clipboard.writeText(`${quoteText.textContent} - ${quoteAuthor.textContent}`);
  } catch (error) {
    console.log("Failed to copy quote", error);
  }
}

//Twitter Quote
async function xQuote(){
  try{
    const quoteText = document.getElementById("quoteText");
    const copyText = quoteText.textContent;
    window.open(`https://twitter.com/intent/tweet?text=${copyText}`);
  } catch (error) {
    console.log("Failed to go into X", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonNewQuote = document.getElementById("newQuote");
  buttonNewQuote.addEventListener("click", getQuote);

  const buttonCopyQuote = document.getElementById("copyQuote");
  buttonCopyQuote.addEventListener("click", copyQuote);

  const buttonXQuote = document.getElementById("xQuote");
  buttonXQuote.addEventListener("click", xQuote);
});