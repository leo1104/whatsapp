import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Loading from "../components/Loading"
import {auth, db} from '../firebase'
import { useEffect } from "react";
import firebase from "firebase";
function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);

useEffect(()=>{

//set basically updates everything in the collection so we use merge:true to actually merge everything  
if(user){
  db.collection('users').doc(user.uid).set({
    email:user.email,
    lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
    photoUrl:user.photoURL
  },
  {merge:true}
  )
}
},[user])

  if(loading) return <Loading/>;
  if (!user) return <Login/>;
  return <Component {...pageProps} />;
}


export default MyApp;
