// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
const chapters = {
  1: {
    title: "Chapter 1: Arjuna Vishada Yoga",
    content: "Arjuna expresses his doubts and sorrow on the battlefield of Kurukshetra. He is overwhelmed with compassion and fear."
  },
  2: {
    title: "Chapter 2: Sankhya Yoga",
    content: "Krishna explains the nature of the soul, duty, and introduces the philosophy of detached action."
  },
  3: {
    title: "Chapter 3: Karma Yoga",
    content: "The path of selfless action is emphasized. Krishna explains why performing duty is better than renunciation."
  },
  4: {
    title: "Chapter 4: Jnana Karma Sanyasa Yoga",
    content: "Krishna reveals his divine birth and the importance of knowledge in liberating the soul."
  },
  5: {
    title: "Chapter 5: Karma Sanyasa Yoga",
    content: "Comparison between renunciation and selfless action, declaring both lead to the same goal when understood properly."
  },
  6: {
    title: "Chapter 6: Dhyana Yoga",
    content: "Meditation is described as a path to inner peace. The disciplined mind leads to ultimate realization."
  },
  7: {
    title: "Chapter 7: Jnana Vijnana Yoga",
    content: "Krishna describes his divine nature and how to realize him through both knowledge and wisdom."
  },
  8: {
    title: "Chapter 8: Akshara Brahma Yoga",
    content: "Focuses on the eternal Brahman, the soul's journey after death, and the importance of remembering God at the time of death."
  },
  9: {
    title: "Chapter 9: Raja Vidya Raja Guhya Yoga",
    content: "The most confidential knowledge—Krishna reveals his omnipresence and loving devotion as the highest path."
  },
  10: {
    title: "Chapter 10: Vibhuti Yoga",
    content: "Krishna lists his divine manifestations and glories to inspire devotion and understanding of his vastness."
  },
  11: {
    title: "Chapter 11: Vishwarupa Darshana Yoga",
    content: "Krishna grants Arjuna divine vision to behold his universal form—vast, terrifying, and glorious."
  },
  12: {
    title: "Chapter 12: Bhakti Yoga",
    content: "The path of loving devotion is compared to other yogas and declared to be superior for those with a pure heart."
  },
  13: {
    title: "Chapter 13: Kshetra Kshetrajna Vibhaga Yoga",
    content: "Distinction between the physical body (kshetra) and the knower of the body (kshetrajna) is explained."
  },
  14: {
    title: "Chapter 14: Gunatraya Vibhaga Yoga",
    content: "Three gunas—Sattva, Rajas, and Tamas—are explained as influencing all human behavior."
  },
  15: {
    title: "Chapter 15: Purushottama Yoga",
    content: "The eternal nature of the soul and the supreme being, Purushottama, is described through metaphor and philosophy."
  },
  16: {
    title: "Chapter 16: Daivasura Sampad Vibhaga Yoga",
    content: "Divine and demoniac natures are compared, highlighting qualities leading to liberation or bondage."
  },
  17: {
    title: "Chapter 17: Shraddhatraya Vibhaga Yoga",
    content: "Different types of faith and their corresponding influence on human actions and beliefs are discussed."
  },
  18: {
    title: "Chapter 18: Moksha Sanyasa Yoga",
    content: "Summary of all paths: renunciation, action, devotion. Arjuna is now ready to act with clarity and devotion."
  }
};

function loadChapter(chapterNumber) {
  const chapterContent = document.getElementById("chapter-content");

  let title = "";
  let summary = "";
  let pdfLink = "";

  switch (chapterNumber) {
    case 1:
      title = "Chapter 1: Arjuna Vishada Yoga";
      summary = "Arjuna expresses his doubts and sorrow on the battlefield of Kurukshetra. He is overwhelmed with compassion and fear.";
      break;
    case 2:
      title = "Chapter 2: Sankhya Yoga";
      summary = "Krishna begins his teaching, introducing the immortality of the soul and the importance of performing one's duty.";
      break;
    case 3:
      title = "Chapter 3: Karma Yoga";
      summary = "The path of selfless action is emphasized. Krishna explains why performing duty is better than renunciation.";
      break;
    case 4:
      title = "Chapter 4: Jnana Karma Sanyasa Yoga";
        summary = "Krishna reveals his divine birth and the importance of knowledge in liberating the soul.";
        break;
    case 5:
        title = "Chapter 5: Karma Sanyasa Yoga";
        summary = "Comparison between renunciation and selfless action, declaring both lead to the same goal when understood properly.";
        break;
    case 6:
        title = "Chapter 6: Dhyana Yoga";
        summary = "Meditation is described as a path to inner peace. The disciplined mind leads to ultimate realization.";
        break;
    case 7:
        title = "Chapter 7: Jnana Vijnana Yoga";
        summary = "Krishna describes his divine nature and how to realize him through both knowledge and wisdom.";
        break;
     case 8:
        title = "Chapter 8: Akshara Brahma Yoga";
        summary = "Focuses on the eternal Brahman, the soul's journey after death, and the importance of remembering God at the time of death.";
        break;
    case 9:
        title = "Chapter 9: Raja Vidya Raja Guhya Yoga";
        summary = "The most confidential knowledge—Krishna reveals his omnipresence and loving devotion as the highest path.";
        pdfLink = `<a href="pdfs/ch9.pdf" target="_blank" class="pdf-link">📖 Download PDF</a>`;
        break;
    case 10:
        title = "Chapter 10: Vibhuti Yoga";
        summary = "Krishna lists his divine manifestations and glories to inspire devotion and understanding of his vastness.";
        break;
    case 11:
        title = "Chapter 11: Vishwarupa Darshana Yoga";
        summary = "Krishna grants Arjuna divine vision to behold his universal form—vast, terrifying, and glorious.";
        break;
    case 12:
        title = "Chapter 12: Bhakti Yoga";  
        summary = "The path of loving devotion is compared to other yogas and declared to be superior for those with a pure heart.";
        break;
    case 13:
        title = "Chapter 13: Kshetra Kshetrajna Vibhaga Yoga";
        summary = "Distinction between the physical body (kshetra) and the knower of the body (kshetrajna) is explained.";
        break;
    case 14:
        title = "Chapter 14: Gunatraya Vibhaga Yoga";
        summary = "Three gunas—Sattva, Rajas, and Tamas—are explained as influencing all human behavior.";
        break;
    case 15:
        title = "Chapter 15: Purushottama Yoga";
        summary = "The eternal nature of the soul and the supreme being, Purushottama, is described through metaphor and philosophy.";
        break;
    case 16:
        title = "Chapter 16: Daivasura Sampad Vibhaga Yoga";
        summary = "Divine and demoniac natures are compared, highlighting qualities leading to liberation or bondage.";
        break;
    case 17:
        title = "Chapter 17: Shraddhatraya Vibhaga Yoga";
        summary = "Different types of faith and their corresponding influence on human actions and beliefs are discussed.";
        break;
    case 18:
        title = "Chapter 18: Moksha Sanyasa Yoga";
        summary = "Summary of all paths: renunciation, action, devotion. Arjuna is now ready to act with clarity and devotion.";
        break;
    // add other chapters similarly
    default:
      title = "Chapter " + chapterNumber;
      summary = "Summary will be added soon.";
  }

  chapterContent.innerHTML = `
    <h2>${title}</h2>
    <p>${summary}</p>
    ${pdfLink}
  `;
}

// Create floating spiritual particles
const spiritContainer = document.createElement('div');
spiritContainer.className = 'spirit-container';
document.body.appendChild(spiritContainer);

function createSpirit() {
  const spirit = document.createElement('div');
  spirit.className = 'spirit';
  spirit.style.left = Math.random() * 100 + "vw";
  spirit.style.animationDuration = (5 + Math.random() * 10) + "s";
  spiritContainer.appendChild(spirit);

  setTimeout(() => spirit.remove(), 15000);
}

setInterval(createSpirit, 300);
// Om symbol particles
const omContainer = document.createElement('div');
omContainer.className = 'om-container';
document.body.appendChild(omContainer);

function createOmSymbol() {
  const om = document.createElement('div');
  om.className = 'om-symbol';
  om.textContent = 'ॐ';
  om.style.left = Math.random() * 100 + "vw";
  om.style.fontSize = (20 + Math.random() * 20) + "px";
  om.style.animationDuration = (6 + Math.random() * 6) + "s";
  omContainer.appendChild(om);
  setTimeout(() => om.remove(), 12000);
}

setInterval(createOmSymbol, 400);
const chantAudio = new Audio('chant.mp3'); // path must be correct
const bellAudio = new Audio('bell.mp3');

let isPlaying = false;

function toggleChant() {
  if (!isPlaying) {
    bellAudio.currentTime = 0;
    bellAudio.play();

    chantAudio.loop = true;
    chantAudio.play()
      .then(() => {
        isPlaying = true;
        document.getElementById('chantToggle').textContent = "Pause Chant";
      })
      .catch(error => {
        console.error("Autoplay blocked or error playing chant:", error);
      });
  } else {
    chantAudio.pause();
    isPlaying = false;
    document.getElementById('chantToggle').textContent = "Play Chant";
  }
}
const bellSound = new Audio('temple-bell-39617.mp3');     // One-time bell ding
const chantSound = new Audio('temple-bell-39617.mp3');   // Background chant

chantSound.loop = true;
let isChanting = false;

function toggleChant() {
  const button = document.getElementById("chantToggle");

  if (!isChanting) {
    bellSound.currentTime = 0;
    bellSound.play();

    chantSound.play()
      .then(() => {
        isChanting = true;
        button.textContent = "🔕"; // Bell with slash (chanting on)
      })
      .catch(err => console.error("Play blocked", err));
  } else {
    chantSound.pause();
    isChanting = false;
    button.textContent = "🔔"; // Bell (chanting off)
  }
}
