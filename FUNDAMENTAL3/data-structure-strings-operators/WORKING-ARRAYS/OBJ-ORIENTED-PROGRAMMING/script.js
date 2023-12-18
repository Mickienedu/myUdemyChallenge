'use strict';

// 206. What is Object-Oriented Programming?
/* It is aprogramming paradigm based on the concept of objects. 
paradigm is a style of ConvolverNode, HOW we write and organise code 

We use objects to model(describe) real-world(eg: user or todo list item) or 
abstract(eg: HTML component or data structure) features

CLASSES
CLASS PRINCIPLES

*/

// 207. OOP in JavaScript
/* PROTOTYPES: contains methods
Objects are linked to a prototype Object 

3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

NUM1: constructor functions. Technique to create objects from a function.
This is how built-in objects like Arrays, Maps or Sets are actually implemented

NUM2: ES6 classes. Modern alternative to constructor function syntax.
Syntactic sugar: behind the scenes, ES6 classes work exactly like constructor functions.

NUM3: Object.create()
The easiest and most straightfprward way of linking an object to a prototype object.
*/


/*// 208. Constructor Functions and the new Operator
// const Person = function(firstName, birthYear) {
//     // INSTANCE PROPERTIES
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // // you should never do this 
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

const mickie = new Person('Mickie', 1992);
console.log(mickie);

// 1. New () is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(mickie instanceof Person);

Person.hey = function() {
    console.log('Hey there');
    console.log(this);
};
Person.hey();
*/



/*// 209. Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

mickie.calcAge();
matilda.calcAge();

console.log(mickie.__proto__);
console.log(mickie.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mickie));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(mickie.species, matilda.species);

console.log(mickie.hasOwnProperty('firstName'));
console.log(mickie.hasOwnProperty('species')); */

/* // 210. Prototypal Inheritance and The Prototype Chain
console.log(mickie.__proto__);
// Object.prototype(top of prototype chain )
console.log(mickie.__proto__.__proto__);
console.log(mickie.__proto__.__proto__.__proto__);

// 211. Prototypal Inheritance on Built-In Objects
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];  // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1); */


// 212. Coding Challenge #1
/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK � */

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


// 213. ES6 Classes

// class expression 
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method 
    // methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // 214. Setters and Getters

    get age() {
        return 2037 - this.birthYear;
    }
    // Set a property that already exist 
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }
    get fullName() {
        return this._fullName;
    }

// 215. Static Methods
static hey() {
    console.log('Hey there');
    console.log(this);
}
}
// 220. Inheritance Between "Classes": ES6 Classes
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // always needs to happen first 
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student 
        i feel more like ${2037 - this.birthYear + 10}`);
    }
}
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
//////////////////////////


const jessica = new PersonCl('Jessica Davies', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// Classes are not hoisted 
// Class are first-class citizens
// Classes are executed in strict mode 



const walter = new PersonCl('Walter white', 1965)  //ITS NOT A FULL NAME. if the names are not two

PersonCl.hey();

/* // 214. Setters and Getters
const account = {
    owner: 'Mickie',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements); */


// 215. Static Methods

/*// 216. Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK �
 */
/* class CarCl { 
    constructor(make, speed) {
    this.make = make;
    this.speed = speed;
}

 accelerate() {
    this.speed += 10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

 brake() {
    this.speed -= 5; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
get speedUS() {
    return this.speed / 1.6;
}
set speedUS(speed) {
    this.speed = speed * 1.6;
}
}
const ford = new CarCl('Ford', 120)
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); */


// 218. Inheritance Between "Classes": Constructor Functions
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {  // the 'Student' class is 
 
    Person.call(this, firstName, birthYear)
    this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); //17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK �
*/
const Carr = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Carr.prototype.accelerate = function() {
    this.speed += 10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Carr.prototype.brake = function() {
    this.speed -= 5; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function(make, speed, charge) {
    Carr.call(this, make, speed);
    this.charge = charge
};

// link the prototype
EV.prototype = Object.create(Carr.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


// 220. Inheritance Between "Classes": ES6 Classes

/*// 221. Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);

}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge(); */


// 222. Another Class Example
// PUBLIC FIELDS
// PRIVATE FIELDS
// PUBLIC METHODS
// PRIVATE METHODS
// STATIC METHODS 

class Account {
    // PUBLIC FIELDS (INSTANCES)
    locale = navigator.language;

    //PRIVATE  FIELDS (instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
          // protected property with encapuslation 
        this.#pin = pin;
        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks to opening an account, ${owner}`);
    }

    // PUBLIC INTERFACE 
    getMovements() {
        return this.#movements;   //protected with encapuslation added
    }
    deposit(val) {
        this.#movements.push(val); //protected with encapuslation added
        return this;
    };

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        // if(this.#approveLoan(val)) {  
        if(this._approveLoan(val)) {  
            this.deposit(val);
            console.log('Loan approved');
            return this;
        }
    }
    static helper() {
        console.log('Helper');
    }
    // PRIVATE METHOD 
      //protected with encapuslation added. the underscore _ is the protector and encapsul..
    //   #approveLoan(val){  
      _approveLoan(val){  
        return true;
    }

}
const acc1 = new Account('Mickie', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.pin);
Account.helper();


// 223. Encapsulation: Protected Properties and Methods
// Encapuslation simply means keeping some propereties and methods private inside the class 
// and not supposed to be touched outside the class 

// 224. Encapsulation: Private Class Fields and Methods

// 225. Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());

// 226. ES6 Classes Summary

/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK �
*/
