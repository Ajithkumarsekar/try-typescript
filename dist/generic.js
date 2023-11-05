"use strict";
console.log("=============GENERICS=================");
// this supports only number array without generics
const getLastElementInNumberArray = function (arr) {
    return arr[arr.length - 1];
};
const getLastElement = function (arr) {
    return arr[arr.length - 1];
};
// const getLastElementShortHand = <T>(arr: T[]): T => arr[arr.length - 1];
console.log(getLastElement([1, 2, 3]));
// types can be mixed as well
console.log(getLastElement(["ajith", 4]));
// but here type cannot be mixed
const l1 = getLastElement([1, 2, 3]);
const makeArr = (x) => {
    return [x];
};
const v = makeArr(1);
const v1 = makeArr(true);
// here the type of element 1 and 2 can be different
const makeArrWithTwoElements = (x, y) => {
    return [x, y];
};
const v2 = makeArrWithTwoElements(5, 6);
// type is automatically infered as <number, string> in here
const v3 = makeArrWithTwoElements(5, "ajith");
// we can also explictly define the type
const v4 = makeArrWithTwoElements(null, "kumar");
// here I am defining the default type of S in number
const makeArrWithTwoElements1 = (x, y) => {
    return [x, y];
};
// so that I need not to pass the 2nd type explictly, like
const v5 = makeArrWithTwoElements1(null, 5);
// this has a limitation. Like I cannot pass extra properties like age in obj
const makeFullNameWithoutGeneric = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
// this will throw error because age is not accepted
// const v6 = makeFullNameWithoutGeneric({firstName: "ajith", lastName: "kumar", age: 27})
// the type can be anything which has firstName & lastName property
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
const v7 = makeFullName({ firstName: "ajith", lastName: "kumar", age: 27 });
