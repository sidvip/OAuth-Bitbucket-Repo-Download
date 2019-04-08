var request = require("request");
const clientID = '';
const clientSecret = '';


const getAccessToken = function getAccessToken(authCode) {
  return new Promise((resolve, reject) => {
    var options = { method: 'POST',
  url: 'https://bitbucket.org/site/oauth2/access_token',
  headers: 
   { 'cache-control': 'no-cache',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { code: authCode,
     client_id: clientID,
     client_secret: clientSecret,
     grant_type: 'authorization_code',
     undefined: undefined } };

request(options, function (error, response, body) {
  if (error) reject(error);
  resolve(body);
})

  })
};

module.exports = {
    getAccessToken: getAccessToken
}
