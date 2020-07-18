// Length converter -- feetToMile

function feetToMile(feet){
    // as we know that 1 feet = 0.000189394 mile.So multiplying the input feet with mile(0.000189394) will help to get the result.
    var mile = feet * 0.000189394;
    return mile;
}

// now taking another variable for store the result.
// here 10000 is inputed data

var result = feetToMile(10000);

// Showing output
console.log("your result is",result,"miles.");













// woodCalcultor

// Builing a function for three parameter.
function woodCalcultor(chair,table,bed){
    // We need 1 cubic feet wood to made a chair.So multiplying the input value with 1(one) will help to get the result.
    var woodForChair = chair * 1;
    // We need 3 cubic feet wood to made a table.So multiplying the input value with 3(three) will help to get the result.
    var woodForTable = table * 3;
    // We need 5 cubic feet wood to made a bed.So multiplying the input value with 5(five) will help to get the result.
    var woodForBed = bed * 5;

    //  Adding all the results will give exact wood quantity.
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

// Taking parameters
var total = woodCalcultor(25,30,15);
// result
console.log("Altogether you need",total,"cubic feet of woods.");















// Bricks Calculator

function brickCalculator(floors){

    while(floors <= 10){
        var firstFloorBricks = (floors * 15) * 1000;
        return firstFloorBricks;

    }
    
    while(floors > 10 & floors <= 20){
        // first calculate the bricks need in second floors
        var secondFloor =  (floors - 10 ) * 12 * 1000;
        // adding the second floor value with first floor to get total bricks we need
        var secondFloorBricks = secondFloor + (10*15*1000);
        return secondFloorBricks;
    }

    while(floors > 20){
        // Calculating the bricks need for rest of floors
    var restFloor = (floors - 20) * 10 * 1000;
    // adding the first and second floor value with first floor to get total bricks we need
    var restFloorBricks = restFloor + (10*15*1000) + (10*12*1000);
    return restFloorBricks;
    }

var total = firstFloorBricks + secondFloorBricks + restFloorBricks;
return total;
}

// here 35 is inputed data
var totalBricks = brickCalculator(35);

// Showing output
console.log("You need toal",totalBricks,"bricks.");















// tinyFriend

function tinyFriend(names){
    var tiny = names[0];

    for(var i = 0; i < names.length; i++){
        var newNames = names[i];
        if(newNames.length < tiny.length){
            tiny = newNames;
        }
    }
    return tiny;
}

var minName = tinyFriend(["arif","dan","arifful","sam","tt"]);

// Showing output
console.log(minName);