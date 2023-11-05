console.log("=============GENERICS=================");

// created new type called numArray. Now
// this can be used to set the type anywhere
type numArray = Array<number>;
type stringArray = Array<string>;

// this supports only number array without generics
const getLastElementInNumberArray = function (arr: Array<number>): number {
  return arr[arr.length - 1];
};

const getLastElement = function <T>(arr: T[]): T {
  return arr[arr.length - 1];
};
// const getLastElementShortHand = <T>(arr: T[]): T => arr[arr.length - 1];

console.log(getLastElement([1, 2, 3]));
// types can be mixed as well
console.log(getLastElement(["ajith", 4]));

// but here type cannot be mixed
const l1 = getLastElement<number>([1, 2, 3]);

const makeArr = <T>(x: T): T[] => {
  return [x];
};

const v = makeArr(1);

const v1 = makeArr(true);

// here the type of element 1 and 2 can be different
const makeArrWithTwoElements = <T, S>(x: T, y: S): [T, S] => {
  return [x, y];
};

const v2 = makeArrWithTwoElements(5, 6);

// type is automatically infered as <number, string> in here
const v3 = makeArrWithTwoElements(5, "ajith");

// we can also explictly define the type
const v4 = makeArrWithTwoElements<string | null, string>(null, "kumar");

// here I am defining the default type of S in number
const makeArrWithTwoElements1 = <T, S = number>(x: T, y: S): [T, S] => {
  return [x, y];
};
// so that I need not to pass the 2nd type explictly, like
const v5 = makeArrWithTwoElements1<string | null>(null, 5);

// this has a limitation. Like I cannot pass extra properties like age in obj
const makeFullNameWithoutGeneric = (obj: {
  firstName: string;
  lastName: string;
}) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};
// this will throw error because age is not accepted
// const v6 = makeFullNameWithoutGeneric({firstName: "ajith", lastName: "kumar", age: 27})

// the type can be anything which has firstName & lastName property
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v7 = makeFullName({ firstName: "ajith", lastName: "kumar", age: 27 });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

// we can create different types of type from Tab
type numberTab = Tab<number>;
type stringTab = Tab<string>;
