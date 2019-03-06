// call all buttons
// insert text to input depending on the button clicked
// save that input
// make math operators function
// make AC button clear all
// display result once equal is clicked

var numButt = document.getElementsByTagName('button')
var actButt = document.getElementsByClassName('action')
var functButt = document.getElementsByClassName('function')
var count = 0
var num1 = []


function callButt() {
    var outPut = document.getElementById('output')
    for (i = 0; i < numButt.length; i++) {
        numButt[i].addEventListener('click', function() {
            outPut.innerHTML = this.innerHTML
            num1.push(this.innerText)
            outPut.innerHTML = num1.join('')
            if (this.innerHTML == 'AC') {
                outPut.innerHTML = ''
                num1 = []
            } else if (this.innerHTML == '=') {
                num1.pop()
                num1 = num1.join('')
                test = eval(num1) 
                outPut.innerHTML = test
                setTimeout(function(){
                    window.location.reload(1);
                 }, 3000)
            }
        })
    }
}

function operateButt(text) {

}



callButt()
