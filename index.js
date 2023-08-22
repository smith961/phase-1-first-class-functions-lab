// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo',];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function(serialNumber){
    return function(fare){
    return  fare * serialNumber
    }
    }   


const fareDoubler = createFareMultiplier(2)

fareDoubler(10);

const fareTripler = createFareMultiplier(3);

fareTripler(10);


const selectDifferentDrivers = function (drivers, value){
    if  (value == returnFirstTwoDrivers){
 return returnFirstTwoDrivers(drivers);
    }
    else if (value == returnLastTwoDrivers){
 
 return returnLastTwoDrivers(drivers)
    }
 }
 
 selectDifferentDrivers(drivers, returnFirstTwoDrivers);
 
 selectDifferentDrivers(drivers, returnLastTwoDrivers);

