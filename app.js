const btn = document.querySelector(".btn");
const newsContainer = document.createElement("div");
document.body.appendChild(newsContainer);

btn.addEventListener("click", async () => {
    const apiKey = "58fc8d3c8c0c4724a7a2f19c0244372f";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const articles = data.articles;

        newsContainer.innerHTML = "";

        articles.forEach((article, index) => {
            const articleDiv = document.createElement("div");
            articleDiv.innerHTML = `
                <h3>${index + 1}. ${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
                <hr>
            `;
            newsContainer.appendChild(articleDiv);
        });

        console.log("News displayed");
    } catch (error) {
        console.error("Error fetching NewsAPI data:", error);
    }
});
