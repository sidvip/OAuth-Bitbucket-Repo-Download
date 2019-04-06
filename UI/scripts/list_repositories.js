function listRepositories() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status == 200) {
            let list = '';
            let allRepos = JSON.parse(this.responseText);
            list += '<datalist id="reposList">';
            for (let i = 0; i < allRepos.length; i++) {
                let repo_name = allRepos[i]["fullRepoName"];
                if (i===0) {
                    list += `<option value="${repo_name}" selected="selected">${repo_name}`;
                } else {
                    list += `<option value="${repo_name}">${repo_name}`;
                }
            }
            list += '</datalist>';
            list += `<button class="button button3" style="display: inline" onclick="downloadRepositories()">Download</button>`;
            document.getElementsByClassName('lds-hourglass')[0].remove();
            document.getElementById('repos_list').innerHTML = list;
        } else {
            document.getElementsByClassName('lds-hourglass')[0].remove();
            alert(this.responseText)
        }
    };
    xhttp.open("GET", "/getRepositories", true);
    xhttp.send();
    const div = document.createElement('div');
    div.className = 'lds-hourglass';
    document.body.appendChild(div);
}

function listDrives () {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status == 200) {
            let drivelist = '';
            let all = JSON.parse(this.responseText);
            for (let i = 0; i < all.length; i++) {
                let dname = all[i];
                if (i===0) {
                    drivelist += `<option value="${dname}" selected="selected">${dname}`;
                } else {
                    drivelist += `<option value="${dname}">${dname}`;
                }
            }
            document.getElementById('dlists').innerHTML = drivelist;
            document.getElementById('dlists').style.visibility = 'visible';
        }
    };
    xhttp.open("GET", "/listDrives", true);
    xhttp.send();
}