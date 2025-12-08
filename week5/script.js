// ✅ Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update, remove } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// ✅ Firebase config (YOUR OWN)
const firebaseConfig = {
  apiKey: "AIzaSyDaGUMdSaVmIFvDX21YKEs1--UEIgd97xs",
  authDomain: "lms-mobile-29e37.firebaseapp.com",
  databaseURL: "https://lms-mobile-29e37-default-rtdb.firebaseio.com",
  projectId: "lms-mobile-29e37",
  storageBucket: "lms-mobile-29e37.firebasestorage.app",
  messagingSenderId: "1024302188418",
  appId: "1:1024302188418:web:a96e36511af43040caf19b"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Database reference
const queriesRef = ref(db, "studentQueries");


const form = document.getElementById("supportForm");
const queryList = document.getElementById("queryList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentName = document.getElementById("name").value.trim();
  const studentEmail = document.getElementById("email").value.trim();
  const studentMessage = document.getElementById("message").value.trim();

  if (!studentName || !studentEmail || !studentMessage) {
    alert("All fields are required!");
    return;
  }

  const newQueryRef = push(queriesRef);

  set(newQueryRef, {
    name: studentName,
    email: studentEmail,
    message: studentMessage,
    timestamp: Date.now()
  });

  form.reset();
});


//  Read data (Realtime)
onValue(queriesRef, (snapshot) => {
  queryList.innerHTML = "";

  snapshot.forEach((child) => {
    const data = child.val();
    const id = child.key;

    queryList.innerHTML += `
      <div class="query">
        <strong>${data.name}</strong><br>
        ${data.email}<br>
        ${data.message}
        <div class="actions">
          <button onclick="editQuery('${id}', '${data.message}')">Edit</button>
          <button class="delete" onclick="deleteQuery('${id}')">Delete</button>
        </div>
      </div>
    `;
  });
});

//  Make functions global for buttons
window.editQuery = function (id, oldMsg) {
  const newMsg = prompt("Edit message", oldMsg);
  if (newMsg) {
    update(ref(db, `studentQueries/${id}`), {
      message: newMsg
    });
  }
};

window.deleteQuery = function (id) {
  if (confirm("Delete this message?")) {
    remove(ref(db, `studentQueries/${id}`));
  }
};
