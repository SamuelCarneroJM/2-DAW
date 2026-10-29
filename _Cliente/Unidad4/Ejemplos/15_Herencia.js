const person = { name: "Paco", age: 30 };
const proto2 = { name: "Juan" }
const student = { course: "A" };

const student2 = { nombre: "Samuel", edad: 23 };
const student3 = { nombre: "Laura" };


// el prototipo de los dos objetos es el mismo
console.log("getProto de person y proto2");
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(proto2));
console.log("getProto de proto2 y student");
console.log(Object.getPrototypeOf(proto2) === Object.getPrototypeOf(student));
console.log("getProto de person y student");
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student));
//todos devuelven true por que todos heredan de object

//student no tiene la propiedad name
console.log(student.name);

//asigna a student el prototipo persona
Object.setPrototypeOf(proto2, person);
console.log("----------");

console.log(Object.getPrototypeOf(proto2) === Object.getPrototypeOf(student));


Object.setPrototypeOf(student, proto2);

console.log("---->");
console.log(Object.getPrototypeOf(student2) === Object.getPrototypeOf(student3));
console.log(Object.getPrototypeOf(student2) === Object.getPrototypeOf(proto2));
console.log(Object.getPrototypeOf(proto2));
console.log(Object.getPrototypeOf(student2));
console.log(Object.getPrototypeOf(student3));

//ahora student tiene la propiedad name de su prototipo
console.log(student.name);

//creamos una nueva propiedad name en student
student.name = "Pepe";
console.log(student.name);
console.log(proto2.name);
console.log(person.name);

//MAS FORMAS DE CREAR OBJETOS
console.log("---- PARTE2 ----");
const person2 = { name: "Juan", age: 23 };
const student4 = Object.create(person);
student4.course = "A"
const customer = Object.create(person);
customer.sales = 1230;
console.log(person2);
console.log(student4);
console.log(customer);

//CREAR OBJETOS CON TODOS LOS ATRIBUTOS
console.log("---- PARTE 3 ----");
const person3 = { nombre: "Juan", age: 25 };
const data = { height: 160 };
const student5 = Object.assign({}, person, data);
student5.age = 30;
console.log(person3);
console.log(student5);

//FUNCIONES EN OBJETOS HEREDADOS
console.log("---- PARTE 4 ----");

const persona = {
    visualizar: function () {
        console.log(this);
    }
};
const estudiante = Object.create(persona);
estudiante.nombre = 'Pedro';
estudiante.visualizar();

//CONSTRUCTOR
console.log("---- PARTE 4 ----");
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;


}
Persona.prototype.visualizar = function () {
    console.log(this.nombre);
}

const persona3 = new Persona("Juan", 23);
console.log(persona3);

