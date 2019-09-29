//1
/*const loop = function (times = 0, callback = null){
for ( let i = 0; i < times; i ++)
callback();
};

loop (3, function() {console.log('Hello')})*/
//2
/*const calculateArea = function (figure, a_h, b, h = undefined) {
let area = null;
let [, ...input] = arguments;
switch (figure_in) {
case 'square':
case 'rectangle':
area = a_h * b;
break;
case 'rhombus':
area = a_h * b * 0.5;
break;
case 'triangle':
area = a_h * h;
break;
default:
area = null;
console.log('I dont know your figure:(');
}
//console.log(area);
//console.log(input);
//console.log(figure_in);
let result = {figure, area, input}
return result;
};

let figure_in = 'rhombus'

console.log(calculateArea(figure_in, 4, 3 ))
figure_in = 'figure'
console.log(calculateArea(figure_in, 4, 3 ))*/
    //3
    class Human{
        constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.dateOfBirth);
        }
    }
    class Employee extends Human {
        constructor(name, age, dateOfBirth,salary, department) {
            super(name, age, dateOfBirth);
            this.salary = salary;
            this.dapertment = department;
        }

        displayInfo() {
            super.displayInfo();
            console.log(this.salary);
            console.log(this.department);
        }

    }

    class Developer extends Employee {
        constructor(name, age, dateOfBirth,salary, department) {
            super(name, age, dateOfBirth,salary, department);
            this.manger = '';
            }
        changeManager(manager){
           his.manager = manager.name;
            }
   }

   class Manger extends Employee {
        constructor(name, age, dateOfBirth,salary, department) {
            super(name, age, dateOfBirth,salary, department);
            this.list = [];
        }

    addDeveloper(developer) {
        if (this.list.name == developer.name)
        console.log('Exists');
        else {
        this.list.push(developer);
        }
    }

    removeDeveloper() {}

    }

    const person = new Human ('Viktor', 21, '17.08');
