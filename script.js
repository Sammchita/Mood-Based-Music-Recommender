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
    ]
  };
  angry: [
      { title: "KIRAI PARI JAWOS", link: "https://www.youtube.com/watch?v=PJmlPtTcOXA&list=RDPJmlPtTcOXA&start_radio=1" },
      { title: "Imagine dragons", link: "https://www.youtube.com/watch?v=hHB1Ikzfpmc&list=RDhHB1Ikzfpmc&start_radio=1" }
    ]
  };

  // Clear previous songs
  songListDiv.innerHTML = "";

  if (mood === "") {
    songListDiv.innerHTML = "<p>Please select a mood first.</p>";
    return;
  }

  const selectedSongs = songDB[mood];
  selectedSongs.forEach(song => {
    const songItem = document.createElement("p");
    songItem.innerHTML = `<a href="${song.link}" target="_blank">${song.title}</a>`;
    songListDiv.appendChild(songItem);
  });
}
