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