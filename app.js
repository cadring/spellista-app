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

playlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const playlistName = playlistNameInput.value.trim();
    const genre = genreInput.value.trim();
    const artist = artistInput.value.trim();

    if (!song || !genre || !artist) {
        alert("Please fill in all fields!");
        return;
    }

    const newPlaylist = {
        song,
        genre,
        artist,
        songs: []
    };

    allPlaylists.push(newPlaylist);
    playlistForm.reset();

    showPlaylists();
    showMockedSOngs();
});

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
