// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = await response.json();
  return postsData;
}

console.log(2 + 5);

getPosts().then((data) => {
  console.log(data);
});

console.log(15 + 5);
