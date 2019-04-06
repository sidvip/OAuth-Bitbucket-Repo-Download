
function downloadRepositories() {
    let value = document.getElementsByName("inputTag")[0].value;
    if (value === '') {
        alert('Select the repository to download')
    } else {
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
    
        xhttp.open('POST', `/downloadRepo?repoName=${value}&driveName=${document.getElementById("dlists").value}`, true);
        xhttp.send();
    }
}

