// Code your solution in this file!

//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
//returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const returnFirstTwoDrivers = function firstTwo(array){
    return array.slice(0,2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function lastTwo(array){
    return array.slice(-2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mul){
    return function fare(num){
        return num * mul}
}

/* const fareDoubler = (function (num) {
        return createFareMultiplier(num)
})(2) */

const fareDoubler = (function () {
    return createFareMultiplier(2)
})() // IIFE: Immediately-Invoked Function Expression

// fareDoubler()

// const fareDoubler =  createFareMultiplier(2)

const fareTripler =  createFareMultiplier(3)


function selectDifferentDrivers(array, func){
    //let func = returnFirstTwoDrivers || returnLastTwoDrivers
    return func(array)
}
