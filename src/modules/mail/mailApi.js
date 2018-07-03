import { wrapRequest } from '../utils';

const postMailRequest = wrapRequest(async mailData =>
  fetch('http://www.ericleesite.com:5000/api/mail', {
    body: JSON.stringify(mailData), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST' // *GET, POST, PUT, DELETE, etc.
  })
);

export { postMailRequest };
