// Create an array for each of these record labels.
// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old



let artists = [
  {
    first: "Bruce",
    last: "Atikins",
    style: "Country",
    age: 23,
  },
  {
    first: "Jensen",
    last: "Brown",
    style: "Pop",
    age: 20,
  },
  {
    first: "Dre",
    last: "Funkz",
    style: "Funk",
    age: 25,
  },
  {
    first: "Dusta",
    last: "Grimes",
    style: "Rap",
    age: 21,
  },
  {
    first: "Bartholomew",
    last: "Danielson",
    style: "Bluegrass",
    age: 23,
  },
  {
    first: "Avilee",
    last: "Dallas",
    style: "Country",
    age: 19,
  },
  {
    first: "Austin",
    last: "Kinkaid",
    style: "Pop",
    age: 22,
  },
  {
    first: "Loyoncé ",
    last: "Branis",
    style: "Rap",
    age: 27,
  },
];
let jumpStopRecords = [];
let chattenRecords = [];
let polarRecords = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 

const createBluegrassArtist = (
  artistFirst,
  artistLast,
  artistStyle,
  artistAge
) => {
  const artist = {
    first: artistFirst,
    last: artistLast,
    style: artistStyle,
    age: artistAge,
  };
  console.log(artist);

  chattenRecords.push(artist);
};

const createPopArtist = (artistFirst, artistLast, artistStyle, artistAge) => {
  const artist = {
    first: artistFirst,
    last: artistLast,
    style: artistStyle,
    age: artistAge,
  };
  console.log(artist);
  
  polarRecords.push(artist);
};

const createFunkArtist = (artistFirst, artistLast, artistStyle, artistAge) => {
  const artist = {
    first: artistFirst,
    last: artistLast,
    style: artistStyle,
    age: artistAge,
  };
  console.log(artist);

  jumpStopRecords.push(artist);
};


// Then invoke the appropriate function for each of the following artists
artists.forEach((artist) => {
  let music = artist.style.fontcolor();
  switch (music) {
    case "pop":
      createPopArtist(artist.first, artist.last, artist.style, artist.age);
      break;
    case "funk":
      createFunkArtist(artist.first, artist.last, artist.style, artist.age);
      break;
    case "rap":
      createRapArtist(artist.first, artist.last, artist.style, artist.age);
      break;
    case "country":
      createCountryArtist(artist.first,artist.last,artist.style,artist.age);
      break;
    case "bluegrass":createBluegrassArtist(artist.first,artist.last,artist.style,artist.age);
      break;
    default:
      break;
  }
});

const HTMLConverter = (style, artist) => {
  document.querySelector(".article__musicrow").innerHTML += `
<section>
    Company: ${style}
    Artist Name: ${artist.first} ${artist.last}<br>
    Music Style: ${artist.style}<br>
    Age: ${artist.age}
</section>
`;
};
// place the resulting object in the corresponding label array.
let recordCompanies = [jumpStopRecords, chattenRecords, polarRecords];

recordCompanies.forEach((company) => {
  company.forEach((artist) => {
    HTMLConverter(artist.style, artist);
  });
});
