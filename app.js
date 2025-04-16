const form = document.getElementById("playlistForm");
const playlistNameInput = document.getElementById("playlistName");
const genreInput = document.getElementById("genre");
const artistInput = document.getElementById("artist");
const songsInput = document.getElementById("songs");
const list = document.getElementById("playlistList");
const playlistDisplayList = document.getElementById("playlistList");

let allPlaylists = [];

function handleFormSubmit(eventObject) {
    eventObject.preventDefault();

    const playlistName = playlistNameInput.value.trim();
    const genre = genreInput.value.trim();
    const artist = artistInput.value.trim();
    const songsString = songsInput.value;
    const songsArray = songsString.split(",").map(function (song) {

        return song.trim();
    }).filter(function (song) {
        return song !== "";
    });

    if (playlistName === "" || genre === "" || artist === "" || songsArray.length === 0) {
        alert("Please fill in all fields!");
        return;
    }

    const playlistObject = {
        name: playlistName,
        genre: genre,
        artist: artist,
        songs: songsArray
    };

    allPlaylists.push(playlistObject);
    showPlaylistsOnPage();
    playlistForm.reset();
}

playlistForm.addEventListener("submit", handleFormSubmit);

function showPlaylistsOnPage() {
    playlistDisplayList.innerHTML = "";

    allPlaylists.forEach(function (currentPlaylist) {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <strong>${currentPlaylist.name}</strong><br>
        Genre: ${currentPlaylist.genre}<br>
        Artist: ${currentPlaylist.artist}<br>
        Songs:
        <ul>
          ${currentPlaylist.songs.map(function (song) {
            return `<li>${song}</li>`;
        }).join("")}
        </ul>
        <hr>
      `;

        playlistDisplayList.appendChild(listItem);
    });
}
