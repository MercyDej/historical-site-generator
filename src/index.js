function displayHistoricalSites(response) {
  new Typewriter("#historicalSite", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateHistoricalSites(event) {
  event.preventDefault();

  let userCountries = document.querySelector("#user-countries");

  let apiKey = "c71e44b46oa0t62f8d332460f8567af3";

  let context =
    "You are the best travel expert. Your mission is to suggest short suggestion about a must-visit historical site in basic HTML and separate each place with a <br />. Make sure to follow the user instructions. Do not include a title to the site. Sign the places with 'Shecodes AI' inside a <strong> element only at the end and NOT at the beginning";
  let prompt = `User instructions: What are some must-visit historical sites in ${userCountries.value} for history buffs?`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let historicalSiteElement = document.querySelector("#historicalSite");
  historicalSiteElement.classList.remove("hidden");
  historicalSiteElement.innerHTML = `<div class="generating">⏳ Generating must-visit historical sites in  ${userCountries.value}</div>`;

  axios.get(apiUrl).then(displayHistoricalSites);
}

let historicalSiteFormElement = document.querySelector(
  "#historical-site-generator-form"
);
historicalSiteFormElement.addEventListener("submit", generateHistoricalSites);
