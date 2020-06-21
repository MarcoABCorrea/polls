import { API_BASE_URL } from '../constants';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getPollPage(page) {
  return request({
    url: API_BASE_URL + '/questions?page=' + page,
    method: 'GET',
  });
}

export function getPollResult(questionId) {
  return request({
    url: API_BASE_URL + '/questions/' + questionId,
    method: 'GET',
  });
}

export function sendVote(vote) {
  return request({
    url: API_BASE_URL + vote,
    method: 'POST',
    body: JSON.stringify(vote),
  });
}

export function createPoll(poll) {
  return request({
    url: API_BASE_URL + '/questions',
    method: 'POST',
    body: JSON.stringify(poll),
  });
}
