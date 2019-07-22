// // Step 2: Create Tabs
// // -----------------------
// // Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// // Once the data is returned console.log it and review the structure.
// // Iterate over the topics creating a new Tab component and add it to the DOM
// // under the .topics element.
// //
// //  The tab component should look like this:
// //    <div class="tab">topic here</div>


axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((axiosData) => {
    console.log("data", axiosData);
    const tab = axiosData.data.topics;
    tab.forEach(value => {
      value === "node.js" && (value = "node");
      const newTab = tabData(value);
      document.querySelector(".topics").appendChild(newTab);
      newTab.addEventListener("click", () => {
        const appear = document.querySelectorAll(".card");
        appear.forEach(card => {
          (card.style.display = "none");
        })
        const selectedCard = document.querySelectorAll(
          `.card[data-subject="${newTab.dataset.subject}"]`
        );
        selectedCard.forEach(tab => (tab.style.display = "flex"));
      });
    })
  })
  .catch(err => {
    console.log("Api is currently down", err)
  })

function tabData(info) {
  const tab1 = document.createElement("div");
  tab1.classList.add("tab");
  tab1.setAttribute("data-subject", info);
  tab1.textContent = info;
  return tab1;
}

