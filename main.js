var express = require('express');
var exec = require('child_process').exec;
var dl = require('drivelist');
var helmet = require('helmet');
var getAccessToken = require('./UI/scripts/login').getAccessToken;
var listRepos = require('./UI/scripts/allRepositories').listRepos;

var bearer;

app = express();
app.use(helmet())

port = process.env.PORT || 5000;

app.use(express.static('UI'));

app.get('/', (req, res) => {
  res.send('./UI/index.html');
});

app.get('/callback', (req, res) => {
  res.send(`<html><body onload="window.close()"></body></html>`);
  let authorization_code = req.query.code;
  getAccessToken(authorization_code).then(bearerInfo => {
    bearer = bearerInfo;
  }).catch(err => {
    throw new Error(err);
  });
});

app.get('/getRepositories', (req, res) => {
  if (!bearer) {
    res.status(404).send('Authorise First');
  } else {
    let access_token = JSON.parse(bearer)["access_token"];
    const data = listRepos(access_token)
    if (data.type === 'error') {
       res.status(401).send(JSON.parse(data).error.message);
    } else {
      res.status(200).send(data);
    }
  }
});


app.get('/listDrives', (req, res)=> {
  dl.list().then( drives => {
    const fullList = [];
    let length = drives.length;
    drives.forEach((values) => {
      values["mountpoints"].forEach(final => {
      fullList.push(final.path);
      });
    });
    res.status(200).send(fullList);
  });
});


app.post('/downloadRepo', (req, res) => {
  console.log(`\n Cloning repository ....... ${req.query["repoName"]}`);
  const gitCommand = `git clone git@bitbucket.org:${req.query["repoName"]}.git`;
  process.chdir(req.query["driveName"]);
  exec(gitCommand, (err, stdout, stderr) => {
    if (err) {
      res.send('Error : ' + err);
    } 
    console.log(stdout);
    console.log(stderr);
    console.log(' ......... Cloning completed \n');
    res.status(200).send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ::: ${port}`);
});
