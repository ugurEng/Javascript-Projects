

const calculateCharacter = () =>{

    const name = prompt("What is Your name?").toUpperCase();
    const tweet = prompt("compose your tweet:");
  
    const tweetCount = tweet.length;
    const tweetLeft = 140 - tweetCount;
    alert(name + ", you have written " + tweetCount + " characters, you have " + tweetLeft + " charecters remaining."
    );
  
    


}

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);