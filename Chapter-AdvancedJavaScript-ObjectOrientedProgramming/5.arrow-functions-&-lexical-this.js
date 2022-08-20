let movieShop = {
  movie: "Hell or High Water",
  movieFunc(movieDesc) {
    setTimeout(() => {
      console.log(this.movie, movieDesc);
    }, 100);
  },
};

movieShop.movieFunc("is a masterpiece");
