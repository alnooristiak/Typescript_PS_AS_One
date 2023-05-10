interface UserName {
    name: string;
    age: number;
}

function biggerAgeUser(people: UserName[]): UserName[] {
    return people.filter((person) => person.age >= 18);
}

const people: UserName[] = [
    { name: "istiak", age: 16 },
    { name: "fahim", age: 17 },
    { name: "rahman", age: 19 },
    { name: "rahat", age: 25 },
];

const adults: UserName[] = biggerAgeUser(people);
console.log(adults);