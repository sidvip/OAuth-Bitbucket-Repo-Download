const clientID = '';
const clientSecret = '';
const authorizeURL = `https://bitbucket.org/site/oauth2/authorize?client_id=${clientID}&
response_type=code`;

function doAuthorize() {
    if (document.getElementById('dlists').value === '') {
        alert('Select the drive first to install the repository');
    } else {
        window.open(authorizeURL, "Authentication Window", "width=1000, height=500, top=90 left=170");
        let value =`<br><br><button class="button button1" style="display: inline" onclick="listRepositories()"> Repositories List :  </button>
        <h4 id="repos_list" style="display: inline-block"></h4>
        <input list="reposList" name="inputTag" style="display: inline-block; width: 18em">`;
        document.getElementById('newBlock').innerHTML = value;
    }
}

function closeWindow() {
    window.close();
}