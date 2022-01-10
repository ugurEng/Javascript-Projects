
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img); // u can send anything to use later in .then
      //resolve(console.log('Image found'));
      //resolve('Image found in resolve');
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
      //reject('Image not found in reject');
      //reject(console.log('Image not found')); //works but do not use in promise
    });
  });
};

// First Part until waitFor
/*createImage('images/img-2.jpg')
 .then((data) => console.log(data))      // uses resolve string as data
//.then(() => console.log("then, image found"))
//.catch(err => console.log(err));       // uses reject string as data
//.catch(err => console.error(err));
.catch(() => console.log("catch, image not found"))*/

// after waitFor

const waitFor = function (second) {
  return new Promise(function (resolve) {
    console.log("wait for 2 seconds");
    setTimeout(resolve, second * 1000);
  });
};

let currentImg;

createImage("images/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return waitFor(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("images/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return waitFor(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    console.log("START AGAIN");
  })
  .catch((err) => console.error(err));
