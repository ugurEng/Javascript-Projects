class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    typeof numberOfStudents === 'number' ? this._numberOfStudents = value : console.log(`Invalid input: ${value} must be set to a Number`);
  }

  quickFacts() {
    console.log(`${this._name}, educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    
  }
  static pickSubstituteTeacher(substituteTeachers) {
    substituteTeachers = [''];
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents, schoolOverview) {
    super(name, 'middle', numberOfStudents);
    this._schoolOverview = schoolOverview;
  }
  get schoolOverview() {
    return this._schoolOverview;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}


class Catalog {
  constructor(){
  this._myCatalog = [];
 }
get myCatalog() {
   return this._myCatalog;
}
 addSchool(school){
  this._myCatalog.push(school);
}
}



//create a PrimarySchool instance with the following properties
const sierraNevada = new PrimarySchool('Sierre Nevada', 422, 'Students must be picked up by a parent, guardian, or a family member over the age of 15.');
//call .quickFacts()
sierraNevada.quickFacts();
//call .pickSubstituteTeacher() on School
School.pickSubstituteTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles']);
//create a HighSchool instance
const elkhart = new HighSchool('Elkhart', 515, ['Baseball', 'Basketball', 'Volleyball', 'Wrestling']);
//get value saved to the sportsTeams property in elkhart
console.log(elkhart.sportsTeams);

const burakMiddle = new MiddleSchool('Mehmet Akif Ersoy Lisesi','500', '1951 senesinde açılan ilk özel okul');
console.log(burakMiddle);
burakMiddle.numberOfStudents = 600;
console.log(burakMiddle);
burakMiddle.quickFacts() ;

const catalogSchool = new Catalog();
catalogSchool.addSchool(sierraNevada);
catalogSchool.addSchool(elkhart);
catalogSchool.addSchool(burakMiddle);

console.log(catalogSchool);




//CHALLANGE PART
let submitBtn = document.getElementById('submit_btn')
let schoolSelect = document.getElementById('schoolTypeSelect')
let titleSchool = document.getElementById('titleOfSchool')
let studentsNumber = document.getElementById('studentsNumber')
let pickupPolicy = document.getElementById('pickupPolicy')
let sportsTeams = document.getElementById('sportsTeams')
let schoolOverview = document.getElementById('schoolOverview')
let catalog = document.getElementById('catalogSchool')

submitBtn.onclick = ()=>{
  let constructor = schoolSelect.value === "High" ? HighSchool : schoolSelect.value === "Middle" ? MiddleSchool :schoolSelect.value === "Primary" ? PrimarySchool :"";
  let newSchool = new constructor(titleSchool.value, studentsNumber.value, constructor===HighSchool? sportsTeams.value: constructor===MiddleSchool? schoolOverview.value: constructor===PrimarySchool? pickupPolicy.value: "")
  
  catalogSchool.addSchool(newSchool);
  let result=[];
  catalogSchool.myCatalog.forEach(elem => result.push(elem.title));
  console.log(catalogSchool.myCatalog);
  return catalogSchool.innerHTML = result.join(" <br> ");
}