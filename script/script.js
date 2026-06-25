async function chargerTracks() {
    const response = await fetch("data/data.json"); // on attend la réponse du serveur
    const data = await response.json();
    return data;
}

function creerGraphique(tracks){
    const artists = {};
    tracks.forEach(t => artists[t.artists[0].name] = (artists[t.artists[0].name] || 0) + 1);
    const tableau = Object.entries(artists) ;
    const tri = tableau.sort( (a,b) => {
        return b[1] - a[1] ;
    })
    const topten = tri.slice(0,10)
    const personne = topten.map(nom => {
        return nom[0]; })
    const compteur = topten.map(compteur => {
        return compteur[1]; })
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: personne, 
            datasets: [{
                label: "Nombre d'écoutes",
                data: compteur
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
});
}


function creerFromage(tracks){
    const genres = {};
    tracks.forEach(t => genres[t.album.genres[0]] = (genres[t.album.genres[0]] || 0) + 1);
    const tableau = Object.entries(genres) ;
    const tri = tableau.sort( (a,b) => {
        return b[1] - a[1] ;
    })
    const genre = tri.map(g => {
        return g[0]; })
    const compteur = tri.map(compteur => {
        return compteur[1]; })
    new Chart(document.getElementById("sexes"), {
        type: "pie",
        data: {
            labels: genre, 
            datasets: [{
                label: "Nombre d'écoutes",
                data: compteur
            }]
        }
});
}

