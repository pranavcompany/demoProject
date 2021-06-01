// Ex:1 Fetch function
fetch(url)
  .then(process)
  .then(save)
  .catch(handleErrors)
;

const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(3000).then(() => console.log('Hello!')); // 'Hello!'
