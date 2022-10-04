//--------------------------------------------------
//QUESTIONS
//--------------------------------------------------

var arrQuestions = [

    {
        question:"What are the two types of scope JavaScript uses?",
        choices: ["Global and Local","Surrounding and Inner","Outside and Inside","Abroad and Local"],
        answer: "Global and Local"
    },
    {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        choices: [1, 0, 3, 2],
        answer: 1
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
//START PAGE
//START BUTTON
//TIMER
//QUESTIONS
//--------------------------------------------------

var timerEl = document.getElementById('countdown');
var startButton = document.getElementById('start-button');
let introDiv = document.getElementById('introduction');
let mainClass = document.getElementsByClassName('main-screen');
let timeLeft = 60;
//60 second countdown timer
function startTimer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft;

        } else if (timeLeft === 1 ) {
            timerEl.textContent = 'Times UP!';
        
            clearInterval(timeInterval);
            finQuiz()
        }
}, 1000);

}

//The questions dynamic page
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
       let liEl = document.createElement("li");
        let btnEl = document.createElement("button");
        btnEl.innerHTML = arrQuestions[questionNumber].choices[i];
        btnEl.addEventListener("click", function(event){
            event.preventDefault();
            
            if (event.target.innerHTML==arrQuestions[questionNumber].answer) {
               // event.target.style.backgroundColor="green"
                score += 20
                questionNumber++;
                mainClass[0].innerHTML="";
                displayQuestions()   
                console.log("You have just answered the question correct, your new score is: " + score)
                localStorage.setItem("count", score);
               
            } else {
                //event.target.style.backgroundColor="red"
                score -= 5;
                timeLeft -= 15;
                questionNumber++;
                mainClass[0].innerHTML="";
                displayQuestions()   
                console.log("You have just answered the question incorrect, your score is: " + score )
                
            } return finQuiz
             
     

          })
        mainClass[0].append(questDiv);  
        questDiv.append(h2El, ulEl);
        ulEl.append(liEl)
        liEl.append(btnEl)
          

   

    
}}




    function add_local(){
        window.localStorage['display'] = document.getElementById('firstname').value;
        window.localStorage['display']= document.getElementById('age').value;
        window.localStorage['display']= document.getElementById('course').value;
      }



function startQuiz() {
    console.log("You have started the Code Quiz");
    startTimer();
    displayQuestions();
}
     
startButton.addEventListener("click", startQuiz)
btnEl.innerHTML = localStorage.setItem ("score", score);


function finQuiz() {
    
    let finDiv = document.createElement("div");
    finDiv.setAttribute("id","fin-quiz");
    //finDiv.className="hide"
    let h2El = document.createElement("h2");
    h2El.innerHTML = textContent("All done!")
    let spanEl = document.createElement("span");
    spanEl.setAttribute("id","final-score");
    spanEl.innerHTML = textContent("Your final score is: " + score)
    let inputEl = document.createElement("input");
    inputEl.setAttribute("id","initials");
    inputEl.innerHTML = textContent("Enter your initials: " )
    let btnEl = document.createElement("button");
    btnEl.setAttribute("id","submit");
    btnEl.innerHTML = textContent("Submit" );
    mainClass[0].append(finDiv);
    finDiv.append(h2El, spanEl, inputEl, btnEl);

   
    btnEl.submit.addEventListener("click", function(event){
        event.preventDefault();})
        document.getElementById("final-score").innerHTML = count;
    
        if (timeLeft >= 0) {
            var timeRemaining =timeLeft;
            var pEl =document.createElement("p");
            clearInterval(holdInterval);
            pEl.textContent = "your final score: " + timeRemaining;
            questDiv.appendChild(pEl)
        }
    } 