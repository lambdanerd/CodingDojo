'use strict';

const fetchButton = document.querySelector('#fetch');

fetchButton.addEventListener('click', displayName);

// https://developers.google.com/web/fundamentals/primers/promises
function get(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      if (req.status == 200) {
        let data = JSON.parse(req.response);
        resolve(data);
      } else {
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = () => reject(Error('Network Error'));

    // Make the request
    req.send();
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#Rewriting_a_promise_chain_with_an_async_function
async function displayName() {
  const data = await get('https://api.github.com/users/lambdanerd');
  const newContent = document.createTextNode(data.name);
  const newDiv = document.createElement('div');
  newDiv.appendChild(newContent);
  document.body.insertBefore(newDiv, fetchButton);
}
