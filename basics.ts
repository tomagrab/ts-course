function add(n1: number, n2: number, print: boolean) {
  const result = n1 + n2;
  if (print) {
    console.log(n1 + " + " + n2 + " = " + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(10, 3, true);
