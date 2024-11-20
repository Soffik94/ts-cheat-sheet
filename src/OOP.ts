// OOP - Private/Public
class Department {
  name: string;
  readonly number: number;
  protected employee: string[] = [];
  static currentYear: number = 2024; //Static

  constructor(na: string, nu: number) {
    this.name = na;
    this.number = nu;
  }

  describe() {
    console.log(
      "Oddělení " +
        this.name +
        " má číslo " +
        this.number +
        Department.currentYear
    );
  }

  addEmployee(oneEmployee: string) {
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
  createEmployee(name: string) {
    return name;
  }
}

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
  public mainAdmin: string;

  constructor(number: number, public admins: string[]) {
    //ITDepartment konstruktor nutně nepotřebuje, má zděděný ten z Department
    super("IT", number); //přidává parametry do půvdního konstruktor z Department... IT je prostě natvrdo zadaný parametr
    this.mainAdmin = admins[0];
  }

  //getters, setters(musím do něj poslat hodnotu), throw
  get leadAdmin() {
    if (this.mainAdmin) {
      return this.mainAdmin;
    }
    throw new Error("Hlavní admin nenalezen");
  }

  set leadAdmin(value: string) {
    if (this.mainAdmin) {
      this.mainAdmin = value;
    } else {
      throw new Error("Hlavní admin nenastaven");
    }
  }

  addEmployee(oneEmployee: string): void {
    if (oneEmployee === "David" || oneEmployee === "Matěj") {
      console.log("Už mají přístup");
    } else {
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
  constructor(public name: string, readonly number: number) {}
}

const Class1 = new Class("nazdar", 2);

console.log(Class1.name);

//Static
class Car {
  static count: number = 0;
  constructor(public name: string) {
    Car.count++; // při každém vytvoření instance přidá +1
  }
}

//Abstraktní classa - slouží jako šablona pro ostatní classy
//Například základní třída Animal nemá smysl jako konkrétní objekt (v reálném světě neexistuje obecné "zvíře"), ale Dog nebo Cat už ano.
abstract class Oddělení {
  constructor(public jmeno: string, public cislo: number) {}
  abstract describe(): void;
}

class IT extends Oddělení {
  constructor(cisloOddeleni: number) {
    super("IT", cisloOddeleni);
  }
  describe() {
    console.log(
      "tohle je metoda zděděná z abstraktní classy, kterou jsem musel v instatnci nadefinovat, jinak by to nefungovalo"
    );
  }
}

const ITCzech = new IT(300);
ITCzech.describe();

//Singleton a private constructor
//Singleton je návrhový vzor, který zajišťuje, že třída bude mít pouze jednu jedinou instanci, a poskytuje globální přístupový bod k této instanci.

class DatabaseConnection {
  private static instance: DatabaseConnection; // Statická vlastnost pro uložení jediné instance
  private constructor(public value: string) {
    // Konstruktor je private, aby nikdo nemohl vytvořit instanci zvenčí
  }
  static getInstance(value: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(value); // Vytvoření jediné instance
    }
    return DatabaseConnection.instance; // Vrácení existující instance
  }
}

//Interface - public a private není možné použít, jde pouze readonly

interface Name {
  readonly name: string;
  age?: number; // volitelný parametr, může, ale nemusí být
}

interface IGreet extends Name {
  greet(phrase: string): void;
}

class Person implements IGreet {
  constructor(public name: string) {}
  greet(myPhrase: string) {
    console.log(`${myPhrase}, jmenuji se ${this.name}`);
  }
}

const User1 = new Person("Matěj");
User1.greet("Ahoj");

//Interface jako funkce

interface AddFunction {
  (a: number, b: number): number;
}

let suma: AddFunction;

suma = (number1: number, number2: number) => {
  return number1 + number2;
};
