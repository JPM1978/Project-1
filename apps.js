const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";
const cardInfo = {}
function convertData(data){
  data.forEach((element, index) => {
    cardInfo[index] = element;
  })
}

function generateCards(data) {
  // function (data) {
    // render the data
    const $main = $("main");

    convertData(data.data);
    console.log(cardInfo)
    $main.empty();
  // for loop to display multiple cards on page  
    for (let i = 0; i < 50; i++){
      const card = cardInfo[i];
      $main.append(`
      <h1>${card.name}</h1>
      <p> ID Number: ${card.id} </p>
      <p> Type: ${card.race} / ${card.type} </p>
      <p> Attack: ${card.atk} / Defense: ${card.def}</p>          
      <p> Attribute: ${card.attribute} / Archetype: ${card.archetype} </p> 
      <p  class="description"> Description: ${card.desc} </p>
      <img src="${card.card_images[0].image_url}"> 
     `);
    }

    
  //   document.getElementById("CharacterName").value = "";
  // }
}

// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {
  // prevent the refresh
  event.preventDefault();

  // grab text from input box
  const inputText = $("input[type=text]").val();
  function test(error) {
    alert("Your search returned no results, please try again! ");
  }

  // update the screen
  $.ajax(baseURL + `fname=${inputText}`).then(generateCards).fail(test);
});
