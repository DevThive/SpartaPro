import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyCqf-kJQ65YyBIK5xpiMrlrb_EREBO02AE",
  authDomain: "nimiproj.firebaseapp.com",
  databaseURL: "https://nimiproj-default-rtdb.firebaseio.com",
  projectId: "nimiproj",
  storageBucket: "nimiproj.appspot.com",
  messagingSenderId: "724453522213",
  appId: "1:724453522213:web:e77b7678a3fbb4bb3a78cc",
  measurementId: "G-8MQLKXV5SZ",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#comment_btn").click(async function () {
  let nickname = $("#nickname").val();
  let comment = $("#comment").val();
  let name = nickname + "_";

  let doc = {
    nickname: nickname,
    comment: comment,
  };
  await addDoc(collection(db, "comment/"), doc);
  console.log("저장완료");
  window.location.reload();
});

let docs = await getDocs(collection(db, "comment"));
docs.forEach((doc) => {
  let row = doc.data();

  let nickname = row["nickname"];
  let comment = row["comment"];

  let temp_html = `
  <li
            id="comment--1"
            class="list-group-item d-flex justify-content-between"
          >
            <div>${comment}</div>
            <div class="d-flex">
              <div class="font-italic">
                작성자 : <span id="comment_list">${nickname}</span>
                
              </div>
            </div>
          </li>
  `;
  $("#comment--box").append(temp_html);
});

//id값을 닉네임을 주어서 문서에 이름과 동일할 시 삭제를 시키는 방향으로 작업 마무리
