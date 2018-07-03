import { wrapRequest } from '../utils';

const postMailRequest = wrapRequest(async mailData =>
  fetch('http://www.ericleesite.com/api/mail', {
    body: JSON.stringify(mailData), // must match 'Content-Type' header
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cors: {
      origin: ['*']
    },
    method: 'POST' // *GET, POST, PUT, DELETE, etc.
  })
);

export { postMailRequest };
