let id: number = 10;

let a = 39; //also automatically infers type (like in golang)

let company: string = "weave";

let x: any = "Hello";

x = 23;

let ids: number[] = [1, 2, 3, 4];

// ids.push("Hello"); // will throw error

ids.push(10);

console.log("ids : " + ids);

// Tuple
let person: [number, string, boolean] = [1, "Ajith", true];

// Tuple array
let empolyee: [number, string][];

empolyee = [
  [1, "Ajith"],
  [2, "sekar"],
];

// union
let pid: string | number;
pid = "22";
pid = 23;

//Enum
enum Direction {
  North, // will automatically assign 0 (iota) but can be overwritten with any type
  East,
  West,
  South,
}

// will print number
console.log("Direction north : " + Direction.North);

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ajith",
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid;
//or
let customerId1 = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log("Sum of nums : " + addNum(3, 5));

function logMe(message: string | number | boolean): void {
  console.log("log " + message);
}

console.log(logMe(false));

// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // optional param
}

const user1: UserInterface = {
  id: 1,
  name: "Ajith",
  age: 27,
};

// user1.id = 23 //this will thrown an error

// what's the difference between interface and type then?
// type can be unionized. ex
type Point = number | string;
const p1: Point = 1.1;

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log("sub : " + sub(10, 5));

// Classes
class Person {
  // access modifier : public (default), private, protected
  id: number;
  private name: string;

  constructor(id: number, name: string) {
    console.log("Executing " + name + " Person constructor");
    this.id = id;
    this.name = name;
  }
  register(): string {
    return `${this.name} is now registered`;
  }
}

const ajith = new Person(1, "ajith");

ajith.id = 10;
// ajith.name = 'ajith kumar' // will through error
console.log(ajith.register());

// interface with class

interface employeeInterface {
  id: number;
  name: string;
  present: boolean;
  standup(): string;
}

class Employee implements employeeInterface {
  id: number;
  name: string;
  present: boolean;

  constructor(id: number, name: string, present: boolean) {
    this.id = id;
    this.name = name;
    this.present = present;
  }

  standup() {
    if (!this.present) {
      throw new Error("employee is absent");
    }
    return "I worked on x yesterday and will look into y today";
  }
}

class Employee1 extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee1(1, "kumar", "SDE");
console.log(emp.register());

// Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 4]);
let strArray = getArray(["ajith", "kumar"]);

numArray.push("illegally entering number array!"); // so this approach doesn't work

function genericGetArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let gNumArray = genericGetArray([1, 2, 4]);
// gNumArray.push("a string") // will throw error
