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

    const icon = document.getElementById("profile-icon");

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

//Youtube Video related to the quote
async function youtubeVideo(){
  try{
    const quoteText = document.getElementById("quoteText");
    const copyText = quoteText.textContent;
    window.open(`https://www.youtube.com/results?search_query=${copyText}`);
  } catch (error) {
    console.log("Failed to go into Youtube", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonNewQuote = document.getElementById("newQuote");
  buttonNewQuote.addEventListener("click", getQuote);

  const buttonCopyQuote = document.getElementById("copyQuote");
  buttonCopyQuote.addEventListener("click", copyQuote);

  const buttonXQuote = document.getElementById("xQuote");
  buttonXQuote.addEventListener("click", xQuote);

  const buttonYoutube = document.getElementById("youtubeVideo");
  buttonYoutube.addEventListener("click", youtubeVideo);
  
  //Profile Icon into Wikipedia
  const profileIcon = document.getElementById("profile-icon");
  profileIcon.addEventListener("click", () => {
    const author = document.getElementById("quoteAuthor");
    let authorText = author.textContent.trim();

    if (authorText.startsWith("By: ")) {
      authorText = authorText.slice(4).trim();
    }

    if (authorText === "Me") {
      window.open("https://github.com/JoaoBett");
    } else {
      window.open(`https://en.wikipedia.org/wiki/${authorText}`);
    }
  });

  //Author Name into Wikipedia
  const authorName = document.getElementById("quoteAuthor");
  authorName.addEventListener("click", () => {
    const author = document.getElementById("quoteAuthor");
    let authorName = author.textContent.trim();

    if (authorName.startsWith("By: ")) {
      authorName = authorName.slice(4).trim();
    }

    if (authorName === "Me") {
      window.open("https://github.com/JoaoBett");
    } else {
      window.open(`https://en.wikipedia.org/wiki/${authorName}`);
    }
  });
});
