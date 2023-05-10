class Man {
    constructor(private name: string, private age: number) { }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Man {
    constructor(name: string, age: number, private grade: string) {
        super(name, age);
    }

    getGrade(): string {
        return `Grade: ${this.grade}`;
    }
}

const userPerson = new Man("Istiak", 20);
console.log(userPerson.getDetails());

const studentDetail = new Student("al Noor Is", 18, "A");
console.log(studentDetail.getDetails());
console.log(studentDetail.getGrade()); 