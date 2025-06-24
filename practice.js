
//const arr =[8,6,4,2,5]

//    // SUM OF ARRAY BY LOOP

// let ans =0;

// for (let i =0;i<arr.length;i++){
//     ans+=arr[i];
// }

// console.log(ans);


//     SUM OF ARRAY BY USING FUNCTION

// function sumOfArr(arr){
//     let sum =0;
//     for (let i =0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(sumOfArr(arr));

// REDUCE SYNTAX

// const arr =[8,6,4,2,5]

// const output = arr.reduce(function(acc,curr){
//     acc = acc+curr;
//     return acc;
// },0)

// console.log(output);


// const output1 = arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)

// console.log(output1);


// =============================================================================

// // PROMISE CREATE AND CALLING

// const Assignment1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("I am Udit ! My Work is complete !!!");
//     },5000);
// });

// function Task1(){
//     const Docs1 = Assignment1;
//     console.log("DATA", Assignment1);
//     console.log("BYE")
// }

// Task1();

// // ANOTHER EXAMPLE WITHOUT PROMISE


// const Assignment2 = function(){
//     setTimeout(()=>{
//         console.log("MY WORK DONE");
//         return "BY"
//     },5000)
    
// }

// function Task1(){
//     const data = Assignment1;
//     console.log("DATA",data);

// }

// Task1();

// =============================================================================


// ASYNC AWAIT EXAMPLE

// console.log("CLASS STARTED");

// const projectSubmissionByYateesh = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("I STARTED WORK")
//         resolve("I am Udit ! My Work is Done !!!");
//     },5000);
// });

// console.log("Lunch Time");

// async function projectEvaluation(){
//     console.log("ATTENDANCE");
//     const projectFile = await projectSubmissionByYateesh;
//     console.log("DATA", projectFile);
//     console.log("Project File Check");
// }

// projectEvaluation();

// console.log("Class End!!")

//==============================================================================


// console.log("Class Start");

// const projectSubmissionByYateesh = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // console.log("I have Completed the Project");
//         resolve("WORK DONE BY YATEESH");
//     },5000)
// });

//  function projectEvaluation(){
//     const fileOfYateesh = projectSubmissionByYateesh;
//     console.log("FILE RECEIVED AND CHECKED!!!", fileOfYateesh);
//     console.log("Class End")
// }

// projectEvaluation();

// console.log("I AM OUTSIDE ASYNC FUNCTION, WHICH WILL BE NOT AFFECTED BY ANY ASYNC FUNCTION");


//==============================================================================

//call()


// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student1 = {name: "Udit Kumar Saraswat"}
// const student2 = {name: "Vaibhav singh"}


// admissionProcess.call(student1,"Hello, ", " Your Fees: 2.5 Lacs");
// admissionProcess.call(student2,"Hello, ", " Your Fees: 3 Lacs");


// apply()


// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student1 = {name: "Prashant"}
// const student2 = {name: "Abhay"}


// admissionProcess.apply(student1,["Hello, ", " Your Fees: 2 Lacs"]);
// admissionProcess.apply(student2,["Hello, ", " Your Fees: 5 Lacs"]);



// // bind()

// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student1 = {name: "Shiva"}
// const student2 = {name: "Sagar"}

// const studentData1 = admissionProcess.bind(student1,"Hello, ", " Your Fees: 2 Lacs");
// const studentData2 = admissionProcess.bind(student2,"Hello, ", " Your Fees: 5 Lacs");

// studentData1();
// studentData2();


// //==============================================================================

// //CURRYING IN JS

// //NORMAL APPROACH

// function sumOfAll(a,b,c){
//     return a+b+c;
// }

// console.log(sumOfAll(10,20,30));

// // CURRYING APPPROACH

// function firstNumber(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// console.log(firstNumber(5,10,20))//function(anonymous)
// //console.log(firstNumber(10(20(30)))) here 10 or 20 is not a function

// console.log(firstNumber(5)(10)(20));

// const answer = firstNumber(5)
// const answer2 = answer(20)

// console.log(answer2(30))


// // Subway Order

function chooseBread(bread){
    return function(patty){
        return function (cheese){
            return `Your Bread: ${bread}, Your Patty: ${patty}, " Cheese: ${cheese}`;
        }
    }
}

console.log(chooseBread("Garlic")("Rosted Paneer")("With Cheese"));

