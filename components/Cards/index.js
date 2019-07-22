axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // for each in articles, map across each topic and set attribute to literal topic
    const setUp = response.data.articles;
    for (topic of Object.entries(setUp)) {
      console.log(topic);
      topic[1].map(information1 => {
        const madeCard = cardForArticles(information1);
        madeCard.setAttribute("data-subject", topic[0]);
      });
    }
  })
  .catch(err => {
    console.log("Api is currently down", err)
  })

function cardForArticles(information1) {
  const myCard = document.createElement("div");
  myCard.classList.add("card");     
 
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = information1.headline;
  myCard.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  myCard.appendChild(author);

  const img = document.createElement("div");
  img.classList.add("img-container");
  author.appendChild(img);

  const actualImg = document.createElement("img");
  actualImg.src = information1.authorPhoto;
  img.appendChild(actualImg); 

  const byline = document.createElement("span");
  byline.textContent = information1.authorName;
  author.appendChild(byline);

  const placer = document.querySelector(".cards-container");
  placer.appendChild(myCard);
  return myCard;
} 