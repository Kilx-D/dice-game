let randomNumber1 = 0;
const images = document.getElementsByTagName("img");
scores = [];


function ranGen(){
    randomNumber1 = Math.floor(Math.random() * 6 + 1);
}


for(let num = 0; num <= images.length - 1; num++){
    
    
    ranGen();
    scores.push(randomNumber1);
    images[num].setAttribute("src", `images/dice${randomNumber1}.png`);
}

const title = document.querySelector("div h1");
console.log(title, typeof title);

if(scores[0] > scores[1]){
    title.innerHTML = "🚩Player 1 wins!";
} else if(scores[1] > scores[0]){
    title.innerHTML = "Player 2 wins!🚩";
} else if(scores[1] == scores[0]){
    title.innerHTML = "Draw!";
}

