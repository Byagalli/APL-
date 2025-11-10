// app.js
const readline = require("readline");
const fs = require("fs");

const FILE = "notes.json";

// Load existing notes or initialize empty array
let notes = [];
if (fs.existsSync(FILE)) {
  notes = JSON.parse(fs.readFileSync(FILE, "utf8"));
}

// Setup console input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n===== NOTES APP =====");
  console.log("1. View Notes");
  console.log("2. Add Note");
  console.log("3. Delete Note");
  console.log("4. Exit");
  rl.question("Choose an option (1-4): ", handleChoice);
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      viewNotes();
      break;
    case "2":
      addNote();
      break;
    case "3":
      deleteNote();
      break;
    case "4":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice. Try again.");
      showMenu();
  }
}

function viewNotes() {
  console.log("\nYour Notes:");
  if (notes.length === 0) {
    console.log("No notes found.");
  } else {
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`);
    });
  }
  showMenu();
}

function addNote() {
  rl.question("\nEnter your note: ", (note) => {
    if (note.trim() === "") {
      console.log("Note cannot be empty.");
      return showMenu();
    }
    notes.push(note);
    fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
    console.log("✅ Note added successfully!");
    showMenu();
  });
}

function deleteNote() {
  if (notes.length === 0) {
    console.log("No notes to delete.");
    return showMenu();
  }

  rl.question("\nEnter note number to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < notes.length) {
      const deleted = notes.splice(index, 1);
      fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
      console.log(`🗑️ Deleted: "${deleted}"`);
    } else {
      console.log("Invalid note number.");
    }
    showMenu();
  });
}

showMenu();
