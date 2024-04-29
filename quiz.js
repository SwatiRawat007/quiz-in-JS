const quiz=[
    {
        title:"Quiz Application Using Javascript",
        question:"Javascript is an__language ",
        option_a:"Object-oriented",
        option_b:"Object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"Object-oriented",
    },
    {
        title:"Quiz Application Using Javascript",
        question:"Which of the following are not server-side Javascript ",
        option_a:"File-Upload",
        option_b:"Date",
        option_c:"Function",
        option_d:"All of the above",
        answer:"All of the above",
    },
    {
        title:"Quiz Application Using Javascript",
        question:"What keyword is used to declare an asynchronous function in Javascript ",
        option_a:"async",
        option_b:"await",
        option_c:"set timeout",
        option_d:"None of the above",
        answer:"async",
    },
    {
        title:"Quiz Application Using Javascript",
        question:"How can a datatype be declared to be a constant type? ",
        option_a:"const",
        option_b:"var",
        option_c:"let",
        option_d:"constant",
        answer:"const",
    },
    {
        title:"Quiz Application Using Javascript",
        questiom:"What keyword is used to check whether a given property is valid or not ",
        option_a:"in",
        option_b:"is in",
        option_c:"exists",
        option_d:"lies",
        answer:"in",
    },
]

const question= document.querySelector(".Question");
console.log(question);
console.log(question.textContent);

const paraques= document.querySelector(".para-ques");
console.log(paraques);
console.log(paraques.textContent);

const option_a= document.querySelector("#text-option-a");
console.log(option_a);
console.log(option_a.textContent);

const option_b= document.querySelector("#text-option-b");
console.log(option_b);
console.log(option_b.textContent);

const option_c= document.querySelector("#text-option-c");
console.log(option_c);
console.log(option_c.textContent);

const option_d= document.querySelector("#text-option-d");
console.log(option_d);
console.log(option_d.textContent);

const answer= document.querySelector(".answer");

const btn= document.querySelector(".btn");

let currentQues=0;
let score=0;

console.log(quiz[currentQues].title);
console.log(quiz[currentQues].question);
console.log(quiz[currentQues].option_a);
console.log(quiz[currentQues].option_b);
console.log(quiz[currentQues].option_c);
console.log(quiz[currentQues].option_d);
// console.log(quiz[currentQues].answer);

question.textContent=quiz[currentQues].title;
paraques.textContent=quiz[currentQues].question;
option_a.textContent=quiz[currentQues].option_a;
option_b.textContent=quiz[currentQues].option_b;
option_c.textContent=quiz[currentQues].option_c;
option_d.textContent=quiz[currentQues].option_d;


btn.addEventListener("click",()=>{
    let checkAns= document.querySelector('input[type="radio"]:checked');
    console.log(checkAns);

    if(checkAns==null){
        alert("please select an option");
    }else{
        if(checkAns.nextElementSibling.textContent==quiz[currentQues].answer){
            score++;
        }
    }
        currentQues++;
        if(currentQues<quiz.length){
            question.textContent=quiz[currentQues].title;
      paraques.textContent=quiz[currentQues].question;
      option_a.textContent=quiz[currentQues].option_a;
      option_b.textContent=quiz[currentQues].option_b;
      option_c.textContent=quiz[currentQues].option_c;
      option_d.textContent=quiz[currentQues].option_d;

        
    }else{
        alert("your score" +score );
        location.reload();
    }

})







