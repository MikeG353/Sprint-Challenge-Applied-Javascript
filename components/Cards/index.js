// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) => {
        console.log(response);
        let bsArray = response.data.articles.bootstrap.map(article => makeArticle(article));
            // (article.headline, article.authorPhoto, article.authorName));
        console.log(bsArray)

    // let newArray = response.data.topics.map(topic => makeTab(topic))
    // newArray.forEach(topic => topicsDiv.appendChild(topic));
    })

    .catch((error) =>{
        console.log(error)
    })

    // creating function 
    function makeArticle(object){

        //create elements
        const articleCard = document.createElement('div');
        const articleHeadline = document.createElement('div');
        const articleAuthor = document.createElement('div');
        const articleImgContainer = document.createElement('div');
        const articleAuthorImg = document.createElement('img');
        const articleSigniture = document.createElement('span');
    
        // apply calsses
        articleCard.classList.add('card');
        articleHeadline.classList.add('headline');
        articleAuthor.classList.add('author');
        articleImgContainer.classList.add('img-container');
            
        // add content
        articleHeadline.textContent = object.headline;
        articleSigniture.textContent = `By ${object.authorName}`;
        articleAuthorImg.src = object.authorPhoto; 

        //add structure
        articleCard.appendChild(articleHeadline);
        articleCard.appendChild(articleAuthor);
        articleAuthor.appendChild(articleImgContainer);
        articleImgContainer.appendChild(articleAuthorImg);
        articleAuthor.appendChild(articleSigniture);

    
        //return component
        return articleCard;       
    }