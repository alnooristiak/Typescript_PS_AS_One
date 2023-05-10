console.log("hellow test")
// problem_one
// function getToValue(string: string, number: number = 3) {
//     for (let i = 0; i < number; i++) {
//       console.log(string);
//     }
// }
  
// getToValue("Istiak", 78); 
// getToValue("Noor"); 


// problem_tow
// interface UserName {
//     name: string;
//     age: number;
//   }
  
//   function biggerAgeUser(people: UserName[]): UserName[] {
//     return people.filter((person) => person.age >= 18);
//   }

//   const people: UserName[] = [
//     { name: "istiak", age: 16 },
//     { name: "fahim", age: 17 },
//     { name: "rahman", age: 19 },
//     { name: "rahat", age: 25 },
//   ];
  
//   const adults: UserName[] = biggerAgeUser(people);
//   console.log(adults);

// problem_three

// function arrayRepeaded<T>(...users: T[]): T[] {
//     return users.reverse();
//   }
  
//   const friendS = arrayRepeaded('istiak', 'fahim', 'rahman', 'hayat');
  
//   console.log(friendS); 
  
// problem_four

// class Man {
//     constructor(private name: string, private age: number) { }

//     getDetails(): string {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }

// class Student extends Man {
//     constructor(name: string, age: number, private grade: string) {
//         super(name, age);
//     }

//     getGrade(): string {
//         return `Grade: ${this.grade}`;
//     }
// }

// const userPerson = new Man("Istiak", 20);
// console.log(userPerson.getDetails());

// const studentDetail = new Student("al Noor Is", 18, "A");
// console.log(studentDetail.getDetails());
// console.log(studentDetail.getGrade()); 


// problem_five
// function stringLong(str: unknown): void {
//     if (typeof str === 'string') {
//         console.log(str);
//     } else {
//         console.error('This is not a string. Try again Leater.');
//     }
// }

// console.log(stringLong("al noor istiak Mahmud"));
// console.log(stringLong("al noor istiak"));
  
  
  