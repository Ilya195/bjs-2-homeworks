"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let D = Math.pow(b, 2)-(4*a*c);
    if(D < 0) {
        arr = [];
    } if(D === 0) {
        arr = [(-b + Math.sqrt(D)) / (2 * a)];
    } else if(D > 0) {
        arr[0] = ((-b + Math.sqrt(D)) / (2 * a));
        arr[1] = ((-b - Math.sqrt(D)) / (2 * a));
        //arr.push(arr[0],arr[1]);
    }
    console.log(arr);
    return arr;
    solveEquation(1,2,4);
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let per = parseInt(percent) / 100 / 12; //процентная ставка
    let con = parseInt(contribution); 	  //начальный взнос	
    let am = parseInt(amount);  			  //общая стоимость	
  	if (isNaN(per) || per < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
   	} else if (isNaN(con) || con < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
   	} else if (isNaN(am) || am < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
   	} else {
			
  		let today = new Date();
  		if (today.getFullYear() > date.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = am - con;	//тело кредита
  			let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear())); //срок кредита в месяцах
  			let pay = s*(per+per/(((1+per)**n)-1));	//ежемесячная оплата
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(totalAmount);
 			return +totalAmount;
 		}	
    }
    return +totalAmount;
  }	 
