// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    
    speak(){
        console.log(`Hello my ${name} is Fred, I am from ${location}`);
    }
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    gradeRandom(){
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        console.log(student.grade + plusOrMinus);
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listsSubjects(){
        console.log(this.favSubjects);
    }

    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }

    graduate(Student){
        if(this.grade > 70){
            console.log(`Congrats ${Student} you can graduate!!`);
        } else {
            console.log(`${Student}, you still need to do some work before you can graduate!`);
        }
    }
}

const Bob = new Student({
    grade: 80
});

class projectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(){
        console.log( `${name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    
    debugsCode(){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }

}
