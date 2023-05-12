console.log("JS Loaded")

const API_KEY = "LkV_b3ViMF69iTSXFSrBSTY7R8o";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus (data) {

    const heading = "API Key Status"
    const body = `Your key is valid until ${data.expiry}`

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerText = body;
    resultsModal.show();
}