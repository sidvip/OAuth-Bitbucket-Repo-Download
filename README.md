# OAuth-Bitbucket-Repo-Download

 It is *express* based application used for downloading the bitbucket repositories from your bitbucket account.

## How to use the app

1. Go to the root of directory and install all the node dependencies.
   1. *npm install*.

2. Follow the procedure given in the follwoing link ([Bitbucket OAuth](https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html)) to register the application's callback url as *http://localhost:5000/callback*.

3. Use the generated *clientID* and *clientSecret* and paste them in the *authorizeBitbucket.js*.

4. Open your favourite shell and type *npm start* to run the app.

5. Finally you are done. Go to the *http://localhost:5000* and start enjoying !

## License

MIT License