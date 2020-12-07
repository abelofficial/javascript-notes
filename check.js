const person = new Object();
person.name = "Joe";
person.greet = function () {
  console.log(this.name);
};

person.greet();
