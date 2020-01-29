const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];


document.getElementById("button").addEventListener("click", () => {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    image1.setAttribute("src", "images/dice" + num1 + ".png");
    image2.setAttribute("src", "images/dice" + num2 + ".png");
    if (num1 > num2){
        document.querySelector("h1").innerHTML = "Player 1 Win!!";
    }
    else if (num2 > num1){
        document.querySelector("h1").innerHTML = "Player 2 Win!!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!!";
    }
});

