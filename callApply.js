const normalPerson = {
    firstName: 'Rahim', 
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tip){
        this.salary = this.salary - amount-tax - tip;
        return this.salary;
    }
}
normalPerson.chargeBill(1000);
//console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 20000
}
// const heroChargeBil = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBil(5000);
// console.log(heroPerson.salary)

const friendlyPerson = {
    firstName: 'Faruk',
    lastName: 'Ahmed',
    salary: 25000
}
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);
// console.log(friendlyPerson.salary);


//call method
// normalPerson.chargeBill.call(heroPerson, 1000, 900, 100);
// //normalPerson.chargeBill.call(heroPerson, 4000);
// console.log(heroPerson.salary);


// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);

//apply 
normalPerson.chargeBill.apply(friendlyPerson,[5000, 500, 50]);
normalPerson.chargeBill.apply(friendlyPerson,[2000, 100, 20]);
console.log(friendlyPerson.salary);








