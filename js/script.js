const inputs = document.querySelector(".inputs"),
      resetBtn = document.querySelector(".reset-btn"),
      hint = document.querySelector(".hint span"),
      guessLeft = document.querySelector(".guess-left span"),
      wrongLetter = document.querySelector(".wrong-letter span"),
      answerInput = document.querySelector(".answer-input");

let incorets = [];
let corets = [];
let words;
let maxGuesses;


const randomWord = () =>{
    let randObj = wordList[Math.floor(Math.random() * wordList.length)]

    // console.log(randObj);

    words = randObj.word;
    maxGuesses = 5;
    hint.textContent = randObj.hint
    guessLeft.textContent = maxGuesses;
    console.log(words)
    incorets = [];
    wrongLetter.textContent = incorets;
    corets = [];

    let html = "";
    for(let i = 0; i < words.length; i++ ){  
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;


    
};      
randomWord();


const initgame  = e =>{
    let key = e.target.value;
    // console.log(key);

    if(key.match(/^[A-Za-z]+$/) && !incorets.includes(key) && !corets.includes(key)){

        if(words.includes(key)){
           console.log("harf bulundu")

            for(let i = 0; i < words.length; i++){
                if(words[i] === key){
                    
                    corets.push(`${key}`)
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
            
        }
        else{
            
            console.log("harf bulunamadı");
            incorets.push(`${key}`);
            maxGuesses--;
            console.log(incorets);
            
        }
        guessLeft.textContent = maxGuesses;
        wrongLetter.textContent = incorets;
        
            
        
    }
    answerInput.value  = "";

    setTimeout(()=>{
        if(corets.length === words.length){
            alert(`Tebrikler tahmininiz doğru kelimeniz cevabınız : ${words.toUpperCase()}`);
            randomWord();
        }
        if(maxGuesses < 1){
            alert("oyun bitti tahmin hakkınız kalmadı");
            for( let i = 0; i < words.length; i++){
                inputs.querySelectorAll("input")[i].value = words[i];
            }
        }
    } ,200)
    

    
};



resetBtn.addEventListener("click" , randomWord);
answerInput.addEventListener("input" , initgame);
document.addEventListener("keydown", () => answerInput.focus());



      
