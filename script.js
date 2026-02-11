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
    date: "11-02-2026",
    category: "Front-end-development",
    description: "Making Websites by Mehak Dagar.",
  },

  {
    title: "Web Dev Meetup",
    date: "15-02-2026",
    category: "Meetup",
    description: "Networking and lightning talks.",
  },
];

function addEvent(eventData) {
  const card = document.createElement("div");
  card.className = "box";
  card.innerHTML = `
    <h3>${eventData.title}</h3>
    <p><strong>Date:</strong> ${eventData.date}</p>
    <p><strong>Category:</strong> ${eventData.category}</p>
    <p>${eventData.description || "No description"}</p>
    `;

  if (list.querySelector(".msg")) {
    list.innerHTML = "";
  }
  list.appendChild(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventData = {
    title: title.value,
    date: date.value,
    category: category.value,
    description: description.value,
  };

  addEvent(eventData);

  form.reset();
});
