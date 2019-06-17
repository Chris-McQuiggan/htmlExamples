
function getAllClasses(callback) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }

        let res = JSON.parse(req.responseText);

        for (let c in res) {
            let output = "Class ID:-- " + JSON.stringify(res[c].classID) + "  Trainer:-- " + JSON.stringify(res[c].trainer);
            let textnode = document.createTextNode(output);
            let node = document.createElement("div");
            node.setAttribute("id", "return" + c);
            node.appendChild(textnode);
            document.getElementById("results").appendChild(node);
            console.log("return success");
        }
    }
    req.open("GET", "http://localhost:8080/ClassroomApp/api/Classroom/getAllClasses/");
    req.send();
    console.log("send success");
}

function getAClass() {
    let req = new XMLHttpRequest();
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        console.log(req);
        let res = JSON.parse(req.responseText);

        let output = "Class ID:-- " + JSON.stringify(res.classID) + "  Trainer:-- " + JSON.stringify(res.trainer);
        let textnode = document.createTextNode(output);
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);

    }
    let input = document.getElementById("classID1").value;
    req.open("GET", "http://localhost:8080/ClassroomApp/api/Classroom/getAClass/" + input);
    req.send();
}

function createClass() {
    let req = new XMLHttpRequest();
    let name = document.getElementById("trainer1").value;
    let obj = { trainer: name };
    console.log(obj);
    let textinput = JSON.stringify(obj);
    console.log(textinput);
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        console.log(req);
        let res = JSON.parse(req.responseText);
        let output = "Success! Class added:  Trainer:-- " + JSON.stringify(res.trainer);
        let textnode = document.createTextNode(output);
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);

    }
    req.open("POST", "http://localhost:8080/ClassroomApp/api/Classroom/addClass/");
    req.send(textinput);
}

function deleteClass() {
    let req = new XMLHttpRequest();
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        console.log(req);
        let res = req.responseText;

        let output = res;
        let textnode = document.createTextNode(output);
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);

    }
    let input = document.getElementById("classID2").value;
    req.open("DELETE", "http://localhost:8080/ClassroomApp/api/Classroom/deleteClass/" + input);
    req.send();
}

function updateClass() {
    let req = new XMLHttpRequest();
    let name = document.getElementById("trainer2").value;
    let obj = { trainer: name };
    console.log(obj);
    let textinput = JSON.stringify(obj);
    console.log(textinput);
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        console.log(req);
        let res = JSON.parse(req.responseText);
        let output = "Success! Class updated:  classID:-- " + input + "  Trainer:-- " + JSON.stringify(res.trainer);
        let textnode = document.createTextNode(output);
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);

    }
    let input = document.getElementById("classID3").value;
    req.open("PUT", "http://localhost:8080/ClassroomApp/api/Classroom/updateClass/" + input);
    req.send(textinput);
}