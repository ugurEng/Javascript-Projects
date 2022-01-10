
const imgContainer = document.querySelector(".images");

let currentImg;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
    const img = document.createElement("img");
    img.src = imgPath;
    currentImg = img;
    imgContainer.append(img);
    img.addEventListener("load", function () {
      resolve(img); // u can send anything to use later in .then
      //resolve(console.log('Image found'));
      //resolve('Image found in resolve');
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
      //reject('Image not found in reject');
      //reject(console.log('Image not found')); //works but do not use in promise
    });
  }, 2000);
  });
};

const waitFor = function (second) {
  return new Promise(function (resolve) {
    console.log("wait for 2 seconds");
    setTimeout(resolve, second * 1000);
  });
};
