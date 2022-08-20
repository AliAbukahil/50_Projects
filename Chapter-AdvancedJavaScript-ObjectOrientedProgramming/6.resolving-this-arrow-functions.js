let movieShop = {
  movie: "Focus",
  movieFunc: (movieDesc) => {
    console.log(this); // it will point to the window object
    console.log(this.movie, movieDesc);
  },
};

movieShop.movieFunc("is a good movie");

movieShop.movieFunc.call(movieShop, "is still a good movie");

// TAKE OUT::

/* 
An arrow function does not have the this keyword. An arrow function will go one level up in scopes and solve the (this) keyword lexically. in our example up ahead, we have only two scopes, first one the movieFunc, second one the Global scope, which the arrow function is going end up in and we don't have any movie property, resulting to (undefined)

*/
