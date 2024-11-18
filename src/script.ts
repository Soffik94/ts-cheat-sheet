// Tuples - pole s fixní délkou
const house: {
  windows: number;
  location: [number, string];
} = {
  windows: 4,
  location: [4, "South"],
};

for (const x of house.location) {
  console.log(x);
}

//Enum

enum Role_type {
  ADMIN = "nazdar",
  MEMBER = 1,
  OWNER,
}
const employee = {
  name: "asF",
  age: 45,
  role: Role_type.ADMIN,
};

console.log(employee.role);

//Any

const myArr: any[] = [true, 4, "ASDF"];

//Union type

let result: number | string;

const combination = (input1: string | number, input2: string | number) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
    return result;
  }
};

console.log(combination(4, 4));

//Literal type - určitá proměnná může obsahovat jen přesně specifikované hodnoty

function selectSize(size: "small" | "medium" | "large") {
  console.log("Selected size:", size);
}

selectSize("medium"); // Platný vstup
// selectSize("extra-large"); Chyba v TS

//Type alias  / custom type - můžu si vytvořit vlastní datový typ
type Combination = string | number | boolean;

const sum = (n1: number, n2: number): number => {
  return n1 + n2;
};
sum(2, 4);

const function1 = (string: string): string => {
  return "nazdar";
};

const function2 = (num: number): number => {
  return 23;
};

//callback funkce-funkce jako parametr jiné funkce

const sum2 = (n1: number, n2: number, callBackFun: (n3: number) => void) => {
  const result = n1 + n2;
  callBackFun(result);
};

sum2(5, 30, (x) => console.log(x));

//Unknown type - u unknown musíme provést Type guard, než jí někam přiřadím jako hodnotu
let test: unknown;
let result2: string;

test = 5;
test = "sADF";

if (typeof test === "string") {
  result = test;
}

// Never type - ve funkci nikdy nebude return
const generateError = (errorText: string, errorNumber: number): never => {
  throw { message: errorText, errorCode: errorNumber };
};

generateError("chyba", 404);

//interface
interface Client {
  name: string;
  address: string;
}
