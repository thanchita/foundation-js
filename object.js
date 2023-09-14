/* const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Rabbit",
    age: 2,
  },
};

const keyName = "name";

console.log("Name:", person.name); // Access using dot notation
//console.log("Name:", person["name"]); // Access using bracket notation
console.log("Name:", person[keyName]);
console.log("Name:", person.keyName);

// Review Reference Type
const person2 = person;
person2.name = "Men";
console.log("person 1:", person);
console.log("person 2:", person2); */

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

/*data.forEach((item, idx) => {
  console.log("----------");
  console.log(`Person ${idx + 1}`);
  console.log(`Name: ${item.name}`);
  console.log(`Age: ${item.age}`);
  console.log(`Job: ${item.job}`);
});

data.forEach(({ name, age, job }, idx) => {
  console.log(`Person ${idx + 1}`);
  console.log("Name:", name);
  console.log(`Age: ${age}`);
  console.log("Job:", job);
  console.log("----------");
}); */

data.forEach((item, idx) => {
  console.log(
    `Person ${idx + 1} \n Name: ${item.name} \n Age: ${item.age} \n Job: ${
      item.job
    }`
  );
});

data.forEach((person, idx) => {
  console.log("Person", idx + 1);
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Job:", person.job);
  console.log("----------");
});
