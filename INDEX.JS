function isEligibleForDiscount(age, isStudent) {  
    if (age>18 && age <60) {return true 

    } else {return false}
    
}

function  canLogin(username, password, isAdmin) {
    if (username==="admin" && password==="12345",isAdmin) { return "Access granted for admin"}
        else if (username!=="admin" && password==="12345") { return "Access granted for user" }
 else{return "Access denied"}   
}
function  checkGuess(number, guess) {
    if (guess>number) { return "Too high!"}
        else if (guess<number) { return "Too low!"}
            else { return  "Correct!"
            }
}
function getTemperatureFeedback(temp) {
    if (temp===0) {return  "It's freezing!"}
else if (temp>0 && temp<15) { return  "It's cold!"}
 else if (temp>16 && temp<25) { return  "It's comfortable!"}
 else   { return "It's hot!"}

}


