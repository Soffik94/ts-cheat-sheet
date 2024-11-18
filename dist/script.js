"use strict";
// Tuples - pole s fixní délkou
const house = {
    windows: 4,
    location: [4, "South"],
};
for (const x of house.location) {
    console.log(x);
}
//Enum
var Role_type;
(function (Role_type) {
    Role_type["ADMIN"] = "nazdar";
    Role_type[Role_type["MEMBER"] = 1] = "MEMBER";
    Role_type[Role_type["OWNER"] = 2] = "OWNER";
})(Role_type || (Role_type = {}));
const employee = {
    name: "asF",
    age: 45,
    role: Role_type.ADMIN,
};
console.log(employee.role);
//Any
const myArr = [true, 4, "ASDF"];
//Union type
let result;
const combination = (input1, input2) => {
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
};
console.log(combination(4, 4));
//Literal type - určitá proměnná může obsahovat jen přesně specifikované hodnoty
function selectSize(size) {
    console.log("Selected size:", size);
}
selectSize("medium"); // Platný vstup
const sum = (n1, n2) => {
    return n1 + n2;
};
sum(2, 4);
const function1 = (string) => {
    return "nazdar";
};
const function2 = (num) => {
    return 23;
};
//callback funkce-funkce jako parametr jiné funkce
const sum2 = (n1, n2, callBackFun) => {
    const result = n1 + n2;
    callBackFun(result);
};
sum2(5, 30, (x) => console.log(x));
//Unknown type - u unknown musíme provést Type guard, než jí někam přiřadím jako hodnotu
let test;
let result2;
test = 5;
test = "sADF";
if (typeof test === "string") {
    result = test;
}
// Never type - ve funkci nikdy nebude return
const generateError = (errorText, errorNumber) => {
    throw { message: errorText, errorCode: errorNumber };
};
generateError("chyba", 404);
