//1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

const elementQuantity = parseInt(prompt('Введіть кількість єлементів'));

let array = new Array(elementQuantity).fill(0,0)

console.log(array);

//2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const elementQuantitySecond = parseInt(prompt('Введіть кількість єлементів для другої задачі'));

let secondArray = new Array(elementQuantitySecond).fill(1,0,(elementQuantitySecond/2)).fill(7,(elementQuantitySecond/2));

console.log(secondArray);

//4.Дано масив елементів. Вивести на екран елементи, що більші за 100


let secondArrayNumbers = [100,250,54,48,25,11,1995,1998,15,88];

secondArrayNumbers.forEach(number => {
	if(number>100){
		document.write(`<ul> <li>${number}</li></ul>`);
	}
});

//5.Дано масив елементів. Знайти добуток додатних елементів

let secondNumbers = [100,250,-54,48,25,-11,1995,-1998,15,88];
let sum = 0;
secondNumbers.forEach(positiveNumbers => {
	
	if(positiveNumbers > 0)
	sum += positiveNumbers;
});
document.write(sum);

//6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

let elementsArray = [2,4,8,11,55,64,42,100];
let minE = elementsArray[0];
let newArr=[];
elementsArray.forEach((e,i,arr) => {
if(minE<e){
	e*=2
	newArr.push(e)
}
	
});
console.log(newArr);

//7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

let priceArray = [1000,1050,200,1890,30,90,22,2700,1860];

let newPriceArray =[];

function getPriceAction(arrNew, arrOld) {
	arrOld.forEach(e => {
		if(e > 1000) {
			e*= 0.3
			arrNew.push(e)
		}
	})
	return arrNew
}
console.log(getPriceAction(newPriceArray,priceArray));



//8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
let carNumbers = [ 'AN3456', 'RN345N', 'AS677467', 'GH21110', 'KJ44565', 'AF445',];
let newCarNumbersArray =[];
carNumbers.forEach(e => {
	if(e[0]==='A'){
		newCarNumbersArray.push(e)
	}
});

console.log(newCarNumbersArray);

//9. Дано масив імен. Сформувати масив з перших літер цих імен.

let namesStudents =[ 'Женя', 'Коля', 'Дмитро', 'Іван','Катя', 'Ксюша','Іван'];
let newNames = namesStudents.map((e) => e[0]);
console.log(newNames);

//10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

let pricesArray = [42,54,98,125,400,2000,525];
let pricesArrayNew = pricesArray.map((e) => (e*0.2).toFixed(1))

console.log(pricesArrayNew);