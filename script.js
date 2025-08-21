function Student(name, age, grade) {
    this.name = name;
    this.age = age;

    let student_grade;

    this.setGrade = function(value) { 
    if (value === "A" || value === "F") {
        student_grade = value;
    } else {
        console.log("Grade must be A or F only!");
    }
};

    this.getGrade = function() {
        return student_grade;
    };

    this.setGrade(grade);

    this.introduce = function() {
    console.log(
    `Hi, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.getGrade()}.`
    );
};
}

const student1 = new Student("sana", 22, "A");
//console.log(student1.student_grade); // undefined
student1.setGrade("b");//Grade must be A or F only!
console.log(student1.getGrade());
student1.introduce();  
