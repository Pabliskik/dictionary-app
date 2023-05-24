let searchBtn = document.getElementById("search-btn");
let wordInp = document.getElementById("word-inp");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

searchBtn.addEventListener("click", async () => {
    let word = wordInp.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    let definition = ''

    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0])
            console.log(data[0].word)
            console.log(data[0].meanings[0])
            console.log(data[0].meanings[0].definitions[0].definition)
            definition = data[0].meanings[0].definitions[0].definition
        });
    result.innerHTML = `
        <h1>${capitalizeFirstLetter(word)}</h1>
        <div>
            <p>${definition}</p>
        </div>
        `;
});