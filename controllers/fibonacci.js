/*
* GET | List all Items
*/
export function fib(req, h) {
  let fibnum = 20;
  let resFibNum;

  resFibNum = fibonacci(fibnum);
  console.log(`${fibnum}th Fibonacci number is: ${resFibNum}`);
  return { msg: `${fibnum}th Fibonacci number is: ${resFibNum}` };

  // function for calculating fibonacci number recursively
  function fibonacci(n) {
    if (n < 2) return 1;
    else return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
