import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
const firebaseConfig = {
  apiKey: "AIzaSyDN3PQQrzSxwqAHIUMw7ftCuB5bYvCEBfE",
  authDomain: "newqn-639d7.firebaseapp.com",
  projectId: "newqn-639d7",
  storageBucket: "newqn-639d7.firebasestorage.app",
  messagingSenderId: "35858029113",
  appId: "1:35858029113:web:d7d80fd4afbd1b36774be8"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 
document.getElementById("Quiz").addEventListener("submit", (event)=>{
  event.preventDefault();

const Name = document.getElementById("Name").value;
const Question = document.getElementById("AdmQn").value;
const options = [
 document.getElementById("Choice1").value, 
document.getElementById("Choice2").value,
document.getElementById("Choice3").value,
document.getElementById("Choice4").value,
]
const CorrectOpt = document.getElementById("Ans").value;
db.collection('Questions').add({
  QuizName : Name,
  Question: Question,
  options: options,
  CorrectOption: CorrectOpt,
})

.then(()=>{
  clearInputs();
  alert('Question Added Successfully');
})
.catch((error)=>{
  alert('Error adding Question'+ error);
})

function clearInputs() {
  document.getElementById("AdmQn").value = '';
  document.getElementById("Choice1").value = ''
  document.getElementById("Choice2").value = '';
  document.getElementById("Choice3").value = '';
  document.getElementById("Choice4").value = '';
  document.getElementById("Ans").value = '';
}

document.getElementById("Submit").onclick = function(e) {
  e.preventDefault();
  window.location.href = "User.html";
}
});
