const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  arr.map((item) => {
    return item * item;
  })
);
const names = ["alice", "bob", "charlie", "danielle"];

const capName = names.map((namesToBecapitalized) => {
  return (
    namesToBecapitalized.slice(0, 1).toUpperCase() +
    namesToBecapitalized.slice(1)
  );
});
console.log(capName);

const topics = ["Bulbasaur", "Charmander", "Squirtle"];

var result2 = topics.map((arg1) => {
  return `<p>${arg1}</p>`;
});
console.log(result2);
