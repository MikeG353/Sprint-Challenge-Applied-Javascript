// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// query selector for append later
let topicsDiv = document.querySelector('.topics')

// axios get request
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
// on success
    .then((response) => {
        
        let newArray = response.data.topics.map(topic => makeTab(topic))
        newArray.forEach(topic => topicsDiv.appendChild(topic));
    }
    
    )
    .catch((error)=>{
        console.log(error)

    })
function makeTab(topic){

    //create element
    const topicTab = document.createElement('div');

    // apply calss
    topicTab.classList.add('tab');

    // add text content
    topicTab.textContent = topic;



    //return tab
    return topicTab;
}
