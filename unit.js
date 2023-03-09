

function getlen() {

  // for length

  let getval = document.getElementById("get").value
  let setval = document.getElementById("set").value

  let x = document.getElementById("demo");
  let y = document.getElementById("inc");

  if (getval === setval) {

    alert(`if you are convert ${getval} into ${getval} you get same answer`)         // if user try to convert e.g. meter into meter it show alert

  }


  if (getval === "meter" && setval == "foot") {
    y.innerText = x.innerText * 3.28084                     // the formula is meter*3.28084 to convert meter into foot 
  }

  else if (getval === "meter" && setval == "cm") {
    // we write to convert meter into cm formula meter *100
    y.innerText = x.innerText * 100;
  }

  else if (getval === "foot" && setval == "meter") {
    y.innerText = x.innerText / 3.281                             // the formula is foot divide by 3.281
  }


  else if (getval === "foot" && setval == "cm") {
    y.innerText = x.innerText * 30.48                           // the formula is foot*30.48
  }

  else if (getval === "cm" && setval == "foot") {
    y.innerText = x.innerText * 30.48                           // the formula is foot*30.48
  }


  else if (getval === "cm" && setval == "meter") {
    y.innerText = x.innerText / 100;                        // the formula is foot / 100  
  }

  // write the code if user input the alphabet shoow alert

  let z = /[a-z]/i
  if (z.test(x.innerText) === true) {
    alert("enter valid number")
  }


}

   /*
// now we create a function for celsius into fah


function getceli() {
  let x = document.getElementById("celi");
  let y = document.getElementById("fah")
  y.innerText = x.innerText * 1.8 + 32             // the formula is fahreheit *1.8+32

  // write the code if user input the alphabet shoow alert

  let z = /[a-z]/i
  if (z.test(x.innerText) === true) {
    alert("enter valid number")
  }

}



// now we create a function for fah into celcius


function getfah() {
  let x = document.getElementById("celi");
  let y = document.getElementById("fah")
  x.innerText = (y.innerText - 32) * 5 / 9

  // write the code if user input the alphabet shoow alert

  let z = /[a-z]/i
  if (z.test(y.innerText) === true) {
    alert("enter valid number")
  }

}        */


// now for kilogram into  gram

function getgram() {

  let x = document.getElementById("kilo")
  let y = document.getElementById("gram")

  y.innerText = x.innerText * 1000

    // write the code if user input the alphabet shoow alert

    let z = /[a-z]/i
    if (z.test(x.innerText) === true) {
      alert("enter valid number")
    }


}



// now for gram into kilogram

function getkilogram() {

  let x = document.getElementById("kilo")
  let y = document.getElementById("gram")

  x.innerText = y.innerText / 1000;

    // write the code if user input the alphabet shoow alert

    let z = /[a-z]/i
    if (z.test(y.innerText) === true) {
      alert("enter valid number")
    }


}

  function temp(){

  let getval1 = document.getElementById("get2").value
  let setval1 = document.getElementById("set2").value

  let x = document.getElementById("celi");
  let y = document.getElementById("fah")


  // write the code if user input the alphabet shoow alert
  
     if (getval1 === setval1) {
  
    alert(`if you are convert ${getval1} into ${getval1} you get same answer`)       
  
  }

  else if (getval1 === "Fahreheit" && setval1 == "Celcius") {
    y.innerText = (x.innerText - 32) * 5 / 9
                         
           }  


  else if (getval1 === "Fahreheit" && setval1 == "Kelvin") {
    y.innerText = (x.innerText-32)*5/9+273.15
                         
            }



  else if (getval1 === "Celcius" && setval1 == "Fahreheit") {
    y.innerText = x.innerText * 1.8 + 32
                         
  }


  else if (getval1 === "Celcius" && setval1 == "Kelvin") {
    y.innerText = x.innerText+273.15
                         
  }


  else if (getval1 === "Kelvin" && setval1 == "Fahreheit") {
    y.innerText = (x.innerText-273.15)*(9/5)+32
                         
  }


  else if (getval1 === "Kelvin" && setval1 == "Celcius") {
    y.innerText = x.innerText-273.15
                         
  }  
   
     
            let z = /[a-z]/i
  if (z.test(y.innerText) === true) {
    alert("enter valid number")
  }

  
 
  }
   












