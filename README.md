# OAuth-Bitbucket-Repo-Download

 It is *express* based application used for downloading the bitbucket repositories from your bitbucket account.

## How to use the app

1. Download the repository from https://github.com/sidvip/OAuth-Bitbucket-Repo-Download.

2. Go to the root of directory and install all the node dependencies.
   1. *npm install*.

3. Follow the procedure given in the following link ([Bitbucket OAuth](https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html)) to register the application's callback url as *http://localhost:5000/callback*.

4. Use the generated *clientID* and *clientSecret* and paste them in the *authorizeBitbucket.js* and *login.js*.

5. Open your favourite shell and type *npm start* to run the app.

6. Finally you are done. Go to the *http://localhost:5000* and start enjoying !

## License

MIT License
