//--------------------------------------------------
//QUESTIONS
//WHEN I answer a question
//THEN I am presented with another question
//--------------------------------------------------

// QUESTIONS OBJECT //
var arrQuestions = [

    {
        question:"What are the two types of scope JavaScript uses?",
        choices: ["Global and Local","Surrounding and Inner","Outside and Inside","Abroad and Local"],
        answer: "Global and Local"
    },
    {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        choices: [1, 0, 3, 2],
        answer: 0
    },
    {
        question:"How do we declare a conditional statement in JavaScript?",
        choices:["for loop","while loop", "if...else","difference...between"],
        answer: "for loop"
    },
    {
        question:"What operator is used to assign a value to a declared variable?",
        choices: ["Equal sign (=)", "Colon (:)" , "Double-equal (==)", "Question mark (?)"],
        answer: "Colon (:)"
    },
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        choices: ["Inside the link element", "In the footer element", "Inside the script element", "Inside the head element"],
        answer: "Inside the script element"
    }
]

//--------------------------------------------------
//START PAGE - START BUTTON
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//--------------------------------------------------

var timerEl = document.getElementById('countdown');
var startButton = document.getElementById('start-button');
let introDiv = document.getElementById('introduction');
let mainClass = document.getElementsByClassName('main-screen');
let timeLeft = 100;

function startTimer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;

        } else if (timeLeft === 1) {
            timerEl.textContent = 'Times UP!';
            
            clearInterval(timeInterval);

          displayMessage();
        }   
}, 1000);

}

let questionNumber = 0 
let score = 0

function displayQuestions() {
    introDiv.className="hide"
    let questDiv = document.createElement("div");
    questDiv.setAttribute("id","questions");
    let h2El = document.createElement("h2");
    h2El.setAttribute("id","question");
    h2El.innerHTML = arrQuestions[questionNumber].question
    let ulEl = document.createElement("ul");
    ulEl.setAttribute("id","choices");
    
    
    for (let i = 0; i < arrQuestions[questionNumber].choices.length; i++) {
       // console.log(arrQuestions[questionNumber].choices[i])
        let liEl = document.createElement("li");
        let btnEl = document.createElement("button");
        btnEl.innerHTML = arrQuestions[questionNumber].choices[i];
        btnEl.addEventListener("click", function(event){
            event.preventDefault();
            
            if (event.target.innerHTML==arrQuestions[questionNumber].answer) {
               // event.target.style.backgroundColor="green"
                score += 10
                questionNumber++;
                mainClass[0].innerHTML="";
                displayQuestions()   
                console.log("You have just answered the question correct, your new score is: " + score)
               
            } else {
                //event.target.style.backgroundColor="red"
                timeLeft -= 15;
                questionNumber++;
                mainClass[0].innerHTML="";
                displayQuestions()   
                console.log("You have just answered the question incorrect, your score is: " + score )
                
            } 
                return finQuiz 
        })
        liEl.append(btnEl)
        ulEl.append(liEl)

    } 

    function finQuiz() {
        finDiv.className="hide"
        let finDiv = document.createElement("div");
        finDiv.setAttribute("id","fin-quiz");
        let h2El = document.createElement("h2");
        h2El.innerHTML = textContent("All done!")
      //  let spanEl = document.createElement("input");
      //  ulEl.setAttribute("id","choices");
       // let inputEl = document.createElement("input");
       // ulEl.setAttribute("id","choices");
    }


  //  let nextbtn = document.createElement("button")
   // nextbtn.innerHTML="nextQuestion";
   // nextbtn.style.backgroundColor="yellow";
   // nextbtn.style.color="red"
   // nextbtn.addEventListener("click", function(){
     //   questionNumber++;
       // mainClass[0].innerHTML="";
//displayQuestions()
  //  }
  questDiv.append(h2El, ulEl);
   // console.log(questDiv);
 //  console.log(mainClass);
    mainClass[0].append(questDiv);



    
}

function startQuiz() {
    startTimer();
    displayQuestions()
}
startButton.addEventListener("click", startQuiz)


 /* 
var firstScreen = document.getElementById('introduction');
var secondScreen = document.getElementById('questions');
var thirdScreen = document.getElementById('fin-quiz-page');


function startQuiz() { 
    if (firstScreen === 'show') {
["secondScreen","thirdScreen"] = 'hide'
    
}
}



//--------------------------------------------------
//TIMER 
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//--------------------------------------------------


//--------------------------------------------------
//QUESTIONS
//WHEN I answer a question
//THEN I am presented with another question
//--------------------------------------------------

/* 
    */

//--------------------------------------------------
//GAME OVER PAGE
//WHEN the game is over
//THEN I can save my initials and score
//--------------------------------------------------



