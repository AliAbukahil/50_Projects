const bestSongs = [
  {
    artist: "Bob Dylan",
    song: "Like a Rolling Stone",
  },

  {
    artist: "John Lennon",
    song: "Imagine",
  },

  {
    artist: "Chuck Berry",
    song: "Johnny B. Goode",
  },

  {
    artist: "Aretha Franklin",
    song: "Respect",
  },

  {
    artist: "The Beatles",
    song: "Hey Jude",
  },

  {
    artist: "Ray Charles",
    song: "What'd I Say",
  },
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// The Good thing about this it creates a new Array :D
let artist = bestSongs.map((song) => song.artist);

console.log(artist); // ['Bob Dylan', 'John Lennon', 'Chuck Berry', 'Aretha Franklin', 'The Beatles', 'Ray Charles']
