import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider} from "./firebase";

export const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
       const unsub =  auth.onAuthStateChanged((user) => {
            if (user != null) {
                return setUser(user);
            }
            signInWithPopup(auth, googleAuthProvider).then((credentials) => {
                setUser(credentials.user)
            }).catch(e=>console.error(e))
       })
        return unsub;
    },[auth])

    return user != null ? <>{user.displayName}</> : <>Loading...</>;
}