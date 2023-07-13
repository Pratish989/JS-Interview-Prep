// q1 filter the numbers which are divisible by 10

let arr = [323,43,54,90,890,45,9030,10]

let a = arr.filter((x)=>{
    return x%10 == 0
})

// console.log(a);


// q2 create an array of sqaure of given numbers

let b = arr.map((x)=>{
    return x*x;
})

// console.log(b)


//q3 use reduce to calculate factorial of given number from an array of first n natural number 

let array = [1,2,3,4,5]
let c = array.reduce((x1,x2)=>{
    return x1*x2;
})

console.log(c)