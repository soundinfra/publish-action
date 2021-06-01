const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https')

// https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
exports.get = function http_get(url) {
  url = 'https://jsonplaceholder.typicode.com/users'
  https.get(url, res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no Date header';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header: ', headerDate);
    res.on('data', chunk => {
      data.push(chunk)
    });
    res.on('end', () => {
      console.log('Response ended')
      const users = JSON.parse(Buffer.concat(data).toString());
      for (user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`)
      };
    }).on('error', err => {
      console.log('Error: ', err.message)
    })
  });
  return url
};

try {
  // Inputs defined in action metadata file.
  const publishDomain = core.getInput('publish-domain');
  const publishDirectory = core.getInput('publish-directory');
  console.log(`Publishing from ${publishDirectory} to ${publishDomain}!`);
  http_get("dummy");
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
