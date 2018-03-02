let fibonacci = (n) => {
  if(n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n -2);
}

let memoFibonacci = (n, memo = {}) => {

  if(memo[n]) {
    return memo[n];
  }
  if(n === 1 || n === 2) {
    return 1;
  }

  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n -2, memo);
}

let permanentMemoFibonacci = () => {
  let memo = {};
  let counter = 0;

  let fib = (n) => {
    if(memo[n]) {
      counter++;
      return memo[n];
    }
    if(n === 1 || n === 2) {
      return 1;
    }
    return memo[n] = fib(n - 1) + fib(n - 2);
  }

  return fib; 
}
let permFib = permanentMemoFibonacci();

let iterativeFibonacci = (n) => {
  let a = 1;
  let b = 1;
  let counter = 2;
  while(counter < n) {
    let temp = b;
    b = a;
    a = temp + a
    counter++;
  }

  return a;
}

for(let i = 1; i < 10; i++) {
  console.log(iterativeFibonacci(i));
}