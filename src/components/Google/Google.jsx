import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";



export default function Google() {

  const [user, setUser] = useState({});

const provider = new GoogleAuthProvider();



// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA0CQw6IBx4APZVFH1vG9WOsnbq39zuE2c",
authDomain: "fir-auth-eb717.firebaseapp.com",
projectId: "fir-auth-eb717",
storageBucket: "fir-auth-eb717.firebasestorage.app",
messagingSenderId: "472495446209",
appId: "1:472495446209:web:c482a28f1350ee97529c40"
};
        
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const singInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const resultUser = result.user;
    setUser(resultUser)
    console.log(token);
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential);
    
  });

}


  return (
    <div style={{
        border: "1px solid goldenrod",
        padding: "10px",
        marginTop: "20px"
    }}>
      {
        user?.email ?
        <div>
          <p>{user?.email}</p>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL} alt={user?.email} />
        </div>
        :
        <button onClick={() => singInWithGoogle()}>Sing In With Google</button>
      }
      
    </div>
  )
}
