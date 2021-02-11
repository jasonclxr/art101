/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/10/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/


console.log("Running...");
var outputEl = document.getElementById("result");

var new1El = document.createElement("p");
var new2El = document.createElement("h2");


var title = "Lab 9 - JavaScript for the Web ";
var challengeTitle = document.getElementById("challengeTitle");
var problemTitle = document.getElementById("problemTitle");
var designTitle = document.getElementById("designTitle");
var mTitle = "Challenges"

var cit = 0;
var pit = 0;
var dit = 0;

var colors = ["red", "blue", "green", "yellow", "black", "white", "purple", "orange", "grey"];

function titleTask() {
  title = title.slice(1, title.length) + title.slice(0, 1);
  cit = (cit + 1) % mTitle.length;
  pit = ((pit + 2) % colors.length);
  dit = ((dit + 1) % 6);

  mTitle = mTitle.toLowerCase();
  mTitle = mTitle.slice(0, cit) +
      mTitle.charAt(cit).toUpperCase() +
      mTitle.slice(cit + 1, mTitle.length);

  designTitle.style.fontSize = (dit*3 + 10) + "px"; //using elements of DOM
  problemTitle.style.color = colors[pit];         //using elements of DOM
  challengeTitle.innerHTML = mTitle;              //using elements of DOM
  document.title = title;                         //using elements of DOM
  setTimeout(titleTask, 100)
}

var results = "Checkout the code on the repo! Or checkout our wonderful" +
  " animations showing off what skilled website designers we are! Or" +
  " don’t, don’t look at all."
new1El.innerHTML = results;
new2El.innerHTML = "😋";

outputEl.appendChild( new1El )
outputEl.insertBefore( new2El, outputEl.childNodes[0] );

titleTask();
