const form = document.getElementById("playlistForm");
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
