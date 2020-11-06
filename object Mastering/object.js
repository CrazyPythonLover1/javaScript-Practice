const normalPerson = {
    firstName:  'Rahim',
    lastName: 'Uddin',
    salary:15000,
    getFullName: function(){
        return this.firstName , this.lastName
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Rubel',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Salam',
    salary: 28000,
}
normalPerson.chargeBill(150);

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);

normalPerson.chargeBill.call(heroPerson, 900, 500, 100);

normalPerson.chargeBill.apply(heroPerson, [1000, 20, 50])

console.log(heroPerson.salary);


