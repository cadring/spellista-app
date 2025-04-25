const playlistForm = document.getElementById("playlistForm");
const playlistNameInput = document.getElementById("playlistName");
const genreInput = document.getElementById("genre");
const artistInput = document.getElementById("artist");

const playlistDisplayList = document.getElementById("playlistList");
const mockedSongList = document.getElementById("mockedSongList");

let allPlaylists = [];

const mockedSongs = [

    { song: "Alfons-visan", artist: "Alfons Åberg", genre: "Barnmusik" },
    { song: "Ghost Killer", artist: "Sarah Klang", genre: "Swedish Pop" },
    { song: "Running Up That Hill", artist: "Kate Bush", genre: "Pop" },
    { song: "A Real Hero", artist: "Electric Youth", genre: "Synthwave-Pop" },
    { song: "Mind", artist: "Sarah Klang", genre: "Swedish Pop" },
    { song: "NASA", artist: "Futurecop!", genre: "Synthwave" },
];

playlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const playlistName = playlistNameInput.value.trim();
    const genre = genreInput.value.trim();
    const artist = artistInput.value.trim();

    if (!playlistName || !genre || !artist) {
        alert("Please fill in all fields!");
        return;
    }

    const newPlaylist = {
        name: playlistName,
        genre,
        artist,
        songs: []
    };

    allPlaylists.push(newPlaylist);
    playlistForm.reset();

    showPlaylists();
    showMockedSongs();
});

function showPlaylists() {
    playlistDisplayList.innerHTML = "";

    allPlaylists.forEach(function (playlist) {
        const listItem = document.createElement("li");

        let songsHtml = "<em>No songs added yet</em>";
        if (playlist.songs.length > 0) {
            songsHtml = "<ul>";
            playlist.songs.forEach(function (song) {
                songsHtml += "<li>" + song + "</li>";
            });
            songsHtml += "</ul>";
        }

        listItem.innerHTML = `
            <strong>${playlist.name}</strong><br>
            Genre: ${playlist.genre}<br>
            Artist: ${playlist.artist}<br>
            Songs: ${songsHtml}
            <hr>
        `;

        playlistDisplayList.appendChild(listItem);
    });
}

function showMockedSongs() {

    mockedSongList.innerHTML = "";

    mockedSongs.forEach((song) => {
        const li = document.createElement("li");

        const select = document.createElement("select");
        allPlaylists.forEach((playlist, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = playlist.name;
            select.appendChild(option);
        });

        const button = document.createElement("button");
        button.textContent = "Lägg till i spellista";
        button.onclick = () => {
            const selectedIndex = select.value;
            if (allPlaylists[selectedIndex]) {
                allPlaylists[selectedIndex].songs.push(song.song);
                showPlaylists();
            }
        };

        li.innerHTML = `<strong>${song.song}</strong> (${song.artist} - ${song.genre})<br>`;
        li.appendChild(select);
        li.appendChild(button);
        mockedSongList.appendChild(li);
    });
}

showPlaylists();
showMockedSongs();