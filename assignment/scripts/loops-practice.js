console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}
//Answer - You have to change the numeric value after i< to indicate where the loop will end.
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}
//Answer - The numeric value after i= is the one that determines the beginning of the loop.
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
for (let i=2; i < 12; i += 2) {
  console.log(i);
}
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
//Answer - Changed i++ to i += 2 to make the loop increase by even increments. Also made i<12 so the console log would also show 10 because the loop ends at 10 and wouldn't show if i<10.
// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i > -1; i--){
  console.log(i);
}


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for(star of stars) {
  console.log (star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0;
let z = "";

while(stars[i]){
  z += stars[i];
  console.log(stars[i]);
  i++;
}
// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let index = 0;
const max = 6;
while( index < max){
  console.log(index);
  index++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
var b = 10;

while(b > 4) {
  console.log(b);
  b--;
}