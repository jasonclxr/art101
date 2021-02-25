/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/24/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/

console.log("Running...");

function FizzBuzz(max) {
  let three, five, seven, additionalFactor
  let bigstr = "";

  let f1 = $("#fizzFactor").val();
  let f2 = $("#buzzFactor").val();
  let f3 = $("#boomFactor").val();
  let f4 = $("#bangFactor").val();

  for (let i = 1; i <= max; ++i) {
    three = i % f1 == 0;
    five = i % f2 == 0;
    seven = i % f3 == 0;
    additionalFactor = i % f4 == 0;

    str = "";

    if ( three ) {
      str += "Fizz";
    }
    if ( five ) {
      str += "Buzz";
    }
    if ( seven ) {
      str += "Boom";
    }
    if ( additionalFactor ) {
      str += "Bang";
    }
    if (three || five || seven || additionalFactor) {
      bigstr += i + " : " + str + "!" + "<br>";
    } else {
      bigstr += i + ": <br>";
    }
  }

  $("#output").html(bigstr);
}

FizzBuzz(200);

$("#button").click(function() {
  $("#output").empty();
  FizzBuzz($("#input").val());
})
