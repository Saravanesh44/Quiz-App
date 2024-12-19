import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDN3PQQrzSxwqAHIUMw7ftCuB5bYvCEBfE",
  authDomain: "newqn-639d7.firebaseapp.com",
  projectId: "newqn-639d7",
  storageBucket: "newqn-639d7.firebasestorage.app",
  messagingSenderId: "35858029113",
  appId: "1:35858029113:web:d7d80fd4afbd1b36774be8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const question = document.getElementById("Qn");
 const btn1 = document.getElementById("btn1");
 const btn2 = document.getElementById("btn2");
 const btn3 = document.getElementById("btn3");
 const btn4 = document.getElementById("btn4");
 const crt = document.getElementById("Answer");

 let quizData=[];
 let userAnswers = [];
 const UserPg = document.getElementById("UserPg");
async function getQuiz() {
  
  const docSnap = await getDocs(collection(db,'Questions'));
  docSnap.forEach((doc) => {
    quizData.push(doc.data());  
  });
  
  // const Qname = document.createElement('h3');
  // Qname.innerHTML=`${quizData.Name}`
  // UserPg.appendChild(Qname);
  quizData.forEach((questionData, index) => {
    const QuestionElem = document.createElement('div');
    const options = questionData.options;
    
    QuestionElem.innerHTML=`
    
    <p>Question ${index+1}:</p>
    <p id="AdmQn-${index}">${questionData.Question}</p>
    <input type="radio" id="Choice1-${index}" name="Question-${index}">${options[0]}<br>
    <input type="radio" id="Choice2-${index}" name="Question-${index}">${options[1]}<br>
    <input type="radio" id="Choice3-${index}" name="Question-${index}">${options[2]}<br>
    <input type="radio" id="Choice4-${index}" name="Question-${index}">${options[3]}<br>
     
    `
    
    UserPg.appendChild(QuestionElem);

   
  })

  checkAns();
}

function checkAns() {

}
getQuiz();

  