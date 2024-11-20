"use strict";
// OOP - Private/Public
class Department {
    constructor(na, nu) {
        this.employee = [];
        this.name = na;
        this.number = nu;
    }
    describe() {
        console.log("Oddělení " +
            this.name +
            " má číslo " +
            this.number +
            Department.currentYear);
    }
    addEmployee(oneEmployee) {
        this.employee.push(oneEmployee);
    }
    printEmployee() {
        console.log(this.employee);
    }
    printEmployeeOneByOne() {
        this.employee.map((oneEmployee) => {
            console.log(oneEmployee);
        });
    }
    createEmployee(name) {
        return name;
    }
}
Department.currentYear = 2024; //Static
const HRdep = new Department("Human Resources", 1);
const MAdep = new Department("Finance", 2);
const FIdep = new Department("Marketing", 3);
console.log(HRdep.name);
console.log(HRdep);
HRdep.describe();
HRdep.addEmployee("Matěj Šoffr");
HRdep.addEmployee("Kateřina Jagerová");
HRdep.printEmployee();
HRdep.printEmployeeOneByOne();
//Dědičnost - inheritance
class ITDepartment extends Department {
    constructor(number, admins) {
        //ITDepartment konstruktor nutně nepotřebuje, má zděděný ten z Department
        super("IT", number); //přidává parametry do půvdního konstruktor z Department... IT je prostě natvrdo zadaný parametr
        this.admins = admins;
        this.mainAdmin = admins[0];
    }
    //getters, setters(musím do něj poslat hodnotu), throw
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin;
        }
        throw new Error("Hlavní admin nenalezen");
    }
    set leadAdmin(value) {
        if (this.mainAdmin) {
            this.mainAdmin = value;
        }
        else {
            throw new Error("Hlavní admin nenastaven");
        }
    }
    addEmployee(oneEmployee) {
        if (oneEmployee === "David" || oneEmployee === "Matěj") {
            console.log("Už mají přístup");
        }
        else {
            this.employee.push(oneEmployee);
        }
    }
}
const frontEndDepartment = new ITDepartment(600, ["David", "Matěj"]);
console.log(frontEndDepartment.leadAdmin);
frontEndDepartment.leadAdmin = "Kunda";
console.log(frontEndDepartment.mainAdmin);
//Zkrácený zápis
class Class {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
const Class1 = new Class("nazdar", 2);
console.log(Class1.name);
//Static
class Car {
    constructor(name) {
        this.name = name;
        Car.count++; // při každém vytvoření instance přidá +1
    }
}
Car.count = 0;
//Abstraktní classa - slouží jako šablona pro ostatní classy
//Například základní třída Animal nemá smysl jako konkrétní objekt (v reálném světě neexistuje obecné "zvíře"), ale Dog nebo Cat už ano.
class Oddělení {
    constructor(jmeno, cislo) {
        this.jmeno = jmeno;
        this.cislo = cislo;
    }
}
class IT extends Oddělení {
    constructor(cisloOddeleni) {
        super("IT", cisloOddeleni);
    }
    describe() {
        console.log("tohle je metoda zděděná z abstraktní classy, kterou jsem musel v instatnci nadefinovat, jinak by to nefungovalo");
    }
}
const ITCzech = new IT(300);
ITCzech.describe();
//Singleton a private constructor
//Singleton je návrhový vzor, který zajišťuje, že třída bude mít pouze jednu jedinou instanci, a poskytuje globální přístupový bod k této instanci.
class DatabaseConnection {
    constructor(value) {
        this.value = value;
        // Konstruktor je private, aby nikdo nemohl vytvořit instanci zvenčí
    }
    static getInstance(value) {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection(value); // Vytvoření jediné instance
        }
        return DatabaseConnection.instance; // Vrácení existující instance
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(myPhrase) {
        console.log(`${myPhrase}, jmenuji se ${this.name}`);
    }
}
const User1 = new Person("Matěj");
User1.greet("Ahoj");
