const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const getQuote = async () => {
    const api = "https://api.quotable.io/random";
    try {
        const data = await fetch(api);
        const quotesData = await data.json()
        // console.log(quotesData);
        // console.log(quotesData.content);
        // console.log(quotesData.authorSlug);
        // document.getElementById("quotes").innerText = quotesData.content;
        quotes.innerText = quotesData.content;
        // document.getElementById("author").innerHTML = `Author- ${quotesData.authorSlug}`;
        author.innerHTML = `Author- ${quotesData.authorSlug}`;
    } catch (error) {

    }
}

const tweet = () => {
    const quotesText = quotes.innerText;
    const authorText = author.innerText;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quotesText)}%0A${encodeURIComponent(authorText)}`;
    window.open(url);
}
  
getQuote()