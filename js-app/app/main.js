document.getElementById('title').innerHTML = "App is running ... "

function get() {
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET",
    }
    fetch('/node/stuff', init)
        .then(function (res) { return res.json(); })
        .then(function (data) {

            console.log(data);
            document.getElementById('title').innerHTML = "App is running ... (" + data.count + ")"
        })
}