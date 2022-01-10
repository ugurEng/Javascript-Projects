class Media {
  constructor(title, type){
    this._title = title;
    this._type = type;
    this._isCheckedOut = false;
    this._raitings = [];
  }
  get title() {
    return this._title;
  }
  get type(){
    return this._type;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get raitings(){
    return this._raitings;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckoutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating(){
    let raitings = this.raitings.reduce((sum,raiting)=>sum+raiting)/this.raitings.length;
    return raitings.toFixed(2);
  }
  addraiting(raiting){
    raiting=parseFloat(raiting);
    if(raiting >=1 && raiting <=5){
          this._raitings.push(raiting);
    }else {
      console.log(`Your input is ${raiting}, please insert value between 1 and 5!`)
    }
  }
}



class Book extends Media{
  constructor(title, type, author, pages){
    super(title, type);
    this._author=author;
    this._pages=pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}




class Movie extends Media{
  constructor(title, type, director, runTime){
    super(title, type);
    this._director=director;
    this._runTime=runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}



class CD extends Media{
  constructor(title, type, artist, duration){
    super(title, type);
    this._artist=artist;
    this._songs=[];
    this._duration=duration;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  addSongs(song){
    this._songs.push(song);
  }
  shuffle(){
    return this._songs.sort(() => Math.random() - 0.5);
  }

}


class Catalog {
  constructor(){
  this._myCatalog = [];
 }

get myCatalog() {
   return this._myCatalog;
}

set myCatalog(newMedia)  {
 this._myCatalog.push(newMedia);
 }

 addMedia(media){
  this._myCatalog.push(media);
}
}




const historyOfViolence = new Book('History of Violence', 'Crime', 'Édouard Louis', 224);
console.log(historyOfViolence);
historyOfViolence.toggleCheckoutStatus();
console.log(historyOfViolence.isCheckedOut);
historyOfViolence.addraiting(4);
historyOfViolence.addraiting(5);
historyOfViolence.addraiting(5);
console.log(historyOfViolence);
historyOfViolence.getAverageRating();
console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie('Blood Sport', 'Action', 'Jean-Claude Van Damme', 122);
console.log(bloodSport);
bloodSport.toggleCheckoutStatus();
console.log(bloodSport.isCheckedOut);
bloodSport.addraiting(1);
bloodSport.addraiting(1);
bloodSport.addraiting(5);
console.log(bloodSport.getAverageRating());

const bonJovi = new CD('MusicJon', 'Rock', 'Jon Bon Jovi', 11);
bonJovi.addSongs('Rockn Roll');
bonJovi.addSongs('Break');
bonJovi.addSongs('RunTime');
bonJovi.addSongs('Check');
const jLO = new CD('MusicJen', 'Pop', 'Jennifer Lopez', 9);

console.log(bonJovi);
console.log(jLO);

console.log(bonJovi.shuffle());


const catalogLibrary = new Catalog();
catalogLibrary.addMedia(historyOfViolence);
catalogLibrary.addMedia(bloodSport);
catalogLibrary.addMedia(bonJovi);
//catalogLibrary.mediaList = bloodSport;
//catalogLibrary.mediaList = bonJovi;
catalogLibrary.myCatalog = jLO;

console.log(catalogLibrary);



//CHALLANGE PART
let submitBtn = document.getElementById('submit_btn')
let mediaSelect = document.getElementById('mediaTypeSelect')
let titleMedia = document.getElementById('titleOfMedia')
let typeMedia = document.getElementById('typeOfMedia')
let creatorMedia = document.getElementById('creatorOfMedia')
let durationMedia = document.getElementById('durationOfMedia')
let ratings = document.getElementsByClassName('ratingsOfMedia')
let catalogLib = document.getElementById('catalogLibrary')

submitBtn.onclick = ()=>{
  console.log('hello')
  let constructor = mediaSelect.value === "Book" ? Book : mediaSelect.value === "Movie" ? Movie :mediaSelect.value === "CD" ? CD :"";
  let newMedia = new constructor(titleMedia.value, typeMedia.value, creatorMedia.value, durationMedia.value)
  newMedia.addraiting(ratings[0].value);
  newMedia.addraiting(ratings[1].value);
  newMedia.addraiting(ratings[2].value);
  newMedia.addraiting(ratings[3].value);
  
  catalogLibrary.addMedia(newMedia);
  let result=[];
  catalogLibrary.myCatalog.forEach(elem => result.push(elem.title));
  console.log(catalogLibrary.myCatalog);
  return catalogLib.innerHTML = result.join(" <br> ");
}