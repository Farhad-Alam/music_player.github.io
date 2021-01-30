const playButton = document.querySelector("#play");
const music = document.querySelector("audio");
const image = document.querySelector(".music-img");

// Event For The Element
let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  playButton.classList.replace("fa-play", "fa-pause");
  image.classList.add("slider");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  playButton.classList.replace("fa-pause", "fa-play");
  image.classList.remove("slider");
};

playButton.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
const songs = [
  {
    name: "song1",
    title: "Lotus lane",
    artist: "Loyalist",
  },
  {
    name: "song2",
    title: "sappheiros",
    artist: "Aurora",
  },
  {
    name: "song3",
    title: "Walking Feriri",
    artist: "Gorkali Thakma",
  },
];

// Next and Previous Button

const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const img = document.querySelector("img");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// Function for the nextButton

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  img.src = `img/${songs.name}.jpg`;
  music.src = `music/${songs.name}.mp3`;
};

let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

// Event for the nextButton

nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
