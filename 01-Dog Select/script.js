
const dog = {
  name: "Max",
  legs: 4,
  color: "black-white",
  age: 5,
  bark : function() {
    return `woof woof`
  },
  breed: "Terrier",
  calcAge: function () {
    this.age >= 2 ? this.humanAge = (2 * 10.5) + (this.age-2)*4
    : this.age === 1 ? this.humanAge = 10.5
    : console.log ("Enter valid age");
    return this.humanAge;
  },
  getDogInfo : function() {
    return `My name is ${this.name}. I am ${this.humanAge} years old in human years which is ${this.age} years old in dog years.`
  },
}
dog.calcAge();
console.log(dog.getDogInfo());
