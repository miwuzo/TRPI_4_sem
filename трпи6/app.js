const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
const car1 = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
const Arr = [
    { manufacturer: "manufacture", model: "model" },
    { manufacturer: "fghj", model: "xcfvghbj" }
];
let a = 1;
a = 12;
a = 4;
class Group {
    constructor() {
        this.students = [];
    }
    studentsFilter(group) {
        return this.students.filter(student => student.group === group);
    }
    marksFilter(mark) {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    }
    deleteStudent(id) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
}
let S = new Group();
const st1 = {
    id: 23,
    name: "Ivan",
    group: 4,
    marks: [
        { subject: "Math", mark: 10, done: calculateDone(10) },
        { subject: "Biology", mark: 2, done: calculateDone(2) }
    ]
};
const st2 = {
    id: 25,
    name: "Nadia",
    group: 5,
    marks: [
        { subject: "Math", mark: 6, done: calculateDone(6) },
        { subject: "Biology", mark: 6, done: calculateDone(6) }
    ]
};
function calculateDone(mark) {
    if (mark >= 4) {
        return true;
    }
    else
        return false;
}
S.students.push(st1, st2);
S.group = 5;
const students = [...S.students, st1, st2];
console.log(...S.studentsFilter(4));
console.log(S.marksFilter(6).map(st => st.marks));
console.log(...S.students);
console.log(S.deleteStudent(25));
console.log(...S.students);
