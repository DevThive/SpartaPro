import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyCqf-kJQ65YyBIK5xpiMrlrb_EREBO02AE",
  authDomain: "nimiproj.firebaseapp.com",
  databaseURL: "https://nimiproj-default-rtdb.firebaseio.com",
  projectId: "nimiproj",
  storageBucket: "nimiproj.appspot.com",
  messagingSenderId: "724453522213",
  appId: "1:724453522213:web:e77b7678a3fbb4bb3a78cc",
  measurementId: "G-8MQLKXV5SZ"
  };

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const db = getDatabase();
// 각 인원별 좋아요 갯수 가져오기
const member1 = ref(db, "member/one/likes");
const member2 = ref(db, "member/two/likes");
const member3 = ref(db, "member/three/likes");
const member4 = ref(db, "member/four/likes");
const member5 = ref(db, "member/five/likes");

//1번째
onValue(member1, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/one"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //1번째 버튼
  $("#heart-btn1").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count1").text(num);
});
//2번째
onValue(member2, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/two"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //2번째 버튼
  $("#heart-btn2").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count2").text(num);
});
//3번째
onValue(member3, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/three"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //3번째 버튼
  $("#heart-btn3").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count3").text(num);
});
//4번째
onValue(member4, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/four"), {
      likes: num + 1,
    });
    //window.location.reload();
  }

  //4번째 버튼
  $("#heart-btn4").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count4").text(num);
});

onValue(member5, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/five"), {
      likes: num + 1,
    });
    //window.location.reload();
  }

  //4번째 버튼
  $("#heart-btn5").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count5").text(num);
});

//각 이미지 사진 가져오기
