// que se sume el numero actual con el numero anterior

function fibonacci(n){
    var fiboArray = [0,1]
    for(let i = 2; i < n; i++){
        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2]
    }
    return fiboArray
}
console.log(fibonacci(10))