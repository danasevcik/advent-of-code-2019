let arr = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0];

function getFirst(arr) {
  for (let i = 0; i < arr.length; i+=4) {
    let num = arr[i];
    if (num === 99) {
      return arr[0];
    } else if (num === 1) {
      let next = arr[i + 1];
      let nextNext = arr[i + 2];
      let index = arr[i + 3];
      arr[index] = arr[next] + arr[nextNext];
    } else if (num === 2) {
      let next = arr[i + 1];
      let nextNext = arr[i + 2];
      let index = arr[i + 3];
      arr[index] = arr[next] * arr[nextNext];
    }
  }
  return arr[0]
}

let arrCopy = [...arr];
let noun = arr[1];
let verb = arr[2];
const desiredOutput = 19690720;

function manipulateArr(op, next, nextNext, index) {
  let a = arrCopy[next];
  let b = arrCopy[nextNext];
  if (op === 1) {
    arrCopy[index] = a + b;
  } else if (op === 2) {
    arrCopy[index] = a * b;
  }
}

function testNumDirection() {
  for (let i = 0; i < arrCopy.length; i += 4) {
    if (arrCopy[i] === 99) {
      return arrCopy[0];
    }
    manipulateArr(arrCopy[i], arrCopy[i+1], arrCopy[i+2], arrCopy[i+3]);
  }
}

testNumDirection();

for (let i = 0; i < 100; i++) {
  noun = i;
  for (let j = 0; j < 100; j++) {
    verb = j;
    arrCopy = [...arr];
    arrCopy[1] = noun;
    arrCopy[2] = verb;

    let currentOutput = testNumDirection();

    if (currentOutput === desiredOutput) {
      console.log('noun and verb', noun);
      console.log('noun and verb', verb);
      return;
    }
  }
}

console.log(getFirst(arr));
