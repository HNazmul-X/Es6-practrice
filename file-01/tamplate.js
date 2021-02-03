function stopWatch(){
    var count = 0;
    return function(){
        return count++;

    }
}

const clock1 = stopWatch();
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = stopWatch()
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())