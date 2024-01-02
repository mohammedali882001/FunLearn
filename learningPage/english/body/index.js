const imageContainerEl = document.querySelector(".image-container");

const nextEl = document.getElementById("next");
let x = 0;
let timer;
let currentAudio;

const audioElements = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
  document.getElementById("audio6"),
  document.getElementById("audio7"),
  document.getElementById("audio8"),
  // Add more audio elements for each image
];



nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  const imageIndex = Math.abs(x / 45) % audioElements.length;
  
  currentAudio = audioElements[imageIndex];
  playAudio(currentAudio);
  
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 10000);
}

function playAudio(audio) {
  // Pause any currently playing audio
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Play the new audio
  audio.play();
}

updateGallery();


















//old code


// const imageContainerEl = document.querySelector(".image-container");

// const prevEl = document.getElementById("prev");
// const nextEl = document.getElementById("next");
// let x = 0;
// let timer;
// prevEl.addEventListener("click", () => {
//   x = x + 45;
//   clearTimeout(timer);
//   updateGallery();
// });
// nextEl.addEventListener("click", () => {
//   x = x - 45;
//   clearTimeout(timer);
//   updateGallery();
// });

// function updateGallery() {
//   imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//   timer = setTimeout(() => {
//     x = x - 45;
//     updateGallery();
//   }, 10000);
// }

// updateGallery();
