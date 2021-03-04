/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/24/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/
var output = $("#output");
var URL = "https://pokeapi.co/api/v2/gender/";

function Capitalize(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function interpretRequest(data) {
  output.empty();

  data.sort(function(a,b) {
    return a.pokemon_species.name > b.pokemon_species.name;
  });

  for (key in data) {
      let newLink = $("<p class = \"pokemon\">" + Capitalize(data[key].pokemon_species.name) + "</p><br>");
      output.append(newLink);
  }
}

function sendRequest(url) {
  $.ajax({
      url: url,
      data: {},
      type: "GET",
      dataType : "json",
      success: function(data) {
          interpretRequest(data.pokemon_species_details);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("FAILURE:", textStatus, errorThrown);
      }
  })
}

$("#Male").click(function() {
  sendRequest(URL + "2");
});

$("#Female").click(function() {
  sendRequest(URL + "1");
});

$("#Genderless").click(function() {
  sendRequest(URL + "3");
});

sendRequest(URL + getRandomInt(1, 3));
