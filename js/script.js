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
    await navigator.clipboard.writeText(`${quoteText.textContent - quoteAuthor.textContent}`);
  } catch (error) {
    console.log("Failed to copy quote", error);
  }
}

const buttonNewQuote = document.querySelector("button");
buttonNewQuote.addEventListener("click", getQuote);

const buttonCopyQuote = document.getElementById("button");
buttonCopyQuote.addEventListener("click", copyQuote);