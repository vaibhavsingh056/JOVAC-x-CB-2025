// Homework: Array of 20 People and Functional Operations using map, filter, reduce

const users = [
    { fname: "Mohit", lname: "Sharma", age: 22, pay: 40000 },
    { fname: "Aman", lname: "Verma", age: 25, pay: 45000 },
    { fname: "Rahul", lname: "Gupta", age: 30, pay: 50000 },
    { fname: "Neha", lname: "Singh", age: 28, pay: 47000 },
    { fname: "Simran", lname: "Kaur", age: 26, pay: 43000 },
    { fname: "Pooja", lname: "Mishra", age: 24, pay: 41000 },
    { fname: "Ankit", lname: "Chopra", age: 29, pay: 46000 },
    { fname: "Rohit", lname: "Yadav", age: 31, pay: 52000 },
    { fname: "Deepak", lname: "Rajput", age: 27, pay: 44000 },
    { fname: "Meena", lname: "Devi", age: 23, pay: 39000 },
    { fname: "Sneha", lname: "Patel", age: 25, pay: 45000 },
    { fname: "Jatin", lname: "Mehra", age: 32, pay: 55000 },
    { fname: "Komal", lname: "Kapoor", age: 29, pay: 47000 },
    { fname: "Varun", lname: "Seth", age: 33, pay: 53000 },
    { fname: "Nidhi", lname: "Agarwal", age: 26, pay: 42000 },
    { fname: "Tarun", lname: "Kumar", age: 28, pay: 46000 },
    { fname: "Rajesh", lname: "Malhotra", age: 35, pay: 60000 },
    { fname: "Kavita", lname: "Bhardwaj", age: 30, pay: 49000 },
    { fname: "Yash", lname: "Arora", age: 24, pay: 41000 },
    { fname: "Preeti", lname: "Shah", age: 27, pay: 44000 }
];



// 1. Average age
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
const averageAge = totalAge / users.length;
console.log("Average Age:", averageAge.toFixed(2));

// 2. People with age > 25
const seniorUsers = users.filter(u => u.age > 25);
console.log("Experienced Users (Age > 25):", seniorUsers);

// 3. Just names of experienced people
const seniorNames = users
    .filter(u => u.age > 25)
    .map(u => u.fname);
console.log("Experienced Names:", seniorNames);

// 4. Total salary
const totalPay = users.reduce((acc, u) => acc + u.pay, 0);
console.log("Total Salary:", totalPay);

