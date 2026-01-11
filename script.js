function recommendSongs() {
  const mood = document.getElementById("moodSelector").value;
  const songListDiv = document.getElementById("songList");

  const songDB = {
    happy: [
      { title: "Happy - Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Good Life - OneRepublic", link: "https://www.youtube.com/watch?v=jZhQOvvV45w" }
    ],
    sad: [
      { title: "Let Her Go - Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
      { title: "Someone Like You - Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" }
    ],
    energetic: [
      { title: "Senorita - Shankar Ehsan Loy", link: "https://www.youtube.com/watch?v=2Z0Put0teCM&list=RD2Z0Put0teCM&start_radio=1" },
      { title: "Thunder - Imagine Dragons", link: "https://www.youtube.com/watch?v=fKopy74weus" }
    ],
    calm: [
      { title: "Weightless - Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" },
      { title: "Sunset Lover - Petit Biscuit", link: "https://www.youtube.com/watch?v=4DZpJU8A3-M" }
    ],
    angry: [
      { title: "KIRAI PARI JAWOS", link: "https://www.youtube.com/watch?v=PJmlPtTcOXA&list=RDPJmlPtTcOXA&start_radio=1" },
      { title: "Imagine Dragons - Natural", link: "https://www.youtube.com/watch?v=hHB1Ikzfpmc&list=RDhHB1Ikzfpmc&start_radio=1" }
    ]
  };

  const moodColors = {
  happy: "#FFF3CD",
  sad: "#D6EAF8",
  energetic: "#FADBD8",
  calm: "#D5F5E3",
  angry: "#F5B7B1"
};

document.body.style.background = moodColors[mood];

  const moodMessage = {
  happy: "Feeling great? Enjoy these vibes 😄",
  sad: "It's okay to feel low 💙",
  energetic: "Let's boost your energy ⚡",
  calm: "Relax and breathe 🌿",
  angry: "Let the music cool you down 😌"
};

songListDiv.innerHTML = `<h3>${moodMessage[mood]}</h3>`;



  // Clear previous songs
  songListDiv.innerHTML = "";

  if (mood === "") {
    songListDiv.innerHTML = "<p>Please select a mood first.</p>";
    return;
  }
  
  function playRandom() {
  if (!mood) return;
  const songs = songDB[mood];
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  window.open(randomSong.link, "_blank");
}

  const selectedSongs = songDB[mood];
  selectedSongs.forEach(song => {
    const songItem = document.createElement("p");
    songItem.innerHTML = `<a href="${song.link}" target="_blank">${song.title}</a>`;
    songListDiv.appendChild(songItem);
  });
}
localStorage.setItem("mood", mood);
window.onload = () => {
  const savedMood = localStorage.getItem("mood");
  if (savedMood) {
    document.getElementById("moodSelector").value = savedMood;
    recommendSongs();
  }
};



