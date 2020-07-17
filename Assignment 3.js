//feetToMile

function feetToMile(feet){
    if (feet <= 0){
        return "Distance can not be negative!"
    } else {
        let mile = feet / 5280;
        return mile;
    }
}
var resultMile = feetToMile(12000).toFixed(2);
console.log(resultMile);


//woodCalculator

function woodCalculator(numChair, numTable, numBed){
    let woodChair = numChair * 1;
    let woodTable = numTable * 3;
    let woodBed = numBed * 5;
    let total = woodChair + woodTable + woodBed;
    return total;
};
let result = woodCalculator(10, 50, 70);
console.log(result);


//brickcalculator

function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Something is wrong!";
    }
};
let result1 = brickCalculator(12);
console.log(result1);
let result2 = brickCalculator(26);
console.log(result2);
let result3 = brickCalculator(35);
console.log(result3);
let result4 = brickCalculator(-4);
console.log(result4);


//tinyFriend
function tinyFriend(friend){
    let singleFriend =friend[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < singleFriend){
            singleFriend = element ;
        }
    }
    return singleFriend;
}