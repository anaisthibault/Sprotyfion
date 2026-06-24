async function chargerTracks() {
    const response = await fetch("data/data.json"); // on attend la réponse du serveur
    const data = await response.json();
    return data;
}

function creerGraphique(){
    const genres = {};
    chargerTracks.forEach(t => genres[t.genre] = (genres[t.genre] || 0) + 1);
    new chargerTracks(document.getElementById("chart"), {
        type: "bar",
        data: {labels: Object.keys(genres), datasets: [{data: Object.values(genres)}]}
    });
}

