const newsInput = document.querySelector(".news-input");
const form = document.querySelector("form");
const newsContainer = document.querySelector(".news-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchQuery = newsInput.value;
  fetchNews(searchQuery);
});

async function fetchNews(searchQuery) {
  try {
    const apiKey = "1b7bae2a-cd0c-48ec-aaaa-710725bf2388";
    const response = await fetch(
      `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${apiKey}`
    );

    //  https://content.guardianapis.com/search?q=page=2&q=debate&api-key=test

    const responseData = await response.json();
    // console.log(responseData);
    newsResults(responseData.response.results);
  } catch (error) {
    console.log("Error:" + error.message);
  }
}

function newsResults(results) {
  let fetchedNews = "";

  results.forEach((result) => {
    let newsSection = result.sectionName;
    let newsDate = result.webPublicationDate;
    let newsURL = result.webUrl;
    let newsTitle = result.webTitle;

    fetchedNews += `
    <div class="news" >
      <p>${newsSection}</p>
      <p>${newsDate}</p>
      <a href="${newsURL}" target="_blank">${newsTitle}</a>
    </div>
    `;
    newsContainer.innerHTML = fetchedNews;
  });
}
