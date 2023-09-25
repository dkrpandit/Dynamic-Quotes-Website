const jsonData = {};
const getQuote = async () => {
    const api = "https://api.quotable.io/random";
    try {
        const data = await fetch(api);
        const quotesData = await data.json()
        // console.log(quotesData);
        // console.log(quotesData.content);
        // console.log(quotesData.authorSlug);
        document.getElementById("quotes").innerText = quotesData.content;
        document.getElementById("author").innerHTML = `Author- ${quotesData.authorSlug}`;
    } catch (error) {

    }
}
// getQuote()