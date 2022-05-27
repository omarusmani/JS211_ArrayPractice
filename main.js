let cars=["Ford","Chevy","Mazda","Kia"]
console.log(cars.length)
let moreCars=["BMW","Audi","Mercedes","Honda"]
let totalCars=cars.concat(moreCars)
console.log(totalCars)
console.log(cars.indexOf("Honda"))
console.log(cars.lastIndexOf("Ford"))
let stringOfCars=totalCars.join()
console.log(stringOfCars)
let carFromStrings=stringOfCars.split()
console.log(carFromStrings)
let carsInReverse=totalCars.reverse()
console.log(carsInReverse)
carsInReverse.sort()
console.log(carsInReverse.indexOf("Audi"))
const pets=['dog','cat','fish','rabbit','snake','lizard','bird']
const reptiles=pets.slice(4,6)
console.log(reptiles)
console.log(pets)
//slice creates a new array
const removedReptiles=pets.splice(4,2,"hamster")
console.log(removedReptiles)
console.log(pets)
let removedPet=pets.pop()
console.log(pets)
console.log(removedPet)
pets.push(removedPet)
console.log(pets)
removedPet=pets.shift()
console.log(removedPet)
console.log(pets)
pets.unshift("turtle")
console.log(pets)
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(addTwo)
function addTwo(num,index,arr){
    return arr[index]=arr[index]+2;
}
console.log(numbers)

