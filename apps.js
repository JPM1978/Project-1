const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";


// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {
  // prevent the refresh
  event.preventDefault();

  // grab text from input box
  const inputText = $("input[type=text]").val();

  // update the screen
  $.ajax(baseURL + `fname=${inputText}`).then(
    function (data) {
      // render the data
      const $main = $("main");
      const card = data.data[0];
      $main.empty();
      $main.html(`
        <h1>${card.name}</h1>
        <p> Type: ${card.type} </p>
        <p> Description: ${card.desc} </p>
        <img src="${card.card_images[0].image_url_small}"> 
       `);
      
      document.getElementById("CharacterName").value = "";
    },
    function (error) {
      console.log("Error: ", error);
    }
  );
});



$.ajax("https://db.ygoprodeck.com/api/v7/cardinfo.php")
.then((data) => {
  console.log(data.data[0])
})

