document.getElementById("themeSlider").addEventListener("input", (e) => {
    const theme = parseInt(e.target.value);
    if(theme === 0){
        document.body.classList.add(`dark`);
        document.body.classList.remove(`light`);
    }
    else if(theme === 1){
        document.body.classList.remove(`dark`);
        document.body.classList.add(`light`);
    }
    }
);

document.getElementById("calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value)/39.37;
    const result = document.getElementById("result");
    if(weight && height){
        const bmi = weight / (height ** 2);
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}

}
)

const clock = document.getElementById("digitalClock");
setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

document.getElementById("check").addEventListener("click", (e) => {
    const number = parseInt(document.getElementById("guess").value);
    if(number && number > 0 && number < 11){
        const random = Math.floor(Math.random() * 10) + 1;
        console.log(random);
        if(number === random){
            document.getElementById("message").innerHTML = "You guessed correctly!";
            number.value = "";
        }
        else{
            document.getElementById("message").innerHTML= `You guessed incorrectly. The correct number was ${random}`;
            number.value = "";
        }
    }else {
        document.getElementById("message").textContent= "Please enter a number between 1 and 10" ;
    }
}
)
