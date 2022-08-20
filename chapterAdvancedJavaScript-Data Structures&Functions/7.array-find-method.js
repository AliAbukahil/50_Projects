const bestSongs = [
  {
    artist: "Bob Dylan",
    song: "Like a Rolling Stone",
    year: 1965,
  },

  {
    artist: "John Lennon",
    song: "Imagine",
    year: 1971,
  },

  {
    artist: "Chuck Berry",
    song: "Johnny B. Goode",
    year: 1958,
  },

  {
    artist: "Chuck Berry",
    song: "The Second one",
    year: 1959,
  },

  {
    artist: "Chuck Berry",
    song: "The Second One",
    year: 1959,
  },

  {
    artist: "Aretha Franklin",
    song: "Respect",
    year: 1967,
  },

  {
    artist: "The Beatles",
    song: "Hey Jude",
    year: 1968,
  },

  {
    artist: "Ray Charles",
    song: "What'd I Say",
    year: 1959,
  },
];

// find() method garbs the item that satisfy this position
let artist = bestSongs.find((artist) => artist.artist === "Chuck Berry");
console.log(artist);
