/**
 * Author:    Jason Blecman
 * Created:   2/1/2021
 * 
 * (c) Jason Blecman
 **/
'use strict'; 

var myTransport = ["buses", "cars", "biking", "walking"];
var myMainRide = {Year: 2003, Make: "Chevrolet", Model: "Malibu", Color: "Tan", CurrentlyOwn: false};
function output(input) { document.writeln(input); } //don't know if this works yet!

output("********************************************<br>");
output("I have a bunch of modes of transportation, but <br> my mains are:");

for (let i = 0; i < myTransport.length - 1; i++) {
    output(myTransport[i] + ", ");
}
output("and " + myTransport[3] + "<br>");

output("My old high school car was <pre>" + JSON.stringify(myMainRide, null, '\t'), "</pre>");
output("********************************************<br>");