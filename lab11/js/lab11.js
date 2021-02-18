/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/17/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/

console.log("Running...");

var $challenge = $('<input type="button" class="button" value="Challenge Button"/>');
//initial creation

var $clabel = $("<label>").text("Button Boy #1"); //add label
$clabel.append("<br>"); //add line break
$challenge.appendTo($clabel); //append the labels to the button
$("#challengeOutput").append($clabel); //add button to the doc


var $design = $('<input type="button" class="button" value="Design Button"/>');
var $dlabel = $("<label>").text("Button Boy #2");
$dlabel.append("<br>");
$design.appendTo($dlabel);
$("#designOutput").append($dlabel);

var $problem = $('<input type="button" class="button" value="Problem Button"/>');
var $plabel = $("<label>").text("Button Boy #3");
$plabel.append("<br>");
$problem.appendTo($plabel);
$("#problemOutput").append($plabel);

$clabel.click(function() {
  $(".challengeText").toggleClass("challengeClass");
})

$plabel.click(function() {
  $(".problemText").toggleClass("problemClass");
})

$dlabel.click(function() {
  $(".designText").toggleClass("designClass");
})
