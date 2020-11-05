let cars = ['Ford', 'Toyota', 'Honda', 'Mercedes'];
let moreCars = ['Mitsubishi', 'Nissan', 'Audi', 'Honda'];


//.length()
console.log(cars.length);

// .concat()
let totalCars = cars.concat(moreCars);

//.indexOf() / lastIndexOf()
console.log(cars.indexOf('Honda'));
console.log(cars.lastIndexOf('Ford'));

//.join()
let stringOfCars = totalCars.join();
console.log(stringOfCars);

//.split()
totalCars = stringOfCars.split();

//.reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//.sort()
console.log(carsInReverse.sort());
// alert(carsInReverse.indexOf('Audi'));

//.slice()
let removedCars = carsInReverse.slice(0, 2, 7)
console.log(removedCars);

//.splice()
console.log(carsInReverse.splice(2, 3, 'Ford', 'Honda'));

//.push()
console.log(carsInReverse.push('Honda', 'Mercedes'));

//.pop()
console.log(carsInReverse.pop());

//.shift()
console.log(carsInReverse.shift());

//.unshift()
carsInReverse.unshift('BMW');
console.log(carsInReverse);

//forEach()
let numbers = [23, 45, 0, 2]
const plusTwo = (item, index, arr) => {
    arr[index] = item + 2
}
numbers.forEach(plusTwo)
console.log(numberArray);