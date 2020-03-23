// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log("An Array of Articles", response.data)
        const entryPoint = document.querySelector('.cards-container')
            // console.log(entryPoint)

        response.data.articles.bootstrap.forEach(article => {
            const newArticleCard = articleCard(article)
            entryPoint.appendChild(newArticleCard)
        })
        response.data.articles.javascript.forEach(article => {
            const newArticleCard = articleCard(article)
            entryPoint.appendChild(newArticleCard)
        })
        response.data.articles.jquery.forEach(article => {
            const newArticleCard = articleCard(article)
            entryPoint.appendChild(newArticleCard)
        })
        response.data.articles.node.forEach(article => {
            const newArticleCard = articleCard(article)
            entryPoint.appendChild(newArticleCard)
        })
        response.data.articles.technology.forEach(article => {
            const newArticleCard = articleCard(article)
            entryPoint.appendChild(newArticleCard)
        })
    })
    .catch(err => {
        console.log("Something happened - like a 404 or bad request", err)
    })



const articleCard = (obj) => {
    const cardDiv = document.createElement('div')
    const cardheadLine = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgDiv = document.createElement('div')
    const cardImg = document.createElement('img')
    const authNameSpan = document.createElement('span')

    cardDiv.classList.add('card')
    cardheadLine.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgDiv.classList.add('img-container')

    cardDiv.appendChild(cardheadLine)
    cardDiv.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgDiv)
    cardAuthor.appendChild(authNameSpan)
    cardImgDiv.appendChild(cardImg)

    // cardImg.src = "https://i.picsum.photos/id/842/200/300.jpg"
    cardheadLine.textContent = obj.headline
    cardImg.src = obj.authorPhoto
    authNameSpan.textContent = obj.authorName


    return cardDiv
}




const cardContainer = document.querySelector(".cards-container");
// / Step 6: add the menu component to the DOM.
cardContainer.appendChild(articleCard())