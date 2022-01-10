//Choose a random color
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
//button.addEventListener('click', changeBackground)

button1.onclick = ()=>{
//const colorIndex= parseInt(Math.random()*colors.length+1)
const colorIndex= Math.floor(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}


const alphanumeric = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const colorIndex=()=>{
  return Math.floor(Math.random()*alphanumeric.length);
} 
/*
button2.onclick = ()=>{
  const colorCode = `${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}`;
body.style.backgroundColor = "#"+colorCode;
h1.style.color = "#"+colorCode;   // look at CSS for reversing
h1.innerHTML = "#"+colorCode;
}*/



button2.onclick = ()=>{
  const colorCode = `${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}`;
  body.style.backgroundColor = "#"+colorCode;
  h1.innerHTML = "#"+colorCode;

  let reverseColor = colorCode.split("").reverse().join("");
  console.log(reverseColor);
  h1.style.color = "#"+reverseColor;
}
