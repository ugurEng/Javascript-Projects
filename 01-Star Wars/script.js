
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

function starWars(endpoint) {
  return fetch(url + endpoint)
  .then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(Error("Unsuccessful response"));
    // if (!response.ok)
    //   throw new Error(`Problem with getting data; the code: ${response.status}`);
    // return response.json();
  }).then(data=>{
    console.log(data);
    console.log(`There are ${data.length} ${endpoint} in Starwars history.`)
    data.forEach((item=>{
      console.log(`Film episode_${item.episode_id} title is "${item.title}".`)
    }))
})
.catch(error => {
  console.warn(error);
  })
}
//starWars("films");



function starWarsCount(endpoint) {
  return fetch(url + endpoint)
  .then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(Error("Unsuccessful response"));
  })
}

Promise.all([
  starWarsCount("films"),
  starWarsCount("planets"),
  starWarsCount("species"),
  starWarsCount("people"),
  starWarsCount("starships"),
  starWarsCount("vehicles")
])
  //.then((data) => {
    // console.log(data);
    // output.innerText =
    //   `${data[0].length} films, ` +
    //   `${data[1].length} planets, `+
    //   `${data[2].length} species, `+
    //   `${data[3].length} people, `+
    //   `${data[4].length} starships, `+
    //   `${data[5].length} vehicles, `;
  .then(([films, planets, species, people, starships, vehicles]) => {
    output.innerText =
      `${films.length} films, ` +
      `${planets.length} planets, ` +
      `${species.length} species ` +
      `${people.length} people ` +
      `${starships.length} starships ` +
      `${vehicles.length} vehicles `;
  })
  .catch(error => {
    console.warn(error);
    output.innerText = ":(";
  })
  .finally(() => {
    spinner.src = "images/star-wars-ship-2.png";
  });