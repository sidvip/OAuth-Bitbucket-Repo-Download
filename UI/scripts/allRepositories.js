const sr = require('sync-request')
var finalReposList = [];

const listRepos = function (bearer, num = 1) {
  var options = {
    headers: {
      Authorization: `Bearer ${bearer}`
    }
  };

  const res = sr('get', `https://api.bitbucket.org/2.0/user/permissions/repositories?page=${num}`, options)
  let body = res.getBody('utf8')
  let valueArray = JSON.parse(body).values;
  valueArray.forEach(element => {
    let fullRepoName = element.repository.full_name;
    let repoName = element.repository.name;
    finalReposList.push({"fullRepoName": fullRepoName, "repoName": repoName});
  });
  if (JSON.parse(body).hasOwnProperty('next')) {
    num += 1;
    return listRepos(bearer, num);
  } else {
    let result = finalReposList;
    finalReposList = [];
    return result;
  }
};

module.exports = {
  listRepos: listRepos
}