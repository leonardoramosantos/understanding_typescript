var DESIGNER = 0;
var PAINTER = 1;
var TEACHER = 2;
var Job;
(function (Job) {
    Job[Job["DESIGNER"] = 0] = "DESIGNER";
    Job[Job["PAINTER"] = 1] = "PAINTER";
    Job["TEACHER"] = "Teacher";
})(Job || (Job = {}));
;
var person = {
    name: 'Leonardo',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    parentsName: ["João", "Maria"],
    job: Job.TEACHER
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(person.name + " - " + hobby);
}
console.log(person.name + "'s mother name: " + person.parentsName[1]);
// It gives error because the tuple only has 2 parameters
// person.parentsName[3];
// It should throw an error, but typescript lets it happen though
person.parentsName.push("dont work");
console.log(person.name + "'s job - " + person.job);
// -------------------
// UNION TYPES
function combine(val1, val2) {
    if (typeof val1 === "number" && typeof val2 === "number")
        return val1 + val2;
    else
        return val1.toString() + val2.toString();
}
var combinedAges = combine(30, 36);
console.log(combinedAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
function combineLiteral(val1, val2, combType) {
    if (combType === "numeric")
        return +val1 + +val2;
    else
        return val1.toString() + val2.toString();
}
var combinedAgesLiteral = combineLiteral(30, 36, "numeric");
console.log(combinedAgesLiteral);
var combinedNamesLiteral = combineLiteral("Max", "Anna", "string");
console.log(combinedNamesLiteral);
