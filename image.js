import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

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
const db = getFirestore(app);

// Create a reference with an initial file path and name
const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, "/album/");

// Find all the prefixes and items.
//팀원 사진명 리스트 조회
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      const img_name = String(itemRef);
      const img_name_fin = img_name.split("/")[4];

      const img_name_id = img_name_fin.split(".")[0];

      //팀원 사진 가져오기
      getDownloadURL(ref(storage, "album/" + img_name_fin))
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'

          // This can be downloaded directly:
          const xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            const blob = xhr.response;
          };
          xhr.open("GET", url);
          //xhr.send();

          $("#img_" + img_name_id).attr("src", url);
        })
        .catch((error) => {
          // Handle any errors
        });

      // All the items under listRef.
    });
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });

//////////////////////// 팀원 사진 가져오기 끝 //////////////////////////

/// 소개 글 데이터 베이스 가져오기 ///
const querySnapshot = await getDocs(collection(db, "profile"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  let profile_id = doc.id;
  $("#name_" + profile_id).text(doc.data()["name"]);
  $("#content_" + profile_id).text(doc.data()["comment"]);
  $("#age_" + profile_id).text(doc.data()["age"]);

  /* 그 밖의 데이터별 가져오기 참고 자료

                doc.data()['name']   : 이름
                doc.data()['age']    : 나이
                doc.data()['blog']   : 블로그 주소
                doc.data()['comment']: 각오   
                doc.data()['hobby']  : 취미
                doc.data()['mbti']   : mbti
            */
});
