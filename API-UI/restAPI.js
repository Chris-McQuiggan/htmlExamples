function buttonGetAll() {
    let reqType = "GET";
    let url = "http://localhost:8080/ClassroomApp/api/Classroom/getAllClasses/";
    makeRequest(reqType, url);
}

function buttonGet() {
    let reqType = "GET";
    let url = "http://localhost:8080/ClassroomApp/api/Classroom/getAClass/";
    let id = document.getElementById("classID1").value;
    url = url + id;
    makeRequest(reqType, url);
}

function buttonCreate() {
    let reqType = "POST";
    let url = "http://localhost:8080/ClassroomApp/api/Classroom/addClass/";
    let name = document.getElementById("trainer1").value;
    let obj = { trainer: name };
    let input = JSON.stringify(obj);
    makeRequest(reqType, url, input);
}

function buttonDelete() {
    let reqType = "DELETE";
    let url = "http://localhost:8080/ClassroomApp/api/Classroom/deleteClass/";
    let name = document.getElementById("trainer1").value;
    let obj = { trainer: name };
    let input = JSON.stringify(obj);
    let id = document.getElementById("classID2").value;
    url = url + id;
    makeRequest(reqType, url, input);
}

function buttonUpdate() {
    let reqType = "PUT";
    let url = "http://localhost:8080/ClassroomApp/api/Classroom/updateClass/";
    let name = document.getElementById("trainer2").value;
    let obj = { trainer: name };
    let input = JSON.stringify(obj);
    let id = document.getElementById("classID3").value;
    url = url + id;
    makeRequest(reqType, url, input);
}

function makeRequest(reqType, url, body) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        promises(req);
    }
    req.open(reqType, url);
    req.send(body);
}

function promises(req) {
    const createPromise = new Promise(
        function (res, rej) {
            if (req.status === 200) {
                let result = JSON.parse(req.responseText);
                res(result);
            } else {
                const reason = new Error(req.status);
                rej(reason);
            }
        }
    )
    createPromise
        .then(result => resolved(result))
        .catch(error => rejected(error))
}

function resolved(result) {
    if (result.trainer === undefined) {
        if (result[0] !== undefined) {
            for (let c in result) {
                let output = "Class ID:-- " + JSON.stringify(result[c].classID) + "  Trainer:-- " + JSON.stringify(result[c].trainer);
                let node = document.createElement("div");
                let textnode = document.createTextNode(output);
                node.setAttribute("id", "return" + c);
                node.appendChild(textnode);
                document.getElementById("results").appendChild(node);
            }
        } else {
            let textnode = document.createTextNode(JSON.stringify(result.result));
            let node = document.createElement("div");
            node.setAttribute("id", "return");
            node.appendChild(textnode);
            document.getElementById("results").appendChild(node);
        }
    } else {
        let output = "Success!  Trainer:-- " + JSON.stringify(result.trainer);
        let textnode = document.createTextNode(output);
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);
    }

}

function rejected(reason) {
    alert("An Error occured. Please check input.\n"+reason);
    console.log(reason);
}