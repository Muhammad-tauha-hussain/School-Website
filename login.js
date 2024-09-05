import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc , getDoc , db } from './firebase.js';

let studentloginbtn = document.getElementById('studentlogin');
let teacherloginbtn = document.getElementById('teacherlogin');
let signUpBtn = document.getElementById('signUpBtn');
let logInBtn = document.getElementById('loginBtn');
let isStudent = false;



// <!------Sign Up functionality--->

if (studentloginbtn) {
  studentloginbtn.addEventListener('click', () => {
    console.log('clicked');

    isStudent = true;
  });
}

if (teacherloginbtn) {
  teacherloginbtn.addEventListener('click', () => {
    console.log('clicked');

    isStudent = false;
  });
}

if (signUpBtn) {
  signUpBtn.addEventListener('click', () => {
    console.log('clicked');

    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confrmpassword = document.getElementById('confirm-password').value;

    if (password.trim() === confrmpassword.trim()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);


          const userRole = isStudent ? 'student' : 'teacher';
          const userDoc = doc(db, "users", user.uid);

          setDoc(userDoc, {
            name: name,
            email: email,
            role: userRole
          }).then(() => {
            if (isStudent) {
              window.location.href = '/studentdashboard.html';
            } else {
              window.location.href = '/teacherdashboard.html';
            }
          }).catch((error) => {
            console.error("Error writing document: ", error);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage)
        });
    } else {
      alert("Your passwords don't match.");
    }
  });
}



//Log in functionality


if (logInBtn) {
  logInBtn.addEventListener('click', () => {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // Get user role from Firestore
        const userDoc = doc(db, "users", user.uid);
        getDoc(userDoc).then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const userRole = userData.role;
            if (isStudent && userRole === 'student') {
              window.location.href = '/studentdashboard.html';
            } else if (!isStudent && userRole === 'teacher') {
              window.location.href = '/teacherdashboard.html';
            } else {
              alert("You do not have access to this dashboard.");
            }
          } else {
            console.log("No such document!");
          }

        }).catch((error) => {
          console.error("Error getting document: ", error);
        })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      })
  })
}


