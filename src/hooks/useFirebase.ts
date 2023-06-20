"use client";
import initializeAuthentication from "@/Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState<
    User | { displayName?: string; email?: string; photoURL?: string }
  >({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // router
  const router = useRouter();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  return { user, signInWithGoogle, logOut };
};

export default useFirebase;
