// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log("An Array of Topics", response.data)
        const entryPoint = document.querySelector('.topics')
        response.data.topics.forEach(topicData => {
            const newTopic = topicName(topicData)
            entryPoint.appendChild(newTopic)
        })
        console.log(newTopic)
    })
    .catch(err => {
        console.log("Bad request for Topic fetch", err)
    })

const topicName = (title) => {
    //create element
    tabTitle = document.createElement('div')

    //append children to parent
    topicContainer.appendChild(tabTitle)

    // Assign classes to elements
    tabTitle.classList.add('tab')

    //append data to element
    tabTitle.textContent = title;
    console.log(title)
    return tabTitle
}

const topicContainer = document.querySelector('.topics');
// / Add the tab component to the DOM.
topicContainer.appendChild(topicName())
console.log(topicName())

//const topicArray = ["javascript", "bootstrap"​​​​, "technology"​​, "jquery", "node.js"​​]

// response.data.topics.forEach(el => {
//     el.appendChild(tabTitle)
// })