import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBmHxyRbzZAEy9kbys64nOS8plXUhWdcM8",
    authDomain: "crwn-db-c6588.firebaseapp.com",
    projectId: "crwn-db-c6588",
    storageBucket: "crwn-db-c6588.appspot.com",
    messagingSenderId: "835927697522",
    appId: "1:835927697522:web:d3c6a27491c6776b6cbaeb",
    measurementId: "G-5BCCRP3BJG"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;