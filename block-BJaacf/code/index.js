// 1. Create an array named numbers and store 5 number values in it
    let numbers = [0,2,3,4,1];
// 2. Calculate the sum of array items and print it to the console using console.log()
   let sum=0; 
   for(number of numbers){
        sum=sum+number;
    }
    console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
    let avg=sum/numbers.length;
    console.log(avg);
// 4. Find the highest number in the array and print it to the console using console.log()
    let max= numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
        
    }
    console.log(max);
// 5. Find the lowest number in the array and print it to the console using console.log()
Math.min(...numbers);
let lowest= numbers[0];
for(number of numbers){

    if(number< lowest){
        lowest=number;
    }
}
console.log(lowest);

// 6. Find the even numbers in the array and print them to the console using console.log()

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
       console.log(numbers[i])
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2!==0){
       console.log(numbers[i])
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%5==0){
       console.log(numbers[i])
    }
}
// 9. Log all the element of the array one by one
for(let i=0; i<numbers.length; i++){
    
       console.log(numbers[i])
    
}
// 10. Find all the number in the array that is divisible by 3
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%3==0){
       console.log(numbers[i])
    }
}