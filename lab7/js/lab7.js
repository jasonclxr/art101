/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/1/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/
'use strict';

function CapitalizeFirstLetter(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function ShuffleString(str) {
  return str.split('').sort(function(){return 0.5-Math.random()}).join('');
}

function CaseInsensitiveSort(arr) {
  arr.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
}

function chooseWisely(userName) {
    // CONVERT TO ARRAY
    var govermentAssignedName = userName.split("");
    console.log("Array is: " + govermentAssignedName);

    // SORT CORRECTLY
    CaseInsensitiveSort(govermentAssignedName);
    console.log("Sorted is: " + govermentAssignedName);

    // COMBINE IT BACK TOGETHER
    govermentAssignedName = govermentAssignedName.join("");
    console.log("Joined is: " + govermentAssignedName);

    // OUTPUT TO HTML PAGE
    document.write("Your new goverment assigned name is: " + CapitalizeFirstLetter(govermentAssignedName));

    // SHUFFLE AND OUTPUT
    var shuffled = CapitalizeFirstLetter(ShuffleString(govermentAssignedName));
    console.log("Anagram is: " + shuffled);
    document.write("<div>Your anagram name is " + shuffled + "</div>");

    // RETURN THE ASSIGNED NAME
    return govermentAssignedName;
}

var returnedGovName = chooseWisely(window.prompt("Enter Name:").replace(" ", ""));
