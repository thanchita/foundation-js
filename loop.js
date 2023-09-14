function normalloop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}
//normalloop();

function reverseloop() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}
//reverseloop();

function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];
  for (let i = 0; i < tripLocation.length; i++) {
    //  console.log(tripLocation[i]);
  }
  // Reverse Loop through array
  for (let i = tripLocation.length - 1; i >= 0; i--) {
    //  console.log(tripLocation[i]);
  }
  // Break keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      break;
    }
    console.log(tripLocation[i]);
  }
  // Continue keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      continue;
    }
    console.log(tripLocation[i]);
  }
}
//loopThroughArray();

function whileloop() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  let count = 1;
  while (count < 100) {
    count = count + 2;
  }
  console.log(count);
}
//whileloop();

function nestedLoop() {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
    for (let j = 0; j < 3; j++) {
      console.log("j", j);
    }
  }
}
//nestedLoop();

function number() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
}
number();

function oddEven() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "is even");
    } else {
      console.log(i, "is odd");
    }
  }
}
number();

// Using While loop
let i = 0;
while (i <= 15) {
  if (i % 2 === 0) {
    console.log(i, "is even");
    i++;
  } else {
    console.log(i, "is odd");
    i++;
  }
}
number();
