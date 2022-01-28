/* TypeScript */

// Explicit Types @
let ageForMarriage: number;
let surnameForLogin: string;
let isEligible: boolean;

// Array Types @
let mixedArrays: string[] = [];
let stringArray: string[] = [];
let numberArray: number[] = [];
let booleanArray: boolean[] = [];

// Unions @
let dataArray: ( string | number | boolean)[] = [];
let promiseResolve: string | number;

// Interfaces @
let User:{
    name:string,
    age:number
}
// Extends primitive types like number, string
type missingCode = number | string;
let myMissingCode: missingCode = 'Kofi';
console.log(typeof(myMissingCode));

// function types

let greetThem: Function;

//? A function that has a number as a return type !
let greetThemReturnNumber = ( ): number => {
    return 2+2;
}

//? A function that has a return type as a boolean

let isSignedOut = (signedOut:string): boolean => {
    console.log(signedOut);
    return true;
}