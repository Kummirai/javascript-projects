fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key="AIzaSyAJ_yG_ayVafcJs_BHjrkOe7e3T9WbfmOM"&part=snippet,contentDetails,stastics,status`
  )
  .then(response => response.json())
  .then(data => {
    const video = data.items[0];
    videoPlayer = `
              <iframe width="840" height="600" src="https://www.youtube.com/embed/${videoID} frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-picture" allowfullscreen></iframe>
              <p class="close-modal">&times;</p>
            `;
    vplayer.innerHTML = videoPlayer;
    vplayer.style.display = "block";
    const closeModal = document.querySelector(
      '.close-modal');
    closeModal.addEventListener('click',
      () => {
        vplayer.style.display = "none";
      })
  })