// // Step 2: Create Tabs
// // -----------------------
// // Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// // Once the data is returned console.log it and review the structure.
// // Iterate over the topics creating a new Tab component and add it to the DOM
// // under the .topics element.
// //
// //  The tab component should look like this:
// //    <div class="tab">topic here</div>


// const testRequest = axios.get('https://lambda-times-backend.herokuapp.com/topics')
//   .then((axiosData) => {
//     console.log("data", axiosData);
//   })
//   .catch(err => {
//     console.log("Api is currently down", error)
//   })

// const topics = document.querySelector('.topics');

// Object.keys(data.topics).forEach(item => {
//   console.log(item);
// });

// tabComponent.forEach(value => {
//   axios.get('https://lambda-times-backend.herokuapp.com/topics' + value)
//     .then((axiosData) => {
//       console.log("Object.keys(topics)", axiosData);
//       return new tab(axiosData);
//     })
//     .catch(err => {
//       console.log("Api is currently down", error)
//     })
// })