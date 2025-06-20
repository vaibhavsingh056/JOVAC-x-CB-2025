let a = {
    name: "Vaibhav"
  };
  console.log(a);
  a = null; 
  console.log(a);
  

function sum(a,b){
  return a+b;
}

function mul(a,b){
  return a*b;
}

function sub(a,b){
  return a-b;
}

function divide(a,b){
  return a/b;
}

function square(a){
  return a*a;
}

//HIGHER ORDER FUNCTION

function cal(operation,a,b){
  return operation(a,b);
}
console.log(cal(sum,20,23));
console.log(cal(sub,7,23));
console.log(cal(mul,2,23));
console.log(cal(divide,46,23));
console.log(cal(square,15));


function print_tabel(a){
  for(let i=1;i<=10;i++){
      console.log(a +"*"+i+"="+a*i);
  }
}

function cube(a){
  return a*a*a;
}

function even_odd(a){
  if(a%2==0) return "Even";
  else return "Odd";
}

function helper(operation,a){
  return operation(a);
}

helper(print_tabel , 2);
console.log(cube(4));
console.log(even_odd(5));
console.log(even_odd(6));