/* const callMe = () => {
  console.log("hello from callback function");
};

const greeting = (callback) => {
  console.log("hello world");
  callback();
};

greeting(callMe);

greeting(function () {
  console.log("Men from annonymous function");
});

greeting(() => {
  console.log("Men from annonymous arrow function");
}); */

/* Annonymous Function
function() {
    console.log("Men")
}
() => {
    console.log("Men")
} */

/* const test = () => {
  console.log("hello from callback function");
};

const test1 = (callback1) => {
  console.log("hello");
  callback1();
};

test1(test);

test1(function () {
  console.log("Men from annonymous function");
});

const b = () => {
  console.log("hello hello");
};
test1(b); */

// Callback function with parameter
/* const greeting2 = (callback) => {
  console.log("hello world");
  callback("P");
};

greeting2((name) => {
  console.log(`hello from ${name}`);
}); */

/* const originalArr = [1, 2, 3, 4];

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

loopThroughArrayV2(originalArr, (item) => {
  console.log(item);
});

const mapArray = (arr, cb) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }

  return result;
};

const newArr = mapArray(originalArr, (item) => {
  return item * 2;
});

console.log(newArr); */

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }
  return result;
}
const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item >= 0;
});
console.log(afterFilter);
