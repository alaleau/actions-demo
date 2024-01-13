import * as core from '@actions/core'
import * as github from '@actions/github'

function sendNotification(url, message) {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      message
    }
  };

  return fetch(url, options)
    .then(response => response.json())
};

(async () => {

  const message = core.getInput("message");
  const url =  core.getInput("url");
  const { sha, actor } = github.context;
  await sendNotification(url, message);

  core.setOutput('my-output', "1234");
})();