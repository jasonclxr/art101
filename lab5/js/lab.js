/*
 *  Made By:  Jason Blecman (with help from my partner Jesus!)
 *  Created:  1/26/2021 7:19pm PST
 *  License:  Public Domain
 *  Contact:  jblecman@ucsc.edu
 *  CruzID:   jblecman
*/

class Car {
  constructor(_color, _year, _make, _model, _own) {
      this.make = _make;
      this.model = _model;
      this.color = _color;
      this.year = _year;
      this.ownIt = _own;
      this.age = 2021 - this.year;
  }
  printcar() {
    var str = this.color + " " + this.year + " " + this.make + " " + this.model;
    str += " (Currently Own: " + (this.ownIt ? "Yes)" : "No)");
    return str;
  }
  describecar() {
    var str = "";
    str += "<p>Year: "   + this.year     + "<br>";
    str += "Make: "   + this.make     + "<br>";
    str += "Model: "  + this.model    + "<br>";
    str += "Color: "  + this.color    + "<br>";
    str += "Age: "    + this.age      + "<br>";
    str += "Owned: "  + this.ownIt    + "<br></p>";
    return str;
  }
}

var jasonsFirstCar = new Car("Tan", 2003, "Chevrolet", "Malibu", false);
var jasonsSecondCar = new Car("Red", 1999, "Pontiac", "Grand Prix", true);

document.writeln("<p>Jason's first car was a \n" + jasonsFirstCar.printcar() );
document.writeln("She overheated and I had to junk her ): <br>");
document.writeln("Jason's current car is a \n" +  jasonsSecondCar.printcar() );
document.writeln("She's my current car! :) <br></p>");

document.writeln( jasonsFirstCar.describecar() );
