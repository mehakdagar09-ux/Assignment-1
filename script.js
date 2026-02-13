const form = document.getElementById("event-form");
const title = document.getElementById("title");
const date = document.getElementById("date");
const category = document.getElementById("category");
const description = document.getElementById("description");
const list = document.getElementById("events-list");
const clearBtn = document.getElementById("clear-btn");
const sampleBtn = document.getElementById("sample-btn");
const keyOutput = document.getElementById("key-output");

const sampleEvents = [
  {
    title: "Web Development",
    date: "2026-02-10",
    category: "Front-end-development",
    description: "Making Websites by Mehak Dagar.",
  },
  {
    title: "Web Dev Meetup",
    date: "2026-02-09",
    category: "Meetup",
    description: "Networking and lightning talks.",
  },
];

function addEvent(eventData) {
  const card = document.createElement("div");
  card.className = "box";

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "×";
  closeBtn.setAttribute("aria-label", "Remove event");

  closeBtn.addEventListener("click", () => {
    card.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      card.remove();
      if (list.children.length === 0) {
        renderEmpty();
      }
    }, 250);
  });

  card.innerHTML = `
    <h3>${eventData.title}</h3>
    <p><strong>Date:</strong> ${eventData.date}</p>
    <p><strong>Category:</strong> ${eventData.category}</p>
    <p>${eventData.description || "No description"}</p>
  `;

  card.appendChild(closeBtn);

  if (list.querySelector(".msg") || list.querySelector(".empty")) {
    list.innerHTML = "";
  }

  list.appendChild(card);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const eventData = {
    title: title.value,
    date: date.value,
    category: category.value,
    description: description.value,
  };
  addEvent(eventData);
  form.reset();

  // Smooth scroll to events list on mobile
  if (window.innerWidth <= 900) {
    list.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

sampleBtn.addEventListener("click", () => {
  list.innerHTML = "";
  sampleEvents.forEach(addEvent);
});

function clearForm() {
  const cards = list.querySelectorAll(".box");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = "slideOut 0.3s ease";
      setTimeout(() => {
        card.remove();
        if (list.children.length === 0) {
          renderEmpty();
        }
      }, 250);
    }, index * 100);
  });
}

clearBtn.addEventListener("click", () => {
  clearForm();
});

function renderEmpty() {
  list.innerHTML =
    '<div class="msg">No events yet. Add your first event!</div>';
}

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    keyOutput.textContent = "Space";
  } else if (e.key === "Enter") {
    keyOutput.textContent = "Enter";
  } else if (e.key === "Backspace") {
    keyOutput.textContent = "Backspace";
  } else if (e.key === "Shift") {
    keyOutput.textContent = "Shift";
  } else {
    keyOutput.textContent = e.key;
  }
});

// Add slideOut animation dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-20px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize
renderEmpty();
