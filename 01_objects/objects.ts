const DESIGNER = 0;
const PAINTER = 1;
const TEACHER = 2;

enum Job { DESIGNER, PAINTER, TEACHER = "Teacher" };

const person: { 
    name: string; 
    age: number; 
    hobbies: string[];
    parentsName: [string, string];
    job: Job;
} = {
    name: 'Leonardo',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    parentsName: ["João", "Maria"],
    job: Job.TEACHER
}

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(person.name + " - "+ hobby);
}

console.log(person.name + "'s mother name: " + person.parentsName[1]);
// It gives error because the tuple only has 2 parameters
// person.parentsName[3];

// It should throw an error, but typescript lets it happen though
person.parentsName.push("dont work")

console.log(person.name + "'s job - " + person.job);


// -------------------
// UNION TYPES

function combine(val1: number | string, val2: number | string) {
    if (typeof val1 === "number" && typeof val2 === "number")
        return val1 + val2;
    else
        return val1.toString() + val2.toString();
}

const combinedAges = combine(30,36);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// -------------------
// LITERAL TYPES

// Type aliases
type numOrString = "numeric" | "string";

function combineLiteral(val1: number | string, val2: number | string, combType: numOrString) {
    if (combType === "numeric")
        return +val1 + +val2;
    else
        return val1.toString() + val2.toString();
}

const combinedAgesLiteral = combineLiteral(30, 36, "numeric");
console.log(combinedAgesLiteral);

const combinedNamesLiteral = combineLiteral("Max", "Anna", "string");
console.log(combinedNamesLiteral);

