type Person = {
    id: number,
    name: string,
    group: number
}

const array: Person[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]



type CarsType={
    manufacturer?: string,
    model?: string
}

let car: CarsType = {}; 
car.manufacturer = "manufacturer";
car.model = 'model';

const car1: CarsType = {}; 
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; 
car2.manufacturer = "manufacturer";
car2.model = 'model';

interface ArrayCarsType {
    cars: CarsType[]
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

const Arr: CarsType[] = [
    { manufacturer: "manufacture", model: "model" },
    {manufacturer:"fghj", model:"xcfvghbj"}
];








type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = MarkFilterType | 11 | 12;
type DoneType = boolean;



let a: GroupFilterType = 1;
a = 12;
a = 4;

type MarkType = {
    subject: string,
    mark: MarkFilterType, 
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, 
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>, // массив студентов
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по оценке
    deleteStudent: (id: number) => void, // удалить студента по id 
    mark: MarkFilterType,
    group: GroupFilterType,
}

class Group implements GroupType {
    students: Array<StudentType> = [];
    mark: MarkFilterType;
    group: GroupFilterType;

    studentsFilter(group: GroupFilterType): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    }

    marksFilter(mark: MarkFilterType): Array<StudentType> {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    }

    deleteStudent(id: number): void {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    


}
let S = new Group();

const st1: StudentType={
    id:23,
    name:"Ivan",
    group:4,
    marks:[
        {subject:"Math", mark:10, done:calculateDone(10)},
        {subject:"Biology", mark:2, done:calculateDone(2)}
]
}
const st2: StudentType={
    id:25,
    name:"Nadia",
    group:5,
    marks:[
        {subject:"Math",mark:6, done:calculateDone(6)},
        {subject:"Biology", mark:6, done:calculateDone(6)}
]
}
function calculateDone(mark: MarkFilterType): DoneType {
    if(mark>=4){
        return true;
    }
    else return false;
}
S.students.push(st1,st2);
S.group = 5;

const students = [...S.students, st1, st2];
console.log(...S.studentsFilter(4));
console.log(S.marksFilter(6).map(st =>st.marks));
console.log(...S.students);
console.log(S.deleteStudent(25));
console.log(...S.students);


