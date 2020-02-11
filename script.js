let list = [1, 2, 3, 4, 5];

console.log(list[0]);
console.log(list[4]);
//you had to pass through the numbers that come before the selected number in the list as the program needs to through the index to get to the selected number

let i = 0;
while (i < list.length) {
  console.log(list[i]);

  i++;
}
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
console.log(list);

list.pop(10);
list.pop(9);
list.pop(8);
console.log(list);

let myString = "I actually did it on my own, holy crap!"
console.log(myString.length);