import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

export default function LogIn() {
  const [firebaseError, setFirebaseError] = useState("");
  const [user, setUser] = useState();

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (formData) => signInWithEmailPassword(formData)

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
    
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    
     const signInWithEmailPassword = (data) => {
        const email = data.email;
        const password = data.password;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        
      })
        .catch((error) => {
        const errorMessage = error.message;
        setFirebaseError(errorMessage);
      });
      }
    

  return (
    <>
    
    <Link to={"/"}>Home</Link>
    <div className=''>

         {
        user?.email &&
         <h2>You are login as {user?.email}</h2>
      }
       
      <form style={{
        border: "1px solid lightgray",
        padding: "10px"
      }}
      onSubmit={handleSubmit}>
      <h2 style={{
        fontSize: "16px"
      }}>Login with Email and Password</h2>

     <input
        type="email"
        style={{
        padding:"10px",
        width: "250px",
        margin: "10px"
      }}
      {...register("email", { required: true })} placeholder="Email" />
      <br />
      {errors.email && 
      <span style={{
        fontFamily: "sans-serif",
        fontSize: "16px",
        color: "red"
      }}>
        Email field is required
        </span>}
        <br />
      <input
        type="password"
        style={{
        padding:"10px",
        width: "250px",
        margin: "10px"
      }}
       {...register("password", { required: true })} placeholder="password" />
      <br />
      {errors.password && 
      <span style={{
        fontFamily: "sans-serif",
        fontSize: "16px",
        color: "red",
        margin: "10px"
      }}>
        Password field is required
        </span>}
       <br />
       <input type="submit" style={{
        padding: "10px",
        width: "150px",
        margin: "10px",
        background: "green",
        color: "#fff",
        border: "none",
        borderRadius: "10px"
      }}/> 
        <br />
         <span style={{
        fontFamily: "sans-serif",
        fontSize: "16px",
        color: "red",
        margin: "10px"
      }}>{firebaseError}
      </span>
      </form>
       <p>Don't have an account? <Link to={"/singUp"}>SingUp</Link></p>
    </div>
    </>
  )
}
