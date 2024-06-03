// // // class Person{
// // //     constructor(f,l,a){
// // //         this.firstname = f,
// // //         this.lastname = l,
// // //         this.age = a
// // //     }
// // //     getFullName(){
// // //         return this.firstname + this.lastname
// // //     }
// // // }

// // const { compare } = require("bcrypt");
// // const { Model } = require("sequelize");

// // // let person = new Person('bhusan','das',23)
// // // x = person.getFullName()
// // // console.log(x)

// // // class Animal {
// // //     constructor(n,a,b){
// // //         this.name = n,
// // //         this.age = a
// // //     }
// // //     speaks(){
// // //         return "Animal speaks"
// // //     }
// // // }

// // // class Dog extends Animal{
// // //     constructor(n,a,b){
// // //         super(n,a)
// // //         this.breed = b
// // //     }
// // //     speak(){
// // //         return "Dog barks"
// // //     }
// // // }
// // // let animal = new Animal('ben',4,'american')
// // // x = animal.speaks()
// // // console.log(x)

// // // let dog = new Dog('ba',5,'ret')
// // // console.log(dog.speaks());


// // class Car{
// //     #make;
// //     #model;
// //     #year;
// //     static totalobjects = 0;
// //     constructor(m,mo,y){
// //         this.#make = m;
// //         this.#model = mo;
// //         this.#year = y;
// //         Car.totalobjects++;
// //     }
// //     displayInfo(){
// //         console.log(this.#make,this.#model,this.#year);
// //     }
// //     getInfo(){
// //         console.log(this.#make,this.#model,this.#year);
// //     }
// //     getYear(){
// //         return this.#year;
// //     }
// //     setInfo(make){
// //         return this.#make = make;

// //     }
// //     static compareObjectsAge(car1,car2){
// //         const currentAge = new Date().getFullYear();
// //         const car1Age = currentAge - car1.getYear();
// //         const car2Age = currentAge - car2.getYear();

// //         if(car1Age > car2Age){
// //             return `${car1.getInfo()}`;
// //         }
// //         else if(car1Age < car2Age){
// //             return `${car2.getInfo()}`;
// //         }
// //         else{
// //             return `${car1.getInfo} and ${car2.getInfo}`;
// //         }
// //     }
// // }
// // class ElectricCar extends Car{
// //     constructor(m,mo,y,b){
// //         super(m,mo,y)
// //         this.batteryLife = b;
// //     }
// //     displayBatteryInfo(){
// //         console.log(this.make,this.model,this.year,this.batteryLife);
// //     }
// //     displayInfo(){
// //         console.log(this.batteryLife);
// //     }
// // }

// // let car1 = new Car("chennai",208,2020);
// // let car2 = new Car("odisha",209,2022);
// // console.log(Car.compareObjectsAge(car1,car2))
// // console.log(Car.totalobjects);



// // // let Ecar = new ElectricCar("chennai",208,2020,"5yrs");
// // // Ecar.displayBatteryInfo();
// // // Ecar.displayInfo();
// // // //console.log(car)


// class Car {
//     constructor(n,a){
//         this.name = n;
//         this.age = a;
//     }
//     displayInfo() {
//         console.log(`Car: ${this.name} ${this.age}`);
//       }
// }

// class Person{
//     constructor(n,a,car){
//         this.name = n;
//         this.age = a;
//         this.car = car;
//     }
//     setcar(car){
//         if(car instanceof Car){
//             return this.car = car;
//         }
//     }
//     displayPersonInfo() {
//         console.log(`Person: ${this.name}, Age: ${this.age}`);
//         if (this.car) {
//           this.car.displayInfo();
//         } else {
//           console.log("This person doesn't own a car.");
//         }
//       }
//     }
    


// let car = new Car("benz",5);
// let person = new Person("sonu",23,car);

// person.displayPersonInfo()
// console.log(person.setcar(car));




class Book{
    constructor(title,author,isbn){
       this.title =  title, 
       this.author = author, 
       this.isbn =  isbn
    }

}
class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removebook(isbn){
        this.book = this.books.filter(book => book.isbn != isbn)
    }
    findbook(isbn){
        return this.books.find(book => book.isbn === isbn);
    }
    listbook(){
        this.books.forEach(book => {
            return console.log(`${book.title} and ${book.author} and ${book.isbn}`)
        })

    }
}

let book1 = new Book("bennykbook","benny",123)
let book2 = new Book("Grannykibook","granny",456)

let library = new Library();
x = library.addBook(book1);
library.addBook(book2);

console.log(library.findbook(456))
console.log(library.listbook())