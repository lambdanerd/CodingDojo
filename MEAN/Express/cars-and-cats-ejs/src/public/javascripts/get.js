'use strict';

function get(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
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

async function thisOne(catId) {
  return await get(`/cats/${catId}`);
}

module.exports = thisOne;
