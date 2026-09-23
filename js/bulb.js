// to select html elements in javascript we use the document object model 
// (DOM)
// when using document check the console browser 
let myImage = document.getElementById("mybulb")
console.log(myImage)

function turnOnLights(){
    // used js to manipulate a html attribute
    myImage.src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

function turnOffLights(){
    // used js to manipulate a html attribute
    myImage.src = "https://www.w3schools.com/js/pic_bulboff.gif"
}