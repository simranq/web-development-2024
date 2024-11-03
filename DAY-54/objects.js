class Job {
    constructor( jobTitle , place , salary ) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;  
    }
    describe() {
        console.log(`I'm a ${this.title}, I work at ${this.location} and I earn at ${this.salary}.`);
    }
};

// console.log(new Date().toISOString());     // new obj created nd returns current date & tym stamp
// Date() is the constructor.
const developer = new Job('Developer' , 'Mumbai' , 35000);
developer.describe();
console.log(developer);

const dataAnalyst = new Job('Data Analyst' , 'KharGhar', 40000);
dataAnalyst.describe();
console.log(dataAnalyst);


