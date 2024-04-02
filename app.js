const progress = document.getElementById("progress");
const song = document.getElementById("song");
const playIcon = document.getElementById("play");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log(song.duration, song.currentTime);
};

playIcon.addEventListener("click", () => {
  if (playIcon.classList.contains("fa-pause")) {
    song.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  } else {
    song
      .play()
      .then(() => {
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
      })
      .catch((error) => {
        console.error("Error starting playback:", error);
      });
  }
});

song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
  song.currentTime = progress.value;
  if (playIcon.classList.contains("fa-play")) {
    song
      .play()
      .then(() => {
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
      })
      .catch((error) => {
        console.error("Error starting playback:", error);
      });
  }
});
